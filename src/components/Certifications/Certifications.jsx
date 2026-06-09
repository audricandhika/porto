import { HiShieldCheck } from 'react-icons/hi'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Certifications.css'

const CERTS = [
  {
    id: 'cert-djki',
    year: '2025',
    title: 'Intellectual Property (Copyright)',
    subtitle: 'SIMTOEIC Web-Based System',
    issuer: 'DJKI – Ministry of Law and Human Rights',
    regNo: 'Registration No. 000924918',
    description:
      'National copyright certification awarded for the SIMTOEIC web-based TOEIC management system developed at Politeknik Negeri Malang. Recognized by the Directorate General of Intellectual Property of the Republic of Indonesia.',
  },
]

export default function Certifications() {
  const ref = useScrollReveal()

  return (
    <section id="certifications" className="section certs-section" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-tag">Recognition</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-desc">Official certifications and recognitions I have earned.</p>
        </div>

        <div className="certs-grid">
          {CERTS.map((cert) => (
            <div key={cert.id} id={cert.id} className="cert-card reveal reveal-delay-1">
              <div className="cert-icon-wrap">
                <div className="cert-icon">
                  <HiShieldCheck size={32} />
                </div>
                <div className="cert-glow" aria-hidden="true" />
              </div>

              <div className="cert-body">
                <div className="cert-year">{cert.year}</div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-subtitle">{cert.subtitle}</p>
                <p className="cert-desc">{cert.description}</p>

                <div className="cert-footer">
                  <div className="cert-issuer">
                    <span className="cert-issuer-label">Issued by</span>
                    <span className="cert-issuer-name">{cert.issuer}</span>
                  </div>
                  <div className="cert-reg">
                    <span className="cert-reg-badge">{cert.regNo}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
