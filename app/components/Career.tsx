const items = [
  {
    period: "2024 — 현재",
    title: "그로스마케팅 부트캠프",
    org: "Growth Marketing",
    desc: "데이터 기반 마케팅 전략, 퍼널 분석, A/B 테스트, 사용자 획득 최적화 등 성장 마케팅의 핵심 방법론을 학습 및 적용.",
    accent: false,
  },
  {
    period: "2024",
    title: "AI 엔지니어 인턴",
    org: "AI Engineering Internship",
    desc: "실제 프로덕트 환경에서 AI 모델 통합, 데이터 파이프라인 구축, LLM 기반 기능 개발에 참여.",
    accent: false,
  },
  {
    period: "2024",
    title: "AI 엔지니어 부트캠프",
    org: "AI Engineering Bootcamp",
    desc: "Python, LLM API, 프롬프트 엔지니어링, 에이전트 아키텍처 등 AI 개발 스택 집중 학습.",
    accent: false,
  },
  {
    period: "2020 — 2024",
    title: "중앙대학교 사진학과 졸업",
    org: "Chung-Ang University · B.F.A. Photography",
    desc: "시각 예술과 미디어 이론을 바탕으로 이미지 언어, 빛의 구성, 내러티브 설계를 체계적으로 습득.",
    accent: false,
  },
];

export default function Career() {
  return (
    <section
      id="career"
      style={{
        padding: "100px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <p className="section-label">Career</p>
      <h2
        style={{
          fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "56px",
        }}
      >
        경력 및 교육
      </h2>

      <div
        style={{
          position: "relative",
          paddingLeft: "32px",
        }}
      >
        <div className="timeline-line" />

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {items.map((item, i) => (
            <div
              key={i}
              className="card timeline-card-grid"
              style={{
                padding: "28px 32px",
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: "24px",
                alignItems: "start",
                position: "relative",
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-36px",
                  top: "34px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: i === 0 ? "var(--accent)" : "rgba(255,255,255,0.2)",
                    border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.15)",
                  }}
                />
              </div>

              <div>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--accent)",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.period}
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--accent)",
                    marginBottom: "10px",
                    fontWeight: 500,
                  }}
                >
                  {item.org}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
