const awards = [
  {
    icon: "🏆",
    title: "아모레퍼시픽 AI Innovation Challenge 특별상",
    subtitle: "Amorepacific AI Innovation Challenge 2026 · Special Award",
    year: "2026",
    description:
      "6인 팀장으로 AARRR × 페르소나 의사결정 구조 직접 설계. Qwen2.5-1.5B + EXAONE-4.0-1.2B 이원화 멀티 에이전트 파이프라인 구현. DPO + LoRA 파인튜닝으로 페르소나 유출·한영 혼용 문제 해결. 처리 시간 50% 단축 (39초→19초).",
    highlight: true,
  },
  {
    icon: "🎖",
    title: "아트비즈니스 챌린지 상위 50% 선정",
    subtitle: "예술경영지원센터",
    year: "2025",
    description:
      "창업 아이디어 검증부터 시장 조사·SWOT 분석·A/B 테스트·로드맵 설계 등 스타트업 기획 전 과정 수행. 투자자 대상 IR 피칭 시연으로 상위 50% 팀 선정.",
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
