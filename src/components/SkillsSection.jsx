import { skillGroups } from '../data/skills'

function SkillsSection() {
  return (
    <section className="skills-section section-shell" id="skills">
      <div className="shell-inner">
        <div className="section-header narrow-header">
          <div className="section-tag">SKILLS</div>
          <h2>
            Built for <span>systems, code, and AI.</span>
          </h2>
        </div>

        <div className="skills-layout">
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h3>{group.title}</h3>
                <div className="skill-pills">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skill-constellation" aria-hidden="true">
            <div className="constellation-core" />
            {Array.from({ length: 18 }).map((_, index) => (
              <span key={index} className={`constellation-node node-${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
