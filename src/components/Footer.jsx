import { socialLinks } from '../data/profiles'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">LOKESH</div>
          <p>Software Engineer · AI Builder · Problem Solver</p>
          <p className="footer-copy">Building software, exploring AI, and turning ideas into real systems.</p>
        </div>

        <div className="footer-links">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">© 2026 Lokesh Mandadapu</div>
    </footer>
  )
}

export default Footer
