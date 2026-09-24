import { codingProfiles } from '../data/profiles'

function CodingProfiles() {
  return (
    <section className="profiles-section section-shell" id="profiles">
      <div className="shell-inner">
        <div className="section-header">
          <div className="section-tag">CODING PROFILES</div>
          <h2>
            Practice, <span>problem solving, and learning</span>
          </h2>
        </div>

        <div className="profiles-grid">
          {codingProfiles.map((profile) => (
            <a key={profile.name} href={profile.url} target="_blank" rel="noreferrer" className="profile-card">
              <div className={`profile-badge ${profile.accent}`} />
              <div>
                <h3>{profile.name}</h3>
                <p>{profile.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles
