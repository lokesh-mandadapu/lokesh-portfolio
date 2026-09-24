import { motion } from 'framer-motion'

function ContactPage() {
  return (
    <motion.main className="page-content" initial={{ y: 12 }} animate={{ y: 0 }} exit={{ y: -8 }}>
      <section className="page-hero page-hero-compact">
        <div className="shell-inner narrow-shell">
          <div className="section-tag">CONTACT</div>
          <h1>Let&apos;s connect <span>and build.</span></h1>
        </div>
      </section>

      <section className="section-shell contact-page-section">
        <div className="shell-inner contact-inner">
          <div className="contact-card">
            <p>
              I&apos;m interested in practical software engineering, AI product ideas, backend systems, and problem-solving collaborations.
            </p>
            <a href="mailto:2410030cse@gmail.com" className="button primary-button">
              2410030cse@gmail.com
            </a>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default ContactPage
