function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="hero-label">LOKESH MANDADAPU</p>

        <h1>
          Software Engineer
          <span>in the Making.</span>
        </h1>

        <p className="hero-description">
          I build practical software, explore AI, and learn by turning ideas
          into working systems.
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
    </section>
  )
}

export default Hero