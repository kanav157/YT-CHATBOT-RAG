import { NextResponse } from "next/server";
import { answer, retrieve } from "@/lib/rag";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { videoId, question, history } = await req.json();
    const hits = await retrieve(videoId, question);
    if (!hits) {
      return NextResponse.json({ error: "Video not loaded. Load it again." }, { status: 404 });
    }
    const text = await answer(question, hits.map((h) => h.text), history);
    return NextResponse.json({ answer: text });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Chat failed." }, { status: 500 });
  }
}
