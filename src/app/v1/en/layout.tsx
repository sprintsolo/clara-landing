import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clara - AI Colleague for Professional Firms",
  description: "Are you starting research, review, and document creation from scratch every time? Clara is an AI colleague for professional firms where email, internal docs, AI research, and team reviews are all connected.",
  keywords: "Clara, AI colleague, professional firms, law firm, accounting firm, advisory, investment, email collaboration, Shared Inbox, Playbook, cross-verification",
  openGraph: {
    title: "Clara - AI Colleague for Professional Firms",
    description: "Email, internal docs, AI research, and team reviews all connected. The entire research→cross-verification→review→document creation process accumulates as your team's asset.",
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
