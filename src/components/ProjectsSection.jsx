import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section className="projects-section section-shell" id="projects">
      <div className="shell-inner">
        <div className="section-header">
          <div className="section-tag">PROJECTS</div>
          <h2>
            Selected <span>builds</span>
          </h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
