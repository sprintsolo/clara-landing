import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clara - AI 직원과 함께하는 이메일 협업 플랫폼",
  description: "이메일에 AI 직원을 합류시키세요. Front + Slack + ChatGPT + Monday.com을 하나로 통합한 전문가 기업을 위한 WorkOS. Shared Inbox, 이메일 공유 채팅, AI 액티브 에이전트, 프로젝트 관리를 하나의 도구로.",
  keywords: "Clara, AI, 이메일, 프로젝트 관리, Shared Inbox, WorkOS, 협업, 전문가, 투자, 회계, 변호사",
  openGraph: {
    title: "Clara - AI 직원과 함께하는 이메일 협업 플랫폼",
    description: "Front + Slack + ChatGPT + Monday.com을 하나로. 전문가 기업을 위한 AI 기반 WorkOS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
