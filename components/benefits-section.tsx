const benefits = [
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: "Clears Age-Related Compounds",
    desc: "Removes inflammatory molecules, oxidized proteins, and senescent factors that accumulate with age, restoring youthful cellular function and vitality.",
    delay: "reveal-d1",
  },
  {
    icon: '<path d="M21.5 2v6h-6"/><path d="M2.5 22v-6h6"/><path d="M22.1 11.5A10 10 0 0 0 3.5 4.3l-1 1.2"/><path d="M1.9 12.5a10 10 0 0 0 18.6 7.2l1-1.2"/>',
    title: "Resets Body Systems",
    desc: "Restores optimal signaling between organs and tissues, resetting metabolic, immune, and regenerative systems to more youthful states of operation.",
    delay: "reveal-d2",
  },
  {
    icon: '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',
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
    icon: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    title: "Boosts Overall Health",
    desc: "Patients report increased energy, improved cognitive function, enhanced physical performance, and an overall sense of renewed vitality.",
    delay: "reveal-d5",
  },
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
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
              How Therapeutic Plasma Exchange Transforms{" "}
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
