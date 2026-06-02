const awards = [
  {
    icon: "🏆",
    title: "아모레퍼시픽 AI 챌린지 특별상",
    subtitle: "Amorepacific AI Challenge · Special Award",
    year: "2024",
    description:
      "AI 에이전트를 활용한 CRM 메시지 자동화 생성 솔루션으로 특별상 수상. LLM 기반 개인화 메시지 생성 파이프라인을 설계하고 구현.",
    highlight: true,
  },
  {
    icon: "🎖",
    title: "창업경진대회 본선 진출",
    subtitle: "예술경영지원센터 아트비즈니스챌린지 수료",
    year: "2024",
    description:
      "예술경영지원센터 주관 아트비즈니스챌린지 과정을 수료하고, 창업경진대회 본선에 진출. 예술과 비즈니스를 연결하는 사업 모델을 제안.",
    highlight: false,
  },
];

export default function Awards() {
  return (
    <section
      id="awards"
      style={{
        padding: "100px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <p className="section-label">Awards</p>
      <h2
        style={{
          fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "48px",
        }}
      >
        수상 및 성과
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "20px",
        }}
      >
        {awards.map((award, i) => (
          <div
            key={i}
            className="card"
            style={{
              padding: "36px",
              position: "relative",
              overflow: "hidden",
              ...(award.highlight
                ? {
                    border: "1px solid rgba(201, 169, 110, 0.3)",
                    background:
                      "linear-gradient(135deg, #111118 0%, #16130e 100%)",
                  }
                : {}),
            }}
          >
            {award.highlight && (
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(201,169,110,0.6), transparent)",
                }}
              />
            )}

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <span style={{ fontSize: "2rem" }}>{award.icon}</span>
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "var(--accent)",
                  fontWeight: 600,
                  padding: "4px 12px",
                  borderRadius: "100px",
                  background: "rgba(201,169,110,0.1)",
                  border: "1px solid rgba(201,169,110,0.2)",
                }}
              >
                {award.year}
              </span>
            </div>

            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "6px",
                letterSpacing: "-0.01em",
              }}
            >
              {award.title}
            </h3>
            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--accent)",
                marginBottom: "16px",
                fontWeight: 500,
              }}
            >
              {award.subtitle}
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
              }}
            >
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
