import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Experience.css'

const EXPERIENCES = [
  {
    id: 'exp-msj',
    type: 'internship',
    title: 'Full Stack Developer Intern',
    company: 'PT. Multi Spunindo Jaya Tbk.',
    location: 'Indonesia',
    period: 'Jan 2026 – Jul 2026',
    current: true,
    bullets: [
      'Migrated Employee Recruitment System from CodeIgniter (CI) framework to Laravel, improving maintainability and scalability.',
      'Designed system workflows through flowcharts, class diagrams, and technical documentation.',
      'Created intuitive UI/UX designs using Figma prior to the code implementation stage.',
      'Collaborated with the IT team to align system functionality with HR department requirements.',
    ],
    tags: ['Laravel', 'Figma', 'MySQL'],
  },
  {
    id: 'exp-maju',
    type: 'internship',
    title: 'IT Support Intern',
    company: 'Maju Hardware Cellular And Gadget',
    location: 'Indonesia',
    period: 'Nov 2021 – Apr 2022',
    current: false,
    bullets: [
      'Performed custom PC assembly and hardware troubleshooting, ensuring all components met technical specifications.',
      'Conducted end-to-end installation and configuration of operating systems and essential software for newly purchased units.',
    ],
    tags: ['Hardware', 'OS Configuration', 'Troubleshooting'],
  },
]

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-tag">Work History</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-desc">Hands-on internship experience.</p>
        </div>

        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.id}
              id={exp.id}
              className={`timeline-item reveal reveal-delay-${i + 1}`}
            >
              <div className="timeline-marker">
                <div className={`timeline-dot${exp.current ? ' active' : ''}`}>
                  <HiBriefcase size={14} />
                </div>
                {i < EXPERIENCES.length - 1 && <div className="timeline-line" />}
              </div>

              <div className="timeline-card">
                {exp.current && <span className="current-badge">Current</span>}
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                </div>

                <div className="exp-meta">
                  <span className="exp-meta-item">
                    <HiCalendar size={14} /> {exp.period}
                  </span>
                  <span className="exp-meta-item">
                    <HiLocationMarker size={14} /> {exp.location}
                  </span>
                </div>

                <ul className="exp-bullets">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>

                <div className="exp-tags">
                  {exp.tags.map((t) => (
                    <span key={t} className="exp-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
