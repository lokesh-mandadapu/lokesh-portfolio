import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function ProjectsPage() {
  return (
    <motion.main className="page-content" initial={{ y: 12 }} animate={{ y: 0 }} exit={{ y: -8 }}>
      <section className="page-hero page-hero-compact">
        <div className="shell-inner narrow-shell">
          <div className="section-tag">PROJECTS</div>
          <h1>Building <span>real systems and ideas.</span></h1>
        </div>
      </section>

      <section className="section-shell">
        <div className="shell-inner">
          <div className="project-grid single-column-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default ProjectsPage
