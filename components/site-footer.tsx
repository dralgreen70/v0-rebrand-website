export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="#" className="footer-brand">
          Dr<span>PLEX</span>MD
        </a>
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#plex">What is PLEX?</a></li>
          <li><a href="#research">Research</a></li>
          <li><a href="#journal">Journal</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer-contact">
          <a href="mailto:info@drplexmd.com">info@drplexmd.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2026 DrPLEXMD. All rights reserved.
      </div>
    </footer>
  )
}
