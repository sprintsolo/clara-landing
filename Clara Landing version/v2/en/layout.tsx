import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clara - AI Knowledge Workspace for Professional Firms (v2)",
  description: "Paying for Front + Slack + ChatGPT separately? Clara is an AI workspace for professional firms where email, chat, AI research, and cross-verification are unified.",
  keywords: "Clara, AI knowledge workspace, professional firms, law firm, accounting firm, advisory, investment, email collaboration, Shared Inbox, Playbook, cross-verification",
  openGraph: {
    title: "Clara - AI Knowledge Workspace for Professional Firms (v2)",
    description: "Paying for Front + Slack + ChatGPT separately? Clara is an AI workspace for professional firms where email, chat, AI research, and cross-verification are unified.",
    type: "website",
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
