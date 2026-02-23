import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug, getRelatedPosts, markdownToHtml } from "@/lib/blog"
import type { Metadata } from "next"
import Link from "next/link"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts
    .filter((p) => !p.frontmatter.external)
    .map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: `${post.frontmatter.title} | Dr. Allen Green MD`,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: "article",
      authors: [post.frontmatter.author],
    },
  }
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00")
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post || post.frontmatter.external) {
    notFound()
  }

  const htmlContent = markdownToHtml(post.content)
  const relatedPosts = getRelatedPosts(slug, 3)

  const shareUrl = `https://allenpgreenmd.com/journal/${slug}`
  const shareTitle = encodeURIComponent(post.frontmatter.title)
  const shareText = encodeURIComponent(post.frontmatter.excerpt)

  return (
    <main className="post-page">
      {/* Navigation */}
      <nav className="post-nav">
        <div className="post-nav-inner">
          <Link href="/" className="post-nav-brand">
            <span className="post-nav-mark">AG</span>
            Dr. Allen P. <span>Green</span>, MD
          </Link>
          <Link href="/#journal" className="post-nav-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Journal
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="post-hero">
        <div className="post-hero-inner">
          <div className="post-hero-meta">
            <span className="post-hero-date">{formatDate(post.frontmatter.date)}</span>
            <span className="post-hero-divider">|</span>
            <span className="post-hero-readtime">{post.readTime} min read</span>
          </div>
          <h1 className="post-hero-title">{post.frontmatter.title}</h1>
          <p className="post-hero-excerpt">{post.frontmatter.excerpt}</p>
          <div className="post-hero-author">
            <div className="post-hero-author-avatar">AG</div>
            <div>
              <div className="post-hero-author-name">{post.frontmatter.author}</div>
              <div className="post-hero-author-role">Associate Medical Director, Global Apheresis</div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="post-content-wrapper">
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>

      {/* Share */}
      <section className="post-share-section">
        <div className="post-share-inner">
          <h3 className="post-share-heading">Share this article</h3>
          <div className="post-share-buttons">
            <a
              href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="post-share-btn"
              aria-label="Share on Twitter"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter / X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="post-share-btn"
              aria-label="Share on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={`mailto:?subject=${shareTitle}&body=${shareText}%0A%0A${shareUrl}`}
              className="post-share-btn"
              aria-label="Share via Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="post-author-bio">
        <div className="post-author-bio-inner">
          <div className="post-author-bio-avatar">AG</div>
          <div className="post-author-bio-text">
            <h3>Dr. Allen P. Green, MD</h3>
            <p>
              Associate Medical Director at Global Apheresis. Board-Certified
              Clinical Pathologist specializing in therapeutic apheresis for
              longevity, health optimization, and preventative medicine.
            </p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="post-related">
          <div className="post-related-inner">
            <h3 className="post-related-heading">More from the Journal</h3>
            <div className="post-related-grid">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/journal/${rp.slug}`}
                  className="post-related-card"
                >
                  <span className="post-related-date">
                    {formatDate(rp.frontmatter.date)}
                  </span>
                  <h4>{rp.frontmatter.title}</h4>
                  <p>{rp.frontmatter.excerpt}</p>
                  <span className="post-related-link">
                    Read More <span className="arrow">&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to top */}
      <div className="post-footer">
        <Link href="/#journal" className="btn btn-outline">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><polyline points="12 19 5 12 12 5" />
          </svg>
          Back to All Posts
        </Link>
      </div>
    </main>
  )
}
