const posts = [
  {
    href: "https://drplexmd.com/the-biomarker-question-how-do-we-measure-success-with-therapeutic-plasma-exchange/",
    date: "FEBRUARY 11, 2026",
    title: "The Biomarker Question: How Do We Measure Success with Therapeutic Plasma Exchange?",
    excerpt: "Therapeutic plasma exchange produces measurable changes in biological age clocks, inflammatory proteins, and environmental toxins.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2v6a2 2 0 0 0 2 2h6" />
        <path d="M16 18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8l6 6v8z" />
        <path d="M9 13h6" />
        <path d="M9 17h3" />
      </svg>
    ),
  },
  {
    href: "https://drplexmd.com/ambar-study-part-3-revolutionary-finding-plasma-exchange-slows-alzheimers-decline-regardless-of-amyloid-status/",
    date: "JANUARY 5, 2026",
    title: "AMBAR Study Part 3: Plasma Exchange Slows Alzheimer's Decline Regardless of Amyloid Status",
    excerpt: "The game-changing finding: 30% of AMBAR patients were amyloid-negative yet benefited equally from plasma exchange treatment.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    href: "https://drplexmd.com/blood-revolution/",
    date: "DECEMBER 14, 2025",
    title: "The Blood Revolution: How Scientists Discovered That Aging Lives in Your Blood",
    excerpt: "In 2005, a team of scientists at Stanford performed an experiment that sounds like science fiction, connecting the circulatory systems of old and young mice.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export function BlogSection() {
  return (
    <section className="blog-section site-section" id="journal">
      <div className="site-container">
        <div className="section-header">
          <div className="section-header-text">
            <div className="section-label-line reveal">
              <span className="label-text">The PLEX Journal</span>
            </div>
            <h2 className="h-lg reveal">
              Evidence-Based{" "}
              <span className="serif-italic accent-text">Insights</span>
            </h2>
          </div>
          <a
            href="https://drplexmd.com/blog"
            className="btn btn-outline reveal"
          >
            View All Posts <span className="arrow">&rarr;</span>
          </a>
        </div>
        <div className="blog-grid">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.href}
              className={`blog-card reveal reveal-d${i + 1}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="blog-card-img"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-light)",
                }}
              >
                {post.icon}
              </div>
              <div className="blog-card-body">
                <div className="blog-card-date">{post.date}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-card-link">
                  Read More <span className="arrow">&rarr;</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
