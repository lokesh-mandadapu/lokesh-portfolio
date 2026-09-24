import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { projectAssetCandidates, useAvailableAssets } from '../utils/assets'

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const availableImages = useAvailableAssets(project ? projectAssetCandidates(project.slug) : [])

  if (!project) {
    return (
      <main className="page-content page-detail-empty">
        <div className="shell-inner narrow-shell">
          <h1>Project not found.</h1>
          <Link to="/projects" className="button primary-button">Back to Projects</Link>
        </div>
      </main>
    )
  }

  return (
    <motion.main className="page-content" initial={{ y: 12 }} animate={{ y: 0 }} exit={{ y: -8 }}>
      <section className="project-detail-hero">
        <div className="shell-inner detail-shell">
          <p className="section-tag">PROJECT {project.number}</p>
          <h1>{project.name}</h1>
          <p className="detail-tagline">{project.tagline}</p>

          <div className="detail-links">
            <a href={project.github} target="_blank" rel="noreferrer" className="button primary-button">GitHub</a>
            <a
              href={project.liveDemo === 'PASTE_LIVE_DEMO_LINK_HERE' ? '#' : project.liveDemo}
              target={project.liveDemo === 'PASTE_LIVE_DEMO_LINK_HERE' ? undefined : '_blank'}
              rel={project.liveDemo === 'PASTE_LIVE_DEMO_LINK_HERE' ? undefined : 'noreferrer'}
              className="button secondary-button"
              aria-disabled={project.liveDemo === 'PASTE_LIVE_DEMO_LINK_HERE'}
            >
              Live Demo
            </a>
          </div>
        </div>
      </section>

      <section className="project-detail-content section-shell">
        <div className="shell-inner detail-grid">
          <article className="detail-panel">
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </article>
          <article className="detail-panel">
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </article>
          <article className="detail-panel">
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </article>
          <article className="detail-panel">
            <h2>Key Features</h2>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
          <article className="detail-panel">
            <h2>Technology Stack</h2>
            <div className="project-tags detail-tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
          <article className="detail-panel">
            <h2>Engineering Details</h2>
            <ul>
              {project.engineeringDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="project-gallery section-shell">
        <div className="shell-inner">
          <div className="gallery-header">
            <h2>Project Gallery</h2>
          </div>
          <div className="gallery-grid">
            {availableImages.length > 0
              ? availableImages.map((imagePath) => (
                <div key={imagePath} className={`gallery-item gradient-${project.slug}`}>
                  <img src={imagePath} alt={`${project.name} screenshot`} />
                </div>
              ))
              : (
                <div className={`gallery-item gallery-placeholder gradient-${project.slug}`}>
                  <span>{project.name} screenshots coming soon</span>
                </div>
              )}
          </div>
        </div>
      </section>

      <section className="section-shell project-next">
        <div className="shell-inner next-shell">
          <Link to="/projects" className="back-link">← Back to projects</Link>
        </div>
      </section>
    </motion.main>
  )
}

export default ProjectDetailPage
