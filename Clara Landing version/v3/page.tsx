"use client";

import { useEffect, useRef } from "react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll(".section-fade");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function Check() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const FEATURES = [
  {
    icon: "✉",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "중요한 것을 빠르게 찾기",
    desc: "AI가 고객 이메일을 자동 요약하고, 관련 프로젝트·내부 문서를 즉시 연결하는 팀 공유 인박스.",
  },
  {
    icon: "✦",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
    title: "AI에게 물어보고, 팀과 검토하기",
    desc: "Clara에게 질문하면 이메일·Drive·과거 프로젝트를 교차 검증한 답을 제공합니다.",
  },
  {
    icon: "✎",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
    title: "아이디어를 세련된 문서로",
    desc: "팀 검토 맥락과 내부 자료를 반영한 이메일 답장, 보고서, 제안서를 AI가 작성합니다.",
  },
  {
    icon: "📖",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "시니어의 프로세스를 자산화",
    desc: "Playbook이 검토 과정을 자동 정리합니다. 주니어가 퇴사해도 지식은 회사에 남습니다.",
  },
];

const SAAS_PILLS = [
  { name: "Front $59", color: "bg-red-50 text-red-600" },
  { name: "Slack $15", color: "bg-red-50 text-red-600" },
  { name: "ChatGPT $25", color: "bg-red-50 text-red-600" },
  { name: "Monday $19", color: "bg-red-50 text-red-600" },
  { name: "HubSpot $90+", color: "bg-red-50 text-red-600" },
];

export default function V3Home() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="bg-white font-[Inter,system-ui,sans-serif]">
      {/* ─── Header ─── */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-[1280px] mx-auto px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-zinc-900">Clara</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#features" className="hover:text-zinc-900 transition">핵심 기능</a>
            <a href="#how" className="hover:text-zinc-900 transition">작동 방식</a>
            <a href="#compare" className="hover:text-zinc-900 transition">비교</a>
            <a href="#pricing" className="hover:text-zinc-900 transition">요금제</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/v3/en" className="text-xs font-semibold text-zinc-400 hover:text-violet-600 transition border border-zinc-200 px-3 py-1.5 rounded-full">EN</a>
            <a href="#cta" className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-zinc-800 transition">
              시작하기
            </a>
          </div>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="pt-28 pb-20 px-10">
        <div className="max-w-[1280px] mx-auto flex items-center gap-16">
          {/* Left: Text */}
          <div className="section-fade flex-shrink-0 w-[520px]">
            <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-1.5 rounded-full text-[13px] font-medium mb-8">
              <span>✦</span> 전문직 회사를 위한 AI 지식 워크스페이스
            </div>
            <h1 className="text-[48px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-6">
              Front, Slack, ChatGPT<br />
              따로 쓰지 마세요.
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-10 max-w-[480px]">
              Clara는 이메일·팀 채팅·AI 리서치·교차 검증을 하나의 워크스페이스로 통합합니다.
              인당 월 $100+ 절감하면서, 팀의 지식 자산을 축적하세요.
            </p>
            <div className="flex items-center gap-4">
              <a href="#cta" className="bg-zinc-900 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-zinc-800 transition flex items-center gap-2">
                무료로 시작하기 <ArrowRight />
              </a>
              <a href="#how" className="text-zinc-900 px-6 py-3.5 rounded-full text-base font-semibold border border-zinc-200 hover:border-zinc-400 transition">
                데모 보기
              </a>
            </div>
          </div>
          {/* Right: Product Visual */}
          <div className="section-fade flex-1">
            <div className="w-full aspect-[4/3] rounded-2xl border border-zinc-200 bg-zinc-50 flex items-center justify-center overflow-hidden">
              <img
                src="/screenshots/hero-3pane.png"
                alt="Clara AI Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features Grid (Microsoft style 4-col cards) ─── */}
      <section id="features" className="py-20 px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="section-fade mb-12">
            <h2 className="text-[40px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-3">
              AI와 생산성 도구를<br />한 곳에서
            </h2>
            <p className="text-lg text-zinc-500">
              Clara가 검색, 채팅, 문서 작성, 업무 흐름 유지를 어떻게 돕는지 확인하세요.
            </p>
          </div>
          <div className="section-fade grid grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <div key={i} className="rounded-2xl border border-zinc-200 overflow-hidden hover:border-zinc-300 transition group">
                <div className={`${f.bg} h-44 flex items-center justify-center`}>
                  <span className={`text-5xl ${f.iconColor}`}>{f.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works: 3 Steps ─── */}
      <section id="how" className="py-20 px-10 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="section-fade mb-12">
            <p className="text-xs font-semibold text-violet-600 tracking-[2px] uppercase mb-3">작동 방식</p>
            <h2 className="text-[40px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-3">
              생성이 아닌, 맥락을 연결합니다
            </h2>
            <p className="text-lg text-zinc-500 max-w-[700px]">
              Clara는 단순히 글을 써주는 AI가 아닙니다. 이메일·내부 문서·AI 리서치·팀 검토를 하나의 워크스페이스에서 교차 검증합니다.
            </p>
          </div>
          <div className="section-fade grid grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-200">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold text-lg mb-5">1</div>
              <h3 className="text-lg font-bold text-zinc-900 mb-3">흩어진 맥락이 프로젝트별로 통합</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Gmail·Drive·Slack에 분산된 자료가 프로젝트 단위로 자동 연결됩니다. Front + Slack + ChatGPT를 따로 쓸 필요 없습니다.
              </p>
            </div>
            {/* Step 2 */}
            <div className="p-8 rounded-2xl bg-violet-600 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold text-lg mb-5">2</div>
              <h3 className="text-lg font-bold mb-3">AI가 내부 문서로 교차 검증</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                단순 텍스트 생성이 아닙니다. 리서치 결과를 이메일·Drive·과거 프로젝트와 대조하여, 할루시네이션 없이 검증된 답을 제공합니다.
              </p>
            </div>
            {/* Step 3 */}
            <div className="p-8 rounded-2xl bg-zinc-900 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center font-bold text-lg mb-5">3</div>
              <h3 className="text-lg font-bold mb-3">시니어의 프로세스가 회사 자산으로</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                리서치→검토→문서 작성의 전체 과정이 Playbook으로 축적됩니다. 주니어가 퇴사해도 시니어의 검토 프로세스는 회사에 남습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Feature Showcase (alternating left/right) ─── */}
      <section className="py-20 px-10">
        <div className="max-w-[1280px] mx-auto space-y-24">
          {/* Inbox */}
          <div className="section-fade grid grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-amber-600 tracking-[2px] uppercase mb-3">Shared Inbox</p>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight">
                고객사 이메일이 도착하면<br />검토가 바로 시작됩니다
              </h2>
              <p className="text-base text-zinc-500 mb-6 leading-relaxed">
                AI가 핵심을 요약하고, 관련 내부 문서를 자동 연결하며, 팀 채팅에서 바로 검토를 시작할 수 있게 합니다.
              </p>
              <ul className="space-y-3">
                {["OVERVIEW — 이메일 핵심 자동 요약", "Linked Context — 프로젝트·고객사·문서 연결", "Suggest — 답장 초안·태스크 생성 제안", "이메일 옆에서 바로 팀 채팅 시작"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-600"><Check />{t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 overflow-hidden">
              <img src="/screenshots/feature-inbox.png" alt="Clara Inbox" className="w-full h-auto" />
            </div>
          </div>

          {/* Ask + Chat */}
          <div className="section-fade grid grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 overflow-hidden">
              <img src="/screenshots/hero-3pane.png" alt="Clara Ask + Chat" className="w-full h-auto" />
            </div>
            <div>
              <p className="text-xs font-semibold text-violet-600 tracking-[2px] uppercase mb-3">Ask + Chat</p>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight">
                단순히 글을 쓰는 AI가 아닙니다.<br />내부 자료로 교차 검증하는 AI.
              </h2>
              <p className="text-base text-zinc-500 mb-6 leading-relaxed">
                할루시네이션이 두려워 AI 결과물을 그대로 못 쓰셨나요? Clara AI는 이메일·Drive·과거 프로젝트를 관통해 검증된 답을 제공합니다.
              </p>
              <ul className="space-y-3">
                {["AI 리서치 + 내부 자료 교차 검증", "@멘션으로 팀원과 AI에게 즉시 지시", "Folder 패널: 관련 문서·산출물 자동 정리", "검토 완료 후 문서 초안 작성"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-600"><Check />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SaaS Comparison ─── */}
      <section id="compare" className="py-20 px-10 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="section-fade text-center mb-12">
            <p className="text-xs font-semibold text-violet-600 tracking-[2px] uppercase mb-3">비교</p>
            <h2 className="text-[40px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-3">
              인당 월 $171+ SaaS 비용,<br />Clara 하나로 통합하세요.
            </h2>
            <p className="text-lg text-zinc-500 max-w-[700px] mx-auto">
              Front + Slack + ChatGPT + Monday + HubSpot을 따로 쓰면 비용만 늘고, AI끼리 연결은 안 됩니다.
            </p>
          </div>
          <div className="section-fade flex flex-wrap items-center justify-center gap-3 mb-8">
            {SAAS_PILLS.map((p, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${p.color}`}>{p.name}</span>
                {i < SAAS_PILLS.length - 1 && <span className="text-zinc-300 text-lg mx-1">+</span>}
              </span>
            ))}
            <span className="text-violet-600 text-2xl font-bold mx-3">→</span>
            <span className="px-6 py-2.5 rounded-full bg-violet-600 text-white text-base font-bold">Clara All-in-One</span>
          </div>
          {/* Comparison table */}
          <div className="section-fade overflow-x-auto">
            <table className="w-full text-sm border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="py-4 px-4 text-left font-semibold text-zinc-900 border-b border-zinc-200">기능</th>
                  <th className="py-4 px-3 text-center font-semibold text-zinc-400 border-b border-zinc-200">Front<br /><span className="text-[10px] font-normal text-amber-500">$59/월</span></th>
                  <th className="py-4 px-3 text-center font-semibold text-zinc-400 border-b border-zinc-200">Slack<br /><span className="text-[10px] font-normal text-amber-500">$15/월</span></th>
                  <th className="py-4 px-3 text-center font-semibold text-zinc-400 border-b border-zinc-200">ChatGPT<br /><span className="text-[10px] font-normal text-amber-500">$25/월</span></th>
                  <th className="py-4 px-3 text-center font-semibold text-zinc-400 border-b border-zinc-200">Monday<br /><span className="text-[10px] font-normal text-amber-500">$19/월</span></th>
                  <th className="py-4 px-6 text-center font-bold text-violet-600 bg-violet-50 rounded-t-2xl border-b border-violet-100">Clara<br /><span className="text-xs font-bold uppercase tracking-wider">All-in-One</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "팀 공유 인박스", values: ["✅", "❌", "❌", "❌", "✅"] },
                  { feature: "팀 채팅", values: ["❌", "✅", "❌", "❌", "✅"] },
                  { feature: "AI 리서치 + 교차 검증", values: ["⚠️", "⚠️", "✅", "⚠️", "✅"] },
                  { feature: "프로젝트·태스크 관리", values: ["❌", "❌", "❌", "✅", "✅"] },
                  { feature: "이메일↔채팅↔AI 통합 맥락", values: ["❌", "❌", "❌", "❌", "✅"] },
                  { feature: "Playbook 자동 생성", values: ["❌", "❌", "❌", "❌", "✅"] },
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-zinc-50/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-zinc-700 border-b border-zinc-100">{row.feature}</td>
                    {row.values.slice(0, 4).map((v, j) => (
                      <td key={j} className="py-4 px-3 text-center text-zinc-400 border-b border-zinc-100">{v}</td>
                    ))}
                    <td className="py-4 px-6 text-center bg-violet-50/50 font-bold text-violet-600 border-b border-violet-100">{row.values[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section id="pricing" className="py-20 px-10 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="section-fade text-center mb-14">
            <h2 className="text-[40px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-3">
              우리 팀에 맞는 플랜을 선택하세요
            </h2>
            <p className="text-lg text-zinc-500">모든 플랜에 이메일·채팅·프로젝트·AI 기능이 포함됩니다.</p>
          </div>
          <div className="section-fade grid grid-cols-3 gap-6">
            {/* SaaS */}
            <div className="relative p-8 rounded-2xl bg-white border-2 border-violet-200">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-4 py-1 rounded-full">추천</div>
              <div className="text-sm font-semibold text-violet-600 mb-1">SaaS</div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1">Clara Cloud</h3>
              <p className="text-sm text-zinc-500 mb-6">기본 요금 + AI는 쓴 만큼만</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-zinc-900">$39</span>
                <span className="text-zinc-500 text-sm"> / 인 / 월</span>
              </div>
              <div className="text-xs text-zinc-400 mb-6">+ AI 요금은 팀이 쓴 만큼만 (월 $500부터)</div>
              <ul className="space-y-3 mb-8">
                {["이메일·채팅·프로젝트 전체 기능", "Google Workspace 완전 연동", "AI는 쓴 만큼만 과금 (팀 단위 관리)", "AI 리서치 & 내부 자료 교차 검증", "플레이북 자동 생성", "SSL 암호화 및 SOC 2 준수"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-600"><Check />{t}</li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-violet-600 text-white py-3 rounded-full font-semibold hover:bg-violet-700 transition">무료 체험 시작</a>
            </div>
            {/* Dedicated */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-200">
              <div className="text-sm font-semibold text-zinc-500 mb-1">Dedicated</div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1">독립 서버</h3>
              <p className="text-sm text-zinc-500 mb-6">데이터 보안이 중요한 팀</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-zinc-900">$3,500</span>
                <span className="text-zinc-500 text-sm"> / 서버 / 월</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["SaaS 플랜의 모든 기능 포함", "전용 서버 격리 (데이터 분리)", "BYOK — 자체 LLM 키 사용", "LLM 비용 고객 직접 관리 (투명한 비용 구조)", "커스텀 보안 정책 적용", "우선 기술 지원"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-600"><Check />{t}</li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-zinc-900 text-white py-3 rounded-full font-semibold hover:bg-zinc-800 transition">도입 상담 요청</a>
            </div>
            {/* Enterprise */}
            <div className="p-8 rounded-2xl bg-zinc-900 text-white">
              <div className="text-sm font-semibold text-violet-300 mb-1">Enterprise</div>
              <h3 className="text-2xl font-bold mb-1">커스텀</h3>
              <p className="text-sm text-zinc-400 mb-6">맞춤 개발이 필요한 조직</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">별도 협의</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["독립 서버 플랜의 모든 기능 포함", "온프레미스 / 프라이빗 클라우드 배포", "커스텀 AI 모델 구축 및 파인튜닝", "기존 사내 시스템 연동 개발", "SLA 및 감사 로그"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80"><Check />{t}</li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-white text-zinc-900 py-3 rounded-full font-semibold hover:bg-zinc-100 transition">커스텀 상담 요청</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="cta" className="py-24 px-10 bg-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-fade">
            <div className="w-14 h-14 rounded-2xl bg-violet-600 flex items-center justify-center mx-auto mb-8">
              <span className="text-white text-3xl">✦</span>
            </div>
            <h2 className="text-[40px] font-bold text-white leading-[1.12] tracking-tight mb-4">
              SaaS 비용을 절감하고,<br />팀의 지식을 축적하세요.
            </h2>
            <p className="text-base text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Gmail 계정만 있으면 5분 내 셋업 완료. 이메일·채팅·AI 리서치가 연결되는 순간,
              시니어의 검토 프로세스가 회사의 재사용 가능한 자산이 됩니다.
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-violet-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-violet-700 transition">
              무료로 시작하기 <ArrowRight />
            </a>
            <p className="text-sm text-zinc-500 mt-5">신용카드 없이 시작 · Google Workspace 연동 · 5분 내 셋업</p>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-10 px-10 border-t border-zinc-200 bg-white">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">C</span>
            </div>
            <span className="text-base font-bold text-zinc-900">Clara</span>
            <span className="text-xs text-zinc-400 ml-1">AI Knowledge Workspace by SprintSolo</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="#features" className="hover:text-zinc-900 transition">핵심 기능</a>
            <a href="#how" className="hover:text-zinc-900 transition">작동 방식</a>
            <a href="#compare" className="hover:text-zinc-900 transition">비교</a>
            <a href="#pricing" className="hover:text-zinc-900 transition">요금제</a>
          </div>
          <span className="text-xs text-zinc-400">© 2026 Clara by SprintSolo, Inc.</span>
        </div>
      </footer>
    </div>
  );
}
