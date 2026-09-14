import SpaceBackground from './SpaceBackground'
function Hero() {
  return (
    <section id="home" className="hero-section">
      <SpaceBackground />
      <div className="hero-content">

        <div className="hero-photo">
          <img src="/assets/profile.png" alt="Lokesh Mandadapu" />
        </div>

        <div className="hero-intro">
          <p className="hero-greeting">HELLO, I'M</p>

          <h1>
            <span>LOKESH</span>
            <span>MANDADAPU</span>
          </h1>

          <h2>Software Engineer in the Making.</h2>

          <p className="hero-description">
            I build practical software, explore AI and GenAI,
            and turn ideas into working systems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore Projects
            </a>

            <a
              href="https://github.com/lokesh-mandadapu"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero