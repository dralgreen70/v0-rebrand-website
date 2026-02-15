"use client"

import { useEffect } from "react"

export function ClientInit() {
  useEffect(() => {
    console.log("[v0] ClientInit mounted")

    // Debug images
    const allImgs = document.querySelectorAll("img")
    console.log("[v0] Total img elements on page:", allImgs.length)
    allImgs.forEach((img, i) => {
      console.log(`[v0] img[${i}] src:`, img.src)
      console.log(`[v0] img[${i}] naturalWidth:`, img.naturalWidth, "naturalHeight:", img.naturalHeight)
      console.log(`[v0] img[${i}] displayed width:`, img.offsetWidth, "height:", img.offsetHeight)
      console.log(`[v0] img[${i}] parentElement:`, img.parentElement?.className)
      console.log(`[v0] img[${i}] complete:`, img.complete)
      img.addEventListener("error", () => console.log(`[v0] img[${i}] FAILED to load:`, img.src))
      img.addEventListener("load", () => console.log(`[v0] img[${i}] loaded OK:`, img.src, "natural:", img.naturalWidth, "x", img.naturalHeight))
    })

    // Check plex visual
    const plexVisual = document.querySelector(".plex-visual")
    if (plexVisual) {
      console.log("[v0] plex-visual dimensions:", plexVisual.clientWidth, "x", plexVisual.clientHeight)
      const plexImg = plexVisual.querySelector("img")
      console.log("[v0] plex-visual img:", plexImg?.src, "complete:", plexImg?.complete, "displayed:", plexImg?.offsetWidth, "x", plexImg?.offsetHeight)
    }

    // Check about photo
    const aboutPhoto = document.querySelector(".about-photo-frame")
    if (aboutPhoto) {
      console.log("[v0] about-photo-frame dimensions:", aboutPhoto.clientWidth, "x", aboutPhoto.clientHeight)
      const aboutImg = aboutPhoto.querySelector("img")
      console.log("[v0] about-photo-frame img:", aboutImg?.src, "complete:", aboutImg?.complete, "displayed:", aboutImg?.offsetWidth, "x", aboutImg?.offsetHeight)
    }

    // ===== SCROLL REVEAL =====
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible")
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )
    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => obs.observe(el))
    // Add reveal-ready class after observer is set up so content is visible before JS loads
    document.body.classList.add("reveal-ready")

    // ===== HERO CANVAS =====
    const hc = document.getElementById("heroCanvas") as HTMLCanvasElement
    if (!hc) return
    const hctx = hc.getContext("2d")
    if (!hctx) return
    const isMobile = window.innerWidth < 768
    let hParts: HParticle[] = []

    function resizeHC() {
      const r = hc.parentElement!.getBoundingClientRect()
      hc.width = r.width
      hc.height = r.height
    }
    resizeHC()
    window.addEventListener("resize", resizeHC)

    class HParticle {
      x = 0; y = 0; r = 0; sx = 0; sy = 0; o = 0; p = 0; color = ""
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * hc.width
        this.y = Math.random() * hc.height
        this.r = Math.random() * 2.5 + 0.5
        this.sx = (Math.random() - 0.5) * 0.4
        this.sy = (Math.random() - 0.5) * 0.4
        this.o = Math.random() * 0.5 + 0.15
        this.p = Math.random() * Math.PI * 2
        this.color = Math.random() > 0.5 ? "8, 145, 178" : "34, 211, 238"
      }
      update() {
        this.x += this.sx; this.y += this.sy; this.p += 0.015
        if (this.x < -10 || this.x > hc.width + 10 || this.y < -10 || this.y > hc.height + 10) this.reset()
      }
      draw(ctx: CanvasRenderingContext2D) {
        const a = this.o * (0.5 + Math.sin(this.p) * 0.5)
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color}, ${a})`
        ctx.fill()
      }
    }

    const pCount = isMobile ? 25 : 60
    for (let i = 0; i < pCount; i++) hParts.push(new HParticle())

    function drawHConn() {
      const md = isMobile ? 80 : 120
      for (let i = 0; i < hParts.length; i++) {
        for (let j = i + 1; j < hParts.length; j++) {
          const dx = hParts[i].x - hParts[j].x
          const dy = hParts[i].y - hParts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < md) {
            hctx!.beginPath()
            hctx!.moveTo(hParts[i].x, hParts[i].y)
            hctx!.lineTo(hParts[j].x, hParts[j].y)
            hctx!.strokeStyle = `rgba(8, 145, 178, ${(1 - d / md) * 0.1})`
            hctx!.lineWidth = 0.5
            hctx!.stroke()
          }
        }
      }
    }

    let heroFrame: number
    function animH() {
      hctx!.clearRect(0, 0, hc.width, hc.height)
      hParts.forEach((p) => { p.update(); p.draw(hctx!) })
      drawHConn()
      heroFrame = requestAnimationFrame(animH)
    }
    animH()

    // ===== SMOOTH SCROLL =====
    const handleClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement
      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#")) return
      e.preventDefault()
      const t = document.querySelector(href)
      if (t) {
        const top = t.getBoundingClientRect().top + window.pageYOffset - 80
        window.scrollTo({ top, behavior: "smooth" })
      }
    }
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", handleClick)
    })

    return () => {
      obs.disconnect()
      cancelAnimationFrame(heroFrame)
      window.removeEventListener("resize", resizeHC)
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.removeEventListener("click", handleClick)
      })
    }
  }, [])

  return null
}
