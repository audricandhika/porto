import { SiGithub, SiGitlab } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { HiDownload, HiArrowRight } from 'react-icons/hi'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-pattern" aria-hidden="true" />
      <div className="container hero-inner">

        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge hero-anim-1">
            <span className="badge-dot" />
            Available for Opportunities
          </div>

          <h1 className="hero-name hero-anim-2">
            Mochammad<br />
            <span className="name-highlight">Audric Andhika</span> H
          </h1>

          <p className="hero-role hero-anim-3">
            Full Stack Developer
          </p>

          <p className="hero-bio hero-anim-4">
            Business Information Systems student at Politeknik Negeri Malang with
            hands-on experience building end-to-end web and mobile applications.
            Proficient in <strong>Laravel</strong>, <strong>Flutter</strong>, and{' '}
            <strong>Figma</strong>.
          </p>

          <div className="hero-actions hero-anim-5">
            <a
              id="download-cv-btn"
              href="/cv.pdf"
              download="Audric_Andhika_CV.pdf"
              className="btn btn-primary"
            >
              <HiDownload size={18} />
              Download CV
            </a>
            <a href="mailto:audricc015@gmail.com" className="btn btn-ghost" id="contact-btn">
              Contact Me
              <HiArrowRight size={16} />
            </a>
          </div>

          <div className="hero-socials hero-anim-5">
            <a
              id="github-link"
              href="https://github.com/audricandhika"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <SiGithub size={20} />
            </a>
            <a
              id="gitlab-link"
              href="https://gitlab.com/audricandhika"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitLab"
            >
              <SiGitlab size={20} />
            </a>
            <a
              id="linkedin-link"
              href="https://www.linkedin.com/in/audric-andhika"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <span className="social-divider" />
            <span className="social-email">audricc015@gmail.com</span>
          </div>
        </div>

        {/* Right — Avatar */}
        <div className="hero-visual hero-anim-2">
          <div className="avatar-wrapper">
            <div className="avatar-ring" />
            <div className="avatar-circle">
              <span className="avatar-initials">MAH</span>
              <span className="avatar-sub">Full Stack Dev</span>
            </div>
            <div className="avatar-blob blob-1" aria-hidden="true" />
            <div className="avatar-blob blob-2" aria-hidden="true" />
          </div>

          <div className="hero-stat-card card-1">
            <span className="stat-number">3+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="hero-stat-card card-2">
            <span className="stat-number">2</span>
            <span className="stat-label">Internships</span>
          </div>
        </div>

      </div>

      <a href="#skills" className="scroll-hint" aria-label="Scroll to skills">
        <div className="scroll-hint-inner">
          <div className="scroll-dot" />
        </div>
      </a>
    </section>
  )
}
