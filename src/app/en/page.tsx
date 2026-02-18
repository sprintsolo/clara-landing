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

/* ─── Mock Screenshot Components (Recreating real app UI) ─── */
function ScreenshotInbox() {
    return (
        <div className="relative group">
            {/* Decorative Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-rose-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative screenshot-shadow bg-white rounded-2xl border border-gray-200 overflow-hidden">
                {/* Top Window Toolbar Style */}
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

                {/* Real Image Placement */}
                <div className="relative overflow-hidden bg-gray-100">
                    <img
                        src="/screenshots/feature-inbox.png"
                        alt="Clara AI-Powered Shared Inbox"
                        className="w-full h-auto block"
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
}

function ScreenshotChat() {
    return (
        <div className="relative group">
            {/* Decorative Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative screenshot-shadow bg-white rounded-2xl border border-gray-200 overflow-hidden">
                {/* Top Window Toolbar Style */}
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

                {/* Real Image Placement */}
                <div className="relative overflow-hidden bg-gray-100">
                    <img
                        src="/screenshots/hero-3pane.png"
                        alt="Clara AI Workspace - KYC Analysis, Folder Context, and Linked Workflow"
                        className="w-full h-auto block"
                    />
                    {/* Image Overlay */}
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
                <p className="text-sm text-gray-500 text-center mb-6">Ask Clara (AI) or request tasks from colleagues<br />to get work done faster.</p>
                <div className="w-full max-w-md bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 mb-6">
                    <div className="text-sm text-gray-400 mb-2">How can I help? (e.g. Project summary, Email draft...)</div>
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
                        <div className="text-xs font-semibold text-gray-800">Email Related</div>
                        <div className="text-[10px] text-gray-500">Draft reply for important unread emails</div>
                    </div>
                    <div className="p-3 border border-gray-200 rounded-xl hover:border-violet-300 hover:bg-violet-50/50 transition">
                        <div className="text-violet-500 mb-1.5">☑</div>
                        <div className="text-xs font-semibold text-gray-800">Task Management</div>
                        <div className="text-[10px] text-gray-500">Organize pending tasks by priority</div>
                    </div>
                    <div className="p-3 border border-gray-200 rounded-xl hover:border-violet-300 hover:bg-violet-50/50 transition">
                        <div className="text-violet-500 mb-1.5">📊</div>
                        <div className="text-xs font-semibold text-gray-800">Project Analysis</div>
                        <div className="text-[10px] text-gray-500">Analyze risk factors for current fund management project</div>
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
                    { title: "Send latest company intro for IT Solution Expo 2026 investment mentor review", deadline: "3 days left", color: "text-green-600", assignee: "bg-amber-200", desc: "As requested by Team Leader Yujin Choi of Global Chamber of Commerce..." },
                    { title: "Manage IT Solution Expo 2026 healthcare company accompaniment and event invitations", deadline: "No deadline", color: "text-gray-400", assignee: "bg-green-200", desc: "Please take care of accompaniment with partners among healthcare companies..." },
                    { title: "Supplement market insight data and provide investment history", deadline: "No deadline", color: "text-gray-400", assignee: "bg-blue-200", desc: "In response to data verification request for market insights..." },
                    { title: "Payment of 2026 Future Technology Association membership fee and proof processing", deadline: "24 days overdue", color: "text-red-500", assignee: "bg-violet-200", desc: "Pay 2026 membership fee according to association notice..." },
                    { title: "Check association 2026 annual schedule and reflect on marketing calendar", deadline: "26 days overdue", color: "text-red-500", assignee: "bg-amber-200", desc: "Check annual schedule on association website notice..." },
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
                    <span className="text-gray-400 text-[11px]">Ask questions or start a discussion about this project...</span>
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
                <span className="text-xs text-gray-400">+ Add Person</span>
            </div>
            <div className="flex">
                <div className="w-60 p-3 space-y-1.5 border-r border-gray-100">
                    <div className="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-400 mb-2">🔍 Search people...</div>
                    <div className="text-[10px] text-gray-400 font-semibold mb-1">👥 Contacts (8,867)</div>
                    {[
                        { name: "Jihoon Kim", title: "CEO / Ph.D in Engineering · Future Strategy Lab", tag: "+14", color: "bg-amber-100 text-amber-700" },
                        { name: "Sungmin Lee", title: "Team Lead - Business Dev · Startup Support Center", tag: "", color: "bg-green-100 text-green-700" },
                        { name: "Junhyuk Choi", title: "Manager - Investment Review / Innovation Asset Mgmt", tag: "+2", color: "bg-blue-100 text-blue-700" },
                        { name: "Sangwoo Han", title: "Representative / Chairman · Startup Growth Foundation", tag: "+1", color: "bg-violet-100 text-violet-700" },
                        { name: "Jihye Seo", title: "Deputy GM - Growth Finance / Credit Business", tag: "", color: "bg-pink-100 text-pink-700" },
                        { name: "Daun Jung", title: "Associate - Asset Mgmt Team · Trust Asset Mgmt", tag: "+2", color: "bg-red-100 text-red-700" },
                    ].map((p, i) => (
                        <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <div className={`w-6 h-6 rounded-full ${p.color} text-[9px] flex items-center justify-center font-bold shrink-0`}>{p.name.slice(0, 1)}</div>
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
                        <div className="text-xs text-gray-500">Select a person from the list to view details</div>
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
                        <a href="#features" className="hover:text-violet-600 transition">Features</a>
                        <a href="#ai-agent" className="hover:text-violet-600 transition">AI Agent</a>
                        <a href="#use-cases" className="hover:text-violet-600 transition">Use Cases</a>
                        <a href="#pricing" className="hover:text-violet-600 transition">Compare</a>
                    </nav>
                    <a href="#cta" className="bg-violet-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-violet-700 transition">
                        Get Started
                    </a>
                </div>
            </header>

            {/* ─── Hero ─── */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="section-fade">
                        <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                            <span>✦</span> AI-Powered Work Collaboration Platform
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Your AI Project Manager,<br />
                            <span className="gradient-text">Clara</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-4 leading-relaxed">
                            From analyzing attachments to exchanging feedback,<br className="hidden md:block" />
                            collaborate right beside your emails.<br className="hidden md:block" />
                            AI organizes projects and builds your company's knowledge assets.
                        </p>
                        <p className="text-base text-gray-400 max-w-xl mx-auto mb-10">
                            Integrate Front + Slack + ChatGPT + Monday.com into one.<br />
                            AI-based WorkOS for Professional Firms.
                        </p>
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

            {/* ─── Core Story: Project Management → AI Learning ─── */}
            <section className="py-20 px-6 bg-gradient-to-b from-violet-50/50 to-white">
                <div className="max-w-5xl mx-auto">
                    <div className="section-fade text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Smart collaboration with Clara<br />
                            to focus on your core work
                        </h2>
                        <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Leave the tedious organization to Clara and focus on important decisions.<br className="hidden md:block" />
                            It becomes the strongest assistant connecting scattered contexts for team growth.
                        </p>
                    </div>
                    <div className="section-fade grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="relative p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center font-bold mb-4">1</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Start from the familiar Inbox</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Organize important requests from emails into projects and tasks, and carefully track schedules so you don't miss anything.
                            </p>
                            <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-violet-300 text-2xl">→</div>
                        </div>
                        {/* Step 2 */}
                        <div className="relative p-6 rounded-2xl bg-white border border-violet-200 shadow-sm ring-1 ring-violet-100">
                            <div className="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center font-bold mb-4">2</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Smart communication connecting context</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                From drafting replies to understanding past history, it acts as your reliable supporter in every communication process.
                            </p>
                            <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-violet-300 text-2xl">→</div>
                        </div>
                        {/* Step 3 */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 text-white shadow-lg">
                            <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold mb-4">3</div>
                            <h3 className="text-lg font-bold mb-2">Build a knowledge guide for the team</h3>
                            <p className="text-sm text-white/80 leading-relaxed">
                                Systematically assetize your team's valuable experience and know-how to create a knowledge base where anyone can find answers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Target Customer Pain Point ─── */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="section-fade text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Do you have these concerns?</h2>
                    </div>
                    <div className="section-fade grid md:grid-cols-2 gap-6">
                        {[
                            { icon: "😰", title: "Small team, handling many clients", desc: "Need to clearly classify and process tens or hundreds of client emails without omission with limited staff." },
                            { icon: "📈", title: "Sustainable Team Asset Management", desc: "Accumulate client relationships and work know-how, which relied on individual personnel, as official team assets to build a foundation for growth." },
                            { icon: "📧", title: "Information Scattered in Emails", desc: "Wasting energy understanding context because important decisions, contract terms, and client requests are fragmented in emails." },
                            { icon: "🔧", title: "Fragmented Work Tools", desc: "Designed for professionals who want to reduce context switching costs consumed by moving between multiple tools." },
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
                            Clara solves all of this ↓
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Integrated Value: 4 tools in one ─── */}
            <section id="features" className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="section-fade text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Instead of navigating complex tools,<br />
                            workflow completed with just Clara
                        </h2>
                        <p className="text-lg text-gray-500">
                            Email, chat, AI, and project management connected naturally in one place without needing separate tools.
                        </p>
                    </div>
                    <div className="section-fade grid md:grid-cols-4 gap-6">
                        {[
                            { tool: "Front", icon: <IconMail />, clara: "AI Project Inbox", desc: "Shows priority projects and tasks first from overflowing emails and helps smart classification.", color: "bg-orange-50 text-orange-600 border-orange-200" },
                            { tool: "Slack", icon: <IconChat />, clara: "Email Sharing Chat", desc: "Communicate instantly with teammates while sharing context right next to the email, without forwarding or copying content.", color: "bg-blue-50 text-blue-600 border-blue-200" },
                            { tool: "ChatGPT", icon: <IconAI />, clara: "Real-time Work Context Search", desc: "Perfectly understands and responds to our team's unique email history and work context via natural language search, which general AI cannot access.", color: "bg-green-50 text-green-600 border-green-200" },
                            { tool: "Monday.com", icon: <IconProject />, clara: "Conversational Project Manager", desc: "Instead of manual data entry, ask AI naturally like talking to a teammate. Clara executes the entire project management process.", color: "bg-purple-50 text-purple-600 border-purple-200" },
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
                                Front for Project Management
                            </h2>
                            <p className="text-base text-gray-500 mb-6 leading-relaxed">
                                Front is a heavy shared inbox for customer support. Clara goes a step further,<br />
                                an intelligent assistant where AI directly reads business context within emails
                                and instantly connects them to actionable project tasks.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    { title: "AI Summary & Automated Briefing", desc: "Analyzes email body to brief key contents and immediate action items via 'OVERVIEW'." },
                                    { title: "Context-based Project Connection", desc: "AI finds which client or project task is related to the email through 'Linked Context'." },
                                    { title: "Intelligent Next Step Suggestions", desc: "Receive optimal workflow suggestions from drafting replies to creating tasks with a single 'Suggest' button." },
                                    { title: "Team Integrated Shared Inbox & Chat", desc: "Check team members' work status in real-time and chat/instruct immediately next to the email." }
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

            {/* ─── Email Sharing Chat (vs Slack) ─── */}
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
                                Share emails and<br />chat instantly
                            </h2>
                            <p className="text-base text-gray-500 mb-6 leading-relaxed">
                                Share received emails directly in the chat room, and team members and AI draft replies together.
                                No need to copy-paste email links like in Slack.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Chat connected to Task - Work context automatically maintained",
                                    "Instantly instruct team members and AI via @mention",
                                    "Folder Panel: Auto-organize context (documents) and deliverables",
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

            {/* ─── AI Active Agent (vs ChatGPT) - Most Important ─── */}
            <section id="ai-agent" className="py-20 px-6 bg-gradient-to-b from-violet-600 to-violet-800 text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="section-fade text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                            ✦ Core Feature
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            ChatGPT doesn't know the context.<br />
                            Clara's AI <span className="text-violet-200">understands your company.</span>
                        </h2>
                        <p className="text-lg text-violet-200 max-w-2xl mx-auto">
                            AI participates in every email, every conversation, every project.<br />
                            A true AI employee that learns how your company works.
                        </p>
                    </div>
                    <div className="section-fade grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            {[
                                { title: "Email Auto-Summary & Suggestion", desc: "Summarizes key points of received emails into a Brief and suggests next actions with Suggest. Automatically displays connected companies/projects." },
                                { title: "Instant Instruction via @Mention", desc: "Say '@Clarence set Due Date' in chat, and AI instantly sets the deadline for the task assignee." },
                                { title: "Project Status Analysis", desc: "Ask 'Analyze risk factors for the ongoing fund management project'. AI grasps the full context and provides analysis." },
                                { title: "Email Reply Drafting", desc: "'Draft a reply for unread important emails'. AI understands previous conversation history and writes appropriate replies." },
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
                                Project management<br />starting from email
                            </h2>
                            <p className="text-base text-gray-500 mb-6 leading-relaxed">
                                Create projects and tasks directly from received emails.
                                Assignee allocation, deadline setting, and team chat are connected to a single task.
                                No separate project management tool is needed.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Task management per project - Deadline, Assignee, Description",
                                    "Auto-create connected chat channel for each task",
                                    "Auto-link email/documents as task context",
                                    "Full discussion possible via project-level chat",
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
                                Gmail·Contacts·Calendar<br />Full Integration
                            </h2>
                            <p className="text-base text-gray-500 mb-6 leading-relaxed">
                                Use all of Clara's features while keeping your existing Gmail.
                                8,867 contacts are automatically synced, and you can see job titles, affiliations, and email history for each contact at a glance.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Full Gmail Integration - Use existing email as is",
                                    "Google Contacts Sync - Automatically manage 8,867 contacts",
                                    "Calendar Integration - Manage schedule and tasks together",
                                    "Auto-display email history & company info per contact",
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

            {/* ─── Cost Comparison Table ─── */}
            <section id="pricing" className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="section-fade text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Will you use 4 different tools?
                        </h2>
                        <p className="text-lg text-gray-500">
                            Reduce both cost and management burden.
                        </p>
                    </div>
                    <div className="section-fade">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-4 px-4 text-left font-semibold text-gray-900">Feature</th>
                                        <th className="py-4 px-4 text-center font-semibold text-gray-400">Front<br /><span className="text-xs font-normal">$19/mo~</span></th>
                                        <th className="py-4 px-4 text-center font-semibold text-gray-400">Slack<br /><span className="text-xs font-normal">$8.75/mo~</span></th>
                                        <th className="py-4 px-4 text-center font-semibold text-gray-400">ChatGPT<br /><span className="text-xs font-normal">$20/mo~</span></th>
                                        <th className="py-4 px-4 text-center font-semibold text-gray-400">Monday<br /><span className="text-xs font-normal">$9/mo~</span></th>
                                        <th className="py-4 px-4 text-center font-bold text-violet-600 bg-violet-50 rounded-t-xl">Clara<br /><span className="text-xs font-normal">All-in-One</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { feature: "Shared Inbox", values: ["✅", "❌", "❌", "❌", "✅"] },
                                        { feature: "Team Chat", values: ["❌", "✅", "❌", "❌", "✅"] },
                                        { feature: "AI Agent", values: ["❌", "❌", "✅", "❌", "✅"] },
                                        { feature: "Project Management", values: ["❌", "❌", "❌", "✅", "✅"] },
                                        { feature: "Email Sharing Chat", values: ["⚠️", "❌", "❌", "❌", "✅"] },
                                        { feature: "Email Auto-Summary", values: ["❌", "❌", "⚠️", "❌", "✅"] },
                                        { feature: "Work Context AI", values: ["❌", "❌", "❌", "❌", "✅"] },
                                        { feature: "Contact CRM", values: ["❌", "❌", "❌", "❌", "✅"] },
                                        { feature: "Gmail Native Integration", values: ["✅", "❌", "❌", "❌", "✅"] },
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
                                        <td className="py-4 px-4 text-gray-900">Monthly Cost (per user)</td>
                                        <td className="py-4 px-4 text-center text-gray-500">$19</td>
                                        <td className="py-4 px-4 text-center text-gray-500">$8.75</td>
                                        <td className="py-4 px-4 text-center text-gray-500">$20</td>
                                        <td className="py-4 px-4 text-center text-gray-500">$9</td>
                                        <td className="py-4 px-4 text-center text-violet-600 bg-violet-50 rounded-b-xl text-lg">Integrated</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 text-gray-400 text-xs" colSpan={5}>Sum: $56.75+/month per user</td>
                                        <td className="py-2 px-4 text-center text-violet-600 bg-violet-50 text-xs font-bold">SAVINGS</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Use Cases ─── */}
            <section id="use-cases" className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="section-fade text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Already in use in real work
                        </h2>
                        <p className="text-lg text-gray-500">
                            Venture capitals, startups, and professional service firms are using Clara.
                        </p>
                    </div>
                    <div className="section-fade grid md:grid-cols-2 gap-6">
                        {[
                            { project: "Innovation Growth Research Project Completion & Final Evaluation", type: "Gov Project", desc: "Collaboratively manage complex government project deadlines like audit report expense settlement and patent submission with team and AI.", tasks: 2, members: 3 },
                            { project: "Marketing", type: "Marketing", desc: "Systematically track marketing tasks such as IT Solution Expo 2026 investment mentor review, healthcare company invitations, and market insight data supplementation.", tasks: 5, members: 3 },
                            { project: "K-Startup Global Expansion Acceleration", type: "Program Mgmt", desc: "Manage the entire program participation process including selection result check, MOU signing, document supplementation, and proposal discussion.", tasks: 4, members: 1 },
                            { project: "Internal Work Software Guide", type: "Internal Ops", desc: "Write and manage internal work tool guides such as smart work integration guide and reply address settings together with the team.", tasks: 2, members: 3 },
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-violet-200 hover:shadow-md transition">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs bg-violet-100 text-violet-700 px-2.5 py-0.5 rounded-full font-medium">{item.type}</span>
                                    <span className="text-xs text-gray-400">Tasks {item.tasks} · Members {item.members}</span>
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
                            Ready to add an AI employee<br />to your email?
                        </h2>
                        <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
                            Start now. You just need a Gmail account.<br />
                            Your company's knowledge assets start accumulating.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a href="#" className="bg-violet-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-violet-700 transition flex items-center gap-2 shadow-lg shadow-violet-200">
                                Start for Free <IconArrowRight />
                            </a>
                        </div>
                        <p className="text-sm text-gray-400 mt-4">Start without credit card · Google Workspace Integration · Setup in 5 mins</p>
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
                            <span className="text-xs text-gray-400 ml-2">AI-Powered Email Collaboration WorkOS by SprintSolo</span>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <a href="#features" className="hover:text-violet-600 transition">Features</a>
                            <a href="#ai-agent" className="hover:text-violet-600 transition">AI Agent</a>
                            <a href="#use-cases" className="hover:text-violet-600 transition">Use Cases</a>
                            <a href="#pricing" className="hover:text-violet-600 transition">Compare</a>
                        </div>
                    </div>
                    <div className="text-center text-xs text-gray-400 mt-8">
                        © 2026 Clara by SprintSolo, Inc. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
