import { useState } from 'react'
import { certifications } from '../data/certifications'
import { useAvailableAssets } from '../utils/assets'

function CertificationLightbox({ item, onClose }) {
  if (!item) return null

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={item.name}>
      <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close certification preview">
          ×
        </button>

        <div className="lightbox-preview">
          {item.image ? <img src={item.image} alt={item.name} /> : <div className="lightbox-placeholder">{item.name}</div>}
        </div>

        <div className="lightbox-content">
          <p className="lightbox-kicker">{item.issuer}</p>
          <h3>{item.name}</h3>
          <p>{item.summary}</p>
        </div>
      </div>
    </div>
  )
}

function CertificationSection() {
  const [active, setActive] = useState(null)
  const availableImages = useAvailableAssets(certifications.map((certificate) => certificate.image))
  const resolvedCertifications = certifications.map((certificate) => ({
    ...certificate,
    image: availableImages.includes(certificate.image) ? certificate.image : null
  }))

  return (
    <section className="certifications-section section-shell" id="certifications">
      <div className="shell-inner">
        <div className="section-header">
          <div className="section-tag">CERTIFICATIONS</div>
          <h2>
            Credentials <span>earned</span>
          </h2>
        </div>

        <div className="certificate-grid">
          {resolvedCertifications.map((certificate) => (
            <button
              key={certificate.id}
              type="button"
              className="certificate-card"
              onClick={() => setActive(certificate)}
              aria-label={`Open certificate ${certificate.name}`}
            >
              <div className="certificate-visual">
                {certificate.image ? <img src={certificate.image} alt={certificate.name} /> : <span>{certificate.name}</span>}
              </div>
              <div className="certificate-meta">
                <p>{certificate.issuer}</p>
                <h3>{certificate.name}</h3>
              </div>
            </button>
          ))}
        </div>

        <CertificationLightbox item={active} onClose={() => setActive(null)} />
      </div>
    </section>
  )
}

export default CertificationSection
