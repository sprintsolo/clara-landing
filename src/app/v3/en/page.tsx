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
    title: "Find what matters fast",
    desc: "AI auto-summarizes client emails and instantly links related projects and internal docs in a shared team inbox.",
  },
  {
    icon: "✦",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
    title: "Ask AI, review with your team",
    desc: "Ask Clara and get answers cross-verified against your emails, Drive, and past projects.",
  },
  {
    icon: "✎",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
    title: "Turn ideas into polished docs",
    desc: "AI drafts email replies, reports, and proposals informed by team review context and internal resources.",
  },
  {
    icon: "📖",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Turn senior expertise into assets",
    desc: "Playbooks auto-capture review processes. When juniors leave, the knowledge stays with the firm.",
  },
];

const SAAS_PILLS = [
  { name: "Front $59", color: "bg-red-50 text-red-600" },
  { name: "Slack $15", color: "bg-red-50 text-red-600" },
  { name: "ChatGPT $25", color: "bg-red-50 text-red-600" },
  { name: "Monday $19", color: "bg-red-50 text-red-600" },
  { name: "HubSpot $90+", color: "bg-red-50 text-red-600" },
];

export default function V3EnHome() {
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
            <a href="#features" className="hover:text-zinc-900 transition">Features</a>
            <a href="#how" className="hover:text-zinc-900 transition">How It Works</a>
            <a href="#compare" className="hover:text-zinc-900 transition">Compare</a>
            <a href="#pricing" className="hover:text-zinc-900 transition">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/v3" className="text-xs font-semibold text-zinc-400 hover:text-violet-600 transition border border-zinc-200 px-3 py-1.5 rounded-full">KR</a>
            <a href="#cta" className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-zinc-800 transition">
              Get Started
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
              <span>✦</span> AI Knowledge Workspace for Professional Firms
            </div>
            <h1 className="text-[48px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-6">
              Stop paying for<br />
              Front, Slack &amp; ChatGPT<br />
              separately.
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-10 max-w-[480px]">
              Clara unifies email, team chat, AI research, and cross-verification in one workspace.
              Save $100+/person/month while building your team&apos;s knowledge assets.
            </p>
            <div className="flex items-center gap-4">
              <a href="#cta" className="bg-zinc-900 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-zinc-800 transition flex items-center gap-2">
                Start Free <ArrowRight />
              </a>
              <a href="#how" className="text-zinc-900 px-6 py-3.5 rounded-full text-base font-semibold border border-zinc-200 hover:border-zinc-400 transition">
                Watch Demo
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
              AI and productivity tools,<br />all in one place
            </h2>
            <p className="text-lg text-zinc-500">
              See how Clara helps with search, chat, document creation, and workflow continuity.
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
            <p className="text-xs font-semibold text-violet-600 tracking-[2px] uppercase mb-3">How It Works</p>
            <h2 className="text-[40px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-3">
              Not generation — context connection
            </h2>
            <p className="text-lg text-zinc-500 max-w-[700px]">
              Clara isn&apos;t just AI that writes. It cross-verifies emails, internal docs, AI research, and team reviews in one workspace.
            </p>
          </div>
          <div className="section-fade grid grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-200">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold text-lg mb-5">1</div>
              <h3 className="text-lg font-bold text-zinc-900 mb-3">Scattered context, unified by project</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Resources spread across Gmail, Drive, and Slack are auto-linked by project. No more juggling Front + Slack + ChatGPT separately.
              </p>
            </div>
            {/* Step 2 */}
            <div className="p-8 rounded-2xl bg-violet-600 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold text-lg mb-5">2</div>
              <h3 className="text-lg font-bold mb-3">AI cross-verifies with internal docs</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Not just text generation. Research results are verified against emails, Drive, and past projects — delivering hallucination-free answers.
              </p>
            </div>
            {/* Step 3 */}
            <div className="p-8 rounded-2xl bg-zinc-900 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center font-bold text-lg mb-5">3</div>
              <h3 className="text-lg font-bold mb-3">Senior processes become firm assets</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                The entire research → review → document creation process is captured as Playbooks. When juniors leave, senior review processes stay with the firm.
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
                When a client email arrives,<br />review starts immediately
              </h2>
              <p className="text-base text-zinc-500 mb-6 leading-relaxed">
                AI summarizes the key points, auto-links related internal docs, and lets the team start reviewing right from the chat.
              </p>
              <ul className="space-y-3">
                {["OVERVIEW — Auto-summarize email highlights", "Linked Context — Connect projects, clients & docs", "Suggest — Draft replies & create task suggestions", "Start team chat right next to the email"].map((t, i) => (
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
                Not just AI that writes.<br />AI that cross-verifies with your data.
              </h2>
              <p className="text-base text-zinc-500 mb-6 leading-relaxed">
                Afraid to use AI outputs as-is because of hallucinations? Clara AI cross-verifies against your emails, Drive, and past projects for trusted answers.
              </p>
              <ul className="space-y-3">
                {["AI research + internal data cross-verification", "@mention to instantly direct team members and AI", "Folder panel: auto-organized related docs & deliverables", "Draft documents after review is complete"].map((t, i) => (
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
            <p className="text-xs font-semibold text-violet-600 tracking-[2px] uppercase mb-3">Compare</p>
            <h2 className="text-[40px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-3">
              $171+/person/month in SaaS costs.<br />Consolidate with Clara.
            </h2>
            <p className="text-lg text-zinc-500 max-w-[700px] mx-auto">
              Using Front + Slack + ChatGPT + Monday + HubSpot separately? Costs pile up and nothing connects with AI.
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
                  <th className="py-4 px-4 text-left font-semibold text-zinc-900 border-b border-zinc-200">Feature</th>
                  <th className="py-4 px-3 text-center font-semibold text-zinc-400 border-b border-zinc-200">Front<br /><span className="text-[10px] font-normal text-amber-500">$59/mo</span></th>
                  <th className="py-4 px-3 text-center font-semibold text-zinc-400 border-b border-zinc-200">Slack<br /><span className="text-[10px] font-normal text-amber-500">$15/mo</span></th>
                  <th className="py-4 px-3 text-center font-semibold text-zinc-400 border-b border-zinc-200">ChatGPT<br /><span className="text-[10px] font-normal text-amber-500">$25/mo</span></th>
                  <th className="py-4 px-3 text-center font-semibold text-zinc-400 border-b border-zinc-200">Monday<br /><span className="text-[10px] font-normal text-amber-500">$19/mo</span></th>
                  <th className="py-4 px-6 text-center font-bold text-violet-600 bg-violet-50 rounded-t-2xl border-b border-violet-100">Clara<br /><span className="text-xs font-bold uppercase tracking-wider">All-in-One</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Shared Team Inbox", values: ["✅", "❌", "❌", "❌", "✅"] },
                  { feature: "Team Chat", values: ["❌", "✅", "❌", "❌", "✅"] },
                  { feature: "AI Research + Cross-verification", values: ["⚠️", "⚠️", "✅", "⚠️", "✅"] },
                  { feature: "Project & Task Management", values: ["❌", "❌", "❌", "✅", "✅"] },
                  { feature: "Email↔Chat↔AI Unified Context", values: ["❌", "❌", "❌", "❌", "✅"] },
                  { feature: "Auto-generated Playbooks", values: ["❌", "❌", "❌", "❌", "✅"] },
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
              Choose the plan that fits your team
            </h2>
            <p className="text-lg text-zinc-500">All plans include email, chat, projects, and AI features.</p>
          </div>
          <div className="section-fade grid grid-cols-3 gap-6">
            {/* SaaS */}
            <div className="relative p-8 rounded-2xl bg-white border-2 border-violet-200">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-4 py-1 rounded-full">Recommended</div>
              <div className="text-sm font-semibold text-violet-600 mb-1">SaaS</div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1">Clara Cloud</h3>
              <p className="text-sm text-zinc-500 mb-6">Base fee + pay only for AI you use</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-zinc-900">$39</span>
                <span className="text-zinc-500 text-sm"> / user / mo</span>
              </div>
              <div className="text-xs text-zinc-400 mb-6">+ AI billed by team usage (from $500/mo)</div>
              <ul className="space-y-3 mb-8">
                {["Full email, chat, and project features", "Google Workspace integration", "AI billed by usage — pay only for what your team uses", "AI research & internal cross-verification", "Auto-generated Playbooks", "SSL encryption & SOC 2 compliance"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-600"><Check />{t}</li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-violet-600 text-white py-3 rounded-full font-semibold hover:bg-violet-700 transition">Start Free Trial</a>
            </div>
            {/* Dedicated */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-200">
              <div className="text-sm font-semibold text-zinc-500 mb-1">Dedicated</div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1">Dedicated Server</h3>
              <p className="text-sm text-zinc-500 mb-6">For teams that prioritize data security</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-zinc-900">$3,500</span>
                <span className="text-zinc-500 text-sm"> / server / mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["Everything in the SaaS plan", "Dedicated server isolation (data separation)", "BYOK — Bring your own LLM keys", "Customer manages LLM costs (transparent cost structure)", "Custom security policies", "Priority technical support"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-600"><Check />{t}</li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-zinc-900 text-white py-3 rounded-full font-semibold hover:bg-zinc-800 transition">Contact Sales</a>
            </div>
            {/* Enterprise */}
            <div className="p-8 rounded-2xl bg-zinc-900 text-white">
              <div className="text-sm font-semibold text-violet-300 mb-1">Enterprise</div>
              <h3 className="text-2xl font-bold mb-1">Custom</h3>
              <p className="text-sm text-zinc-400 mb-6">For organizations needing custom development</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Contact Us</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["Everything in the Dedicated plan", "On-premises / private cloud deployment", "Custom AI model building & fine-tuning", "Integration with existing internal systems", "SLA & audit logs"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80"><Check />{t}</li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-white text-zinc-900 py-3 rounded-full font-semibold hover:bg-zinc-100 transition">Request Custom Quote</a>
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
              Cut SaaS costs.<br />Build your team&apos;s knowledge.
            </h2>
            <p className="text-base text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Set up in 5 minutes with just a Gmail account. The moment email, chat, and AI research connect,
              your senior team&apos;s review processes become reusable firm assets.
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-violet-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-violet-700 transition">
              Start Free <ArrowRight />
            </a>
            <p className="text-sm text-zinc-500 mt-5">No credit card required · Google Workspace integration · 5-minute setup</p>
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
            <a href="#features" className="hover:text-zinc-900 transition">Features</a>
            <a href="#how" className="hover:text-zinc-900 transition">How It Works</a>
            <a href="#compare" className="hover:text-zinc-900 transition">Compare</a>
            <a href="#pricing" className="hover:text-zinc-900 transition">Pricing</a>
          </div>
          <span className="text-xs text-zinc-400">© 2026 Clara by SprintSolo, Inc.</span>
        </div>
      </footer>
    </div>
  );
}
