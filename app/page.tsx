"use client";
import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

export default function Home() {
  const [url, setUrl] = useState("");
  const [video, setVideo] = useState<{ id: string; chunks: number; chars: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [q, setQ] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => 
  {
    endRef.current?.scrollIntoView({ behavior: "smooth" }); } , [msgs, thinking]);

  async function load(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(""); setVideo(null); setMsgs([]);
    const res = await fetch("/api/ingest", { method: "POST", body: JSON.stringify({ url }) });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) return setError(data.error);
    setVideo({ id: data.videoId, chunks: data.chunks, chars: data.characters });
  }

  async function ask(e: React.FormEvent) {
    e.preventDefault();
    if (!video || !q.trim()) return;
    const question = q.trim();
    const history = msgs;
    setMsgs([...msgs, { role: "user", content: question }]);
    setQ(""); setThinking(true);
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ videoId: video.id, question, history }),
    });
    const data = await res.json();
    setThinking(false);
    setMsgs((m) => [...m, { role: "assistant", content: res.ok ? data.answer : data.error }]);
  }

  return (
    <main className="shell">
      <aside className="side">

        <div className="video-icon">
          ▶
        </div>
        <h1>Ask the Video</h1>

        <p className="lede">Paste a YouTube link and ask questions <br />
        about what's said in it.</p>
        <form onSubmit={load}>
          <label htmlFor="url">🔗YouTube link</label>
          <input id="url" value={url} onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..." required />
          <button disabled={loading}>{loading ? "Reading transcript…" : "Load video"}</button>
        </form>
        {error && <p className="error" role="alert">{error}</p>}
        {video && (
          <div className="video">
            <iframe src={`https://www.youtube.com/embed/${video.id}`} title="Video" allowFullScreen />
            <p className="meta">THE YT CHAT BOT IS RAEDY TO ANSWER !!</p>
          </div>
        )}
      </aside>

      <section className="chat" aria-live="polite">
        <div className="log">
          {!video && <p className="empty">Load a video to start asking questions.</p>}
          {video && msgs.length === 0 && <p className="empty">Video ready. Ask something, like "What are the main points?"</p>}
          {msgs.map((m, i) => (<div key={i} className={`msg ${m.role}`}>{m.content}</div>))}
          {thinking && <div className="msg assistant dim">Searching the transcript…</div>}
          <div ref={endRef} />
        </div>
        <form className="ask" onSubmit={ask}>
          <input value={q} onChange={(e) => setQ(e.target.value)} disabled={!video}
            placeholder={video ? "Ask about the video" : "Load a video first"} aria-label="Question" />
          <button disabled={!video || thinking}>Ask</button>
        </form>
      </section>
    </main>
  );
}
