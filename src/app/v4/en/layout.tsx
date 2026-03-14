import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clara - Engagement Intelligence Platform for CPA Firms",
  description: "When seniors leave, client knowledge stays. Clara auto-captures, classifies, and turns every engagement's communications, decisions, and processes into reusable firm intelligence.",
};

export default function V4EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
