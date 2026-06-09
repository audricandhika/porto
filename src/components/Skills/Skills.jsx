import {
  SiPhp, SiDart, SiLaravel, SiFlutter,
  SiFigma, SiPostgresql, SiMysql, SiGit, SiGitlab, SiGithub,
} from 'react-icons/si'
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaDatabase,
} from 'react-icons/fa'
import { MdNetworkCheck } from 'react-icons/md'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Skills.css'

const CATEGORIES = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'PHP',    icon: SiPhp,     color: '#777BB4' },
      { name: 'Java',   icon: FaJava,    color: '#ED8B00' },
      { name: 'Dart',   icon: SiDart,    color: '#0175C2' },
      { name: 'Python', icon: FaPython,  color: '#3776AB' },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    ],
  },
  {
    name: 'Frontend & Design',
    skills: [
      { name: 'HTML5',  icon: FaHtml5,   color: '#E34F26' },
      { name: 'CSS3',   icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Figma',  icon: SiFigma,   color: '#F24E1E' },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'PostgreSQL',  icon: SiPostgresql, color: '#336791' },
      { name: 'MySQL',       icon: SiMysql,       color: '#4479A1' },
      { name: 'SQL Server',  icon: FaDatabase,    color: '#CC2927' },
    ],
  },
  {
    name: 'Tools & Version Control',
    skills: [
      { name: 'Git',                 icon: SiGit,          color: '#F05032' },
      { name: 'GitHub',              icon: SiGithub,       color: '#24292E' },
      { name: 'GitLab',              icon: SiGitlab,       color: '#FCA121' },
      { name: 'Cisco Packet Tracer', icon: MdNetworkCheck, color: '#1BA0D7' },
    ],
  },
]

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">Hard Skills</h2>
          <p className="section-desc">Technologies and tools I work with regularly.</p>
        </div>

        <div className="skills-categories">
          {CATEGORIES.map((cat, ci) => (
            <div key={cat.name} className={`skill-cat reveal reveal-delay-${(ci % 4) + 1}`}>
              <h3 className="cat-name">{cat.name}</h3>
              <div className="skill-grid">
                {cat.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="skill-chip"
                      id={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="skill-icon" style={{ color: skill.color, background: `${skill.color}18` }}>
                        <Icon size={22} />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
