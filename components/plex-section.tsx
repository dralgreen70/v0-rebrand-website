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

        {/* Full apheresis portfolio */}
        <div className="apheresis-portfolio reveal">
          <p className="apheresis-intro">
            At Global Apheresis, therapeutic plasma exchange (PLEX/TPE) is our
            cornerstone procedure for longevity, {"Alzheimer's"}, and
            inflammation. We also offer comprehensive apheresis services:
          </p>

          <div className="apheresis-cards">
            {/* Card 1: TPE/PLEX */}
            <div className="apheresis-card reveal reveal-d1">
              <div className="apheresis-card-header">
                <div className="apheresis-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
                    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
                  </svg>
                </div>
              </div>
              <div className="apheresis-card-body">
                <h4 className="apheresis-card-title">
                  Therapeutic Plasma Exchange
                  <span className="apheresis-abbr">TPE / PLEX</span>
                </h4>
                <p className="apheresis-card-desc">
                  Complete plasma removal and replacement with 5% albumin solution
                  to clear inflammatory cytokines, oxidized proteins, and
                  senescent factors that accelerate aging and disease.
                </p>
                <span className="apheresis-badge apheresis-badge-primary">Flagship Service</span>
              </div>
            </div>

            {/* Card 2: Lipid Apheresis */}
            <div className="apheresis-card reveal reveal-d2">
              <div className="apheresis-card-header">
                <div className="apheresis-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                  </svg>
                </div>
              </div>
              <div className="apheresis-card-body">
                <h4 className="apheresis-card-title">Lipid Apheresis</h4>
                <p className="apheresis-card-desc">
                  Targeted removal of excess lipids for refractory
                  hypercholesterolemia and cardiovascular risk reduction.
                </p>
                <span className="apheresis-badge apheresis-badge-expanding">Expanding Soon</span>
              </div>
            </div>

            {/* Card 3: Cellular Collections */}
            <div className="apheresis-card reveal reveal-d3">
              <div className="apheresis-card-header">
                <div className="apheresis-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 18h8" />
                    <path d="M3 22h18" />
                    <path d="M14 22a7 7 0 1 0 0-14h-1" />
                    <path d="M9 14h2" />
                    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
                    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
                  </svg>
                </div>
              </div>
              <div className="apheresis-card-body">
                <h4 className="apheresis-card-title">
                  Cellular Collections & Regenerative Research
                </h4>
                <p className="apheresis-card-desc">
                  Specialized white blood cell and stem cell collection services.
                  Working with leading biotechnology companies to advance emerging
                  stem cell protocols for longevity and regenerative medicine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
