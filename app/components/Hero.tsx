"use client";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="animate-fade-up"
        style={{ opacity: 0, maxWidth: "800px" }}
      >
        <p
          className="section-label animate-fade-up"
          style={{ opacity: 0, marginBottom: "20px" }}
        >
          AI Engineer &amp; Creative
        </p>

        <h1
          className="animate-fade-up delay-100"
          style={{
            opacity: 0,
            fontSize: "clamp(2.8rem, 8vw, 6rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "24px",
          }}
        >
          <span className="gradient-text">조윤서</span>
          <br />
          <span
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.55em",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Jay Cho
          </span>
        </h1>

        <p
          className="animate-fade-up delay-200"
          style={{
            opacity: 0,
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "var(--text-secondary)",
            maxWidth: "520px",
            margin: "0 auto 40px",
            lineHeight: 1.8,
          }}
        >
          사진학과에서 시작한 시각적 감수성,
          <br />
          AI 기술로 확장하는 창의적 경계.
        </p>

        <div
          className="animate-fade-up delay-300"
          style={{
            opacity: 0,
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#career"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 28px",
              borderRadius: "100px",
              background: "var(--accent)",
              color: "#0a0a0f",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            이력 보기
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 28px",
              borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "var(--text-primary)",
              fontWeight: 500,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,169,110,0.4)";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,169,110,0.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.12)";
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            }}
          >
            연락하기
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-in delay-600"
        style={{
          opacity: 0,
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "var(--text-secondary)",
          fontSize: "0.72rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <div
          style={{
            width: "1px",
            height: "32px",
            background:
              "linear-gradient(to bottom, rgba(201,169,110,0.6), transparent)",
          }}
        />
      </div>
    </section>
  );
}
