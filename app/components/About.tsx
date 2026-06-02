export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div
        className="grid-2col"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left: big statement */}
        <div>
          <p className="section-label">About</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              marginBottom: "0",
            }}
          >
            예술과 AI가
            <br />
            <span style={{ color: "var(--accent)" }}>만나는 지점</span>
            에서
            <br />
            일합니다.
          </h2>
        </div>

        {/* Right: description */}
        <div>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.9,
              marginBottom: "20px",
            }}
          >
            중앙대학교 사진학과에서 시각적 사고와 스토리텔링을 익혔습니다.
            졸업 후 AI 엔지니어링으로 전환하며, 창의적 감수성과 기술을
            결합하는 일을 해왔습니다.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.9,
            }}
          >
            AI 에이전트 개발부터 CRM 메시지 자동화, 그로스마케팅, 예술 분야
            창업까지 — 경계를 가로지르는 것이 저의 강점입니다.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "32px",
            }}
          >
            {["사진학", "AI Engineering", "Growth Marketing", "Art Business"].map(
              (item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
