import { getAllPosts } from "@/lib/blog"

const iconMap: Record<string, JSX.Element> = {
  default: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2v6a2 2 0 0 0 2 2h6" />
      <path d="M16 18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8l6 6v8z" />
      <path d="M9 13h6" /><path d="M9 17h3" />
    </svg>
  ),
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00")
  return d
    .toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    .toUpperCase()
}

export function BlogSection() {
  const posts = getAllPosts()

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
          <a href="/journal" className="btn btn-outline reveal">
            View All Posts <span className="arrow">&rarr;</span>
          </a>
        </div>
        <div className="blog-grid">
          {posts.slice(0, 3).map((post, i) => {
            const isExternal = post.frontmatter.external
            const href = isExternal
              ? post.frontmatter.externalUrl
              : `/journal/${post.slug}`

            return (
              <a
                key={post.slug}
                href={href}
                className={`blog-card reveal reveal-d${i + 1}`}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                {isExternal && (
                  <div className="blog-card-external-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                )}
                <div className="blog-card-img">
                  {post.frontmatter.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.frontmatter.image}
                      alt={post.frontmatter.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        color: "var(--accent-light)",
                      }}
                    >
                      {iconMap.default}
                    </div>
                  )}
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-card-date">
                      {formatDate(post.frontmatter.date)}
                    </span>
                    <span className="blog-card-readtime">
                      {post.readTime} min read
                    </span>
                  </div>
                  <h3>{post.frontmatter.title}</h3>
                  <p>{post.frontmatter.excerpt}</p>
                  <span className="blog-card-link">
                    {isExternal ? (
                      <>
                        {"Read on DrPlexMD.com"}{" "}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </>
                    ) : (
                      <>
                        Read More <span className="arrow">&rarr;</span>
                      </>
                    )}
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
