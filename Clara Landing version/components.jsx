/* global React */
const { useState, useEffect, useRef } = React;

/* ======================================================
   Clara — Editorial Landing
   ====================================================== */

/* ---------- Pain app carousel ---------- */
const PAIN_POINTS = [
  {
    app: "Gmail + Google Chat",
    folio: "CASE I",
    title: "이메일 원문과 팀 대화가 항상 서로 다른 앱에 있습니다.",
    desc: "고객 메일은 Gmail에, 팀원과의 논의는 Chat에, 참고 문서는 Drive에 흩어져 있습니다. 이메일에 담긴 노하우를 팀과 함께 다루려면 매번 세 개의 창을 오가야 하고, 대화가 끝나면 어디에도 남지 않습니다.",
  },
  {
    app: "Gmail + Slack",
    folio: "CASE II",
    title: "Slack에 옮긴 이메일은 몇 시간 만에 묻혀 사라집니다.",
    desc: "이메일 스크린샷을 Slack에 붙여 팀원과 논의해도, 빠르게 흘러가는 채널에 몇 분 만에 묻힙니다. 수십 개 고객사의 검토 대화가 수십 개 채널에 흩어져 검색도 재사용도 불가능합니다.",
  },
  {
    app: "Front · Missive",
    folio: "CASE III",
    title: "공유 인박스는 있지만, AI와 팀원이 함께 대화하진 않습니다.",
    desc: "이메일을 함께 볼 수는 있지만, AI Copilot은 혼자 답하고 팀원은 별도로 코멘트를 답니다. 둘의 대화가 합쳐지지 않으며, 좋았던 대화를 재사용 가능한 Playbook으로 저장할 수단도 없습니다.",
  },
  {
    app: "HubSpot · Salesforce",
    folio: "CASE IV",
    title: "기능은 많지만 이메일에 쌓인 노하우는 쌓이지 않습니다.",
    desc: "CRM·마케팅·서비스까지 수백 개 기능과 $25,000~$50,000 도입 비용. 그러나 담당자가 고객을 어떻게 대응했는지 — 검토 기준, 협상 패턴, 반복 프로세스 — 는 기록되지 않아 다음 담당자에게 전달될 수 없습니다.",
  },
  {
    app: "Notion AI · Glean",
    folio: "CASE V",
    title: "지식은 검색되지만, 이메일 업무는 진행되지 않습니다.",
    desc: "저장된 문서는 찾아줍니다. 그러나 실제 업무는 이메일에서 일어나며 — 들어오는 메일에 어떻게 답할지, 팀과 어떻게 의논할지, 그 대화를 어떻게 플레이북으로 남길지는 해결되지 않습니다.",
  },
  {
    app: "ChatGPT",
    folio: "CASE VI",
    title: "AI와 혼자 나눈 대화는 동료에게 전달되지 않습니다.",
    desc: "담당자가 AI와 주고받은 수십 번의 질의응답이 브라우저 탭에서 사라집니다. 팀원도 못 보고, 재사용도 못 하고, 다음 사람은 같은 질문을 처음부터 다시 합니다. 조직의 지식은 어디에도 축적되지 않습니다.",
  },
];

function PainCarousel() {
  const [idx, setIdx] = useState(0);
  const item = PAIN_POINTS[idx];
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => setIdx((idx + 1) % PAIN_POINTS.length), 8000);
    return () => clearTimeout(timerRef.current);
  }, [idx]);

  return (
    <div className="pc">
      <div className="pc-head">
        <div className="pc-tabs">
          {PAIN_POINTS.map((p, i) => (
            <button key={i} className={`pc-tab ${i === idx ? "active" : ""}`} onClick={() => setIdx(i)}>
              {p.app}
            </button>
          ))}
        </div>
        <span className="mono" style={{ fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.08em" }}>
          {String(idx + 1).padStart(2, "0")} / {String(PAIN_POINTS.length).padStart(2, "0")}
        </span>
      </div>
      <div className="pc-body" key={idx}>
        <div className="folio">{item.folio} · {item.app}</div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}

/* ---------- Mock: Shared Inbox ---------- */
function MockInbox() {
  return (
    <div className="app-mock">
      <div className="app-head">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-flex", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--paper-deep)", border: "1px solid var(--rule-strong)" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--paper-deep)", border: "1px solid var(--rule-strong)" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--paper-deep)", border: "1px solid var(--rule-strong)" }} />
          </span>
          <span>clara · shared inbox</span>
        </div>
        <span>kim.partner@firm.co.kr</span>
      </div>
      <div className="app-split">
        <div className="app-side">
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 12 }}>Inbox · 38</div>
          {[
            { from: "Sullivan & Cho", sub: "계약 조건 수정안 회신 부탁드립니다", t: "09:24", active: true },
            { from: "퍼밋 IR팀", sub: "시리즈 B 자료 공유드립니다", t: "08:11" },
            { from: "한울회계", sub: "Re: 감사조서 질의", t: "Yday" },
            { from: "Kim, Lee & Park", sub: "투자계약서 초안 검토", t: "Yday" },
            { from: "Clara AI", sub: "— 5건의 미확인 브리핑", t: "Mon" },
          ].map((m, i) => (
            <div key={i} className={`mail-row ${m.active ? "active" : ""}`}>
              <span className="t">{m.t}</span>
              <div className="from">{m.from}</div>
              <div className="sub">{m.sub}</div>
            </div>
          ))}
        </div>
        <div className="app-main">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
            <div style={{ fontFamily: "var(--serif)", fontSize: 18, letterSpacing: "-0.01em" }}>계약 조건 수정안 회신 부탁드립니다</div>
            <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-muted)" }}>09:24 KST</span>
          </div>
          <div style={{ fontSize: 12, color: "var(--ink-muted)", marginBottom: 14, fontFamily: "var(--mono)" }}>
            From: Jason Cho · Sullivan & Cho LLP · To: 파트너 그룹
          </div>

          <div className="brief">
            <div className="brief-lbl">Clara Brief · 자동 요약</div>
            <p>수정된 계약서 §7.2 면책 조항과 §11 데이터 처리 조항에 대해 상대 법인이 3개 항목의 재조정을 요청했습니다.</p>
            <ul>
              <li>§7.2 — 책임 한도 $500k → $1.2M</li>
              <li>§11.3 — 데이터 주권 조항 명시 요청</li>
              <li>회신 기한: <strong>04월 22일 EOD</strong></li>
            </ul>
          </div>

          <div style={{ fontSize: 11, fontFamily: "var(--mono)", color: "var(--ink-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Linked Context</div>
          <div className="pill-row">
            <span className="chip">Drive / 과거 계약</span>
            <span className="chip">프로젝트 / S&C — 2025</span>
            <span className="chip">판례 / 대법 2023다52301</span>
            <span className="chip">Task · 이지원 변호사</span>
          </div>

          <div style={{ marginTop: 18, display: "flex", gap: 8 }}>
            <button className="btn btn-sm">답장 초안 생성</button>
            <button className="btn btn-sm btn-ghost">태스크 배정</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Mock: Ask / Chat workspace ---------- */
function MockAsk() {
  return (
    <div className="app-mock">
      <div className="app-head">
        <div style={{ display: "flex", gap: 10 }}>
          <span style={{ display: "inline-flex", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--paper-deep)", border: "1px solid var(--rule-strong)" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--paper-deep)", border: "1px solid var(--rule-strong)" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--paper-deep)", border: "1px solid var(--rule-strong)" }} />
          </span>
          <span>clara · ask</span>
        </div>
        <span>thread · kyc — 퍼밋 코리아</span>
      </div>
      <div style={{ padding: "28px 32px", minHeight: 440 }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--claret)", marginBottom: 16 }}>
          THREAD 032 · KYC 분석
        </div>

        <div style={{ marginBottom: 22 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
            <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 13 }}>이지원 변호사</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-muted)" }}>09:31</span>
          </div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 16, lineHeight: 1.5, color: "var(--ink)" }}>
            @Clara 퍼밋 코리아의 재무 상태를 분석해서 우리가 지난 분기 처리한 유사 건들과 비교해줘.
          </div>
        </div>

        <div style={{ paddingLeft: 18, borderLeft: "2px solid var(--claret)", marginBottom: 22 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 }}>
            <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 13, color: "var(--claret)" }}>Clara</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-muted)" }}>분석 중 · 3개 출처 교차 검증</span>
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.6, color: "var(--ink-soft)", marginBottom: 12 }}>
            내부 자료 <strong style={{ color: "var(--ink)" }}>12건</strong>과 외부 리서치 <strong style={{ color: "var(--ink)" }}>4건</strong>을 대조한 결과, 다음 3개 리스크가 확인됩니다.
          </div>
          <div style={{ border: "1px solid var(--rule-strong)", background: "var(--paper-sunk)", padding: 14 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 8 }}>Findings · 3</div>
            <ol style={{ margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.65, color: "var(--ink-soft)" }}>
              <li>2024 Q4 매출 인식 시점 이슈 — 2023 HanWool 건과 유사 패턴</li>
              <li>계열사 간 자금 이동 $2.1M — 내부 Drive 문서와 불일치</li>
              <li>이사회 의사록 공백 (2024-08 ~ 2024-11)</li>
            </ol>
          </div>
        </div>

        <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 10 }}>Folder · 자동 수집</div>
        <div className="pill-row">
          <span className="chip">퍼밋 2024 재무제표</span>
          <span className="chip">HanWool 감사조서</span>
          <span className="chip">이메일 · 12건</span>
          <span className="chip">판례 참조 · 3건</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Mock: Project tasks ---------- */
function MockProject() {
  const tasks = [
    { t: "IDV 펀드 — 퍼밋 투자 적합성 분석", assign: "LJW", due: "D-3", state: "open" },
    { t: "계약서 §7.2 면책 조항 내부 검토", assign: "KSH", due: "D-1", state: "open" },
    { t: "HanWool 2026 감사조서 초안", assign: "PMJ", due: "D+24", state: "over" },
    { t: "협회 정회원 연회비 납부 증빙", assign: "AI", due: "D+26", state: "over" },
    { t: "RFP 대응 — 스프린트솔로 제안서", assign: "SJW", due: "—", state: "idle" },
  ];
  return (
    <div className="app-mock">
      <div className="app-head">
        <div style={{ display: "flex", gap: 10 }}>
          <span style={{ display: "inline-flex", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--paper-deep)", border: "1px solid var(--rule-strong)" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--paper-deep)", border: "1px solid var(--rule-strong)" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--paper-deep)", border: "1px solid var(--rule-strong)" }} />
          </span>
          <span>clara · projects</span>
        </div>
        <span>Q2 2026 · 28개 진행</span>
      </div>
      <div style={{ padding: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 90px 80px 90px", padding: "10px 16px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)", borderBottom: "1px solid var(--rule)", background: "var(--paper-sunk)" }}>
          <span>No.</span><span>Task</span><span>Assignee</span><span>Due</span><span>Thread</span>
        </div>
        {tasks.map((t, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "60px 1fr 90px 80px 90px", alignItems: "center", padding: "14px 16px", borderBottom: "1px solid var(--rule)", fontSize: 13 }}>
            <span style={{ fontFamily: "var(--mono)", color: "var(--ink-muted)", fontSize: 11 }}>{String(i + 1).padStart(3, "0")}</span>
            <span style={{ color: "var(--ink)" }}>{t.t}</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-soft)" }}>{t.assign}</span>
            <span style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: t.state === "over" ? "var(--claret)" : t.state === "idle" ? "var(--ink-faint)" : "var(--ink-soft)",
            }}>{t.due}</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-muted)" }}>↳ 연결됨</span>
          </div>
        ))}
        <div style={{ padding: "16px", background: "var(--paper-sunk)", fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-muted)" }}>
          이 프로젝트에 대해 질문 — @Clara
        </div>
      </div>
    </div>
  );
}

/* ---------- Mock: VC Playbook ---------- */
function MockPlaybook() {
  return (
    <div className="app-mock">
      <div className="app-head">
        <div style={{ display: "flex", gap: 10 }}>
          <span style={{ display: "inline-flex", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--paper-deep)", border: "1px solid var(--rule-strong)" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--paper-deep)", border: "1px solid var(--rule-strong)" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--paper-deep)", border: "1px solid var(--rule-strong)" }} />
          </span>
          <span>clara · playbook</span>
        </div>
        <span>PLAYBOOK 014 · VC 후속 투자 연계지원</span>
      </div>
      <div style={{ padding: "28px 32px" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--claret)", marginBottom: 10 }}>Playbook 014 · v1.2</div>
        <div style={{ fontFamily: "var(--serif)", fontSize: 24, lineHeight: 1.1, letterSpacing: "-0.015em", marginBottom: 4 }}>VC 후속 투자 연계지원</div>
        <div style={{ fontSize: 12, color: "var(--ink-muted)", marginBottom: 20, fontFamily: "var(--mono)" }}>저자 이지원 · 생성 2026.03.14 · 재사용 <strong style={{ color: "var(--ink)" }}>7회</strong></div>

        {[
          { n: "01", t: "포트폴리오사 프로파일링", d: "재무·주주·투자 히스토리 수집 및 적합 투자자 프로파일 정의" },
          { n: "02", t: "잠재 투자자 탐색", d: "Dry Powder · 투자 시기 · 업종 매칭으로 VC/AC 리스트 자동 생성" },
          { n: "03", t: "심층 분석 및 교차 검증", d: "내부 이메일 · Drive · 과거 딜 이력과 외부 리서치 대조" },
          { n: "04", t: "매칭 실행 및 소개", d: "투자자별 Teaser 자동 작성 → 파트너 승인 → 이메일 발송" },
          { n: "05", t: "사후 관리 및 자산화", d: "성사 여부 기록, 교훈 추출, 다음 안건을 위한 플레이북 갱신" },
        ].map((s, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 20, padding: "16px 0", borderTop: "1px solid var(--rule)" }}>
            <span style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--claret)", fontStyle: "italic" }}>{s.n}</span>
            <div>
              <div style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{s.t}</div>
              <div style={{ fontSize: 12, color: "var(--ink-muted)", lineHeight: 1.55 }}>{s.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* export to window */
Object.assign(window, { PainCarousel, MockInbox, MockAsk, MockProject, MockPlaybook });
