import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'About', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner container">
        <a href="#home" className="navbar-logo">
          <span className="logo-text">Audric Andhika<span className="logo-dot">.</span></span>
        </a>

        <div className={`navbar-links${open ? ' open' : ''}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="mailto:audricc015@gmail.com" className="nav-cta" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>

        <button
          id="hamburger-btn"
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
