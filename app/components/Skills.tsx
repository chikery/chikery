const groups = [
  {
    label: "AI / Engineering",
    items: ["Python", "LLM APIs", "Prompt Engineering", "AI Agent", "LangChain", "RAG"],
  },
  {
    label: "Marketing & Growth",
    items: ["Growth Hacking", "퍼널 분석", "A/B Testing", "CRM 자동화", "데이터 분석"],
  },
  {
    label: "Creative",
    items: ["사진 / Photography", "Visual Storytelling", "브랜딩", "Art Direction"],
  },
  {
    label: "Business",
    items: ["예술 창업", "Art Business", "사업 기획", "MVP 설계"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <p className="section-label">Skills</p>
      <h2
        style={{
          fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "48px",
        }}
      >
        역량
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        {groups.map((group) => (
          <div
            key={group.label}
            className="card"
            style={{ padding: "28px" }}
          >
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "16px",
              }}
            >
              {group.label}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
