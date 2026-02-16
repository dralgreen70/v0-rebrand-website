import { getAllPosts } from "@/lib/blog"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Journal | Dr. Allen Green MD – Evidence-Based Insights",
  description:
    "Evidence-based insights on therapeutic plasma exchange, apheresis, longevity medicine, and health optimization from Dr. Allen P. Green, MD.",
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00")
  return d
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toUpperCase()
}

export default function JournalPage() {
  const posts = getAllPosts()

  return (
    <main className="journal-page">
      <nav className="post-nav">
        <div className="post-nav-inner">
          <Link href="/" className="post-nav-brand">
            <span className="post-nav-mark">AG</span>
            Dr. Allen P. <span>Green</span>, MD
          </Link>
          <Link href="/" className="post-nav-back">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Home
          </Link>
        </div>
      </nav>

      <header className="journal-header">
        <div className="journal-header-inner">
          <div className="section-label-line" style={{ justifyContent: "center" }}>
            <span className="label-text">The PLEX Journal</span>
          </div>
          <h1 className="h-lg" style={{ textAlign: "center" }}>
            Evidence-Based{" "}
            <span className="serif-italic accent-text">Insights</span>
          </h1>
          <p className="journal-header-sub">
            Research, clinical insights, and perspectives on therapeutic plasma
            exchange, apheresis, and longevity medicine.
          </p>
        </div>
      </header>

      <section className="journal-grid-section">
        <div className="site-container">
          <div className="blog-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
            {posts.map((post) => {
              const isExternal = post.frontmatter.external
              const href = isExternal
                ? post.frontmatter.externalUrl
                : `/journal/${post.slug}`

              return (
                <a
                  key={post.slug}
                  href={href}
                  className="blog-card"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {isExternal && (
                    <div className="blog-card-external-badge">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                  )}
                  <div
                    className="blog-card-img"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-light)",
                    }}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.5 2v6a2 2 0 0 0 2 2h6" />
                      <path d="M16 18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8l6 6v8z" />
                      <path d="M9 13h6" />
                      <path d="M9 17h3" />
                    </svg>
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
                          {"Read on DrPlexMD.com "}
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
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

      <div className="post-footer">
        <Link href="/" className="btn btn-outline">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  )
}
