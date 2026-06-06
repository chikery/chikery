const groups = [
  {
    label: "AI · NLP",
    items: ["PyTorch", "HuggingFace Transformers", "PEFT/LoRA", "DPO", "RAG", "FAISS", "LangChain", "Pydantic", "Prompt Engineering"],
  },
  {
    label: "Backend · Infra",
    items: ["Python", "FastAPI", "PostgreSQL", "Docker", "JWT", "Cloudflare Tunnel", "Prometheus", "Grafana", "Sentry"],
  },
  {
    label: "Marketing · Analytics",
    items: ["Meta Ads", "GA4", "GTM", "Looker Studio", "A/B Test", "W&B", "SQL"],
  },
  {
    label: "자격증 · 어학",
    items: ["OPIc AL", "ADsP", "GAIQ"],
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
