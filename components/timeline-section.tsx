const events = [
  { year: "2016", title: "Medical School", desc: "Discovered revolutionary aging research using Therapeutic Plasma Exchange for longevity and Alzheimer's Disease through independent study at The Medical University of South Carolina." },
  { year: "2020", title: "UT Southwestern Residency", desc: "Entered clinical pathology residency, gaining expertise in apheresis technologies under field leaders including Dr. Ravi Sarode. Supervised and performed hundreds of apheresis procedures." },
  { year: "2024", title: "Stem Cells & Cancer Care", desc: "Joined a bone marrow transplant group, collecting stem cells via apheresis for the treatment of blood cancers, including acute leukemias and multiple myeloma." },
  { year: "2025", title: "Lifespan Edge", desc: "Launched and scaled the flagship longevity clinic in Dallas, TX, from 0 to 50 therapeutic plasma exchange procedures per month." },
  { year: "2026+", title: "Associate Medical Director, Global Apheresis", desc: "Leading comprehensive apheresis programs utilizing therapeutic plasma exchange, cellular collections and depletions, and emerging lipid apheresis technologies for longevity, health optimization, and preventative medicine." },
]

export function TimelineSection() {
  return (
    <section className="timeline-section site-section" id="timeline">
      <div className="site-container">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div className="section-label-line reveal" style={{ justifyContent: "center" }}>
            <span className="label-text">Career Journey</span>
          </div>
          <h2 className="h-lg reveal">
            The Path to <span className="serif-italic accent-text">Dr. Green</span>
          </h2>
        </div>
        <div className="timeline-with-photo">
          <div className="timeline-photo reveal-left">
            <div style={{
              position: "sticky",
              top: "6rem",
              borderRadius: "var(--radius)",
              overflow: "hidden",
              border: "1px solid var(--border)",
              background: "var(--card)",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dobri_and_I_GA-xWLrNYBYXjhg6A3hSnBJIr0tsauWLO.jpeg"
                alt="Dr. Allen P. Green with Dr. Dobri Kiprov at Global Apheresis"
                loading="eager"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
              <div style={{
                padding: "1rem 1.25rem",
                fontSize: "0.8rem",
                color: "var(--text-secondary)",
                lineHeight: 1.5,
              }}>
                <span style={{ fontWeight: 600, color: "var(--text)" }}>With Dr. Dobri Kiprov</span> at Global Apheresis — a pioneer in therapeutic plasma exchange and key mentor in Dr. {"Green's"} career.
              </div>
            </div>
          </div>
          <div className="timeline">
            {events.map((e, i) => (
              <div key={i} className="timeline-item reveal">
                <div className="timeline-year">{e.year}</div>
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot" />
                </div>
                <div className="timeline-content">
                  <h4>{e.title}</h4>
                  <p>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
