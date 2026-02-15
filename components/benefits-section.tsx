const benefits = [
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: "Clears Age-Related Compounds",
    desc: "Removes inflammatory molecules, oxidized proteins, and senescent factors that accumulate with age, restoring youthful cellular function and vitality.",
    delay: "reveal-d1",
  },
  {
    icon: '<path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>',
    title: "Resets Body Systems",
    desc: "Restores optimal signaling between organs and tissues, resetting metabolic, immune, and regenerative systems to more youthful states of operation.",
    delay: "reveal-d2",
  },
  {
    icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    title: "Reduces Inflammation",
    desc: "The 5% albumin solution provides powerful antioxidant and anti-inflammatory effects, combating chronic inflammation, a root cause of aging and disease.",
    delay: "reveal-d3",
  },
  {
    icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    title: "Activates Stem Cells",
    desc: "Fresh plasma creates an environment that awakens dormant stem cells, enhancing your body's natural regenerative capacity and repair mechanisms.",
    delay: "reveal-d4",
  },
  {
    icon: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    title: "Boosts Overall Health",
    desc: "Patients report increased energy, improved cognitive function, enhanced physical performance, and an overall sense of renewed vitality.",
    delay: "reveal-d5",
  },
  {
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    title: "Combats Disease",
    desc: "By addressing underlying inflammatory and degenerative processes, PLEX helps prevent and manage chronic diseases while promoting longevity.",
    delay: "reveal-d5",
  },
]

export function BenefitsSection() {
  return (
    <section className="benefits-section site-section" id="benefits">
      <div className="site-container">
        <div className="section-header">
          <div className="section-header-text">
            <div className="section-label-line reveal">
              <span className="label-text">Transformative Results</span>
            </div>
            <h2 className="h-lg reveal">
              How PLEX Transforms{" "}
              <span className="serif-italic accent-text">Your Health</span>
            </h2>
          </div>
        </div>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className={`benefit-card reveal ${b.delay}`}>
              <div className="benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  dangerouslySetInnerHTML={{ __html: b.icon }}
                />
              </div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
