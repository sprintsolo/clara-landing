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
    stat: "300,000",
    label: "Accountants left the profession since 2020",
    desc: "CPA graduates are down 50% from 1990. If you don't turn remaining talent's knowledge into firm assets, their expertise leaves when they do.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    stat: "40%",
    label: "of time spent on manual data entry",
    desc: "55.5% of firms cite workflow inefficiency as their top challenge. Client handovers when seniors leave take weeks to months.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    stat: "6+",
    label: "Apps with scattered engagement context",
    desc: "Karbon + Gmail + CCH + ChatGPT + Drive + Slack — plenty of tools, but nothing connects the context across client engagements.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

const LAYERS = [
  {
    num: "01",
    title: "Engagement Memory",
    subtitle: "Auto-track decisions and rationale per engagement",
    desc: "Automatically tracks and structures every email, discussion, and decision rationale across each engagement. When an IRS audit or client inquiry comes up, instantly recall 'why we made that decision back then.'",
    scenario: "\"Why did we switch Client ABC's depreciation from declining balance to straight-line last year?\" → AI instantly surfaces the buried email context",
    scenarioLabel: "Before: Rely on individual memory, or hours of manual email searching",
    bg: "bg-white",
    border: "border-violet-200",
    numColor: "text-violet-600 bg-violet-50",
  },
  {
    num: "02",
    title: "Client Intelligence",
    subtitle: "AI profiles of each client's preferences, history & patterns",
    desc: "Automatically accumulates each client's preferences, preferred report formats, recurring special requests, and contact person tendencies. When staff changes, the new person immediately knows how to work with this client.",
    scenario: "\"Client XYZ's CFO always wants industry benchmark comparisons in quarterly reports\" → What was never documented anywhere is now auto-captured in the profile",
    scenarioLabel: "Before: CRM manages contacts and billing, but not 'how to work with this client'",
    bg: "bg-violet-600",
    border: "border-violet-600",
    numColor: "text-white bg-white/20",
  },
  {
    num: "03",
    title: "Practice Playbook",
    subtitle: "Auto-extract and reuse proven engagement approaches",
    desc: "Extracts verified approaches from multiple engagements and refines them into reusable templates. When juniors leave, senior review processes stay with the firm.",
    scenario: "\"We handle 1031 Exchanges for real estate clients similarly every time, but re-research from scratch for each new client\" → Proven approaches auto-captured as Playbooks",
    scenarioLabel: "Before: Dependent on individual memory, completely lost when staff leaves",
    bg: "bg-zinc-900",
    border: "border-zinc-900",
    numColor: "text-white bg-white/15",
  },
];

const COMPETITORS = [
  { name: "Karbon", role: "Practice Management", relation: "Use alongside Clara", icon: "⚙️" },
  { name: "Basis", role: "Tax Automation", relation: "Tasks + Context = Synergy", icon: "📊" },
  { name: "FieldGuide", role: "Audit Automation", relation: "Audit + Knowledge = Synergy", icon: "🔍" },
  { name: "CCH / Thomson", role: "Tax & Audit Data", relation: "Data + Intelligence = Synergy", icon: "📚" },
];

export default function V4EnHome() {
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
            <a href="#problem" className="hover:text-zinc-900 transition">Why Clara</a>
            <a href="#layers" className="hover:text-zinc-900 transition">Core Layers</a>
            <a href="#positioning" className="hover:text-zinc-900 transition">Positioning</a>
            <a href="#pricing" className="hover:text-zinc-900 transition">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/v4" className="text-xs font-semibold text-zinc-400 hover:text-violet-600 transition border border-zinc-200 px-3 py-1.5 rounded-full">KR</a>
            <a href="#cta" className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-zinc-800 transition">
              Request Demo
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
              When seniors leave,<br />
              client knowledge<br />
              stays.
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-10 max-w-[500px]">
              Clara auto-captures, classifies, and turns every client engagement&apos;s communications, decisions, and processes into reusable firm intelligence.
              <span className="block mt-3 text-zinc-400 text-base">Use alongside Karbon, CCH, and Basis — not a replacement, but the Intelligence layer on top.</span>
            </p>
            <div className="flex items-center gap-4">
              <a href="#cta" className="bg-zinc-900 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-zinc-800 transition flex items-center gap-2">
                Start 14-Day Free Trial <ArrowRight />
              </a>
              <a href="#layers" className="text-zinc-900 px-6 py-3.5 rounded-full text-base font-semibold border border-zinc-200 hover:border-zinc-400 transition">
                See How It Works
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
          <span>Built for 100+ person CPA firms</span>
          <span className="w-1 h-1 bg-zinc-300 rounded-full" />
          <span>SOC 2 Compliant</span>
          <span className="w-1 h-1 bg-zinc-300 rounded-full" />
          <span>Full Google Workspace Integration</span>
          <span className="w-1 h-1 bg-zinc-300 rounded-full" />
          <span>BYOK (Bring Your Own LLM Key)</span>
        </div>
      </section>

      {/* ─── Problem ─── */}
      <section id="problem" className="py-20 px-10 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="section-fade mb-14">
            <p className="text-xs font-semibold text-red-500 tracking-[2px] uppercase mb-3">Structural Crisis in Accounting</p>
            <h2 className="text-[40px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-3">
              It&apos;s not a tool shortage.<br />It&apos;s engagement knowledge loss.
            </h2>
            <p className="text-lg text-zinc-500 max-w-[700px]">
              When a senior manager retires, decades of client context disappear with them. Practice management can&apos;t fix this. Tax automation AI can&apos;t fix this.
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

      {/* ─── 3 Layers ─── */}
      <section id="layers" className="py-20 px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="section-fade mb-14">
            <p className="text-xs font-semibold text-violet-600 tracking-[2px] uppercase mb-3">Engagement Intelligence</p>
            <h2 className="text-[40px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-3">
              Turn every engagement into<br />reusable firm intelligence
            </h2>
            <p className="text-lg text-zinc-500 max-w-[700px]">
              Clara&apos;s Engagement Intelligence is built on three layers. As each layer accumulates, your firm gets smarter.
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

      {/* ─── Positioning ─── */}
      <section id="positioning" className="py-20 px-10 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="section-fade mb-14">
            <p className="text-xs font-semibold text-violet-600 tracking-[2px] uppercase mb-3">Positioning</p>
            <h2 className="text-[40px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-3">
              We don&apos;t replace your tools.<br />We&apos;re the Intelligence layer on top.
            </h2>
            <p className="text-lg text-zinc-500 max-w-[700px]">
              Keep using Karbon. Keep using Basis. Clara is the Engagement Intelligence layer that works on top of the tools you already have.
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
            <p className="text-xl font-bold mb-2">Basis automates tax &quot;tasks.&quot;</p>
            <p className="text-xl font-bold mb-4">Clara turns the &quot;context and knowledge&quot; around those tasks into firm assets.</p>
            <p className="text-base text-white/70">Together, they&apos;re more powerful. Not Replace — Complement.</p>
          </div>
        </div>
      </section>

      {/* ─── Quote ─── */}
      <section className="py-16 px-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-fade">
            <IconQuote />
            <blockquote className="text-2xl font-bold text-zinc-900 leading-snug mt-6 mb-6">
              &ldquo;ChatGPT gives answers, but it doesn&apos;t know our firm&apos;s past engagement context.<br />
              In 6 months, Clara becomes our own Engagement Intelligence.&rdquo;
            </blockquote>
            <p className="text-sm text-zinc-400">— 100-person Regional CPA Firm scenario</p>
          </div>
        </div>
      </section>

      {/* ─── Use Cases ─── */}
      <section className="py-20 px-10 bg-zinc-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="section-fade mb-14">
            <p className="text-xs font-semibold text-violet-600 tracking-[2px] uppercase mb-3">Use Cases</p>
            <h2 className="text-[40px] font-bold text-zinc-900 leading-[1.12] tracking-tight mb-3">
              Built for real CPA firm workflows
            </h2>
          </div>
          <div className="section-fade space-y-20">
            {/* Scenario 1 */}
            <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-semibold text-amber-600 tracking-[2px] uppercase mb-3">Staff Turnover Response</p>
                <h3 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight">
                  Senior manager leaves?<br />Client handover done in 2 weeks.
                </h3>
                <p className="text-base text-zinc-500 mb-6 leading-relaxed">
                  What used to take weeks to months now completes in under 2 weeks with Engagement Memory and Client Intelligence.
                </p>
                <ul className="space-y-3">
                  {["Client Intelligence auto-provides client preferences & special requirements", "Engagement Memory instantly restores past decision rationale", "Practice Playbook delivers proven approaches as ready templates"].map((t, i) => (
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
                <p className="text-xs font-semibold text-violet-600 tracking-[2px] uppercase mb-3">AI Cross-Verification</p>
                <h3 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight">
                  Not just AI that writes.<br />AI that cross-verifies with your data.
                </h3>
                <p className="text-base text-zinc-500 mb-6 leading-relaxed">
                  Afraid to use AI outputs as-is due to hallucinations? Clara cross-verifies against your emails, Drive, and past engagements for trusted answers.
                </p>
                <ul className="space-y-3">
                  {["Cross-check AI research against emails, Drive & past projects", "@mention team members and AI for instant review", "Draft documents after verification → email replies ready"].map((t, i) => (
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
              Choose the plan that fits your firm
            </h2>
            <p className="text-lg text-zinc-500">All plans include email, chat, projects, and Engagement Intelligence features.</p>
          </div>
          <div className="section-fade grid grid-cols-3 gap-6">
            {/* Cloud */}
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
                {["All 3 Engagement Intelligence layers", "Full email, chat & project features", "Google Workspace integration", "AI billed by usage — pay only for what your team uses", "SSL encryption & SOC 2 compliance"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-600"><Check />{t}</li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-violet-600 text-white py-3 rounded-full font-semibold hover:bg-violet-700 transition">Start Free Trial</a>
            </div>
            {/* Dedicated */}
            <div className="p-8 rounded-2xl bg-white border border-zinc-200">
              <div className="text-sm font-semibold text-zinc-500 mb-1">Dedicated</div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1">Dedicated Server</h3>
              <p className="text-sm text-zinc-500 mb-6">For firms that prioritize data security</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-zinc-900">$3,500</span>
                <span className="text-zinc-500 text-sm"> / server / mo</span>
              </div>
              <div className="text-xs text-zinc-400 mb-6">Up to 100 users · BYOK — Firm manages LLM costs</div>
              <ul className="space-y-3 mb-8">
                {["Everything in the Cloud plan", "Dedicated server isolation (client data separation)", "BYOK — Use your own OpenAI/Anthropic keys", "Firm manages LLM costs (transparent cost structure)", "Custom security policies", "Priority technical support"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-600"><Check />{t}</li>
                ))}
              </ul>
              <a href="#cta" className="block w-full text-center bg-zinc-900 text-white py-3 rounded-full font-semibold hover:bg-zinc-800 transition">Contact Sales</a>
            </div>
            {/* Enterprise */}
            <div className="p-8 rounded-2xl bg-zinc-900 text-white">
              <div className="text-sm font-semibold text-violet-300 mb-1">Enterprise</div>
              <h3 className="text-2xl font-bold mb-1">Custom</h3>
              <p className="text-sm text-zinc-400 mb-6">For large firms needing custom development</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Contact Us</span>
              </div>
              <div className="text-xs text-zinc-500 mb-6">Custom pricing based on firm size & security requirements</div>
              <ul className="space-y-3 mb-8">
                {["Everything in the Dedicated plan", "On-premises / private cloud deployment", "Custom AI model building & fine-tuning", "Integration with existing Practice Management systems", "SLA & audit logs"].map((t, i) => (
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
              Every engagement makes<br />your firm smarter.
            </h2>
            <p className="text-base text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
              When seniors leave, client knowledge stays. When new staff joins, they deliver results immediately.
              Set up in 5 minutes with just a Gmail account.
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-violet-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-violet-700 transition">
              Start 14-Day Free Trial <ArrowRight />
            </a>
            <p className="text-sm text-zinc-500 mt-5">No credit card required · Google Workspace integration · Works with Karbon/CCH</p>
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
            <a href="#problem" className="hover:text-zinc-900 transition">Why Clara</a>
            <a href="#layers" className="hover:text-zinc-900 transition">Core Layers</a>
            <a href="#positioning" className="hover:text-zinc-900 transition">Positioning</a>
            <a href="#pricing" className="hover:text-zinc-900 transition">Pricing</a>
          </div>
          <span className="text-xs text-zinc-400">© 2026 Clara by SprintSolo, Inc.</span>
        </div>
      </footer>
    </div>
  );
}
