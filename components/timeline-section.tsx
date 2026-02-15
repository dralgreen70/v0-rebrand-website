const events = [
  { year: "2016", title: "Medical School", desc: "Discovered revolutionary aging research using Therapeutic Plasma Exchange for longevity and Alzheimer's Disease through independent study at The Medical University of South Carolina." },
  { year: "2020", title: "UT Southwestern Residency", desc: "Entered clinical pathology residency, gaining expertise in apheresis technologies under field leaders including Dr. Ravi Sarode. Supervised and performed hundreds of apheresis procedures." },
  { year: "2024", title: "Stem Cells & Cancer Care", desc: "Joined a bone marrow transplant group, collecting stem cells via apheresis for the treatment of blood cancers, including acute leukemias and multiple myeloma." },
  { year: "2025", title: "Lifespan Edge", desc: "Helped establish the Dallas clinic's therapeutic plasma exchange program from the ground up. Specialized in TPE for longevity and health optimization with over 100 procedures performed." },
  { year: "2026+", title: "Scaling PLEX", desc: "Scaling therapeutic plasma exchange for longevity medicine through clinical practice, protocol development, and physician education across national and international markets." },
]

export function TimelineSection() {
  return (
    <section className="timeline-section site-section" id="timeline">
      <div className="site-container">
        <div style={{ textAlign: "center" }}>
          <div className="section-label-line reveal" style={{ justifyContent: "center" }}>
            <span className="label-text">Career Journey</span>
          </div>
          <h2 className="h-lg reveal">
            The Path to <span className="serif-italic accent-text">Dr. Green</span>
          </h2>
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
    </section>
  )
}
