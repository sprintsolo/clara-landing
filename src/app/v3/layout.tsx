import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clara - AI Knowledge Workspace for Professional Firms (v3)",
  description: "Stop switching between Front, Slack, and ChatGPT. Clara unifies email, chat, AI research, and cross-verification in one workspace for 20-100 person professional firms.",
};

export default function V3Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
