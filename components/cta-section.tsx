export function CTASection() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-content">
        <div
          className="section-label-line reveal"
          style={{ justifyContent: "center" }}
        >
          <span
            className="label-text"
            style={{ color: "var(--accent-light)" }}
          >
            Get Started
          </span>
        </div>
        <h2 className="h-lg reveal">
          Ready to Transform Your{" "}
          <span className="serif-italic" style={{ color: "var(--accent-light)" }}>
            Health?
          </span>
        </h2>
        <p className="reveal">
          Book a discovery call to discuss how Therapeutic Plasma Exchange can
          help you achieve your health and longevity goals. Virtual and
          in-person options available.
        </p>
        <div className="cta-actions reveal">
          <a href="https://www.globalapheresis.com/free-consultation" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
            Schedule Discovery Call <span className="arrow">&rarr;</span>
          </a>
          <a href="mailto:info@drplexmd.com" className="btn btn-light">
            Email Dr. Green, MD
          </a>
        </div>
      </div>
    </section>
  )
}
