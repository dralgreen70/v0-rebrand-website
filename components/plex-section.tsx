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
            <div className="apheresis-card">
              <div className="apheresis-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v6l3-3" /><path d="M12 2v6l-3-3" />
                  <path d="M12 22v-6l3 3" /><path d="M12 22v-6l-3 3" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M2 12h6" /><path d="M16 12h6" />
                </svg>
              </div>
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

            {/* Card 2: Lipid Apheresis */}
            <div className="apheresis-card">
              <div className="apheresis-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h4 className="apheresis-card-title">Lipid Apheresis</h4>
              <p className="apheresis-card-desc">
                Targeted removal of excess lipids for refractory
                hypercholesterolemia and cardiovascular risk reduction.
              </p>
              <span className="apheresis-badge apheresis-badge-expanding">Expanding Soon</span>
            </div>

            {/* Card 3: Cellular Collections */}
            <div className="apheresis-card">
              <div className="apheresis-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v4" /><path d="M12 18v4" />
                  <path d="M2 12h4" /><path d="M18 12h4" />
                </svg>
              </div>
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
    </section>
  )
}
