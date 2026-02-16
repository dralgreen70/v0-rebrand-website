import fs from "fs"
import path from "path"

export interface PostFrontmatter {
  title: string
  date: string
  author: string
  excerpt: string
  image: string
  external?: boolean
  externalUrl?: string
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
  readTime: number
}

const postsDirectory = path.join(process.cwd(), "content/posts")

function parseFrontmatter(fileContent: string): {
  frontmatter: PostFrontmatter
  content: string
} {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = fileContent.match(frontmatterRegex)

  if (!match) {
    return {
      frontmatter: {
        title: "",
        date: "",
        author: "Dr. Allen P. Green",
        excerpt: "",
        image: "",
      },
      content: fileContent,
    }
  }

  const frontmatterString = match[1]
  const content = match[2]

  const frontmatter: Record<string, string | boolean> = {}
  for (const line of frontmatterString.split("\n")) {
    const colonIndex = line.indexOf(":")
    if (colonIndex === -1) continue
    const key = line.slice(0, colonIndex).trim()
    let value: string | boolean = line.slice(colonIndex + 1).trim()
    // Remove surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    if (value === "true") value = true
    if (value === "false") value = false
    frontmatter[key] = value
  }

  return {
    frontmatter: {
      title: (frontmatter.title as string) || "",
      date: (frontmatter.date as string) || "",
      author: (frontmatter.author as string) || "Dr. Allen P. Green",
      excerpt: (frontmatter.excerpt as string) || "",
      image: (frontmatter.image as string) || "",
      external: frontmatter.external === true,
      externalUrl: (frontmatter.externalUrl as string) || "",
    },
    content,
  }
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { frontmatter, content } = parseFrontmatter(fileContents)
      const readTime = calculateReadTime(content)

      return { slug, frontmatter, content, readTime }
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )

  return posts
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { frontmatter, content } = parseFrontmatter(fileContents)
  const readTime = calculateReadTime(content)

  return { slug, frontmatter, content, readTime }
}

export function getRelatedPosts(currentSlug: string, count = 3): Post[] {
  const allPosts = getAllPosts()
  return allPosts
    .filter((p) => p.slug !== currentSlug && !p.frontmatter.external)
    .slice(0, count)
}

// Simple markdown to HTML converter
export function markdownToHtml(markdown: string): string {
  let html = markdown

  // Headings
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>")
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>")
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>")

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>")

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  )

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")

  // Unordered lists
  html = html.replace(
    /^[\s]*[-*] (.+)$/gm,
    "<li>$1</li>"
  )
  html = html.replace(
    /(<li>.*<\/li>\n?)+/g,
    (match) => `<ul>${match}</ul>`
  )

  // Ordered lists
  html = html.replace(
    /^\d+\. (.+)$/gm,
    "<li>$1</li>"
  )

  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>")

  // Code blocks
  html = html.replace(
    /```(\w+)?\n([\s\S]*?)```/g,
    '<pre><code class="language-$1">$2</code></pre>'
  )

  // Horizontal rule
  html = html.replace(/^---$/gm, "<hr />")

  // Paragraphs - wrap remaining lines
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim()
      if (!trimmed) return ""
      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<ol") ||
        trimmed.startsWith("<blockquote") ||
        trimmed.startsWith("<pre") ||
        trimmed.startsWith("<hr") ||
        trimmed.startsWith("<img")
      ) {
        return trimmed
      }
      return `<p>${trimmed.replace(/\n/g, "<br />")}</p>`
    })
    .join("\n")

  return html
}
