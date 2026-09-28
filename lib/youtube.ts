import { YoutubeTranscript } from "youtube-transcript";

// Accepts watch?v=, youtu.be/, /embed/, /shorts/, /live/ URLs, or a bare 11-char ID.
export function extractVideoId(input: string): string | null {
  const s = input.trim();
  if (/^[\w-]{11}$/.test(s)) return s;
  try {
    const u = new URL(s);
    if (u.hostname === "youtu.be") return u.pathname.slice(1, 12) || null;
    if (u.hostname.endsWith("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return v;
      const m = u.pathname.match(/^\/(embed|shorts|live)\/([\w-]{11})/);
      if (m) return m[2];
    }
  } catch {}
  return null;
}

// Swap this function's body if you use a different transcript API.
// Whatever you use, return one plain string.
export async function fetchTranscript(videoId: string): Promise<string> {
  const parts = await YoutubeTranscript.fetchTranscript(videoId);
  return parts
    .map((p) => p.text)
    .join(" ") // join all segments into one text
    .replace(/&amp;#39;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}
