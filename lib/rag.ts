import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const EMBED_MODEL = "gemini-embedding-001";
const CHAT_MODEL = "gemini-3.8-flash";

type Chunk = { text: string; embedding: number[] };

// In-memory vector store, keyed by videoId. Survives hot reloads in dev.
// For production, replace with pgvector / Pinecone / Qdrant.
const g = globalThis as unknown as { __vstore?: Map<string, Chunk[]> };
const store = (g.__vstore ??= new Map<string, Chunk[]>());

// 1. Chunking: ~1000 chars with 200 overlap, cut on word boundaries.
export function chunkText(text: string, size = 1000, overlap = 200): string[] {
  const chunks: string[] = [];
  let start = 0;
  while (start < text.length) {
    let end = Math.min(start + size, text.length);
    if (end < text.length) {
      const lastSpace = text.lastIndexOf(" ", end);
      if (lastSpace > start + size / 2) end = lastSpace;
    }
    chunks.push(text.slice(start, end).trim());
    if (end >= text.length) break;
    start = Math.max(end - overlap, start + 1);
  }
  return chunks.filter(Boolean);
}

// 2. Embedding (batched)
type Task = "RETRIEVAL_DOCUMENT" | "RETRIEVAL_QUERY";
async function embed(texts: string[], taskType: Task): Promise<number[][]> {
  const out: number[][] = [];
  for (let i = 0; i < texts.length; i += 100) {
    const res = await ai.models.embedContent({
      model: EMBED_MODEL,
      contents: texts.slice(i, i + 100),
      config: { taskType },
    });
    out.push(...res.embeddings!.map((d) => d.values!));
  }
  return out;
}

// 3. Vectorize + store
export async function indexTranscript(videoId: string, transcript: string) {
  const texts = chunkText(transcript);
  const vectors = await embed(texts, "RETRIEVAL_DOCUMENT");
  store.set(videoId, texts.map((text, i) => ({ text, embedding: vectors[i] })));
  return texts.length;
}

// OpenAI embeddings are unit-length, so dot product == cosine similarity.
const dot = (a: number[], b: number[]) => a.reduce((s, v, i) => s + v * b[i], 0);

// 4. Retrieve top-k chunks for a question
export async function retrieve(videoId: string, question: string, k = 5) {
  const chunks = store.get(videoId);
  if (!chunks) return null;
  const [q] = await embed([question], "RETRIEVAL_QUERY");
  return chunks
    .map((c) => ({ text: c.text, score: dot(q, c.embedding) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}

// 5. Answer with retrieved context
export async function answer(
  question: string,
  context: string[],
  history: { role: "user" | "assistant"; content: string }[] = []
) {
  const h = history.slice(-6);
  while (h.length && h[0].role !== "user") h.shift();

  const res = await ai.models.generateContent({
    model: CHAT_MODEL,
    contents: [
      ...h.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
      { role: "user", parts: [{ text: question }] },
    ],
    config: {
      temperature: 0.2,
      systemInstruction:
        "You answer questions about a YouTube video using only the transcript excerpts below. " +
        "If the answer is not in the excerpts, say the video doesn't cover it. Be concise.\n\n" +
        context.map((c, i) => `[Excerpt ${i + 1}]\n${c}`).join("\n\n"),
    },
  });
  return res.text ?? "";
}
