import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clara - 전문직 회사를 위한 AI 동료 (v1)",
  description: "리서치하고, 검토하고, 문서 만드는 일을 매번 처음부터 하고 계신가요? Clara는 이메일·내부 문서·AI 리서치·팀 검토가 하나로 연결된 전문직 회사를 위한 AI 동료입니다.",
};

export default function V1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
