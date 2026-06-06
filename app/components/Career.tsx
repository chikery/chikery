const items = [
  {
    period: "2026.03 — 2026.04",
    title: "AI 엔지니어 인턴십",
    org: "멋쟁이사자처럼 · 로켓단",
    desc: "강의 STT 스크립트 기반 AI 복습 퀴즈 & 학습 가이드 자동 생성 시스템 개발. tiktoken 청킹·하이브리드 임베딩(OpenAI + ko-sroberta)·FAISS RAG 파이프라인 구현. FastAPI + PostgreSQL 백엔드 구축 (JWT 인증·Cloudflare Tunnel·Grafana 모니터링).",
    accent: false,
  },
  {
    period: "2025.12 — 2026.02",
    title: "AI NLP 부트캠프 수료",
    org: "멋쟁이사자처럼",
    desc: "한국어 NLP Multi-label 분류 모델 실험 (klue/roberta-base 外 5종 비교). Focal Loss·Soft BCE·ASL 손실함수 설계. Macro F1 0.9748 달성 (목표 대비 +22.48%p). NL2SQL 시스템 구축 (KoELECTRA + SQLCoder, EM 97.47%).",
    accent: false,
  },
  {
    period: "2025.08 — 2025.12",
    title: "그로스마케팅 부트캠프 수료",
    org: "멋쟁이사자처럼",
    desc: "데이터 기반 마케팅 의사결정·퍼널 분석·마케팅 대시보드 설계. Meta 광고 기획·집행 및 A/B 테스트, GA4·GTM 이벤트 트래킹 환경 구축. 기업 연계 프로젝트 2회 수행 (팀장).",
    accent: false,
  },
  {
    period: "2025.04 — 2025.08",
    title: "아트비즈니스 챌린지",
    org: "예술경영지원센터",
    desc: "창업 아이디어 검증부터 시장 조사·SWOT 분석·A/B 테스트·로드맵 설계 등 스타트업 기획 전 과정 수행. 투자자 대상 IR 피칭 시연, 상위 50% 팀 선정.",
    accent: false,
  },
  {
    period: "2022.04 — 2022.09",
    title: "디지털 아트 교환학생",
    org: "독일 바우하우스대학교",
    desc: "NFT·디지털 아트 기반 실험적 작품 제작, Blender·Unity 활용 3D 모델링 및 AR 프로젝트 수행. 영어·독일어 기반 수업 수강 및 다국적 팀 프로젝트 참여.",
    accent: false,
  },
  {
    period: "2018.03 — 2026.02",
    title: "중앙대학교 사진학과 졸업",
    org: "Chung-Ang University · B.F.A. Photography · 4.00/4.5",
    desc: "사진전공, 예술·영상 미디어·브랜드 비주얼 커뮤니케이션 경험. 시각적 사고와 스토리텔링 역량 습득.",
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
