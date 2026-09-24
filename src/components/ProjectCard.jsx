import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projectAssetCandidates, useAvailableAssets } from '../utils/assets'

function ProjectCard({ project }) {
  const availableImages = useAvailableAssets(projectAssetCandidates(project.slug))
  const previewImage = availableImages[0]

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className={`project-visual gradient-${project.slug}`}>
        {previewImage && <img src={previewImage} alt={`${project.name} project preview`} />}
        <span className="project-number">{project.number}</span>
        <div className="project-visual-overlay" />
      </div>

      <div className="project-body">
        <p className="project-kicker">{project.number}</p>
        <h3>{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-summary">{project.shortDescription}</p>

        <div className="project-tags">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="text-button">
            GitHub
          </a>
          <a
            href={project.liveDemo === 'PASTE_LIVE_DEMO_LINK_HERE' ? '#' : project.liveDemo}
            target={project.liveDemo === 'PASTE_LIVE_DEMO_LINK_HERE' ? undefined : '_blank'}
            rel={project.liveDemo === 'PASTE_LIVE_DEMO_LINK_HERE' ? undefined : 'noreferrer'}
            className="text-button"
            aria-disabled={project.liveDemo === 'PASTE_LIVE_DEMO_LINK_HERE'}
          >
            Demo
          </a>
          <Link to={`/projects/${project.slug}`} className="primary-link">
            View Project
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
