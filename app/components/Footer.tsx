"use client";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        padding: "100px 24px 60px",
        maxWidth: "1100px",
        margin: "0 auto",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        className="grid-2col"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "start",
          marginBottom: "60px",
        }}
      >
        <div>
          <p className="section-label">Contact</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}
          >
            함께 만들어갈
            <br />
            <span style={{ color: "var(--accent)" }}>다음 이야기</span>를
            <br />
            기다립니다.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
            }}
          >
            AI, 마케팅, 예술 — 어떤 분야든
            <br />
            경계를 넘는 프로젝트라면 환영합니다.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            paddingTop: "8px",
          }}
        >
          <a
            href="https://github.com/chikery"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "20px 24px",
              borderRadius: "12px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              textDecoration: "none",
              transition: "border-color 0.2s ease, background 0.2s ease",
              color: "inherit",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(201,169,110,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--bg-card-hover)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--bg-card)";
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ color: "var(--text-secondary)", flexShrink: 0 }}
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <div>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "2px",
                }}
              >
                GitHub
              </p>
              <p
                style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}
              >
                github.com/chikery
              </p>
            </div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              style={{ marginLeft: "auto", color: "var(--text-secondary)" }}
            >
              <path
                d="M3 11L11 3M11 3H5M11 3V9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "32px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
          © 2025 조윤서 Jay Cho
        </p>
        <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
          chikery
        </p>
      </div>
    </footer>
  );
}
