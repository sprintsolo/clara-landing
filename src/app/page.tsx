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

/* ─── 아이콘 컴포넌트들 ─── */
function IconMail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function IconChat() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}
function IconAI() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}
function IconProject() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function IconArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

/* ─── Mock 스크린샷 컴포넌트 (실제 앱 UI를 재현) ─── */
function ScreenshotInbox() {
  return (
    <div className="relative group">
      {/* 장식용 글로우 효과 */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-rose-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

      <div className="relative screenshot-shadow bg-white rounded-2xl border border-gray-200 overflow-hidden">
        {/* 상단 윈도우 툴바 스타일 */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-green-400/80 shadow-sm" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-md shadow-sm">
            <span className="text-[10px] text-gray-400 font-mono">https://</span>
            <span className="text-xs font-medium text-gray-600">clara.sprintsolo.dev/inbox</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
              <span className="text-orange-600 text-[10px]">✉</span>
            </div>
          </div>
        </div>

        {/* 실제 이미지 배치 */}
        <div className="relative overflow-hidden bg-gray-100">
          <img
            src="/screenshots/feature-inbox.png"
            alt="Clara AI-Powered Shared Inbox"
            className="w-full h-auto block"
          />
          {/* 이미지 위 오버레이 */}
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

function ScreenshotChat() {
  return (
    <div className="relative group">
      {/* 장식용 글로우 효과 */}
      <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

      <div className="relative screenshot-shadow bg-white rounded-2xl border border-gray-200 overflow-hidden">
        {/* 상단 윈도우 툴바 스타일 */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-green-400/80 shadow-sm" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-md shadow-sm">
            <span className="text-[10px] text-gray-400 font-mono">https://</span>
            <span className="text-xs font-medium text-gray-600">clara.sprintsolo.dev/ask</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center">
              <span className="text-violet-600 text-[10px]">✦</span>
            </div>
          </div>
        </div>

        {/* 실제 이미지 배치 */}
        <div className="relative overflow-hidden bg-gray-100">
          <img
            src="/screenshots/hero-3pane.png"
            alt="Clara AI Workspace - KYC Analysis, Folder Context, and Linked Workflow"
            className="w-full h-auto block"
          />
          {/* 이미지 위 오버레이 */}
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}


function ScreenshotAsk() {
  return (
    <div className="screenshot-shadow bg-white rounded-xl border border-gray-200">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50 rounded-t-xl">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-sm font-medium text-gray-600">Ask</span>
        <span className="text-xs bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">New</span>
      </div>
      <div className="p-8 flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-violet-500 flex items-center justify-center mb-4">
          <span className="text-white text-2xl">✦</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Anything to Ask?</h3>
        <p className="text-sm text-gray-500 text-center mb-6">Clara(AI)에게 물어나 동료에게 요청을 보내<br />업무를 더 빠르게 처리하세요.</p>
        <div className="w-full max-w-md bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 mb-6">
          <div className="text-sm text-gray-400 mb-2">무엇을 도와드릴까요? (e.g. 프로젝트 요약, 이메일 초안...)</div>
          <div className="flex items-center gap-2 text-gray-300">
            <span>@</span><span>+</span>
            <div className="ml-auto w-7 h-7 rounded-full bg-violet-500 flex items-center justify-center">
              <span className="text-white text-xs">▶</span>
            </div>
          </div>
        </div>
        <div className="text-[10px] font-semibold text-gray-400 mb-3 tracking-widest">QUICK SUGGESTIONS</div>
        <div className="grid grid-cols-2 gap-3 w-full max-w-md">
          <div className="p-3 border border-gray-200 rounded-xl hover:border-violet-300 hover:bg-violet-50/50 transition">
            <div className="text-violet-500 mb-1.5">✦</div>
            <div className="text-xs font-semibold text-gray-800">Clara와 대화</div>
            <div className="text-[10px] text-gray-500">최근 프로젝트 현황 요약해줘</div>
          </div>
          <div className="p-3 border border-gray-200 rounded-xl hover:border-violet-300 hover:bg-violet-50/50 transition">
            <div className="text-violet-500 mb-1.5">✉</div>
            <div className="text-xs font-semibold text-gray-800">이메일 관련</div>
            <div className="text-[10px] text-gray-500">미확인 중요 메일에 대해 답장 초안 작성해줘</div>
          </div>
          <div className="p-3 border border-gray-200 rounded-xl hover:border-violet-300 hover:bg-violet-50/50 transition">
            <div className="text-violet-500 mb-1.5">☑</div>
            <div className="text-xs font-semibold text-gray-800">태스크 관리</div>
            <div className="text-[10px] text-gray-500">미결 업무들 중에서 우선순위 높은 순으로 정리해줘</div>
          </div>
          <div className="p-3 border border-gray-200 rounded-xl hover:border-violet-300 hover:bg-violet-50/50 transition">
            <div className="text-violet-500 mb-1.5">📊</div>
            <div className="text-xs font-semibold text-gray-800">프로젝트 분석</div>
            <div className="text-[10px] text-gray-500">현재 진행 중인 펀드 관리 프로젝트의 리스크 요인 분석해줘</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenshotProject() {
  return (
    <div className="screenshot-shadow bg-white rounded-xl border border-gray-200">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50 rounded-t-xl">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-sm font-medium text-gray-600">프로젝트 마케팅</span>
        <div className="flex -space-x-1">
          <div className="w-5 h-5 rounded-full bg-amber-200 border border-white" />
          <div className="w-5 h-5 rounded-full bg-blue-200 border border-white" />
          <span className="text-[10px] text-gray-400 ml-1">+1</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {[
          { title: "IT 솔루션 엑스포 2026 투자 멘토 심사용 최신 회사 소개서 송부", deadline: "3일 남음", color: "text-green-600", assignee: "bg-amber-200", desc: "글로벌 상공회의소 최유진 팀장 요청에 따라 엑스포 투자 멘토 내부 심사를 위한 최신 버전의 회…" },
          { title: "IT 솔루션 엑스포 2026 헬스케어 기업 동행 및 이벤트 초대 관리", deadline: "기한 없음", color: "text-gray-400", assignee: "bg-green-200", desc: "헬스케어 기업 중 협력사와 동행하는 건을 챙겨주세요. 마이크로바이옴, 디지털헬스 등 헬스케…" },
          { title: "마켓 인사이트 데이터 보완 및 투자 이력 제공", deadline: "기한 없음", color: "text-gray-400", assignee: "bg-blue-200", desc: "마켓 인사이트의 데이터 검증 요청에 대응하여, 홍보 관점에서 적절한 수준의 최소 투자 이력…" },
          { title: "2026년 미래기술협회 정회원 연회비 납부 및 증빙 처리", deadline: "24일 지남", color: "text-red-500", assignee: "bg-violet-200", desc: "협회 공지 내용에 따라 2026년도 정회원 연회비를 납부하고, 회계 처리를 위한 영수증 및 증…" },
          { title: "협회 2026년 연간 일정 확인 및 주요 행사 마케팅 캘린더 반영", deadline: "26일 지남", color: "text-red-500", assignee: "bg-amber-200", desc: "협회 홈페이지 공지사항의 연간 일정을 확인하여, 마케팅 팀의 2026년 주요 이벤트 및 학술…" },
        ].map((task, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition">
            <div className={`w-8 h-8 rounded-full ${task.assignee} shrink-0 mt-0.5`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold text-gray-800 line-clamp-1">{task.title}</span>
                <span className={`text-[10px] ${task.color} whitespace-nowrap ml-2`}>{task.deadline}</span>
              </div>
              <div className="text-[10px] text-gray-500 line-clamp-1 mt-0.5">{task.desc}</div>
            </div>
            <span className="text-[10px] text-gray-400 shrink-0">💬 1</span>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100 px-4 py-2.5">
        <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
          <span className="text-gray-400 text-[11px]">이 프로젝트에 대해 질문하거나 논의를 시작하세요...</span>
          <div className="ml-auto w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center">
            <span className="text-white text-[10px]">▶</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenshotContacts() {
  return (
    <div className="screenshot-shadow bg-white rounded-xl border border-gray-200">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50 rounded-t-xl">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-sm font-medium text-gray-600">인맥 · 8,867 명</span>
        <span className="text-xs text-gray-400">+ 사람 추가</span>
      </div>
      <div className="flex">
        <div className="w-60 p-3 space-y-1.5 border-r border-gray-100">
          <div className="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-400 mb-2">🔍 사람 검색...</div>
          <div className="text-[10px] text-gray-400 font-semibold mb-1">👥 연락처 (8,867)</div>
          {[
            { name: "김지훈", title: "대표이사 / 공학 박사 · 미래전략연구소", tag: "+14", color: "bg-amber-100 text-amber-700" },
            { name: "이성민", title: "팀장 - 사업개발부 · 스타트업지원센터", tag: "", color: "bg-green-100 text-green-700" },
            { name: "최준혁", title: "과장 - 투자심사본부 / 혁신자산운용", tag: "+2", color: "bg-blue-100 text-blue-700" },
            { name: "한상우", title: "대표 / 이사장 · 스타트업성장재단", tag: "+1", color: "bg-violet-100 text-violet-700" },
            { name: "서지혜", title: "차장 - 성장금융본부 / 신용사업부", tag: "", color: "bg-pink-100 text-pink-700" },
            { name: "정다운", title: "사원 - 자산관리팀 · 신뢰자산운용", tag: "+2", color: "bg-red-100 text-red-700" },
          ].map((p, i) => (
            <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className={`w-6 h-6 rounded-full ${p.color} text-[9px] flex items-center justify-center font-bold shrink-0`}>{p.name.slice(0, 2)}</div>
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-semibold text-gray-800">{p.name}</span>
                  {p.tag && <span className="text-[9px] text-gray-400">{p.tag}</span>}
                </div>
                <div className="text-[9px] text-gray-500 truncate">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-sm font-semibold text-gray-700 mb-1">사람을 선택하세요</div>
            <div className="text-xs text-gray-500">목록에서 사람을 선택하여 상세 정보를 확인하세요</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 메인 페이지 ─── */
export default function Home() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="bg-white">
      {/* ─── Header ─── */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Clara</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-violet-600 transition">기능</a>
            <a href="#ai-agent" className="hover:text-violet-600 transition">AI 에이전트</a>
            <a href="#use-cases" className="hover:text-violet-600 transition">사용 사례</a>
            <a href="#pricing" className="hover:text-violet-600 transition">비교</a>
          </nav>
          <a href="#cta" className="bg-violet-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-violet-700 transition">
            시작하기
          </a>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="section-fade">
            <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span>✦</span> AI가 학습하는 업무 협업 플랫폼
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              프로젝트 관리를 돕는<br />
              AI 직원, <span className="gradient-text">클라라</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-4 leading-relaxed">
              첨부 파일 분석부터 의견 교환까지 이메일 옆에서 끝나는 협업이 가능하며,<br className="hidden md:block" />
              AI가 프로젝트로 정리하고 회사만의 지식 자산을 구축합니다.
            </p>
            <p className="text-base text-gray-400 max-w-xl mx-auto mb-10">
              Front + Slack + ChatGPT + Monday.com을 하나로 통합.<br />
              전문가 기업을 위한 AI 기반 WorkOS.
            </p>
            <div className="flex items-center justify-center gap-4 mb-16">
              <a href="#cta" className="bg-violet-600 text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-violet-700 transition flex items-center gap-2 shadow-lg shadow-violet-200">
                무료로 시작하기 <IconArrowRight />
              </a>
              <a href="#features" className="text-gray-600 px-6 py-3.5 rounded-full text-base font-medium hover:bg-gray-50 transition border border-gray-200">
                기능 살펴보기
              </a>
            </div>
          </div>
          {/* Hero 스크린샷 */}
          <div className="section-fade max-w-4xl mx-auto">
            <ScreenshotChat />
          </div>
        </div>
      </section>

      {/* ─── 핵심 스토리: 프로젝트 관리 → AI 학습 ─── */}
      <section className="py-20 px-6 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="section-fade text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              업무의 핵심에 집중할 수 있도록,<br />
              클라라와 함께하는 스마트한 협업
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
              번거로운 정리와 분류는 클라라에게 맡기고 당신은 더 중요한 결정에 몰입하세요.<br className="hidden md:block" />
              흩어진 맥락을 연결하여 팀의 성장을 돕는 가장 강력한 조력자가 됩니다.
            </p>
          </div>
          <div className="section-fade grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">시작은 익숙한 수신함에서</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                이메일 속 중요한 요청사항을 놓치지 않게 프로젝트와 태스크로 정리하고 일정을 꼼꼼히 챙겨줍니다.
              </p>
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-violet-300 text-2xl">→</div>
            </div>
            {/* Step 2 */}
            <div className="relative p-6 rounded-2xl bg-white border border-violet-200 shadow-sm ring-1 ring-violet-100">
              <div className="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">맥락을 잇는 스마트한 소통</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                답장 초안 작성부터 과거 히스토리 파악까지, 모든 소통 과정에서 당신의 든든한 서포터가 되어줍니다.
              </p>
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-violet-300 text-2xl">→</div>
            </div>
            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 text-white shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="text-lg font-bold mb-2">팀을 위한 지식 가이드 구축</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                우리 팀의 귀중한 경험과 노하우를 체계적으로 자산화하여, 누구나 스스로 답을 찾을 수 있는 지식 창고를 만듭니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 타겟 고객 Pain Point ─── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-fade text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">이런 고민이 있으신가요?</h2>
          </div>
          <div className="section-fade grid md:grid-cols-2 gap-6">
            {[
              { icon: "😰", title: "소규모 팀, 다수의 고객 대응", desc: "적은 인원으로 수십, 수백 개의 고객사 이메일을 명확하게 분류하고 누락 없이 처리해야 합니다." },
              { icon: "📈", title: "지속 가능한 팀 자산 관리", desc: "개별 인력에 의존하던 고객 관계와 업무 노하우를 팀의 공식적인 자산으로 축적하여 성장 기반을 만듭니다." },
              { icon: "📧", title: "이메일 속에 흩어진 정보", desc: "중요한 의사결정, 계약 조건, 고객 요청이 이메일에 파편화되어 있어 맥락을 파악하는 데 에너지를 낭비합니다." },
              { icon: "🔧", title: "파편화된 업무 도구", desc: "여러 도구를 오가며 소모되는 컨텍스트 스위칭 비용을 줄이고 싶은 전문 직업인을 위해 설계되었습니다." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-200 hover:border-violet-200 transition">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="section-fade text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-full text-base font-medium">
              Clara가 이 모든 것을 해결합니다 ↓
            </div>
          </div>
        </div>
      </section>

      {/* ─── 통합 가치: 4개 도구를 하나로 ─── */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="section-fade text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              복잡한 도구 사이의 탐색 대신,<br />
              클라라 하나로 완성되는 워크플로우
            </h2>
            <p className="text-lg text-gray-500">
              메일, 채팅, AI, 프로젝트 관리까지 따로 쓸 필요 없이 한 곳에서 자연스럽게 연결됩니다.
            </p>
          </div>
          <div className="section-fade grid md:grid-cols-4 gap-6">
            {[
              { tool: "Front", icon: <IconMail />, clara: "AI 프로젝트 인박스", desc: "넘쳐나는 메일 속에서 꼭 챙겨야 할 프로젝트와 태스크를 먼저 보여주고 스마트한 분류를 돕습니다.", color: "bg-orange-50 text-orange-600 border-orange-200" },
              { tool: "Slack", icon: <IconChat />, clara: "이메일 공유 채팅", desc: "메일 내용을 따로 전송하거나 복사할 필요 없이, 이메일 바로 옆에서 맥락을 공유하며 팀원과 즉시 소통하세요.", color: "bg-blue-50 text-blue-600 border-blue-200" },
              { tool: "ChatGPT", icon: <IconAI />, clara: "실시간 업무 현황 검색", desc: "일반 AI는 접근할 수 없는 우리 팀만의 이메일 히스토리와 업무 맥락을 자연어 검색으로 완벽하게 파악하고 대응합니다.", color: "bg-green-50 text-green-600 border-green-200" },
              { tool: "Monday.com", icon: <IconProject />, clara: "대화형 프로젝트 매니저", desc: "수동적인 데이터 입력 대신, 팀원과 대화하듯 AI에게 자연어로 요청하세요. 프로젝트 관리의 모든 과정을 클라라가 직접 실행합니다.", color: "bg-purple-50 text-purple-600 border-purple-200" },
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-2xl border ${item.color} transition hover:shadow-md`}>
                <div className="mb-3">{item.icon}</div>
                <div className="text-[10px] font-semibold text-gray-400 mb-1">vs {item.tool}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{item.clara}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Shared Inbox (vs Front) ─── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-fade grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <IconMail /> vs Front
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                프로젝트 관리를 위한 Front
              </h2>
              <p className="text-base text-gray-500 mb-6 leading-relaxed">
                프론트(Front)는 고객대응을 위한 Shared Inbox입니다. 클라라는 여기서 한 걸음 더 나아가,
                이메일 내의 비즈니스 맥락을 AI가 직접 읽고 실행 가능한 프로젝트 태스크로
                즉시 연결하는 지능형 비서입니다.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  { title: "AI 요약 및 자동 브리핑", desc: "메일 본문을 분석하여 'OVERVIEW'를 통해 핵심 내용과 즉각적인 액션 아이템을 브리핑합니다." },
                  { title: "맥락 기반 프로젝트 연결", desc: "'Linked Context' 기능을 통해 해당 메일이 어떤 고객사, 프로젝트 업무와 연관되는지 AI가 찾아줍니다." },
                  { title: "지능형 다음 단계 제안", desc: "'Suggest' 버튼 하나로 답장 초안 작성부터 태스크 생성까지 최적의 업무 워크플로우를 제안받으세요." },
                  { title: "팀 통합 공유 인박스 및 채팅", desc: "팀원별 업무 처리 현황을 실시간으로 확인하고, 이메일 옆에서 즉시 채팅하며 지시를 내리세요." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-violet-100 rounded-full p-0.5">
                      <svg className="w-3.5 h-3.5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-900 block">{item.title}</span>
                      <span className="text-sm text-gray-500">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ScreenshotInbox />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 이메일 공유 채팅 (vs Slack) ─── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="section-fade grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ScreenshotChat />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <IconChat /> vs Slack / Google Chat
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                이메일을 공유하며<br />바로 대화하세요
              </h2>
              <p className="text-base text-gray-500 mb-6 leading-relaxed">
                받은 이메일을 채팅방에서 바로 공유하고, 팀원과 AI가 함께 답장을 작성합니다.
                Slack처럼 이메일 링크를 복사-붙여넣기할 필요가 없습니다.
              </p>
              <ul className="space-y-3">
                {[
                  "태스크와 연결된 채팅 - 업무 맥락이 자동으로 유지",
                  "@멘션으로 팀원과 AI에게 즉시 지시",
                  "Folder 패널: 컨텍스트(관련 문서)와 산출물 자동 정리",
                  "이메일 초안을 채팅에서 바로 작성하고 발송",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AI 액티브 에이전트 (vs ChatGPT) - 가장 중요 ─── */}
      <section id="ai-agent" className="py-20 px-6 bg-gradient-to-b from-violet-600 to-violet-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="section-fade text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              ✦ 핵심 기능
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ChatGPT는 맥락을 모릅니다.<br />
              Clara의 AI는 <span className="text-violet-200">회사를 이해합니다.</span>
            </h2>
            <p className="text-lg text-violet-200 max-w-2xl mx-auto">
              모든 이메일, 모든 대화, 모든 프로젝트에 AI가 참여합니다.<br />
              회사의 업무 방식을 학습하는 진짜 AI 직원입니다.
            </p>
          </div>
          <div className="section-fade grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {[
                { title: "이메일 자동 요약 & 제안", desc: "받은 이메일의 핵심을 Brief로 요약하고, Suggest로 다음 액션을 제안합니다. 연결된 회사/프로젝트도 자동으로 표시합니다." },
                { title: "@멘션으로 즉시 지시", desc: "채팅에서 '@Clarence Due Date 지정해라'라고 말하면, AI가 즉시 태스크 담당자와 마감일을 설정합니다." },
                { title: "프로젝트 현황 분석", desc: "'현재 진행 중인 펀드 관리 프로젝트의 리스크 요인 분석해줘'라고 물어보세요. AI가 전체 맥락을 파악하고 분석합니다." },
                { title: "이메일 답장 초안 작성", desc: "'미확인 중요 메일에 대해 답장 초안 작성해줘'. AI가 이전 대화 맥락을 이해하고 적절한 답장을 작성합니다." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0 text-sm font-bold">{i + 1}</div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-violet-200 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="bg-white rounded-2xl p-1">
                <ScreenshotAsk />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 프로젝트 관리 (vs Monday.com) ─── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-fade grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <IconProject /> vs Monday.com
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                이메일에서 시작되는<br />프로젝트 관리
              </h2>
              <p className="text-base text-gray-500 mb-6 leading-relaxed">
                받은 이메일에서 바로 프로젝트와 태스크를 생성하세요.
                담당자 배정, 기한 설정, 팀 채팅이 하나의 태스크에 연결됩니다.
                별도의 프로젝트 관리 도구가 필요 없습니다.
              </p>
              <ul className="space-y-3">
                {[
                  "프로젝트별 태스크 관리 - 기한, 담당자, 설명",
                  "태스크마다 연결된 채팅 채널 자동 생성",
                  "이메일/문서를 태스크의 컨텍스트로 자동 연결",
                  "프로젝트 단위 채팅으로 전체 논의 가능",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ScreenshotProject />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Gmail/연락처 연동 ─── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="section-fade grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ScreenshotContacts />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <IconUsers /> Google Workspace 연동
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Gmail·연락처·캘린더<br />완전 연동
              </h2>
              <p className="text-base text-gray-500 mb-6 leading-relaxed">
                기존 Gmail을 그대로 사용하면서 Clara의 모든 기능을 활용하세요.
                8,867명의 연락처가 자동 동기화되고, 각 연락처의 직함, 소속, 이메일 히스토리를 한눈에 파악합니다.
              </p>
              <ul className="space-y-3">
                {[
                  "Gmail 완전 연동 - 기존 이메일 그대로 사용",
                  "Google Contacts 동기화 - 8,867명 연락처 자동 관리",
                  "캘린더 연동 - 일정과 태스크를 함께 관리",
                  "연락처별 이메일 히스토리 & 회사 정보 자동 표시",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 비용 비교표 ─── */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="section-fade text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              4개 도구 따로 쓰시겠습니까?
            </h2>
            <p className="text-lg text-gray-500">
              비용도, 관리 부담도 줄여보세요.
            </p>
          </div>
          <div className="section-fade">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left font-semibold text-gray-900">기능</th>
                    <th className="py-4 px-4 text-center font-semibold text-gray-400">Front<br /><span className="text-xs font-normal">$19/월~</span></th>
                    <th className="py-4 px-4 text-center font-semibold text-gray-400">Slack<br /><span className="text-xs font-normal">$8.75/월~</span></th>
                    <th className="py-4 px-4 text-center font-semibold text-gray-400">ChatGPT<br /><span className="text-xs font-normal">$20/월~</span></th>
                    <th className="py-4 px-4 text-center font-semibold text-gray-400">Monday<br /><span className="text-xs font-normal">$9/월~</span></th>
                    <th className="py-4 px-4 text-center font-bold text-violet-600 bg-violet-50 rounded-t-xl">Clara<br /><span className="text-xs font-normal">All-in-One</span></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Shared Inbox", values: ["✅", "❌", "❌", "❌", "✅"] },
                    { feature: "팀 채팅", values: ["❌", "✅", "❌", "❌", "✅"] },
                    { feature: "AI 에이전트", values: ["❌", "❌", "✅", "❌", "✅"] },
                    { feature: "프로젝트 관리", values: ["❌", "❌", "❌", "✅", "✅"] },
                    { feature: "이메일 공유 채팅", values: ["⚠️", "❌", "❌", "❌", "✅"] },
                    { feature: "이메일 자동 요약", values: ["❌", "❌", "⚠️", "❌", "✅"] },
                    { feature: "업무 맥락 AI", values: ["❌", "❌", "❌", "❌", "✅"] },
                    { feature: "연락처 CRM", values: ["❌", "❌", "❌", "❌", "✅"] },
                    { feature: "Gmail 네이티브 연동", values: ["✅", "❌", "❌", "❌", "✅"] },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-700">{row.feature}</td>
                      {row.values.map((v, j) => (
                        <td key={j} className={`py-3 px-4 text-center ${j === 4 ? "bg-violet-50 font-bold text-violet-600" : "text-gray-500"}`}>
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-200 font-bold">
                    <td className="py-4 px-4 text-gray-900">월 비용 (1인)</td>
                    <td className="py-4 px-4 text-center text-gray-500">$19</td>
                    <td className="py-4 px-4 text-center text-gray-500">$8.75</td>
                    <td className="py-4 px-4 text-center text-gray-500">$20</td>
                    <td className="py-4 px-4 text-center text-gray-500">$9</td>
                    <td className="py-4 px-4 text-center text-violet-600 bg-violet-50 rounded-b-xl text-lg">통합</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 text-gray-400 text-xs" colSpan={5}>합계: 1인당 월 $56.75+</td>
                    <td className="py-2 px-4 text-center text-violet-600 bg-violet-50 text-xs font-bold">절감</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 실제 사용 사례 ─── */}
      <section id="use-cases" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="section-fade text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              이미 실제 업무에서 사용 중
            </h2>
            <p className="text-lg text-gray-500">
              벤처캐피탈, 스타트업, 전문 서비스 기업에서 Clara를 활용하고 있습니다.
            </p>
          </div>
          <div className="section-fade grid md:grid-cols-2 gap-6">
            {[
              { project: "혁신성장 연구과제 종료 및 최종평가 관리", type: "정부 과제", desc: "회계감사보고서 비용 정산, 특허등록증 대체 제출 등 복잡한 정부 과제 마감 업무를 팀원과 AI가 협업하여 관리합니다.", tasks: 2, members: 3 },
              { project: "마케팅", type: "마케팅", desc: "IT 솔루션 엑스포 2026 투자 멘토 심사, 헬스케어 기업 이벤트 초대, 마켓 인사이트 데이터 보완 등 마케팅 태스크를 체계적으로 추적합니다.", tasks: 5, members: 3 },
              { project: "K-스타트업 글로벌 진출 가속화", type: "프로그램 관리", desc: "선정 결과 확인, MOU 체결, 증빙 서류 보완, 제안서 협의 등 프로그램 참여의 전체 프로세스를 관리합니다.", tasks: 4, members: 1 },
              { project: "사내 업무 소프트웨어 가이드", type: "내부 운영", desc: "스마트 업무 연동 가이드 검토, 업무용 회신 주소 설정 등 사내 업무 도구 가이드를 팀과 함께 작성하고 관리합니다.", tasks: 2, members: 3 },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-violet-200 hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-violet-100 text-violet-700 px-2.5 py-0.5 rounded-full font-medium">{item.type}</span>
                  <span className="text-xs text-gray-400">태스크 {item.tasks}개 · 멤버 {item.members}명</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.project}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="cta" className="py-24 px-6 bg-gradient-to-b from-white to-violet-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-fade">
            <div className="w-16 h-16 rounded-2xl bg-violet-600 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <span className="text-white text-3xl">✦</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              이메일에 AI 직원을<br />합류시킬 준비가 되셨나요?
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
              지금 시작하세요. Gmail 계정만 있으면 됩니다.<br />
              회사의 모든 업무 지식이 축적되기 시작합니다.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="#" className="bg-violet-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-violet-700 transition flex items-center gap-2 shadow-lg shadow-violet-200">
                무료로 시작하기 <IconArrowRight />
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">신용카드 없이 시작 · Google Workspace 연동 · 5분 내 셋업</p>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Clara</span>
              <span className="text-xs text-gray-400 ml-2">AI 기반 이메일 협업 WorkOS by SprintSolo</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#features" className="hover:text-violet-600 transition">기능</a>
              <a href="#ai-agent" className="hover:text-violet-600 transition">AI 에이전트</a>
              <a href="#use-cases" className="hover:text-violet-600 transition">사용 사례</a>
              <a href="#pricing" className="hover:text-violet-600 transition">비교</a>
            </div>
          </div>
          <div className="text-center text-xs text-gray-400 mt-8">
            © 2026 Clara by SprintSolo, Inc.(스프린트솔로). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
