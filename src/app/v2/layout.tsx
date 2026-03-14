import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clara - 전문직 회사를 위한 AI 지식 협업 워크스페이스 (v2)",
  description: "Front + Slack + ChatGPT를 따로 쓰고 계신가요? Clara는 이메일·채팅·AI 리서치·내부 문서 교차 검증이 하나로 통합된 전문직 회사를 위한 AI 워크스페이스입니다.",
};

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
