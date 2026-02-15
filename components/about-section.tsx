const tags = [
  "Board Certified",
  "UT Southwestern",
  "Clinical Pathologist",
  "ASFA Member",
  "Air Force Veteran",
]

export function AboutSection() {
  return (
    <section className="about-section site-section" id="about">
      <div className="site-container">
        <div className="about-grid">
          <div className="about-photo reveal-left">
            <div className="about-photo-frame">
              <img
                src="/images/me-and-amicus.jpg"
                alt="Dr. Allen P. Green, MD standing with the Amicus Separator apheresis machine"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </div>
            <div className="about-photo-accent" />
            <div className="about-tags">
              {tags.map((t) => (
                <span key={t} className="about-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <div className="section-label-line">
              <span className="label-text">Meet Dr. Green</span>
            </div>
            <h2 className="h-lg">
              Dr. Allen P.{" "}
              <span className="serif-italic accent-text">Green</span>
            </h2>
            <p
              className="h-md"
              style={{
                marginTop: "0.75rem",
                color: "var(--text-secondary)",
                fontWeight: 400,
              }}
            >
              Board-Certified Clinical Pathologist & PLEX Specialist
            </p>
            <div className="about-quote">
              {
                '"I envisioned becoming a \'super personal trainer\' who could optimize people\'s lives from every angle. This vision led me to medical school, and ultimately to therapeutic plasma exchange."'
              }
            </div>
            <p className="body-md">
              {
                "Dr. Green's path to medicine was unconventional. After serving in the Active Duty Air Force as a squadron physical training leader and working as a personal trainer, he realized he wanted to address health holistically. This led him to medical school and ultimately to specializing in clinical pathology and therapeutic plasma exchange."
              }
            </p>
            <p className="body-md" style={{ marginTop: "1rem" }}>
              His fascination with PLEX began during medical school when he
              discovered its profound applications for longevity and{" "}
              {"Alzheimer's"} disease treatment. He completed his residency at
              UT Southwestern under Dr. Ravi Sarode, one of the {"world's"}{" "}
              foremost experts in apheresis and transfusion medicine, and
              established a professional relationship with pioneer Dr. Dobri
              Kiprov.
            </p>
            <div style={{ marginTop: "1.5rem", borderRadius: "var(--radius)", overflow: "hidden", border: "1px solid var(--border)" }}>
              <img
                src="/images/dobri-and-i-ga.jpg"
                alt="Dr. Allen P. Green with Dr. Dobri Kiprov at Global Apheresis"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
              <div style={{ padding: "0.75rem 1rem", background: "var(--accent-glow)", fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                Dr. Green with Dr. Dobri Kiprov at Global Apheresis
              </div>
            </div>
            <p className="body-md" style={{ marginTop: "1rem" }}>
              With over 100 TPE procedures focused on biological age reversal
              and prevention of age-related diseases, Dr. Green is scaling
              therapeutic plasma exchange through clinical practice, protocol
              development, and physician education.
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
