import { motion } from 'framer-motion'
import LearningJourney from '../components/LearningJourney'

const principles = [
  'Break problems into systems and workflows.',
  'Build practical software that solves real needs.',
  'Learn by shipping, testing, and iterating.',
  'Understand the fundamentals before chasing trends.',
  'Keep learning and stay curious across technologies.'
]

function AboutPage() {
  return (
    <motion.main className="page-content page-about" initial={{ y: 12 }} animate={{ y: 0 }} exit={{ y: -8 }}>
      <section className="page-hero">
        <div className="shell-inner narrow-shell">
          <div className="section-tag">ABOUT</div>
          <h1>Engineering mindset <span>with a builder&apos;s instinct.</span></h1>
          <p>
            I am a Computer Science student who enjoys turning ideas into practical software, understanding how systems work, and learning by building real projects.
          </p>
        </div>
      </section>

      <section className="about-story section-shell">
        <div className="shell-inner split-shell">
          <div>
            <h2>Introduction</h2>
            <p>
              My interests lie in software engineering, backend systems, AI, Generative AI, and emerging technologies.
              I enjoy exploring how code, data, and product thinking come together to create useful experiences.
            </p>
          </div>
          <div>
            <h2>Education</h2>
            <p>
              B.Tech Computer Science & Engineering<br />
              KL University<br />
              2024–2028
            </p>
          </div>
        </div>
      </section>

      <section className="page-section section-shell">
        <div className="shell-inner">
          <div className="section-header narrow-header">
            <div className="section-tag">LEARNING GRAPH</div>
            <h2>
              A connected <span>engineering map.</span>
            </h2>
          </div>
          <LearningJourney />
        </div>
      </section>

      <section className="page-section section-shell">
        <div className="shell-inner split-shell principles-shell">
          <div>
            <h2>Current direction</h2>
            <p>
              I am focused on building strong fundamentals in software engineering while exploring AI and modern backend systems.
              My goal is to keep learning through practical projects, technical depth, and real-world problem solving.
            </p>
          </div>
          <div>
            <h2>Developer principles</h2>
            <ul className="principles-list">
              {principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default AboutPage
