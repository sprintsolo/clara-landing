import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clara - CPA 펌을 위한 Engagement Intelligence Platform",
  description: "시니어가 떠나도, 클라이언트 지식은 남습니다. Clara는 모든 engagement에서 발생하는 커뮤니케이션, 의사결정, 업무 프로세스를 AI가 자동으로 캡처·분류·자산화합니다.",
};

export default function V4Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
