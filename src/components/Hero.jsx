import { motion } from 'framer-motion'
import SpaceBackground from './SpaceBackground'

function Hero() {
  return (
    <section id="home" className="hero-section">
      <SpaceBackground />

      <div className="hero-content">
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="profile-frame">
            <span className="profile-halo" />
            <span className="profile-orbit profile-orbit-one" />
            <span className="profile-orbit profile-orbit-two" />
            <span className="profile-marker profile-marker-one" />
            <span className="profile-marker profile-marker-two" />
            <img src="/assets/profile.png" alt="Portrait of Lokesh Mandadapu" />
          </div>
        </motion.div>

        <motion.div
          className="hero-intro"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <p className="eyebrow">HELLO, I&apos;M</p>
          <h1>
            <span className="hero-name-line">LOKESH</span>
            <span className="hero-name-line hero-name-accent">MANDADAPU</span>
          </h1>
          <h2>Software Engineer · AI Builder · Problem Solver</h2>
          <p className="hero-description">
            I build practical software, explore AI and GenAI,
            and turn ideas into working systems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button primary-button">
              Explore Projects
            </a>
            <a href="/assets/resume.pdf" target="_blank" rel="noreferrer" className="button secondary-button">
              View Resume
            </a>
            <a href="https://github.com/lokesh-mandadapu" target="_blank" rel="noreferrer" className="button tertiary-button">
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero