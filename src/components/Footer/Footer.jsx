import { SiGithub, SiGitlab } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo-badge">AA</span>
          <div>
            <p className="footer-name">Mochammad Audric Andhika H</p>
            <p className="footer-tagline">Full Stack Developer · Mojokerto, East Java, Indonesia</p>
          </div>
        </div>

        <div className="footer-center">
          <p className="footer-email">
            <a href="mailto:audricc015@gmail.com">audricc015@gmail.com</a>
          </p>
          <p className="footer-copy">©{year} SuperDricc. All rights reserved.</p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/audricandhika" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-link" id="footer-github">
            <SiGithub size={18} />
          </a>
          <a href="https://gitlab.com/audricandhika" target="_blank" rel="noopener noreferrer" aria-label="GitLab" className="footer-social-link" id="footer-gitlab">
            <SiGitlab size={18} />
          </a>
          <a href="https://www.linkedin.com/in/audric-andhika" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link" id="footer-linkedin">
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
