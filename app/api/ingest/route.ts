import { NextResponse } from "next/server";
import { extractVideoId, fetchTranscript } from "@/lib/youtube";
import { indexTranscript } from "@/lib/rag";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    const videoId = extractVideoId(url ?? "");
    if (!videoId) {
      return NextResponse.json({ error: "That doesn't look like a YouTube link." }, { status: 400 });
    }
    const transcript = await fetchTranscript(videoId);
    if (!transcript) {
      return NextResponse.json({ error: "No transcript found for this video." }, { status: 404 });
    }
    const chunks = await indexTranscript(videoId, transcript);
    return NextResponse.json({ videoId, chunks, characters: transcript.length });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message?.includes("disabled") ? "This video has transcripts turned off." : e?.message ?? "Ingest failed." },
      { status: 500 }
    );
  }
}
