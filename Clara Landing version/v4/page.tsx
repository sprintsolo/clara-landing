"use client";

import { useEffect, useRef } from "react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
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

function IconQuote() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-violet-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

const PAIN_POINTS = [
  {
    stat: "300,000명",
    label: "2020년 이후 업계를 떠난 회계사",
    desc: "CPA 졸업생은 1990년 대비 50% 감소. 남은 인력의 지식을 조직 자산으로 전환하지 않으면 펌의 역량이 함께 떠납니다.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    stat: "40%",
    label: "수동 데이터 입력에 소비되는 시간",
    desc: "55.5%의 펌이 워크플로우 비효율을 최대 과제로 꼽습니다. 시니어가 클라이언트 맥락을 수동으로 인수인계하는 데 수 주가 소요됩니다.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    stat: "6개+",
    label: "앱 사이에 흩어진 engagement 맥락",
    desc: "Karbon + Gmail + CCH + ChatGPT + Drive + Slack — 도구는 많지만, 클라이언트 engagement의 맥락을 연결하는 시스템은 없습니다.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

const LAYERS = [
  {
    num: "01",
    title: "Engagement Memory",
    subtitle: "Engagement별 의사결정 근거 자동 추적",
    desc: "각 engagement에서 오간 이메일, 논의, 판단 근거를 자동으로 추적하고 구조화합니다. IRS audit이나 클라이언트 문의 시 '왜 그때 그 결정을 했는지'를 즉시 복원합니다.",
    scenario: "\"작년에 Client ABC의 감가상각을 왜 정률법에서 정액법으로 바꿨지?\" → 이메일 어딘가에 묻힌 맥락을 AI가 즉시 복원",
    scenarioLabel: "Before: 담당자 기억 의존 or 수시간 이메일 수동 검색",
    bg: "bg-white",
    border: "border-violet-200",
    numColor: "text-violet-600 bg-violet-50",
  },
  {
    num: "02",
    title: "Client Intelligence",
    subtitle: "클라이언트별 선호·이력·특성 AI 프로파일",
    desc: "클라이언트별 취향, 선호하는 보고서 형식, 반복되는 특수 요청, 담당자 성향까지 자동으로 축적합니다. 담당자가 바뀌어도 새 담당자가 즉시 파악할 수 있습니다.",
    scenario: "\"Client XYZ의 CFO는 분기 보고서에 항상 산업 벤치마크 비교를 넣어달라고 한다\" → 어디에도 기록되지 않던 것이 자동으로 프로파일에 축적",
    scenarioLabel: "Before: CRM이 연락처와 billing은 관리하지만, '일하는 방법'은 관리 안 함",
    bg: "bg-violet-600",
    border: "border-violet-600",
    numColor: "text-white bg-white/20",
  },
  {
    num: "03",
    title: "Practice Playbook",
    subtitle: "검증된 업무 프로세스의 자동 추출 및 재사용",
    desc: "여러 engagement에서 검증된 approach를 추출하여 재사용 가능한 템플릿으로 정제합니다. 주니어가 퇴사해도, 시니어의 검토 프로세스는 회사에 남습니다.",
    scenario: "\"부동산 클라이언트의 1031 Exchange 처리를 매번 처음부터 리서치\" → 이전 engagement에서 검증된 approach가 자동으로 Playbook화",
    scenarioLabel: "Before: 개별 담당자의 기억에 의존, 퇴사 시 완전 유실",
    bg: "bg-zinc-900",
    border: "border-zinc-900",
    numColor: "text-white bg-white/15",
  },
];

const COMPETITORS = [
  { name: "Karbon", role: "Practice Management", relation: "Clara 위에서 함께 사용", icon: "⚙️" },
  { name: "Basis", role: "세무 작업 자동화", relation: "작업 + 맥락 = 시너지", icon: "📊" },
  { name: "FieldGuide", role: "감사 절차 자동화", relation: "감사 + 지식자산 = 시너지", icon: "🔍" },
  { name: "CCH / Thomson", role: "세무·감사 데이터", relation: "데이터 + Intelligence = 시너지", icon: "📚" },
];

export default function V4Home() {
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
            <span className="text-[11px] font-medium text-zinc-400 hidden sm:inline">for CPA Firms</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#problem" className="hover:text-zinc-900 transition">왜 필요한가</a>
            <a href="#layers" className="hover:text-zinc-900 transition">핵심 기능</a>
            <a href="#positioning" className="hover:text-zinc-900 transition">포지셔닝</a>
            <a href="#pricing" className="hover:text-zinc-900 transition">요금제</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/v4/en" className="text-xs font-semibold text-zinc-400 hover:text-violet-600 transition border border-zinc-200 px-3 py-1.5 rounded-full">EN</a>
            <a href="#cta" className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-zinc-800 transition">
              데모 요청
            </a>
          </div>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="pt-28 pb-20 px-10">
        <div className="max-w-[1280px] mx-auto flex items-center gap-16">
          <div className="section-fade flex-shrink-0 w-[560px]">
            <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-1.5 rounded-full text-[13px] font-medium mb-8">
              <span>✦</span> Engagement Intelligence Platform for CPA Firms
            </div>
            <h1 className="text-[46px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-6">
              시니어가 떠나도,<br />
              클라이언트 지식은<br />
              남습니다.
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-10 max-w-[500px]">
              Clara는 모든 client engagement에서 발생하는 커뮤니케이션, 의사결정, 업무 프로세스를 AI가 자동으로 캡처·분류·자산화합니다.
              <span className="block mt-3 text-zinc-400 text-base">Karbon, CCH, Basis와 함께 사용하세요 — 대체가 아닌, 그 위의 Intelligence 레이어.</span>
            </p>
            <div className="flex items-center gap-4">
              <a href="#cta" className="bg-zinc-900 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-zinc-800 transition flex items-center gap-2">
                14일 무료 체험 <ArrowRight />
              </a>
              <a href="#layers" className="text-zinc-900 px-6 py-3.5 rounded-full text-base font-semibold border border-zinc-200 hover:border-zinc-400 transition">
                작동 방식 보기
              </a>
            </div>
          </div>
          <div className="section-fade flex-1">
            <div className="w-full aspect-[4/3] rounded-2xl border border-zinc-200 bg-zinc-50 flex items-center justify-center overflow-hidden">
              <img
                src="/screenshots/hero-3pane.png"
                alt="Clara Engagement Intelligence"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Social Proof Bar ─── */}
      <section className="py-6 px-10 border-y border-zinc-100">
        <div className="max-w-[1280px] mx-auto flex items-center justify-center gap-12 text-sm text-zinc-400">
          <span>100인+ CPA 펌 대상</span>
          <span className="w-1 h-1 bg-zinc-300 rounded-full" />
          <span>SOC 2 준수</span>
          <span className="w-1 h-1 bg-zinc-300 rounded-full" />
          <span>Google Workspace 완전 연동</span>
          <span className="w-1 h-1 bg-zinc-300 rounded-full" />
          <span>BYOK (자체 LLM 키) 지원</span>
        </div>
      </section>

      {/* ─── Problem: 회계업계 구조적 위기 ─── */}
      <section id="problem" className="py-20 px-10 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="section-fade mb-14">
            <p className="text-xs font-semibold text-red-500 tracking-[2px] uppercase mb-3">회계업계 구조적 위기</p>
            <h2 className="text-[40px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-3">
              도구의 부족이 아닙니다.<br />Engagement 지식의 유실이 문제입니다.
            </h2>
            <p className="text-lg text-zinc-500 max-w-[700px]">
              시니어 매니저가 퇴직하면 수십 년의 클라이언트 맥락이 함께 사라집니다. Practice Management가 해결할 수 없고, 세무 자동화 AI가 해결할 수 없습니다.
            </p>
          </div>
          <div className="section-fade grid grid-cols-3 gap-6">
            {PAIN_POINTS.map((p, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-zinc-200">
                <div className={`inline-flex items-center gap-2 ${p.bg} ${p.color} px-3 py-1.5 rounded-full text-xs font-bold mb-5`}>
                  {p.stat}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{p.label}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3 Layers of Engagement Intelligence ─── */}
      <section id="layers" className="py-20 px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="section-fade mb-14">
            <p className="text-xs font-semibold text-violet-600 tracking-[2px] uppercase mb-3">Engagement Intelligence</p>
            <h2 className="text-[40px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-3">
              모든 engagement를<br />재사용 가능한 펌의 자산으로
            </h2>
            <p className="text-lg text-zinc-500 max-w-[700px]">
              Clara의 Engagement Intelligence는 세 가지 레이어로 구성됩니다. 각 레이어가 쌓일수록, 펌은 더 똑똑해집니다.
            </p>
          </div>
          <div className="section-fade space-y-6">
            {LAYERS.map((layer, i) => {
              const isWhite = layer.bg === "bg-white";
              const isDark = layer.bg === "bg-zinc-900";
              const isViolet = layer.bg === "bg-violet-600";
              return (
                <div key={i} className={`p-10 rounded-2xl border ${layer.border} ${layer.bg} ${isViolet || isDark ? "text-white" : ""}`}>
                  <div className="flex items-start gap-10">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl ${layer.numColor} flex items-center justify-center font-bold text-lg`}>
                        {layer.num}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-1 ${isWhite ? "text-zinc-900" : ""}`}>{layer.title}</h3>
                      <p className={`text-sm font-medium mb-4 ${isWhite ? "text-violet-600" : isViolet ? "text-white/80" : "text-white/60"}`}>
                        {layer.subtitle}
                      </p>
                      <p className={`text-base leading-relaxed mb-6 max-w-[700px] ${isWhite ? "text-zinc-500" : isViolet ? "text-white/85" : "text-white/70"}`}>
                        {layer.desc}
                      </p>
                      <div className={`p-5 rounded-xl ${isWhite ? "bg-zinc-50 border border-zinc-100" : isViolet ? "bg-white/10" : "bg-white/5 border border-white/10"}`}>
                        <p className={`text-sm font-medium leading-relaxed ${isWhite ? "text-zinc-700" : "text-white/90"}`}>
                          💡 {layer.scenario}
                        </p>
                        <p className={`text-xs mt-2 ${isWhite ? "text-zinc-400" : isViolet ? "text-white/50" : "text-white/40"}`}>
                          {layer.scenarioLabel}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Positioning: 대체가 아닌 보완 ─── */}
      <section id="positioning" className="py-20 px-10 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="section-fade mb-14">
            <p className="text-xs font-semibold text-violet-600 tracking-[2px] uppercase mb-3">포지셔닝</p>
            <h2 className="text-[40px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-3">
              기존 도구를 대체하지 않습니다.<br />그 위의 Intelligence 레이어입니다.
            </h2>
            <p className="text-lg text-zinc-500 max-w-[700px]">
              Karbon은 계속 사용하세요. Basis도 계속 사용하세요. Clara는 이 도구들 위에서 작동하는 Engagement Intelligence 레이어입니다.
            </p>
          </div>
          <div className="section-fade grid grid-cols-4 gap-5">
            {COMPETITORS.map((c, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-zinc-200 text-center">
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h3 className="text-base font-bold text-zinc-900 mb-1">{c.name}</h3>
                <p className="text-xs text-zinc-400 mb-3">{c.role}</p>
                <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[11px] font-medium">
                  ✓ {c.relation}
                </div>
              </div>
            ))}
          </div>
          <div className="section-fade mt-10 p-8 rounded-2xl bg-violet-600 text-white text-center">
            <p className="text-xl font-bold mb-2">Basis는 세무 &quot;작업&quot;을 자동화합니다.</p>
            <p className="text-xl font-bold mb-4">Clara는 그 작업 주변의 &quot;맥락과 지식&quot;을 자산화합니다.</p>
            <p className="text-base text-white/70">함께 쓰면 시너지가 극대화됩니다. Replace가 아닌 Complement.</p>
          </div>
        </div>
      </section>

      {/* ─── Quote / Social Proof ─── */}
      <section className="py-16 px-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-fade">
            <IconQuote />
            <blockquote className="text-2xl font-bold text-zinc-900 leading-snug mt-6 mb-6">
              &ldquo;ChatGPT는 답을 주지만, 우리 펌의 과거 engagement 맥락을 모릅니다.<br />
              6개월 후 Clara는 우리 고유의 Engagement Intelligence가 됩니다.&rdquo;
            </blockquote>
            <p className="text-sm text-zinc-400">— 100인 Regional CPA 펌 시나리오</p>
          </div>
        </div>
      </section>

      {/* ─── Use Cases: 회계 특화 시나리오 ─── */}
      <section className="py-20 px-10 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="section-fade mb-14">
            <p className="text-xs font-semibold text-violet-600 tracking-[2px] uppercase mb-3">활용 시나리오</p>
            <h2 className="text-[40px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-3">
              CPA 펌의 실제 업무에서
            </h2>
          </div>
          <div className="section-fade space-y-20">
            {/* Scenario 1 */}
            <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-semibold text-amber-600 tracking-[2px] uppercase mb-3">시니어 퇴사 대응</p>
                <h3 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight">
                  시니어 매니저가 퇴사해도<br />클라이언트 전환이 2주 만에 완료
                </h3>
                <p className="text-base text-zinc-500 mb-6 leading-relaxed">
                  기존에는 수 주~수 개월 걸리던 클라이언트 인수인계가, Engagement Memory와 Client Intelligence로 2주 내 완료됩니다.
                </p>
                <ul className="space-y-3">
                  {["Client Intelligence가 클라이언트별 선호·특수 요구사항 자동 제공", "Engagement Memory가 과거 의사결정 근거 즉시 복원", "Practice Playbook이 기존 처리 방식을 템플릿으로 제공"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600"><Check />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden">
                <img src="/screenshots/feature-inbox.png" alt="Client handover" className="w-full h-auto" />
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="grid grid-cols-2 gap-16 items-center">
              <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden">
                <img src="/screenshots/hero-3pane.png" alt="Cross-verification" className="w-full h-auto" />
              </div>
              <div>
                <p className="text-xs font-semibold text-violet-600 tracking-[2px] uppercase mb-3">AI 교차 검증</p>
                <h3 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight">
                  단순히 글 쓰는 AI가 아닙니다.<br />내부 자료로 교차 검증하는 AI.
                </h3>
                <p className="text-base text-zinc-500 mb-6 leading-relaxed">
                  할루시네이션이 두려워 AI 결과물을 그대로 못 쓰셨나요? Clara는 이메일·Drive·과거 engagement를 관통해 검증된 답을 제공합니다.
                </p>
                <ul className="space-y-3">
                  {["AI 리서치 결과를 이메일·Drive·과거 프로젝트와 대조", "@멘션으로 팀원과 AI에게 즉시 검토 요청", "검증 완료 후 문서 초안 작성 → 이메일 답장"].map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600"><Check />{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section id="pricing" className="py-20 px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="section-fade text-center mb-14">
            <h2 className="text-[40px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-3">
              우리 펌에 맞는 플랜을 선택하세요
            </h2>
            <p className="text-lg text-zinc-500">모든 플랜에 이메일·채팅·프로젝트·Engagement Intelligence 기능이 포함됩니다.</p>
          </div>
          <div className="section-fade grid grid-cols-3 gap-6">
            {/* Cloud */}
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
                {["Engagement Intelligence 3개 레이어 전체", "이메일·채팅·프로젝트 전체 기능", "Google Workspace 완전 연동", "AI는 쓴 만큼만 과금 (팀 단위 관리)", "SSL 암호화 및 SOC 2 준수"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-600"><Check />{t}</li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-violet-600 text-white py-3 rounded-full font-semibold hover:bg-violet-700 transition">무료 체험 시작</a>
            </div>
            {/* Dedicated */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-200">
              <div className="text-sm font-semibold text-zinc-500 mb-1">Dedicated</div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1">독립 서버</h3>
              <p className="text-sm text-zinc-500 mb-6">데이터 보안이 중요한 펌</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-zinc-900">$3,500</span>
                <span className="text-zinc-500 text-sm"> / 서버 / 월</span>
              </div>
              <div className="text-xs text-zinc-400 mb-6">최대 100명 · BYOK — LLM 비용 펌이 직접 관리</div>
              <ul className="space-y-3 mb-8">
                {["Cloud 플랜의 모든 기능 포함", "전용 서버 격리 (클라이언트 데이터 분리)", "BYOK — 자체 OpenAI/Anthropic 키 사용", "LLM 비용을 펌이 직접 관리 (투명한 비용 구조)", "커스텀 보안 정책 적용", "우선 기술 지원"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-600"><Check />{t}</li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-zinc-900 text-white py-3 rounded-full font-semibold hover:bg-zinc-800 transition">도입 상담 요청</a>
            </div>
            {/* Enterprise */}
            <div className="p-8 rounded-2xl bg-zinc-900 text-white">
              <div className="text-sm font-semibold text-violet-300 mb-1">Enterprise</div>
              <h3 className="text-2xl font-bold mb-1">커스텀</h3>
              <p className="text-sm text-zinc-400 mb-6">맞춤 개발이 필요한 대형 펌</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">별도 협의</span>
              </div>
              <div className="text-xs text-zinc-500 mb-6">펌 규모·보안 요건에 따라 맞춤 견적</div>
              <ul className="space-y-3 mb-8">
                {["독립 서버 플랜의 모든 기능 포함", "온프레미스 / 프라이빗 클라우드 배포", "커스텀 AI 모델 구축 및 파인튜닝", "기존 Practice Management 시스템 연동", "SLA 및 감사 로그"].map((t, i) => (
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
              Every engagement makes<br />your firm smarter.
            </h2>
            <p className="text-base text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
              시니어가 떠나도 클라이언트 지식은 남고, 새 스태프가 합류하면 즉시 성과를 냅니다.
              Gmail 계정만 있으면 5분 내 셋업 완료.
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-violet-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-violet-700 transition">
              14일 무료 체험 시작 <ArrowRight />
            </a>
            <p className="text-sm text-zinc-500 mt-5">신용카드 없이 시작 · Google Workspace 연동 · Karbon/CCH와 함께 사용</p>
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
            <span className="text-xs text-zinc-400 ml-1">Engagement Intelligence Platform by SprintSolo</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="#problem" className="hover:text-zinc-900 transition">왜 필요한가</a>
            <a href="#layers" className="hover:text-zinc-900 transition">핵심 기능</a>
            <a href="#positioning" className="hover:text-zinc-900 transition">포지셔닝</a>
            <a href="#pricing" className="hover:text-zinc-900 transition">요금제</a>
          </div>
          <span className="text-xs text-zinc-400">© 2026 Clara by SprintSolo, Inc.</span>
        </div>
      </footer>
    </div>
  );
}
