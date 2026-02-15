"use client"

import { useState, useEffect, useCallback } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleNav = useCallback(() => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : ""
      return !prev
    })
  }, [])

  const closeNav = useCallback(() => {
    setMenuOpen(false)
    document.body.style.overflow = ""
  }, [])

  return (
    <>
      <div
        className={`nav-overlay${menuOpen ? " active" : ""}`}
        onClick={closeNav}
        style={{ display: "block" }}
      />
      <nav className={`site-nav${scrolled ? " scrolled" : ""}`}>
        <a href="#" className="nav-brand">
          <span className="nav-mark">AG</span>
          <span className="nav-brand-text">
            Dr. Allen P. <span>Green</span>, MD
          </span>
        </a>
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li>
            <a href="#about" onClick={closeNav}>
              About
            </a>
          </li>
          <li>
            <a href="#plex" onClick={closeNav}>
              What is PLEX?
            </a>
          </li>
          <li>
            <a href="#process" onClick={closeNav}>
              The Process
            </a>
          </li>
          <li>
            <a href="#research" onClick={closeNav}>
              Research
            </a>
          </li>
          <li>
            <a href="#journal" onClick={closeNav}>
              Journal
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-cta-btn" onClick={closeNav}>
              Discovery Call
            </a>
          </li>
        </ul>
        <button
          className={`nav-toggle${menuOpen ? " active" : ""}`}
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </>
  )
}
