import { motion } from 'framer-motion'
import CertificationSection from '../components/CertificationSection'

function CertificationsPage() {
  return (
    <motion.main className="page-content" initial={{ y: 12 }} animate={{ y: 0 }} exit={{ y: -8 }}>
      <section className="page-hero page-hero-compact">
        <div className="shell-inner narrow-shell">
          <div className="section-tag">CERTIFICATIONS</div>
          <h1>Learning with <span>real-world focus.</span></h1>
        </div>
      </section>
      <CertificationSection />
    </motion.main>
  )
}

export default CertificationsPage
