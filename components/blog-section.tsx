const posts = [
  {
    href: "https://drplexmd.com/the-biomarker-question-how-do-we-measure-success-with-therapeutic-plasma-exchange/",
    date: "FEBRUARY 11, 2026",
    title: "The Biomarker Question: How Do We Measure Success with Therapeutic Plasma Exchange?",
    excerpt: "Therapeutic plasma exchange produces measurable changes in biological age clocks, inflammatory proteins, and environmental toxins.",
    image: "/images/lab-tests.webp",
    imageAlt: "Blood sample test tubes in a laboratory rack for biomarker analysis",
  },
  {
    href: "https://drplexmd.com/ambar-study-part-3-revolutionary-finding-plasma-exchange-slows-alzheimers-decline-regardless-of-amyloid-status/",
    date: "JANUARY 5, 2026",
    title: "AMBAR Study Part 3: Plasma Exchange Slows Alzheimer's Decline Regardless of Amyloid Status",
    excerpt: "The game-changing finding: 30% of AMBAR patients were amyloid-negative yet benefited equally from plasma exchange treatment.",
    image: "/images/generational-memories.webp",
    imageAlt: "An elderly father and adult son sharing a warm embrace",
  },
  {
    href: "https://drplexmd.com/blood-revolution/",
    date: "DECEMBER 14, 2025",
    title: "The Blood Revolution: How Scientists Discovered That Aging Lives in Your Blood",
    excerpt: "In 2005, a team of scientists at Stanford performed an experiment that sounds like science fiction, connecting the circulatory systems of old and young mice.",
    image: "/images/blood-cells.webp",
    imageAlt: "Close-up 3D rendering of red blood cells",
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
              <div className="blog-card-img">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
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
