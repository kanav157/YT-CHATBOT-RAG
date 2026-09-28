// @ts-expect-error Next.js loads global CSS at runtime.
import "./globals.css";
import type { ReactNode } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elementName: string]: any;
    }
  }
}

export const metadata = { title: "Ask the Video", description: "Chat with any YouTube video's transcript" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
