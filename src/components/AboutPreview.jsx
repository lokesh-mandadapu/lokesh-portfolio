import { Link } from 'react-router-dom'

function AboutPreview() {
  return (
    <section className="about-preview section-shell" id="about">
      <div className="shell-inner">
        <div className="section-tag">ABOUT</div>
        <h2>
          I build things,<br />
          <span>not just code.</span>
        </h2>

        <div className="about-preview-grid">
          <p>
            I am a Computer Science student and builder who enjoys turning ideas into practical software.
            I like breaking down problems, understanding how systems work, learning new technologies, and
            turning ideas into real projects.
          </p>
          <div className="about-interests">
            <span>Software Engineering</span>
            <span>Backend Development</span>
            <span>AI</span>
            <span>Generative AI</span>
            <span>Emerging Technologies</span>
          </div>
        </div>

        <Link to="/about" className="inline-link">
          Explore My Journey →
        </Link>
      </div>
    </section>
  )
}

export default AboutPreview
