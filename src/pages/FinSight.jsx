function FinSight() {
  return (
    <main className="finsight-page">

      <section className="finsight-hero">

        <p className="finsight-label">PROJECT 01</p>

        <h1>FINSIGHT</h1>

        <p className="finsight-subtitle">
          Financial Market Intelligence & Quantitative Analytics Platform
        </p>

        <div className="finsight-links">

          <a
            href="https://finsight-ten-umber.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            LIVE DEMO ↗
          </a>

          <a
            href="https://github.com/lokesh-mandadapu/FinSight"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

        </div>

      </section>

      <section className="finsight-grid">

        <div className="finsight-panel">
          <h2>ABOUT THE PROJECT</h2>

          <p>
            FinSight is a financial market intelligence and quantitative
            analytics platform designed for market research, portfolio
            analysis, risk evaluation, and strategy experimentation.
          </p>
        </div>

        <div className="finsight-panel">
          <h2>FEATURES</h2>

          <div className="feature-list">
            <span>Market Analytics</span>
            <span>Portfolio Valuation</span>
            <span>Risk Analysis</span>
            <span>Backtesting</span>
            <span>Experiment History</span>
          </div>
        </div>

        <div className="finsight-panel">
          <h2>TECH STACK</h2>

          <div className="stack-list">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>PostgreSQL</span>
            <span>React</span>
            <span>Vite</span>
          </div>
        </div>

        <div className="finsight-panel">
          <h2>PROJECT GALLERY</h2>

          <div className="finsight-gallery-grid">
            <div>Screenshot 01</div>
            <div>Screenshot 02</div>
            <div>Screenshot 03</div>
          </div>
        </div>

      </section>

    </main>
  )
}

export default FinSight