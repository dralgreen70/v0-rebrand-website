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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Me%20and%20Amicus-RU258XCBzK0a5UscKJZ0wTrfpnBm5U.jpg"
          alt="Dr. Allen P. Green, MD with the Amicus Separator"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            zIndex: 1,
          }}
        />
        <div className="hero-visual" style={{ zIndex: 2 }}>
          <div className="hero-visual-name">Dr. Allen P. Green, MD</div>
          <div className="hero-visual-title">
            {'Board-Certified Clinical Pathologist'}
          </div>
        </div>
      </div>
    </section>
  )
}
