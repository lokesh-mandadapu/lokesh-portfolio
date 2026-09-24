function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="projects-heading">
        <p className="projects-label">SELECTED WORK</p>

        <h2>
          Things I've <span>built.</span>
        </h2>

        <p>
          A collection of projects built while learning,
          experimenting, and solving real problems.
        </p>
      </div>

      <div className="projects-list">

        <article className="project-item">
          <div className="project-number">01</div>

          <div className="project-info">
            <h3>FINSIGHT</h3>

            <p className="project-tagline">
              Financial Market Intelligence & Quantitative Analytics Platform.
            </p>

            <p className="project-description">
              A research and simulation platform for exploring market data,
              portfolio valuation, risk analysis, and reproducible strategy
              experiments.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>PostgreSQL</span>
              <span>React</span>
            </div>
          </div>

          <a
            href="/projects/finsight"
            className="project-link"
          >
            VIEW PROJECT →
          </a>
        </article>

      </div>

    </section>
  )
}

export default Projects