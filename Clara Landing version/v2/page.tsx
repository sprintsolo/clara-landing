"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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

/* ─── 히어로 카루셀: 앱별 문제점 ─── */
const PAIN_POINTS = [
  {
    app: "Gmail + Google Chat",
    color: "red",
    icon: "✉",
    badge: "bg-red-50 text-red-600 border-red-200",
    highlight: "bg-red-50 border-red-100",
    title: "경력자의 이메일 검토 맥락, 신입에게 전달할 방법이 없습니다",
    desc: "경력자가 Gmail에서 검토한 판단 근거, 고객사 히스토리, 참고한 문서가 Chat으로 공유되지 않습니다. 신입이 같은 고객 건을 맡으면 이메일을 처음부터 다시 읽고, 맥락을 다시 파악해야 합니다. 논의는 Chat에, 원문은 Gmail에, 문서는 Drive에 — 경력자의 검토 과정이 흩어져 재사용이 불가능합니다.",
  },
  {
    app: "Gmail + Slack",
    color: "pink",
    icon: "💬",
    badge: "bg-pink-50 text-pink-600 border-pink-200",
    highlight: "bg-pink-50 border-pink-100",
    title: "경력자의 검토 의견이 Slack 채널에 묻혀 사라집니다",
    desc: "경력자가 Slack에서 공유한 검토 기준, 리스크 판단, 수정 지시사항이 빠르게 흘러가는 채널에 몇 분 만에 묻힙니다. 다음에 비슷한 안건을 맡는 신입은 그 검토 이력을 찾을 수 없어 같은 질문을 반복합니다. 30개 고객사의 검토 맥락이 수십 개 채널에 흩어져 있습니다.",
  },
  {
    app: "Front",
    color: "orange",
    icon: "📮",
    badge: "bg-orange-50 text-orange-600 border-orange-200",
    highlight: "bg-orange-50 border-orange-100",
    title: "공유 인박스는 있지만, 경력자의 판단 기준은 공유 안 됩니다",
    desc: "Front의 공유 인박스로 이메일은 함께 볼 수 있지만, 경력자가 왜 그렇게 답장했는지, 어떤 내부 문서를 참고했는지, 과거 유사 건을 어떻게 처리했는지는 기록되지 않습니다. AI Copilot($20 추가)도 이메일만 참고할 뿐 — 경력자의 검토 프로세스 자체를 팀에 전달하지 못합니다.",
  },
  {
    app: "HubSpot",
    color: "amber",
    icon: "🔶",
    badge: "bg-amber-50 text-amber-600 border-amber-200",
    highlight: "bg-amber-50 border-amber-100",
    title: "기능은 많지만 너무 복잡하고, 정작 업무 노하우는 쌓이지 않습니다",
    desc: "HubSpot은 CRM·마케팅·서비스까지 수백 개 기능을 제공하지만, 그만큼 배우기 어렵고 도입 비용만 $25,000~$50,000입니다. 인당 $90+/월을 내도 팀이 실제로 쓰는 기능은 일부뿐입니다. 무엇보다 경력자가 고객을 어떻게 대응했는지 — 검토 기준, 리서치 방법, 문서 작성 과정은 기록되지 않아 신입에게 전달할 수 없습니다.",
  },
  {
    app: "Monday.com",
    color: "blue",
    icon: "📋",
    badge: "bg-blue-50 text-blue-600 border-blue-200",
    highlight: "bg-blue-50 border-blue-100",
    title: "태스크에 고객 이메일이 자동 연결되지 않아, 맥락이 끊깁니다",
    desc: "Monday.com에서 태스크를 만들어도 고객과 주고받은 이메일, 참고 문서, 팀 검토 논의가 자동으로 연결되지 않습니다. 태스크에 맥락이 없으니 경력자가 왜 그렇게 처리했는지 알 수 없고, 신입이 같은 유형의 업무를 맡으면 고객 이메일부터 다시 찾아 읽어야 합니다.",
  },
  {
    app: "ChatGPT",
    color: "green",
    icon: "🤖",
    badge: "bg-emerald-50 text-emerald-600 border-emerald-200",
    highlight: "bg-emerald-50 border-emerald-100",
    title: "AI가 리서치해줘도, 우리 회사의 과거 사례는 모릅니다",
    desc: "ChatGPT가 아무리 뛰어나도 우리 회사가 지난번 비슷한 건을 어떻게 처리했는지, 경력자가 어떤 기준으로 검토했는지는 알 수 없습니다. 별도 브라우저 탭에서 작동하라 — 내부 이메일, Drive 자료, 과거 검토 이력과 교차 검증이 불가능합니다. 결국 경력자가 직접 확인해야 합니다.",
  },
];

function PainPointCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [animState, setAnimState] = useState<"enter" | "exit">("enter");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const INTERVAL = 9000;

  const goTo = useCallback(
    (next: number) => {
      setAnimState("exit");
      setTimeout(() => {
        setActiveIdx(next);
        setAnimState("enter");
      }, 400);
    },
    []
  );

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((activeIdx + 1) % PAIN_POINTS.length);
    }, INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIdx, goTo]);

  const item = PAIN_POINTS[activeIdx];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 mb-5">
        {PAIN_POINTS.map((p, i) => (
          <button
            key={i}
            onClick={() => { if (i !== activeIdx) goTo(i); }}
            className={`relative h-1.5 rounded-full transition-all duration-300 overflow-hidden ${
              i === activeIdx ? "w-10 bg-gray-200" : "w-6 bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i === activeIdx && (
              <span
                className="absolute inset-y-0 left-0 bg-violet-500 rounded-full"
                style={{ animation: `progressFill ${INTERVAL}ms linear forwards` }}
              />
            )}
            {i < activeIdx && (
              <span className="absolute inset-0 bg-violet-400 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Card */}
      <div
        className={`relative p-5 md:p-6 rounded-2xl border ${item.highlight} text-left transition-all ${
          animState === "enter" ? "carousel-enter" : "carousel-exit"
        }`}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${item.badge}`}>
            {item.icon} {item.app}
          </span>
        </div>
        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
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
            <a href="#core-features" className="hover:text-violet-600 transition">핵심 기능</a>
            <a href="#features" className="hover:text-violet-600 transition">왜 Clara인가</a>
            <a href="#use-cases" className="hover:text-violet-600 transition">사용 사례</a>
            <a href="#pricing" className="hover:text-violet-600 transition">비교</a>
            <a href="#plans" className="hover:text-violet-600 transition">요금제</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/v2/en" className="text-xs font-medium text-gray-400 hover:text-violet-600 transition border border-gray-200 px-2.5 py-1 rounded-full">EN</a>
            <a href="#cta" className="bg-violet-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-violet-700 transition">
              시작하기
            </a>
          </div>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="section-fade">
            <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span>✦</span> Front + Slack + ChatGPT, 따로 쓰지 마세요
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              흩어진 맥락, 반복되는 리서치<br />
              <span className="gradient-text">Clara</span> 하나로 끝냅니다
            </h1>
            <div className="mb-10">
              <PainPointCarousel />
            </div>
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

      {/* ─── 타겟 고객 Pain Point ─── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-fade text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              20~100명 전문직 회사가<br />겪는 &lsquo;맥락 단절&rsquo;
            </h2>
            <p className="text-lg text-gray-500">엔터프라이즈 AI(Glean, Harvey)를 도입하기엔 비용이 과하고, ChatGPT만으론 내부 자료와 교차 검증이 불가능합니다.</p>
          </div>
          <div className="section-fade grid md:grid-cols-2 gap-6">
            {[
              { icon: "💸", title: "인당 월 $100+를 써도 AI끼리 연결이 안 됩니다", desc: "Front($59) + Slack($15) + ChatGPT($20) 각각 AI 요금을 내도, 서로의 데이터에 접근할 수 없습니다. 리서치 결과를 내부 자료와 대조하는 건 여전히 사람 몫입니다." },
              { icon: "🤖", title: "AI가 만든 초안, 할루시네이션이 두렵습니다", desc: "ChatGPT가 써준 보고서를 그대로 쓸 수 없습니다. 법적 책임이 있는 전문직에서 AI 결과물을 내부 문서와 교차 검증 없이 사용하는 건 리스크입니다." },
              { icon: "📧", title: "고객사 맥락이 6개 앱에 파편화되어 있습니다", desc: "이메일은 Gmail, 논의는 Slack, 태스크는 Monday, 리서치는 ChatGPT, 문서는 Drive — 하나의 프로젝트 맥락이 5개 앱에 흩어져 있습니다." },
              { icon: "👋", title: "주니어가 퇴사하면 맥락도 함께 사라집니다", desc: "시니어가 이메일을 검토한 기준, AI에게 질문한 과정, 팀 논의 결과가 개인의 머릿속에만 있습니다. 퇴사와 함께 그 노하우가 사라집니다." },
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
              Clara 하나면 이 모든 문제가 해결됩니다 ↓
            </div>
          </div>
        </div>
      </section>

      {/* ─── 핵심 스토리: 프로젝트 관리 → AI 자동 정리 ─── */}
      <section className="py-20 px-6 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="section-fade text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              생성이 아닌, 맥락을 연결합니다
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
              Clara는 단순히 글을 써주는 AI가 아닙니다.<br className="hidden md:block" />
              이메일·내부 문서·AI 리서치·팀 검토를 하나의 워크스페이스에서 <strong className="text-gray-700">교차 검증</strong>합니다.
            </p>
          </div>
          <div className="section-fade grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">흩어진 맥락이 프로젝트별로 통합됩니다</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Gmail·Drive·Slack에 분산된 고객사 자료가 프로젝트 단위로 자동 연결됩니다. Front + Slack + ChatGPT를 따로 쓸 필요가 없습니다.
              </p>
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-violet-300 text-2xl">→</div>
            </div>
            {/* Step 2 */}
            <div className="relative p-6 rounded-2xl bg-white border border-violet-200 shadow-sm ring-1 ring-violet-100">
              <div className="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI가 내부 문서로 교차 검증합니다</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                단순히 글을 생성하는 AI가 아닙니다. 리서치 결과를 이메일·Drive·과거 프로젝트와 대조하여, 할루시네이션 없이 검증된 답을 제공합니다.
              </p>
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-violet-300 text-2xl">→</div>
            </div>
            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 text-white shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="text-lg font-bold mb-2">시니어의 프로세스가 회사 자산이 됩니다</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                리서치→검토→문서 작성의 전체 과정이 플레이북으로 축적됩니다. 주니어가 퇴사해도, 시니어의 검토 프로세스는 회사 시스템에 남습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 핵심 기능 ─── */}
      <section id="core-features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-fade text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span>✦</span> Clara의 핵심 기능
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Front + Slack + ChatGPT를<br />하나로 통합합니다
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              인당 월 $100+를 절감하면서, 이메일·채팅·AI 리서치·프로젝트가 하나로 연결됩니다.
            </p>
          </div>

          {/* 상단: Ask + Chat (메인, 넓게) + Inbox */}
          <div className="section-fade grid md:grid-cols-2 gap-6 mb-6">

            {/* Ask + Chat */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 text-white hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <IconAI />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-violet-300">
                  <span className="bg-white/20 px-2 py-0.5 rounded-full font-bold text-white">Ask</span>
                  <span>→</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full font-bold text-white">Chat</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Ask + Chat</h3>
              <p className="text-xs text-violet-300 mb-4">AI에게 질문하면 대화가 시작되고, 팀원을 초대하면 협업이 됩니다</p>
              <p className="text-sm text-white/80 leading-relaxed mb-5">
                Clara에게 자연어로 무엇이든 요청하세요. AI가 이메일·Drive·프로젝트를 탐색해 답을 찾고,
                팀원을 초대하는 순간 같은 대화방에서 함께 검토합니다.
                모든 대화에는 <strong>Folder</strong>(참조 자료·산출물 목록)와 <strong>Preview</strong>(파일 즉시 미리보기)가 내장되어 있습니다.
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {[
                  { skill: "통합 자연어 검색", desc: "이메일·Drive·대화·일정을 한 번에" },
                  { skill: "리서치 & 교차 검증", desc: "외부 리서치 + 내부 자료 자동 대조" },
                  { skill: "팀원 초대 → 그룹 검토", desc: "AI 대화방에 팀원 바로 초대" },
                  { skill: "@멘션으로 동시 지시", desc: "팀원과 Clara에게 한 번에 요청" },
                  { skill: "태스크·일정 실행", desc: "대화만으로 생성·배정·기한 설정" },
                  { skill: "검토 근거 자동 보존", desc: "의사결정 이력이 대화에 남음" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="shrink-0 mt-0.5 w-4 h-4 rounded bg-white/20 text-[9px] font-bold flex items-center justify-center">{i + 1}</span>
                    <div>
                      <span className="text-[11px] font-bold block">{item.skill}</span>
                      <span className="text-[10px] text-white/50">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-white/10 flex gap-3">
                <div className="flex-1 p-2.5 rounded-lg bg-white/10">
                  <div className="text-[10px] font-bold text-violet-300 mb-1">Folder 내장</div>
                  <div className="text-[10px] text-white/60">대화에서 언급된 파일·태스크·이메일이 자동 수집되어 한눈에 정리</div>
                </div>
                <div className="flex-1 p-2.5 rounded-lg bg-white/10">
                  <div className="text-[10px] font-bold text-violet-300 mb-1">Preview 내장</div>
                  <div className="text-[10px] text-white/60">PDF·Docs·Sheets·Word·Excel·HWP를 열지 않고 즉시 미리보기 + AI 질의</div>
                </div>
              </div>
            </div>

            {/* Inbox */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-orange-200 hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <IconMail />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Inbox</h3>
              <p className="text-xs text-gray-400 mb-4">AI가 브리핑하는 팀 공유 인박스</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                고객사 이메일이 도착하면 AI가 핵심을 요약하고, 관련 프로젝트와 내부 문서를 자동 연결합니다.
                이메일 옆에서 바로 팀 채팅을 시작하고, 다음 액션을 제안받으세요.
              </p>
              <ul className="space-y-2.5">
                {[
                  "OVERVIEW — 이메일 핵심 자동 요약 & 브리핑",
                  "Linked Context — 관련 프로젝트·고객사·문서 연결",
                  "Suggest — 답장 초안·태스크 생성·후속 액션 제안",
                  "팀원별 처리 현황 실시간 확인",
                  "이메일 옆에서 바로 팀 채팅 시작",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 중단: Compose, Playbook */}
          <div className="section-fade grid md:grid-cols-2 gap-6 mb-6">

            {/* Compose */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-rose-200 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Compose</h3>
              <p className="text-xs text-gray-400 mb-4">AI가 맥락을 이해하고 작성하는 문서·이메일</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Clara에게 &ldquo;이메일 답장 작성해줘&rdquo; &ldquo;보고서 초안 만들어줘&rdquo;라고 요청하면,
                대화 맥락·내부 자료·팀 검토 의견을 반영한 문서를 생성합니다. 작성된 이메일은 바로 발송할 수 있습니다.
              </p>
              <ul className="space-y-2">
                {[
                  "이메일 답장 — 과거 대화 맥락 반영 초안",
                  "보고서·제안서 — 내부 자료 기반 문서 생성",
                  "팀 검토 의견을 자동 반영한 수정 버전",
                  "작성 즉시 이메일 발송 또는 Drive 저장",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Playbook */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold">핵심 차별점</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Playbook</h3>
              <p className="text-xs text-amber-200 mb-4">주니어가 퇴사해도, 시니어의 검토 프로세스는 회사에 남습니다</p>
              <p className="text-sm text-white/80 leading-relaxed mb-5">
                &ldquo;이걸 플레이북으로 만들어줘&rdquo; 한마디면, 리서치→검토→문서 작성의 전체 과정이
                단계별 워크플로우로 자동 정리됩니다. 높은 이직률에도 팀의 서비스 품질이 유지됩니다.
              </p>
              <ul className="space-y-2">
                {[
                  "대화 한 번으로 업무 프로세스 자동 추출",
                  "단계별 워크플로우 + 참고 자료 링크 포함",
                  "팀 전체가 동일한 품질로 업무 수행",
                  "신규 입사자 온보딩 시간 대폭 단축",
                  "유사 안건에서 즉시 재사용·커스터마이징",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 하단: Project, People */}
          <div className="section-fade grid md:grid-cols-2 gap-6">

            {/* Project */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-purple-200 hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <IconProject />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Project</h3>
              <p className="text-xs text-gray-400 mb-4">이메일에서 시작되는 프로젝트·태스크 관리</p>
              <ul className="space-y-2">
                {[
                  "프로젝트별 태스크 — 기한·담당자·설명",
                  "이메일 → 태스크 자동 생성",
                  "태스크마다 Chat 자동 연결 (Folder·Preview 포함)",
                  "이메일·문서를 컨텍스트로 자동 연결",
                  "전체 워크플로우가 Playbook으로 축적",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* People */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-green-200 hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
                <IconUsers />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">People</h3>
              <p className="text-xs text-gray-400 mb-4">별도 CRM 없는 지능형 연락처 관리</p>
              <ul className="space-y-2">
                {[
                  "이메일에서 연락처·회사 정보 자동 추출",
                  "연락처별 이메일 히스토리 자동 관리",
                  "스마트 그룹 & 자연어 연락처 검색",
                  "직함·소속·관계 AI 자동 업데이트",
                  "고객사별 커뮤니케이션 한눈에 파악",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 업종별 사용 사례 ─── */}
      <section id="use-cases" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="section-fade text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              리서치·검토·문서 작성이<br />플레이북으로 쌓이는 과정
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              팀원들이 Clara에서 리서치하고, 검토하고, 문서를 만들면 — 그 전체 과정이<br className="hidden md:block" />
              다음 유사 안건에서 즉시 재사용할 수 있는 플레이북으로 자동 축적됩니다.
            </p>
          </div>

          {/* ── VC / 투자회사 사례 (스크린샷 포함) ── */}
          <div className="section-fade mb-20">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* 왼쪽: 스크린샷 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative screenshot-shadow bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/80">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">IDV 펀드의 퍼밋 투자 적합성 분석</span>
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-600 text-[10px]">📊</span>
                    </div>
                  </div>
                  <img
                    src="/screenshots/usecase-vc-playbook.png"
                    alt="Clara VC 후속 투자 연계지원 플레이북 생성 과정"
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* 오른쪽: 설명 */}
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  📊 벤처캐피탈 / 투자회사
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  포트폴리오사 투자 유치,<br />대화 한 번으로 플레이북까지
                </h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  포트폴리오사의 후속 투자 유치를 위해 잠재 투자자(VC/AC)의 펀드 여력, 투자 성향,
                  기존 포트폴리오 유사성을 분석하고 전략적 매칭을 진행해야 합니다.
                  이 과정이 이메일·Slack·스프레드시트에 흩어지면,
                  다음 포트폴리오사 투자 유치 때 처음부터 다시 시작합니다.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex gap-3 p-3 bg-amber-50/50 rounded-xl border border-amber-100">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 text-xs font-bold">1</div>
                    <div>
                      <div className="text-xs font-bold text-gray-800">팀원이 Clara에게 투자 분석 요청</div>
                      <div className="text-[11px] text-gray-500">채팅에서 "퍼밋의 투자 적합도 분석해줘"라고 요청하면, Clara가 펀드 현황·투자 이력·Dry Powder를 분석하고 관련 이메일과 문서를 Folder에 자동 연결합니다.</div>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 bg-amber-50/50 rounded-xl border border-amber-100">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 text-xs font-bold">2</div>
                    <div>
                      <div className="text-xs font-bold text-gray-800">분석 결과로 투자 제안서 작성·발송</div>
                      <div className="text-[11px] text-gray-500">Clara가 투자자별 맞춤 제안서(Teaser) 초안을 작성하고, 팀원 승인 후 이메일로 바로 발송합니다. 분석 보고서와 제안서가 Folder에 산출물로 보존됩니다.</div>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 bg-violet-50/50 rounded-xl border border-violet-100">
                    <div className="w-7 h-7 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center shrink-0 text-xs font-bold">3</div>
                    <div>
                      <div className="text-xs font-bold text-gray-800">"이걸 범용 플레이북으로 만들어줘"</div>
                      <div className="text-[11px] text-gray-500">한 건의 투자 유치 과정이 5단계 워크플로우(현황 파악→투자자 탐색→심층 분석→매칭 실행→사후 관리)로 자동 정리되어, 다음 포트폴리오사에 즉시 재사용됩니다.</div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="text-[10px] font-semibold text-violet-600 mb-1">생성된 플레이북</div>
                  <div className="text-xs font-bold text-gray-800 mb-0.5">VC 후속 투자 연계지원</div>
                  <div className="text-[11px] text-gray-500">포트폴리오사 프로파일링 → 잠재 투자자 탐색 → Dry Powder·피어 분석 → 맞춤 제안·미팅 주선 → 사후 관리·자산화</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 나머지 3개 업종 카드 ── */}
          <div className="section-fade grid md:grid-cols-3 gap-8">

            {/* 법무법인 */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-200 hover:shadow-lg transition group">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-[10px] font-semibold mb-4">
                ⚖️ 법무법인
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">계약서 검토 → 리걸 플레이북</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                고객사가 이메일로 계약서 검토를 요청하면, 변호사들이 Clara 채팅에서 리스크 조항을 논의합니다.
                AI가 과거 유사 계약 사례와 판례를 Folder에 자동 연결하고, 검토 의견서 초안을 작성합니다.
              </p>
              <div className="space-y-2 mb-5">
                {[
                  "고객 이메일 → 계약서 자동 분류 및 리스크 하이라이트",
                  "팀 채팅에서 조항별 리스크 논의 → 의사결정 이력 보존",
                  "유사 과거 계약 검토 히스토리를 AI가 자동 참조",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-2.5 bg-blue-50/50 rounded-lg border border-blue-100">
                <div className="text-[10px] font-semibold text-blue-600 mb-0.5">생성되는 플레이북</div>
                <div className="text-[11px] text-gray-700 font-medium">계약 유형별 검토 체크리스트 & 리스크 대응 가이드</div>
              </div>
            </div>

            {/* 회계법인 */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition group">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-[10px] font-semibold mb-4">
                📋 회계법인
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">감사 대응 → 컴플라이언스 플레이북</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                고객사에서 재무제표와 증빙서류가 이메일로 도착하면, 담당 회계사가 Clara에서 검토 포인트를 팀과 논의합니다.
                AI가 관련 회계기준과 과거 감사 이력을 연결하고, 감사조서 초안을 생성합니다.
              </p>
              <div className="space-y-2 mb-5">
                {[
                  "고객 재무자료 이메일 → 감사 항목별 자동 분류",
                  "팀 채팅에서 이슈 논의 → 감사 판단 근거 자동 기록",
                  "전기 감사 내역과 회계기준 변경사항을 AI가 자동 비교",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-2.5 bg-emerald-50/50 rounded-lg border border-emerald-100">
                <div className="text-[10px] font-semibold text-emerald-600 mb-0.5">생성되는 플레이북</div>
                <div className="text-[11px] text-gray-700 font-medium">산업별 감사 체크리스트 & 이슈 대응 매뉴얼</div>
              </div>
            </div>

            {/* 컨설팅 */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-purple-200 hover:shadow-lg transition group">
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full text-[10px] font-semibold mb-4">
                💼 컨설팅
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">프로젝트 제안 → 딜리버리 플레이북</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                고객사 RFP가 이메일로 도착하면, 컨설턴트들이 Clara에서 접근 전략을 논의합니다.
                AI가 과거 유사 프로젝트의 제안서·산출물을 자동 연결하고, 새 제안서 초안을 작성합니다.
              </p>
              <div className="space-y-2 mb-5">
                {[
                  "고객 RFP 이메일 → 요구사항 자동 분석 및 태스크 생성",
                  "팀 채팅에서 제안 전략 논의 → 과거 유사 프로젝트 자동 참조",
                  "프로젝트 종료 후 교훈(Lessons Learned)이 자동 축적",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-2.5 bg-purple-50/50 rounded-lg border border-purple-100">
                <div className="text-[10px] font-semibold text-purple-600 mb-0.5">생성되는 플레이북</div>
                <div className="text-[11px] text-gray-700 font-medium">산업별 프로젝트 제안 템플릿 & 딜리버리 가이드</div>
              </div>
            </div>

          </div>

          {/* 플레이북 강조 배너 */}
          <div className="section-fade mt-12 p-6 bg-gradient-to-r from-violet-600 to-violet-800 rounded-2xl text-white text-center">
            <h3 className="text-lg font-bold mb-2">높은 이직률에도 팀의 서비스 품질을 유지하는 방법</h3>
            <p className="text-sm text-violet-200 max-w-2xl mx-auto">
              주니어가 퇴사해도, 시니어의 검토 기준·리서치 방법·문서 작성 프로세스는 Playbook에 남습니다.<br />
              새로운 팀원은 첫날부터 축적된 프로세스를 따라 업무를 시작합니다.
            </p>
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
                고객사 이메일이 도착하면<br />검토가 바로 시작됩니다
              </h2>
              <p className="text-base text-gray-500 mb-6 leading-relaxed">
                Front($25/월)에서는 이메일이 인박스 안에 갇혀 있습니다.
                Clara는 고객사 이메일이 도착하면 AI가 핵심을 브리핑하고, 관련 내부 문서를 자동 연결하며,
                팀 채팅에서 바로 검토 논의를 시작할 수 있게 합니다.
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
                팀 검토 의견이<br />의사결정 근거로 남습니다
              </h2>
              <p className="text-base text-gray-500 mb-6 leading-relaxed">
                Slack($12.50/월)에서의 검토 논의는 채널에 묻혀 사라집니다.
                Clara에서는 고객사 이메일·리서치 결과와 연결된 채팅이 검토 근거로 보존되고, 다음 유사 안건에서 AI가 즉시 참조합니다.
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

      {/* ─── Ask: AI 동료 (vs ChatGPT) - 가장 중요 ─── */}
      <section id="ai-ask" className="py-20 px-6 bg-gradient-to-b from-violet-600 to-violet-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="section-fade text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              ✦ Ask — AI 교차 검증
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              단순히 글을 쓰는 AI가 아닙니다.<br />
              <span className="text-violet-200">우리 회사의 내부 자료로 교차 검증하는 AI.</span>
            </h2>
            <p className="text-lg text-violet-200 max-w-2xl mx-auto">
              할루시네이션이 두려워 AI 결과물을 그대로 못 쓰셨나요? Clara AI는<br />
              이메일·Google Drive·과거 프로젝트를 관통해 내부 자료 기반의 검증된 답을 제공합니다.
            </p>
          </div>
          <div className="section-fade grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {[
                { title: "AI 리서치 + 내부 자료 교차 검증", desc: "'이 고객사의 재무 상태 분석해줘'라고 요청하면, AI가 외부 리서치와 함께 Google Drive·이메일의 내부 자료를 자동으로 대조합니다." },
                { title: "고객사 이메일 자동 브리핑", desc: "도착한 이메일의 핵심을 Brief로 요약하고, 관련 내부 문서와 과거 검토 이력을 자동으로 연결합니다." },
                { title: "@멘션으로 팀 검토 요청", desc: "채팅에서 '@Clara 이 계약서 리스크 포인트 정리해줘'라고 말하면, AI가 즉시 분석하고 팀원에게 검토를 요청합니다." },
                { title: "검토 완료 후 문서 초안 작성", desc: "'검토 의견 반영해서 보고서 초안 작성해줘'. AI가 팀 논의 내용과 내부 자료를 반영한 문서를 생성합니다." },
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
                고객사 안건의 전체 흐름이<br />프로세스로 기록됩니다
              </h2>
              <p className="text-base text-gray-500 mb-6 leading-relaxed">
                Monday($19/월)에 태스크를 만들어도, 시작점인 고객 이메일, 참고한 내부 문서, 팀의 검토 과정이 연결되지 않습니다.
                Clara는 이메일→리서치→검토→문서의 전체 흐름이 기록되어, 유사 안건에서 즉시 재사용됩니다.
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
                기존 Gmail과 Google Drive를 그대로 사용하면서 Clara의 모든 기능을 활용하세요.
                고객사별 연락처가 자동 동기화되고, 각 연락처의 직함, 소속, 이메일 히스토리를 한눈에 파악합니다.
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

      {/* ─── 통합 가치: 도구 파편화 해결 ─── */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-fade text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              인당 월 $171+ SaaS 비용,<br />Clara 하나로 통합하세요
            </h2>
            <p className="text-lg text-gray-500">
              Front + Slack + ChatGPT + Monday + HubSpot을 따로 쓰면 비용만 늘고, AI끼리 연결은 안 됩니다.<br />
              Clara는 이 모든 기능을 하나의 워크스페이스로 통합합니다.
            </p>
          </div>
          <div className="section-fade">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-separate border-spacing-0">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left font-semibold text-gray-900 bg-white sticky left-0 z-10 border-b border-gray-200">기능</th>
                    <th className="py-4 px-2 text-center font-semibold text-gray-400 border-b border-gray-200">Front<br /><span className="text-[10px] font-normal text-orange-500">AI 플랜 $25/월</span></th>
                    <th className="py-4 px-2 text-center font-semibold text-gray-400 border-b border-gray-200">Slack<br /><span className="text-[10px] font-normal text-orange-500">AI 플랜 $12.50/월</span></th>
                    <th className="py-4 px-2 text-center font-semibold text-gray-400 border-b border-gray-200">ChatGPT<br /><span className="text-[10px] font-normal text-orange-500">Team $25/월</span></th>
                    <th className="py-4 px-2 text-center font-semibold text-gray-400 border-b border-gray-200">Monday<br /><span className="text-[10px] font-normal text-orange-500">AI 플랜 $19/월</span></th>
                    <th className="py-4 px-2 text-center font-semibold text-gray-400 border-b border-gray-200">HubSpot<br /><span className="text-[10px] font-normal text-orange-500">Pro $90+/월</span></th>
                    <th className="py-4 px-6 text-center font-bold text-violet-600 bg-violet-50 rounded-t-2xl border-x border-t border-violet-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">Clara<br /><span className="text-xs font-bold uppercase tracking-wider">All-in-One AI</span></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Shared Inbox (팀 메일 관리)", values: ["✅", "❌", "❌", "❌", "❌", "✅"] },
                    { feature: "팀 채팅 (실시간 소통)", values: ["❌", "✅", "❌", "❌", "❌", "✅"] },
                    { feature: "Ask — AI 자연어 검색·실행", values: ["⚠️", "⚠️", "✅", "⚠️", "⚠️", "✅"] },
                    { feature: "프로젝트 관리 (태스크/기한)", values: ["❌", "❌", "❌", "✅", "❌", "✅"] },
                    { feature: "이메일 옆 실시간 채팅", values: ["⚠️", "❌", "❌", "❌", "❌", "✅"] },
                    { feature: "이메일 AI 자동 요약/브리핑", values: ["⚠️", "❌", "⚠️", "❌", "❌", "✅"] },
                    { feature: "업무 맥락 AI (앱 간 데이터 연동)", values: ["❌", "❌", "❌", "❌", "❌", "✅"] },
                    { feature: "연락처 자동 추출 & AI 분석", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
                    { feature: "연락처별 이메일 히스토리 관리", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
                    { feature: "스마트 연락처 그룹 & 검색", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
                    { feature: "Gmail 네이티브 연동", values: ["✅", "❌", "❌", "❌", "✅", "✅"] },
                  ].map((row, i) => (
                    <tr key={i} className="group hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-4 font-medium text-gray-700 border-b border-gray-100 bg-white sticky left-0 z-10 group-hover:bg-gray-50/50 transition-colors">{row.feature}</td>
                      {row.values.slice(0, 5).map((v, j) => (
                        <td key={j} className="py-4 px-2 text-center text-gray-400 border-b border-gray-100">
                          {v}
                        </td>
                      ))}
                      <td className="py-4 px-6 text-center bg-violet-50/50 font-bold text-violet-600 border-b border-x border-violet-100 group-last:border-b-0">
                        {row.values[5]}
                      </td>
                    </tr>
                  ))}
                  <tr className="font-bold">
                    <td className="py-6 px-4 text-gray-900 bg-white sticky left-0 z-10">AI 포함 월 비용 (1인)</td>
                    <td className="py-6 px-2 text-center text-orange-500">$25</td>
                    <td className="py-6 px-2 text-center text-orange-500">$12.50</td>
                    <td className="py-6 px-2 text-center text-orange-500">$25</td>
                    <td className="py-6 px-2 text-center text-orange-500">$19</td>
                    <td className="py-6 px-2 text-center text-orange-500">$90+</td>
                    <td className="py-6 px-6 text-center text-violet-600 bg-violet-50 rounded-b-2xl border-x border-b border-violet-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] text-xl">All-in-One</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-5 bg-red-50 rounded-2xl border border-red-100 text-center">
              <p className="text-base text-red-700 font-bold mb-1">
                합계: 1인당 월 $171.50+ — 그런데 AI끼리 교차 검증이 불가능합니다.
              </p>
              <p className="text-sm text-red-600">
                리서치 결과를 내부 문서와 대조하고, 팀 검토를 거쳐 문서를 만드는 전 과정이 연결되지 않습니다.
              </p>
            </div>
            <div className="mt-4 p-5 bg-violet-50 rounded-2xl border border-violet-100 text-center">
              <p className="text-sm text-violet-700 font-medium">
                <strong>Clara는 이메일·내부 문서·AI 리서치·팀 검토를 자동으로 정리하고, 필요할 때 바로 찾을 수 있게 관리합니다.</strong><br />
                리서치→교차 검증→검토→문서 작성의 전 과정이 팀의 재사용 가능한 자산으로 축적됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section id="plans" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-fade text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              우리 팀에 맞는 플랜을 선택하세요
            </h2>
            <p className="text-lg text-gray-500">
              모든 플랜에 이메일·채팅·프로젝트·AI 기능이 포함됩니다. 팀 규모와 보안 요건에 따라 선택하세요.
            </p>
          </div>
          <div className="section-fade grid md:grid-cols-3 gap-8">

            {/* SaaS */}
            <div className="relative p-8 rounded-2xl bg-white border-2 border-violet-200 shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-4 py-1 rounded-full">추천</div>
              <div className="text-sm font-semibold text-violet-600 mb-2">SaaS</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Clara Cloud</h3>
              <p className="text-sm text-gray-500 mb-6">기본 요금 + AI는 쓴 만큼만</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$39</span>
                <span className="text-gray-500 text-sm"> / 인 / 월</span>
              </div>
              <div className="text-xs text-gray-400 mb-6">+ AI 요금은 팀이 쓴 만큼만 (월 $500부터)</div>
              <ul className="space-y-3 mb-8">
                {[
                  "이메일·채팅·프로젝트 전체 기능",
                  "Google Workspace 완전 연동",
                  "AI는 쓴 만큼만 과금 (팀 단위 관리)",
                  "AI 리서치 & 내부 자료 교차 검증",
                  "플레이북 자동 생성",
                  "SSL 암호화 및 SOC 2 준수",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-violet-600 text-white py-3 rounded-full font-medium hover:bg-violet-700 transition">
                무료 체험 시작
              </a>
            </div>

            {/* Dedicated */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-violet-200 transition">
              <div className="text-sm font-semibold text-gray-500 mb-2">Dedicated</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">독립 서버</h3>
              <p className="text-sm text-gray-500 mb-6">데이터 보안이 중요한 팀</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$3,500</span>
                <span className="text-gray-500 text-sm"> / 서버 / 월</span>
              </div>
              <div className="text-xs text-gray-400 mb-6">최대 100명 · BYOK — LLM 비용 고객 직접 관리</div>
              <ul className="space-y-3 mb-8">
                {[
                  "SaaS 플랜의 모든 기능 포함",
                  "전용 서버 격리 (데이터 분리)",
                  "BYOK — 자체 OpenAI/Anthropic 키 사용",
                  "LLM 비용 고객 직접 관리 (투명한 비용 구조)",
                  "커스텀 보안 정책 적용 가능",
                  "우선 기술 지원",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-gray-900 text-white py-3 rounded-full font-medium hover:bg-gray-800 transition">
                도입 상담 요청
              </a>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <div className="text-sm font-semibold text-violet-300 mb-2">Enterprise</div>
              <h3 className="text-2xl font-bold mb-1">커스텀</h3>
              <p className="text-sm text-gray-400 mb-6">맞춤 개발이 필요한 조직</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">별도 협의</span>
              </div>
              <div className="text-xs text-gray-500 mb-6">팀 규모·요구사항에 따라 맞춤 견적</div>
              <ul className="space-y-3 mb-8">
                {[
                  "독립 서버 플랜의 모든 기능 포함",
                  "온프레미스 / 프라이빗 클라우드 배포",
                  "커스텀 AI 모델 구축 및 파인튜닝",
                  "기존 사내 시스템 연동 개발",
                  "전담 엔지니어 배정",
                  "SLA 및 감사 로그",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-white text-gray-900 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                커스텀 상담 요청
              </a>
            </div>

          </div>

          <div className="section-fade mt-12 text-center">
            <p className="text-sm text-gray-400">
              모든 플랜은 14일 무료 체험을 제공합니다 · 신용카드 없이 시작 · Google Workspace 연동으로 5분 내 셋업
            </p>
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
              Front + Slack + ChatGPT 비용을 절감하고,<br />팀의 지식까지 축적하세요.
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
              Gmail 계정만 있으면 5분 내 셋업 완료. 이메일·채팅·AI 리서치가 연결되는 순간,<br />
              시니어의 검토 프로세스가 회사의 재사용 가능한 자산이 됩니다.
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
              <span className="text-xs text-gray-400 ml-2">전문직 회사를 위한 AI 지식 워크스페이스 by SprintSolo</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#core-features" className="hover:text-violet-600 transition">핵심 기능</a>
              <a href="#features" className="hover:text-violet-600 transition">왜 Clara인가</a>
              <a href="#use-cases" className="hover:text-violet-600 transition">사용 사례</a>
              <a href="#pricing" className="hover:text-violet-600 transition">비교</a>
              <a href="#plans" className="hover:text-violet-600 transition">요금제</a>
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
