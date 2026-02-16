const tags = [
  "Board Certified",
  "UT Southwestern",
  "Clinical Pathologist",
  "ASFA Member",
  "Air Force Veteran",
]

export function AboutSection() {
  return (
    <section id="about" style={{ background: "var(--bg)", padding: "7rem 4rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr", gap: "5rem", alignItems: "start" }}>
          {/* LEFT: Photo */}
          <div style={{ position: "relative" }}>
            {/* Corner accent */}
            <div
              style={{
                position: "absolute",
                top: -10,
                left: -10,
                width: 80,
                height: 80,
                borderTop: "2px solid var(--accent)",
                borderLeft: "2px solid var(--accent)",
                zIndex: 2,
              }}
            />
            {/* Photo */}
            <div
              style={{
                aspectRatio: "3/4",
                overflow: "hidden",
                position: "relative",
                background: "#ddd",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-15%20at%205.00.15%E2%80%AFPM-Nw0ijfDCdMrjQlLNRJWRc8Tm0Wy2Oa.png"
                alt="Dr. Allen P. Green, MD - Board-Certified Clinical Pathologist"
                width={600}
                height={800}
                loading="eager"
                fetchPriority="high"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>
            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "2rem" }}>
              {tags.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "0.4rem 1rem",
                    background: "var(--accent-glow)",
                    border: "1px solid rgba(8, 145, 178, 0.15)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    color: "var(--accent-dark)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Text */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span style={{ width: 35, height: 1.5, background: "var(--accent)", display: "block" }} />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase" as const,
                  color: "var(--accent)",
                }}
              >
                Meet Dr. Green
              </span>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.15 }}>
              Dr. Allen P.{" "}
              <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: "var(--accent)" }}>
                Green
              </span>
            </h2>

            <p
              style={{
                marginTop: "0.75rem",
                color: "var(--text-secondary)",
                fontWeight: 400,
                fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                lineHeight: 1.3,
              }}
            >
              Board-Certified Clinical Pathologist & Apheresis Specialist
            </p>

            <div
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                fontSize: "1.35rem",
                color: "var(--navy)",
                lineHeight: 1.5,
                margin: "2rem 0",
                paddingLeft: "1.5rem",
                borderLeft: "3px solid var(--accent)",
              }}
            >
              {
                '"I envisioned becoming a \'super personal trainer\' who could optimize people\'s lives from every angle. This vision led me to medical school, and ultimately to therapeutic plasma exchange."'
              }
            </div>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              {
                "Dr. Green's path to medicine was unconventional. After serving in the Active Duty Air Force as a squadron physical training leader and working as a personal trainer, he realized he wanted to address health holistically. This led him to medical school and ultimately to specializing in clinical pathology and therapeutic plasma exchange."
              }
            </p>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginTop: "1rem" }}>
              His fascination with PLEX began during medical school when he
              discovered its profound applications for longevity and{" "}
              {"Alzheimer's"} disease treatment. He completed his residency at
              UT Southwestern under Dr. Ravi Sarode, one of the {"world's"}{" "}
              foremost experts in apheresis and transfusion medicine, and
              established a professional relationship with pioneer Dr. Dobri
              Kiprov.
            </p>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginTop: "1rem" }}>
              With over 500 TPE procedures focused on biological age reversal
              and prevention of age-related diseases, Dr. Green now serves as
              Associate Medical Director at Global Apheresis, where he leads
              clinical operations and research initiatives. He also serves as
              medical director for Global Apheresis affiliate partnerships,
              expanding access to evidence-based therapeutic apheresis nationwide
              through clinical training, protocol development, and quality
              oversight.
            </p>

            <a
              href="#timeline"
              className="btn btn-outline"
              style={{ marginTop: "2rem" }}
            >
              View Full Journey <span className="arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
