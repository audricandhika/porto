import { HiExternalLink } from 'react-icons/hi'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Projects.css'

const PROJECTS = [
  {
    id: 'project-simtoeic',
    year: '2025',
    type: 'Full Stack',
    name: 'SIMTOEIC',
    subtitle: 'TOEIC Management Information System',
    description:
      'A full-stack web-based TOEIC Management System built for Politeknik Negeri Malang. Supports exam registration, scheduling, result announcements, and automated Telegram notifications with role-based access for students, admins, and academic staff.',
    tags: ['Laravel', 'MySQL', 'Stisla', 'Telegram API'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '🏆',
    highlight: 'National Copyright (DJKI)',
    github: 'https://github.com/audricandhika/simtoeic-polinema',
  },
  {
    id: 'project-hris',
    year: '2025',
    type: 'Full Stack',
    name: 'HRIS',
    subtitle: 'Human Resource Information System',
    description:
      'A mobile-based HR management system featuring real-time clock-in/out tracking and a calendar-based employee scheduling module. Built RESTful APIs with Laravel for backend and a responsive mobile interface with Flutter.',
    tags: ['Flutter', 'Laravel', 'RESTful API', 'MySQL'],
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    icon: '📱',
    highlight: null,
    github: 'https://github.com/Pauaza/pbl',
  },
  {
    id: 'project-sipreman',
    year: '2024',
    type: 'Back End',
    name: 'SiPreman',
    subtitle: 'Sistem Informasi Prestasi Mahasiswa',
    description:
      'A backend system for managing, validating, and displaying student academic achievements. Implemented CRUD operations, database integration, data validation, and role-based access control for Admins and Students.',
    tags: ['Laravel', 'MySQL', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: '🎓',
    highlight: null,
    github: 'https://github.com/audricandhika/prestasi-polinema',
  },
]

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-tag">My Project</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-desc">A selection of systems and applications I have built.</p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <article
              key={p.id}
              id={p.id}
              className={`project-card reveal reveal-delay-${i + 1}`}
            >
              <div className="project-visual" style={{ background: p.gradient }}>
                <span className="project-emoji">{p.icon}</span>
                <span className="project-type-badge">{p.type}</span>
              </div>

              <div className="project-body">
                <div className="project-year">{p.year}</div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-subtitle">{p.subtitle}</p>
                <p className="project-desc">{p.description}</p>

                {p.highlight && (
                  <div className="project-highlight">
                    🏅 {p.highlight}
                  </div>
                )}

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`View ${p.name} on GitHub`}
                >
                  View Project <HiExternalLink size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
