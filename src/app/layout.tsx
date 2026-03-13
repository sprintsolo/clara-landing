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
  title: "Clara - 전문직 팀을 위한 AI 동료",
  description: "리서치하고, 검토하고, 문서 만드는 일을 매번 처음부터 하고 계신가요? Clara는 이메일·내부 문서·AI 리서치·팀 검토가 하나로 연결된 전문직 팀을 위한 AI 동료입니다.",
  keywords: "Clara, AI 동료, 전문직, 법무법인, 회계법인, 자문사, 투자사, 이메일 협업, Shared Inbox, 플레이북, 교차 검증",
  openGraph: {
    title: "Clara - 전문직 팀을 위한 AI 동료",
    description: "이메일·내부 문서·AI 리서치·팀 검토가 하나로 연결됩니다. 리서치→교차 검증→검토→문서 작성의 전 과정이 팀의 자산으로 축적됩니다.",
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
