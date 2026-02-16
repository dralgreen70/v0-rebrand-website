const steps = [
  {
    num: "STEP 01",
    title: "Vascular Access",
    desc: "IV access is obtained in each arm, similar to a routine blood draw. This provides the access point for the exchange process.",
  },
  {
    num: "STEP 02",
    title: "Plasma Separation",
    desc: "Your blood flows through an advanced apheresis machine that gently separates plasma from blood cells using centrifugal technology.",
  },
  {
    num: "STEP 03",
    title: "Albumin Replacement",
    desc: "Old plasma containing inflammatory compounds is removed. Fresh 5% albumin solution is introduced as a powerful antioxidant replacement.",
  },
  {
    num: "STEP 04",
    title: "Return & Renewal",
    desc: "Your blood cells, now suspended in rejuvenating albumin solution, are returned to your body, beginning cellular renewal.",
  },
]

export function ProcessSection() {
  return (
    <section className="process-section site-section" id="process">
      <div className="site-container">
        <div className="section-header">
          <div className="section-header-text">
            <div className="section-label-line reveal">
              <span className="label-text">The Procedure</span>
            </div>
            <h2 className="h-lg reveal" style={{ color: "white" }}>
              The Therapeutic Plasma Exchange{" "}
              <span
                className="serif-italic"
                style={{ color: "var(--accent-light)" }}
              >
                Process
              </span>
            </h2>
            <p className="body-lg reveal" style={{ marginTop: "1rem" }}>
              A safe, sophisticated procedure performed by trained medical
              professionals in a comfortable clinical setting.
            </p>
          </div>
        </div>
        <div className="process-steps">
          {steps.map((s, i) => (
            <div key={i} className={`process-step reveal reveal-d${i + 1}`}>
              <div className="process-step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="process-footer reveal">
          <p>
            <strong>Session Duration:</strong> Each PLEX session typically takes
            2-4 hours. Most patients find the procedure comfortable and
            well-tolerated.
          </p>
          <a href="https://www.globalapheresis.com/free-consultation" target="_blank" rel="noopener noreferrer" className="btn btn-light">
            Schedule a Call <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
