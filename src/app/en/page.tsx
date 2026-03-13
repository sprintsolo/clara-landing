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

/* ─── Icon Components ─── */
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

/* ─── Hero Carousel: App Pain Points ─── */
const PAIN_POINTS = [
  {
    app: "Gmail + Google Chat",
    color: "red",
    icon: "✉",
    badge: "bg-red-50 text-red-600 border-red-200",
    highlight: "bg-red-50 border-red-100",
    title: "'Share in chat' — you can't discuss while viewing the email",
    desc: "Clicking 'Share in chat' in Gmail still requires picking recipients, creating a new chat room, and re-explaining context. The shared email is just a read-only preview — no replies, no actions, no document linking inside Chat. Discussions end up in Chat, originals in Gmail, docs in Drive — nothing connects.",
  },
  {
    app: "Gmail + Slack",
    color: "pink",
    icon: "💬",
    badge: "bg-pink-50 text-pink-600 border-pink-200",
    highlight: "bg-pink-50 border-pink-100",
    title: "Emails shared in Slack can't be replied to or tracked",
    desc: "Forwarding emails to Slack produces a single broken-format notification. It's disconnected from the original thread — no replies possible, and it gets buried in fast-moving channels within minutes. If your team manages 30 clients, emails scatter across dozens of channels with no way to see a single client's full thread.",
  },
  {
    app: "Front",
    color: "orange",
    icon: "📮",
    badge: "bg-orange-50 text-orange-600 border-orange-200",
    highlight: "bg-orange-50 border-orange-100",
    title: "Great shared inbox, but adding AI costs $85/user/month",
    desc: "Front's shared inbox solves email collaboration, but Starter ($25) limits you to 10 users and a single channel. In practice you need Professional ($65) + AI Copilot ($20) = $85/user/month. For 40 people, that's $40,800/year. And the AI only learns from emails — no cross-verification with Google Drive files, past reviews, or research results.",
  },
  {
    app: "HubSpot",
    color: "amber",
    icon: "🔶",
    badge: "bg-amber-50 text-amber-600 border-amber-200",
    highlight: "bg-amber-50 border-amber-100",
    title: "Tens of thousands to deploy, yet it's a sales pipeline tool",
    desc: "HubSpot Professional costs $90+/user/month, but the real cost is onboarding — data migration, customization, and training run $25,000–$50,000. Its core UX centers on sales deals and marketing funnels, which doesn't fit the client-by-client review workflows of law firms, accounting firms, and advisory firms. You end up paying for landing page builders and ad management you'll never use.",
  },
  {
    app: "Monday.com",
    color: "blue",
    icon: "📋",
    badge: "bg-blue-50 text-blue-600 border-blue-200",
    highlight: "bg-blue-50 border-blue-100",
    title: "Unstable email integration, broken document context",
    desc: "Monday.com's email integration has a fragile structure requiring exact sender/recipient/CC matches. When emails are missed or connections break, all synced emails vanish. The AI email-to-task extraction accuracy is about 80% — 1 in 5 gets misclassified. You can't view the original email thread, research docs, and review discussion in a single view.",
  },
  {
    app: "ChatGPT",
    color: "green",
    icon: "🤖",
    badge: "bg-emerald-50 text-emerald-600 border-emerald-200",
    highlight: "bg-emerald-50 border-emerald-100",
    title: "Gmail search takes 12 min, 1/3 of results are wrong",
    desc: "In testing ChatGPT's Gmail integration, a search that takes seconds in native Gmail took 12 minutes. In Deep Research mode, only 1 out of 3 emails was accurate. It can't properly read image text in PDFs or complex financial data. Most importantly, it's a separate browser tab — you can't cross-reference client emails, Drive files, and team review history in a single query.",
  },
];

function PainPointCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [animState, setAnimState] = useState<"enter" | "exit">("enter");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const INTERVAL = 4500;

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

/* ─── Mock Screenshot Components ─── */
function ScreenshotInbox() {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-rose-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative screenshot-shadow bg-white rounded-2xl border border-gray-200 overflow-hidden">
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
        <div className="relative overflow-hidden bg-gray-100">
          <img
            src="/screenshots/feature-inbox.png"
            alt="Clara AI-Powered Shared Inbox"
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

function ScreenshotChat() {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative screenshot-shadow bg-white rounded-2xl border border-gray-200 overflow-hidden">
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
        <div className="relative overflow-hidden bg-gray-100">
          <img
            src="/screenshots/hero-3pane.png"
            alt="Clara AI Workspace - KYC Analysis, Folder Context, and Linked Workflow"
            className="w-full h-auto block"
          />
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
        <p className="text-sm text-gray-500 text-center mb-6">Ask Clara (AI) anything or send a request to a colleague<br />to get work done faster.</p>
        <div className="w-full max-w-md bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 mb-6">
          <div className="text-sm text-gray-400 mb-2">How can I help? (e.g. project summary, email draft...)</div>
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
            <div className="text-xs font-semibold text-gray-800">Chat with Clara</div>
            <div className="text-[10px] text-gray-500">Summarize recent project status</div>
          </div>
          <div className="p-3 border border-gray-200 rounded-xl hover:border-violet-300 hover:bg-violet-50/50 transition">
            <div className="text-violet-500 mb-1.5">✉</div>
            <div className="text-xs font-semibold text-gray-800">Email related</div>
            <div className="text-[10px] text-gray-500">Draft replies for unread important emails</div>
          </div>
          <div className="p-3 border border-gray-200 rounded-xl hover:border-violet-300 hover:bg-violet-50/50 transition">
            <div className="text-violet-500 mb-1.5">☑</div>
            <div className="text-xs font-semibold text-gray-800">Task management</div>
            <div className="text-[10px] text-gray-500">Organize pending tasks by priority</div>
          </div>
          <div className="p-3 border border-gray-200 rounded-xl hover:border-violet-300 hover:bg-violet-50/50 transition">
            <div className="text-violet-500 mb-1.5">📊</div>
            <div className="text-xs font-semibold text-gray-800">Project analysis</div>
            <div className="text-[10px] text-gray-500">Analyze risk factors for the current fund management project</div>
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
        <span className="text-sm font-medium text-gray-600">Project Marketing</span>
        <div className="flex -space-x-1">
          <div className="w-5 h-5 rounded-full bg-amber-200 border border-white" />
          <div className="w-5 h-5 rounded-full bg-blue-200 border border-white" />
          <span className="text-[10px] text-gray-400 ml-1">+1</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {[
          { title: "Send latest company profile for IT Solutions Expo 2026 investment mentor review", deadline: "3 days left", color: "text-green-600", assignee: "bg-amber-200", desc: "Per request from Global Chamber of Commerce team lead for internal review of investment mentors at the Expo..." },
          { title: "Manage healthcare partner invitations and event logistics for IT Expo 2026", deadline: "No deadline", color: "text-gray-400", assignee: "bg-green-200", desc: "Coordinate with healthcare partners for joint attendance. Focus on microbiome, digital health sectors..." },
          { title: "Market insight data validation and investment history preparation", deadline: "No deadline", color: "text-gray-400", assignee: "bg-blue-200", desc: "Respond to market insight data verification requests with appropriate level of investment history from PR perspective..." },
          { title: "Process 2026 annual membership fee payment and documentation", deadline: "24 days overdue", color: "text-red-500", assignee: "bg-violet-200", desc: "Per association notice, process 2026 annual membership fee payment and prepare receipts and documentation for accounting..." },
          { title: "Review association 2026 annual schedule and update marketing calendar", deadline: "26 days overdue", color: "text-red-500", assignee: "bg-amber-200", desc: "Check the association website for annual schedule and reflect key events and conferences in the 2026 marketing calendar..." },
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
          <span className="text-gray-400 text-[11px]">Ask a question or start a discussion about this project...</span>
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
        <span className="text-sm font-medium text-gray-600">People · 8,867</span>
        <span className="text-xs text-gray-400">+ Add person</span>
      </div>
      <div className="flex">
        <div className="w-60 p-3 space-y-1.5 border-r border-gray-100">
          <div className="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-400 mb-2">🔍 Search people...</div>
          <div className="text-[10px] text-gray-400 font-semibold mb-1">👥 Contacts (8,867)</div>
          {[
            { name: "J. Kim", title: "CEO / PhD · Future Strategy Institute", tag: "+14", color: "bg-amber-100 text-amber-700" },
            { name: "S. Lee", title: "Team Lead - Biz Dev · Startup Support Center", tag: "", color: "bg-green-100 text-green-700" },
            { name: "J. Choi", title: "Manager - Investment Review · Innovation Asset Mgmt", tag: "+2", color: "bg-blue-100 text-blue-700" },
            { name: "S. Han", title: "CEO / Chairman · Startup Growth Foundation", tag: "+1", color: "bg-violet-100 text-violet-700" },
            { name: "J. Seo", title: "Asst. Dir - Growth Finance · Credit Division", tag: "", color: "bg-pink-100 text-pink-700" },
            { name: "D. Jung", title: "Associate - Asset Mgmt · Trust Asset Management", tag: "+2", color: "bg-red-100 text-red-700" },
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
            <div className="text-sm font-semibold text-gray-700 mb-1">Select a person</div>
            <div className="text-xs text-gray-500">Choose someone from the list to view their details</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
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
            <a href="#core-features" className="hover:text-violet-600 transition">Core Features</a>
            <a href="#features" className="hover:text-violet-600 transition">Why Clara</a>
            <a href="#use-cases" className="hover:text-violet-600 transition">Use Cases</a>
            <a href="#pricing" className="hover:text-violet-600 transition">Compare</a>
            <a href="#plans" className="hover:text-violet-600 transition">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/" className="text-xs font-medium text-gray-400 hover:text-violet-600 transition border border-gray-200 px-2.5 py-1 rounded-full">한국어</a>
            <a href="#cta" className="bg-violet-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-violet-700 transition">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="section-fade">
            <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span>✦</span> AI Colleague for Professional Teams, Clara
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Research, review, and create documents<br />
              Are you starting from <span className="gradient-text">scratch</span> every time?
            </h1>
            <div className="mb-10">
              <PainPointCarousel />
            </div>
            <div className="flex items-center justify-center gap-4 mb-16">
              <a href="#cta" className="bg-violet-600 text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-violet-700 transition flex items-center gap-2 shadow-lg shadow-violet-200">
                Start for Free <IconArrowRight />
              </a>
              <a href="#features" className="text-gray-600 px-6 py-3.5 rounded-full text-base font-medium hover:bg-gray-50 transition border border-gray-200">
                Explore Features
              </a>
            </div>
          </div>
          {/* Hero Screenshot */}
          <div className="section-fade max-w-4xl mx-auto">
            <ScreenshotChat />
          </div>
        </div>
      </section>

      {/* ─── Core Story: 3 Steps ─── */}
      <section className="py-20 px-6 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="section-fade text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Why does professional team work<br />
              start from scratch every time?
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
              When client emails, Google Drive files, AI research results, and team review discussions<br className="hidden md:block" />
              are scattered across different apps — you repeat the same work from zero on the next engagement.
            </p>
          </div>
          <div className="section-fade grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Client materials converge in one place</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Client emails, Google Drive docs, and team discussions auto-link by project. Review context that used to vanish across 6 apps is now preserved.
              </p>
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-violet-300 text-2xl">→</div>
            </div>
            {/* Step 2 */}
            <div className="relative p-6 rounded-2xl bg-white border border-violet-200 shadow-sm ring-1 ring-violet-100">
              <div className="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI research cross-verified with internal docs</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                No need to manually compare ChatGPT research with internal documents. Clara AI cross-verifies across emails, Drive, and past projects to pinpoint key findings.
              </p>
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-violet-300 text-2xl">→</div>
            </div>
            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 text-white shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="text-lg font-bold mb-2">Review processes become Playbooks</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                The entire research→review→document creation process becomes a reusable Playbook. On the next similar engagement, even new hires can instantly follow a senior's review process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Features ─── */}
      <section id="core-features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-fade text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span>✦</span> Clara Core Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From research to document creation<br />in a single app
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Email, chat, AI, projects, and contact management — all connected in one workspace.
            </p>
          </div>

          {/* Top row: Ask + Chat (main, wide) + Inbox */}
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
              <p className="text-xs text-violet-300 mb-4">Ask AI to start a conversation, invite teammates to collaborate</p>
              <p className="text-sm text-white/80 leading-relaxed mb-5">
                Ask Clara anything in natural language. AI searches across emails, Drive, and projects to find answers,
                and the moment you invite a teammate, you review together in the same chat room.
                Every conversation has built-in <strong>Folder</strong> (reference materials &amp; deliverables list) and <strong>Preview</strong> (instant file preview).
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {[
                  { skill: "Unified natural language search", desc: "Search emails, Drive, chats, calendar at once" },
                  { skill: "Research & cross-verification", desc: "External research + internal docs auto-compared" },
                  { skill: "Invite teammates → group review", desc: "Invite team members to AI chat instantly" },
                  { skill: "@mention for simultaneous requests", desc: "Assign to teammates and Clara at once" },
                  { skill: "Task & calendar execution", desc: "Create, assign, set deadlines from chat" },
                  { skill: "Review evidence auto-preserved", desc: "Decision history stays in the conversation" },
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
                  <div className="text-[10px] font-bold text-violet-300 mb-1">Built-in Folder</div>
                  <div className="text-[10px] text-white/60">Files, tasks, and emails mentioned in chat auto-collected and organized at a glance</div>
                </div>
                <div className="flex-1 p-2.5 rounded-lg bg-white/10">
                  <div className="text-[10px] font-bold text-violet-300 mb-1">Built-in Preview</div>
                  <div className="text-[10px] text-white/60">Instantly preview PDF, Docs, Sheets, Word, Excel, HWP without opening + AI query</div>
                </div>
              </div>
            </div>

            {/* Inbox */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-orange-200 hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <IconMail />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Inbox</h3>
              <p className="text-xs text-gray-400 mb-4">AI-briefed team shared inbox</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                When client emails arrive, AI summarizes the key points and auto-links related projects and internal docs.
                Start a team chat right beside the email and get next-action suggestions.
              </p>
              <ul className="space-y-2.5">
                {[
                  "OVERVIEW — Auto email summary & briefing",
                  "Linked Context — Related projects, clients, docs connected",
                  "Suggest — Reply drafts, task creation, follow-up actions",
                  "Real-time team member processing status",
                  "Start team chat right beside any email",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Middle row: Compose, Playbook */}
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
              <p className="text-xs text-gray-400 mb-4">AI-powered context-aware documents &amp; emails</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Ask Clara &ldquo;Draft a reply to this email&rdquo; or &ldquo;Create a report draft&rdquo; and it generates
                documents reflecting conversation context, internal materials, and team review feedback. Composed emails can be sent immediately.
              </p>
              <ul className="space-y-2">
                {[
                  "Email replies — Drafts reflecting past conversation context",
                  "Reports & proposals — Document generation based on internal materials",
                  "Auto-revised versions reflecting team review feedback",
                  "Send emails or save to Drive immediately after composing",
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
                <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold">Key Differentiator</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Playbook</h3>
              <p className="text-xs text-amber-200 mb-4">Work processes automatically become reusable guides</p>
              <p className="text-sm text-white/80 leading-relaxed mb-5">
                Just say &ldquo;Turn this into a Playbook&rdquo; and the entire research→review→document creation process
                is auto-organized into a step-by-step workflow. On the next similar engagement, even new hires follow a senior's process.
              </p>
              <ul className="space-y-2">
                {[
                  "Auto-extract work processes from a single conversation",
                  "Step-by-step workflow with reference material links",
                  "Entire team delivers consistent quality",
                  "Dramatically reduce new hire onboarding time",
                  "Instantly reuse and customize for similar engagements",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom row: Project, People */}
          <div className="section-fade grid md:grid-cols-2 gap-6">

            {/* Project */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-purple-200 hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <IconProject />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Project</h3>
              <p className="text-xs text-gray-400 mb-4">Email-driven project &amp; task management</p>
              <ul className="space-y-2">
                {[
                  "Tasks per project — deadlines, assignees, descriptions",
                  "Email → auto task creation",
                  "Each task auto-linked to Chat (with Folder & Preview)",
                  "Emails & docs auto-linked as context",
                  "Entire workflow accumulates as Playbooks",
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
              <p className="text-xs text-gray-400 mb-4">Smart contact management without a separate CRM</p>
              <ul className="space-y-2">
                {[
                  "Auto-extract contacts & company info from emails",
                  "Auto-managed email history per contact",
                  "Smart groups & natural language contact search",
                  "AI auto-updates titles, affiliations, relationships",
                  "See all client communications at a glance",
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

      {/* ─── Target Customer Pain Points ─── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-fade text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common problems at law, accounting,<br />advisory, and investment firms
            </h2>
            <p className="text-lg text-gray-500">These arise when small teams at 20–100 person professional firms serve multiple clients simultaneously.</p>
          </div>
          <div className="section-fade grid md:grid-cols-2 gap-6">
            {[
              { icon: "🔍", title: "Can't cross-verify AI research with internal documents", desc: "To cross-verify ChatGPT research results with client-specific Google Drive files and past emails, you have to manually compare across tabs." },
              { icon: "📧", title: "Client context is buried in email threads", desc: "Client discussions, contract terms, and review history are buried in Gmail, but you can't pull them back into projects or chats." },
              { icon: "👥", title: "Review and QA processes leave no trail", desc: "Professional deliverables must go through peer review, but review comments scatter across Slack chats, making it impossible to trace 'why we reached this conclusion'." },
              { icon: "🔄", title: "Similar engagements, yet starting from zero each time", desc: "You can't find how you handled a similar client case last time, so you repeat research, review, and document creation. Senior expertise never becomes a team asset." },
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
              Clara connects all this context ↓
            </div>
          </div>
        </div>
      </section>

      {/* ─── Integrated Value: 4 Tools in One ─── */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="section-fade text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research → cross-verification → document creation<br />
              The entire process, connected as one
            </h2>
            <p className="text-lg text-gray-500">
              Each app's AI doesn't know the other's data. Clara is a single workspace where email, internal docs, AI research, and team reviews are connected from the start.
            </p>
          </div>
          <div className="section-fade grid md:grid-cols-4 gap-6">
            {[
              { tool: "Front", icon: <IconMail />, clara: "Emails → review records", desc: "Client emails auto-link to projects and review chats. Past client history can be instantly referenced on the next engagement.", color: "bg-orange-50 text-orange-600 border-orange-200" },
              { tool: "Slack", icon: <IconChat />, clara: "Review discussions → evidence", desc: "Team review opinions don't disappear. Chats linked to emails and docs are preserved as decision-making evidence.", color: "bg-blue-50 text-blue-600 border-blue-200" },
              { tool: "ChatGPT", icon: <IconAI />, clara: "AI research → verified results", desc: "No need to re-explain context to ChatGPT. Clara AI references internal docs and emails to provide cross-verified research.", color: "bg-green-50 text-green-600 border-green-200" },
              { tool: "Monday.com", icon: <IconProject />, clara: "Tasks → reusable processes", desc: "Tasks auto-created from client emails. The entire research→review→document creation flow connects into reusable processes.", color: "bg-purple-50 text-purple-600 border-purple-200" },
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
                When a client email arrives,<br />review starts immediately
              </h2>
              <p className="text-base text-gray-500 mb-6 leading-relaxed">
                In Front ($25/mo), emails are trapped inside the inbox.
                With Clara, when client emails arrive, AI briefs the key points, auto-links relevant internal docs,
                and lets you start review discussions in team chat right away.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  { title: "AI summary & auto briefing", desc: "Analyzes email content and delivers key points and immediate action items through 'OVERVIEW'." },
                  { title: "Context-based project linking", desc: "'Linked Context' lets AI find which client, project, and tasks the email relates to." },
                  { title: "Intelligent next-step suggestions", desc: "One click on 'Suggest' to get optimal workflow recommendations from reply drafts to task creation." },
                  { title: "Team shared inbox & chat", desc: "See real-time processing status per team member and chat instantly beside any email to give instructions." }
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

      {/* ─── Email-linked Chat (vs Slack) ─── */}
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
                Team review comments<br />become decision evidence
              </h2>
              <p className="text-base text-gray-500 mb-6 leading-relaxed">
                In Slack ($12.50/mo), review discussions get buried and disappear in channels.
                In Clara, chats linked to client emails and research results are preserved as review evidence, and AI instantly references them on the next similar engagement.
              </p>
              <ul className="space-y-3">
                {[
                  "Task-linked chat — work context automatically maintained",
                  "@mention to assign teammates and AI instantly",
                  "Folder panel: context (related docs) and deliverables auto-organized",
                  "Draft and send emails directly from chat",
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

      {/* ─── Ask: AI Colleague (vs ChatGPT) ─── */}
      <section id="ai-ask" className="py-20 px-6 bg-gradient-to-b from-violet-600 to-violet-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="section-fade text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              ✦ Ask — AI Colleague
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ChatGPT doesn't know your company.<br />
              Clara AI <span className="text-violet-200">cross-verifies with your internal data.</span>
            </h2>
            <p className="text-lg text-violet-200 max-w-2xl mx-auto">
              No more manually verifying ChatGPT research results. Clara AI is an AI colleague that<br />
              cross-references emails, Google Drive, and past projects to verify research against your internal data.
            </p>
          </div>
          <div className="section-fade grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {[
                { title: "AI research + internal doc cross-verification", desc: "Ask 'Analyze this client's financial status' and AI cross-references external research with internal files from Google Drive and emails automatically." },
                { title: "Auto client email briefing", desc: "Summarizes incoming email highlights as a Brief, and auto-links related internal docs and past review history." },
                { title: "@mention for team review requests", desc: "Say '@Clara summarize risk points in this contract' in chat, and AI instantly analyzes and requests team review." },
                { title: "Draft documents after review completion", desc: "'Create a report draft reflecting review feedback'. AI generates documents incorporating team discussion and internal materials." },
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

      {/* ─── Project Management (vs Monday.com) ─── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-fade grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <IconProject /> vs Monday.com
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The entire client engagement flow<br />is recorded as a process
              </h2>
              <p className="text-base text-gray-500 mb-6 leading-relaxed">
                Creating tasks in Monday ($19/mo) still disconnects the originating client email, referenced internal docs, and team review process.
                Clara records the entire flow from email→research→review→document, instantly reusable on similar engagements.
              </p>
              <ul className="space-y-3">
                {[
                  "Task management per project — deadlines, assignees, descriptions",
                  "Auto-generated chat channel linked to each task",
                  "Emails/docs auto-linked as task context",
                  "Project-level chat for full team discussion",
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

      {/* ─── Gmail/Contact Integration ─── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="section-fade grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ScreenshotContacts />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <IconUsers /> Google Workspace Integration
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Gmail, Contacts, Calendar<br />fully integrated
              </h2>
              <p className="text-base text-gray-500 mb-6 leading-relaxed">
                Keep using your existing Gmail and Google Drive while leveraging all Clara features.
                Client contacts auto-sync, and you can see each contact's title, affiliation, and email history at a glance.
              </p>
              <ul className="space-y-3">
                {[
                  "Full Gmail integration — keep using existing emails",
                  "Google Contacts sync — 8,867 contacts auto-managed",
                  "Calendar integration — manage schedules and tasks together",
                  "Email history & company info auto-displayed per contact",
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

      {/* ─── Comparison Table ─── */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-fade text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Even paying for AI plans on 6 apps,<br />cross-verification is impossible
            </h2>
            <p className="text-lg text-gray-500">
              Even subscribing to each app's AI plan, they can't access each other's data.<br />
              In the end, cross-verifying research results with internal docs is done manually.
            </p>
          </div>
          <div className="section-fade">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-separate border-spacing-0">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left font-semibold text-gray-900 bg-white sticky left-0 z-10 border-b border-gray-200">Feature</th>
                    <th className="py-4 px-2 text-center font-semibold text-gray-400 border-b border-gray-200">Front<br /><span className="text-[10px] font-normal text-orange-500">AI Plan $25/mo</span></th>
                    <th className="py-4 px-2 text-center font-semibold text-gray-400 border-b border-gray-200">Slack<br /><span className="text-[10px] font-normal text-orange-500">AI Plan $12.50/mo</span></th>
                    <th className="py-4 px-2 text-center font-semibold text-gray-400 border-b border-gray-200">ChatGPT<br /><span className="text-[10px] font-normal text-orange-500">Team $25/mo</span></th>
                    <th className="py-4 px-2 text-center font-semibold text-gray-400 border-b border-gray-200">Monday<br /><span className="text-[10px] font-normal text-orange-500">AI Plan $19/mo</span></th>
                    <th className="py-4 px-2 text-center font-semibold text-gray-400 border-b border-gray-200">HubSpot<br /><span className="text-[10px] font-normal text-orange-500">Pro $90+/mo</span></th>
                    <th className="py-4 px-6 text-center font-bold text-violet-600 bg-violet-50 rounded-t-2xl border-x border-t border-violet-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">Clara<br /><span className="text-xs font-bold uppercase tracking-wider">All-in-One AI</span></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Shared Inbox (team email)", values: ["✅", "❌", "❌", "❌", "❌", "✅"] },
                    { feature: "Team Chat (real-time)", values: ["❌", "✅", "❌", "❌", "❌", "✅"] },
                    { feature: "Ask — AI natural language search & execution", values: ["⚠️", "⚠️", "✅", "⚠️", "⚠️", "✅"] },
                    { feature: "Project management (tasks/deadlines)", values: ["❌", "❌", "❌", "✅", "❌", "✅"] },
                    { feature: "Real-time chat beside emails", values: ["⚠️", "❌", "❌", "❌", "❌", "✅"] },
                    { feature: "AI email auto-summary/briefing", values: ["⚠️", "❌", "⚠️", "❌", "❌", "✅"] },
                    { feature: "Cross-app AI context (data linking)", values: ["❌", "❌", "❌", "❌", "❌", "✅"] },
                    { feature: "Auto contact extraction & AI analysis", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
                    { feature: "Email history per contact", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
                    { feature: "Smart contact groups & search", values: ["❌", "❌", "❌", "❌", "✅", "✅"] },
                    { feature: "Native Gmail integration", values: ["✅", "❌", "❌", "❌", "✅", "✅"] },
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
                    <td className="py-6 px-4 text-gray-900 bg-white sticky left-0 z-10">Monthly cost per user (with AI)</td>
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
                Total: $171.50+/user/month — yet cross-verification between AIs is impossible.
              </p>
              <p className="text-sm text-red-600">
                The entire process of cross-verifying research with internal docs, team review, and document creation stays disconnected.
              </p>
            </div>
            <div className="mt-4 p-5 bg-violet-50 rounded-2xl border border-violet-100 text-center">
              <p className="text-sm text-violet-700 font-medium">
                <strong>Clara learns with email, internal docs, AI research, and team reviews all connected.</strong><br />
                The entire research→cross-verification→review→document creation process accumulates as your team's reusable asset.
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
              Choose the plan that fits your team
            </h2>
            <p className="text-lg text-gray-500">
              All plans include email, chat, projects, and AI features. Choose based on team size and security requirements.
            </p>
          </div>
          <div className="section-fade grid md:grid-cols-3 gap-8">

            {/* SaaS */}
            <div className="relative p-8 rounded-2xl bg-white border-2 border-violet-200 shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-4 py-1 rounded-full">Recommended</div>
              <div className="text-sm font-semibold text-violet-600 mb-2">SaaS</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Clara Cloud</h3>
              <p className="text-sm text-gray-500 mb-6">For teams that want to start quickly</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$100</span>
                <span className="text-gray-500 text-sm"> / user / month</span>
              </div>
              <div className="text-xs text-gray-400 mb-6">+ AI credits (usage-based)</div>
              <ul className="space-y-3 mb-8">
                {[
                  "Full email, chat, project, and AI features",
                  "Complete Google Workspace integration",
                  "AI research & internal doc cross-verification",
                  "Auto Playbook generation",
                  "Clara managed server (auto-updates)",
                  "SSL encryption & SOC 2 compliance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-violet-600 text-white py-3 rounded-full font-medium hover:bg-violet-700 transition">
                Start Free Trial
              </a>
            </div>

            {/* Dedicated */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-violet-200 transition">
              <div className="text-sm font-semibold text-gray-500 mb-2">Dedicated</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Dedicated Server</h3>
              <p className="text-sm text-gray-500 mb-6">For teams where data security matters</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$2,000</span>
                <span className="text-gray-500 text-sm"> / server / month</span>
              </div>
              <div className="text-xs text-gray-400 mb-6">Up to 100 users · BYOK (Bring Your Own LLM Key)</div>
              <ul className="space-y-3 mb-8">
                {[
                  "All SaaS plan features included",
                  "Dedicated server isolation (data separation)",
                  "BYOK — use your own OpenAI/Anthropic keys",
                  "Manage & reduce LLM costs directly",
                  "Custom security policies applicable",
                  "Priority technical support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-gray-900 text-white py-3 rounded-full font-medium hover:bg-gray-800 transition">
                Request Consultation
              </a>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <div className="text-sm font-semibold text-violet-300 mb-2">Enterprise</div>
              <h3 className="text-2xl font-bold mb-1">Custom</h3>
              <p className="text-sm text-gray-400 mb-6">For organizations needing custom development</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Contact Us</span>
              </div>
              <div className="text-xs text-gray-500 mb-6">Custom pricing based on team size & requirements</div>
              <ul className="space-y-3 mb-8">
                {[
                  "All Dedicated Server plan features included",
                  "On-premise / private cloud deployment",
                  "Custom AI model training & fine-tuning",
                  "Integration development with existing internal systems",
                  "Dedicated engineer assigned",
                  "SLA & audit logs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <IconCheck /><span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-white text-gray-900 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                Request Custom Consultation
              </a>
            </div>

          </div>

          <div className="section-fade mt-12 text-center">
            <p className="text-sm text-gray-400">
              All plans include a 14-day free trial · No credit card required · Set up in 5 minutes with Google Workspace
            </p>
          </div>
        </div>
      </section>

      {/* ─── Use Cases by Industry ─── */}
      <section id="use-cases" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="section-fade text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How research, review, and documents<br />accumulate as Playbooks
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              When teams research, review, and create documents in Clara — the entire process<br className="hidden md:block" />
              auto-accumulates as Playbooks that can be instantly reused on the next similar engagement.
            </p>
          </div>

          {/* ── VC / Investment Firm Case (with screenshot) ── */}
          <div className="section-fade mb-20">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left: Screenshot */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative screenshot-shadow bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/80">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">IDV Fund Investment Suitability Analysis</span>
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-600 text-[10px]">📊</span>
                    </div>
                  </div>
                  <img
                    src="/screenshots/usecase-vc-playbook.png"
                    alt="Clara VC Follow-on Investment Playbook Creation Process"
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Right: Description */}
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  📊 Venture Capital / Investment Firms
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Portfolio company fundraising,<br />from conversation to Playbook
                </h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  For portfolio company follow-on fundraising, you need to analyze potential investors' (VC/AC) fund capacity, investment style,
                  and existing portfolio similarity to execute strategic matching.
                  When this process scatters across email, Slack, and spreadsheets,
                  you start from scratch on the next portfolio company fundraising.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex gap-3 p-3 bg-amber-50/50 rounded-xl border border-amber-100">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 text-xs font-bold">1</div>
                    <div>
                      <div className="text-xs font-bold text-gray-800">Team member asks Clara for investment analysis</div>
                      <div className="text-[11px] text-gray-500">Ask &ldquo;Analyze Permit's investment suitability&rdquo; in chat, and Clara analyzes fund status, investment history, Dry Powder and auto-links relevant emails and docs to Folder.</div>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 bg-amber-50/50 rounded-xl border border-amber-100">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 text-xs font-bold">2</div>
                    <div>
                      <div className="text-xs font-bold text-gray-800">Create and send investment proposals from analysis</div>
                      <div className="text-[11px] text-gray-500">Clara drafts investor-specific teasers, sends via email after team approval. Analysis reports and proposals are preserved as deliverables in Folder.</div>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 bg-violet-50/50 rounded-xl border border-violet-100">
                    <div className="w-7 h-7 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center shrink-0 text-xs font-bold">3</div>
                    <div>
                      <div className="text-xs font-bold text-gray-800">&ldquo;Turn this into a reusable Playbook&rdquo;</div>
                      <div className="text-[11px] text-gray-500">One fundraising process auto-organizes into a 5-step workflow (assessment→investor search→deep analysis→matching execution→post-management), instantly reusable for the next portfolio company.</div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="text-[10px] font-semibold text-violet-600 mb-1">Generated Playbook</div>
                  <div className="text-xs font-bold text-gray-800 mb-0.5">VC Follow-on Investment Support</div>
                  <div className="text-[11px] text-gray-500">Portfolio company profiling → potential investor search → Dry Powder & peer analysis → custom proposal & meeting setup → post-management & documentation</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Other 3 Industry Cards ── */}
          <div className="section-fade grid md:grid-cols-3 gap-8">

            {/* Law Firm */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-200 hover:shadow-lg transition group">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-[10px] font-semibold mb-4">
                ⚖️ Law Firms
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contract review → Legal Playbook</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                When a client requests contract review via email, attorneys discuss risk clauses in Clara chat.
                AI auto-links similar past contracts and case law to Folder and drafts the review opinion letter.
              </p>
              <div className="space-y-2 mb-5">
                {[
                  "Client email → auto contract classification & risk highlights",
                  "Clause-by-clause risk discussion in team chat → decision trail preserved",
                  "AI auto-references similar past contract review history",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-2.5 bg-blue-50/50 rounded-lg border border-blue-100">
                <div className="text-[10px] font-semibold text-blue-600 mb-0.5">Generated Playbook</div>
                <div className="text-[11px] text-gray-700 font-medium">Contract type review checklist & risk response guide</div>
              </div>
            </div>

            {/* Accounting Firm */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition group">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-[10px] font-semibold mb-4">
                📋 Accounting Firms
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Audit response → Compliance Playbook</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                When client financial statements and supporting documents arrive via email, the assigned accountant discusses review points with the team in Clara.
                AI links relevant accounting standards and past audit history, and generates audit workpaper drafts.
              </p>
              <div className="space-y-2 mb-5">
                {[
                  "Client financial data email → auto audit item classification",
                  "Issue discussion in team chat → audit judgment rationale auto-recorded",
                  "AI auto-compares prior audit records and accounting standard changes",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-2.5 bg-emerald-50/50 rounded-lg border border-emerald-100">
                <div className="text-[10px] font-semibold text-emerald-600 mb-0.5">Generated Playbook</div>
                <div className="text-[11px] text-gray-700 font-medium">Industry-specific audit checklist & issue response manual</div>
              </div>
            </div>

            {/* Consulting */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-purple-200 hover:shadow-lg transition group">
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full text-[10px] font-semibold mb-4">
                💼 Consulting
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Project proposal → Delivery Playbook</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                When a client RFP arrives via email, consultants discuss approach strategy in Clara.
                AI auto-links past similar project proposals and deliverables, and drafts the new proposal.
              </p>
              <div className="space-y-2 mb-5">
                {[
                  "Client RFP email → auto requirement analysis & task creation",
                  "Proposal strategy discussion in team chat → past similar projects auto-referenced",
                  "Post-project lessons learned auto-accumulated",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-gray-600">
                    <IconCheck /><span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-2.5 bg-purple-50/50 rounded-lg border border-purple-100">
                <div className="text-[10px] font-semibold text-purple-600 mb-0.5">Generated Playbook</div>
                <div className="text-[11px] text-gray-700 font-medium">Industry-specific project proposal template & delivery guide</div>
              </div>
            </div>

          </div>

          {/* Playbook Emphasis Banner */}
          <div className="section-fade mt-12 p-6 bg-gradient-to-r from-violet-600 to-violet-800 rounded-2xl text-white text-center">
            <h3 className="text-lg font-bold mb-2">What professional firms have in common: the review process is the knowledge</h3>
            <p className="text-sm text-violet-200 max-w-2xl mx-auto">
              At 20–100 person law, accounting, advisory, and investment firms where small teams serve multiple clients,<br />
              when the entire research→cross-verification→team review→document creation process accumulates — even new hires instantly reuse a senior's process.
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
              Research, review, and document creation —<br />stop starting from scratch every time.
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
              All you need is a Gmail account. The moment client emails, internal docs, AI research, and team reviews connect —<br />
              a senior's work process starts accumulating as the entire team's asset.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="#" className="bg-violet-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-violet-700 transition flex items-center gap-2 shadow-lg shadow-violet-200">
                Start for Free <IconArrowRight />
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">No credit card required · Google Workspace integration · Set up in 5 minutes</p>
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
              <span className="text-xs text-gray-400 ml-2">AI Colleague for Professional Teams by SprintSolo</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#core-features" className="hover:text-violet-600 transition">Core Features</a>
              <a href="#features" className="hover:text-violet-600 transition">Why Clara</a>
              <a href="#use-cases" className="hover:text-violet-600 transition">Use Cases</a>
              <a href="#pricing" className="hover:text-violet-600 transition">Compare</a>
              <a href="#plans" className="hover:text-violet-600 transition">Pricing</a>
            </div>
          </div>
          <div className="text-center text-xs text-gray-400 mt-8">
            &copy; 2026 Clara by SprintSolo, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
