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
            분석에서 그치지 않고
            <br />
            <span style={{ color: "var(--accent)" }}>실제 사업이</span>
            <br />
            굴러가게 만듭니다.
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
            AI로 인재 매칭을 고도화하고, 운영의 빈틈을 데이터로 메우는
            실행형 기획자입니다. 팀이 방향을 잃을 때 가장 먼저 구조를
            그려왔습니다.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.9,
            }}
          >
            아모레퍼시픽 챌린지에서 6인 팀장으로 AARRR × 페르소나
            의사결정 구조를 직접 설계했고, NLP 분류 모델에서는 목표 F1을
            22%p 초과했으며, 마케팅 캠페인에서는 목표 노출을 228%
            달성했습니다.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "32px",
            }}
          >
            {["AI Engineering", "NLP · RAG", "Growth Marketing", "PM · 기획"].map(
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
