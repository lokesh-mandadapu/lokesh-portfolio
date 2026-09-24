import AboutPreview from '../components/AboutPreview'
import Hero from '../components/Hero'
import ProjectsSection from '../components/ProjectsSection'
import CertificationSection from '../components/CertificationSection'
import SkillsSection from '../components/SkillsSection'
import CodingProfiles from '../components/CodingProfiles'
import ContactSection from '../components/ContactSection'
import LearningJourney from '../components/LearningJourney'

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProjectsSection />
      <CertificationSection />
      <SkillsSection />
      <section className="journey-section section-shell" id="journey">
        <div className="shell-inner">
          <div className="section-header narrow-header">
            <div className="section-tag">ENGINEERING JOURNEY</div>
            <h2>
              Learning, <span>building, and iterating.</span>
            </h2>
          </div>
          <LearningJourney />
        </div>
      </section>
      <CodingProfiles />
      <ContactSection />
    </>
  )
}

export default Home
