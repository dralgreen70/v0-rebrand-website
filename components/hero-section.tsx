export function HeroSection() {
  return (
    <section className="hero" id="hero" style={{ padding: 0 }}>
      <div className="hero-left">
        <div className="hero-label">
          <div className="dot" />
          <span>Board-Certified Clinical Pathologist</span>
        </div>
        <h1 className="h-display">
          <span className="line">The Science</span>
          <span className="line">
            of <span className="serif-italic accent-text">Renewal</span>
          </span>
        </h1>
        <p className="hero-sub">
          Dr. Allen P. Green specializes in Therapeutic Plasma Exchange (PLEX),
          a groundbreaking procedure that clears age-related compounds, reduces
          inflammation, and activates stem cells for enhanced health and
          longevity.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Book Discovery Call <span className="arrow">&rarr;</span>
          </a>
          <a href="#plex" className="btn btn-outline">
            Learn About PLEX
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">100+</div>
            <div className="hero-stat-label">TPE Procedures Performed</div>
          </div>
          <div>
            <div className="hero-stat-num">6+</div>
            <div className="hero-stat-label">Published Research Papers</div>
          </div>
          <div>
            <div className="hero-stat-num">UT</div>
            <div className="hero-stat-label">Southwestern Trained</div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <canvas className="hero-canvas" id="heroCanvas" />
        <div className="hero-visual">
          <div className="hero-visual-circle">
            <div className="hero-visual-inner">
              <div className="hero-visual-initials">AG</div>
              <div className="hero-visual-name">Dr. Allen P. Green</div>
              <div className="hero-visual-title">
                {'a.k.a. "Dr. Plex"'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
