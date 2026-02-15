export function PlexSection() {
  return (
    <section className="plex-section site-section" id="plex">
      <div className="site-container">
        <div className="plex-grid">
          <div className="plex-visual reveal-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Me_Receiving_PLEX-69hcDq11DxsKWNVBmYWPnNPRMhjkt5.jpg"
              alt="Dr. Allen P. Green receiving a therapeutic plasma exchange procedure with the Amicus Separator"
              loading="eager"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                position: "relative",
                zIndex: 1,
              }}
            />
            <div className="plex-visual-label">
              <div className="dot" />
              <span>PLEX Procedure in Action</span>
            </div>
          </div>
          <div className="plex-content reveal-right">
            <div className="section-label-line">
              <span className="label-text">The Science</span>
            </div>
            <h2 className="h-lg">
              What is <span className="serif-italic accent-text">PLEX?</span>
            </h2>
            <p className="body-lg" style={{ marginTop: "1.25rem" }}>
              Therapeutic Plasma Exchange (PLEX or TPE) is a groundbreaking
              procedure that removes old plasma and replaces it with a 5%
              albumin solution, a powerful antioxidant and anti-inflammatory
              compound.
            </p>
            <p className="body-md">
              This process clears harmful age-related compounds, resets body
              systems, reduces inflammation, and activates stem cells to boost
              health and combat disease. PLEX represents a paradigm shift in how
              we approach health and longevity.
            </p>
            <p className="body-md">
              Your plasma accumulates harmful compounds over time: inflammatory
              cytokines, oxidized proteins, and senescent factors that
              accelerate aging. PLEX removes these substances while introducing
              powerful therapeutic properties through albumin replacement.
            </p>
            <a
              href="#process"
              className="btn btn-accent"
              style={{ marginTop: "2rem" }}
            >
              See The Process <span className="arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
