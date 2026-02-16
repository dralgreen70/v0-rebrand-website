export function HeroSection() {
  return (
    <section className="hero" id="hero" style={{ padding: 0 }}>
      <div className="hero-left">
        <div className="hero-label">
          <div className="dot" />
          <span>The Science of Renewal</span>
        </div>
        <h1 className="h-display">
          <span className="line">Dr. Allen P.</span>
          <span className="line">
            <span className="serif-italic accent-text">Green</span>, MD
          </span>
        </h1>
        <p className="hero-sub-role">
          Associate Medical Director, Global Apheresis
        </p>
        <p className="hero-sub">
          Specialist in Therapeutic Plasma Exchange & Full-Spectrum Apheresis
          {" \u2013 "}Advancing precision care for longevity, {"Alzheimer's"},
          inflammation, and autoimmune disorders.
        </p>
        <div className="hero-actions">
          <a href="https://www.globalapheresis.com/free-consultation" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book Discovery Call <span className="arrow">&rarr;</span>
          </a>
          <a href="#plex" className="btn btn-outline">
            Learn About PLEX
          </a>
        </div>
        <div className="hero-trust">
          <div className="hero-trust-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l2 4.5 5 .5-3.75 3.25L12.5 14 8 11.5 3.5 14l1.25-4.75L1 6l5-.5L8 1z" fill="var(--accent)" /></svg>
            <span>Associate Medical Director, Global Apheresis</span>
          </div>
          <div className="hero-trust-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l2 4.5 5 .5-3.75 3.25L12.5 14 8 11.5 3.5 14l1.25-4.75L1 6l5-.5L8 1z" fill="var(--accent)" /></svg>
            <span>Mentored by Dr. Dobri Kiprov</span>
          </div>
          <div className="hero-trust-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l2 4.5 5 .5-3.75 3.25L12.5 14 8 11.5 3.5 14l1.25-4.75L1 6l5-.5L8 1z" fill="var(--accent)" /></svg>
            <span>Board-Certified Clinical Pathologist</span>
          </div>
          <div className="hero-trust-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l2 4.5 5 .5-3.75 3.25L12.5 14 8 11.5 3.5 14l1.25-4.75L1 6l5-.5L8 1z" fill="var(--accent)" /></svg>
            <span>500+ TPE Procedures Performed</span>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <canvas className="hero-canvas" id="heroCanvas" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me_amicus-MZRtkfKGLeHHpGc0uTG48lLTobF3fj.jpeg"
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
