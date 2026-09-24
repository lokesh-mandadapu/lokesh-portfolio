import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact' }
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="main-nav" aria-label="Main navigation">
        <Link to="/" className="brand-mark" onClick={() => setOpen(false)}>
          LOKESH
        </Link>

        <div className="nav-links desktop-nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}

          <a href="https://github.com/lokesh-mandadapu" target="_blank" rel="noreferrer" className="nav-link github-link">
            GitHub
          </a>
        </div>

        <button
          type="button"
          className="mobile-nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div id="mobile-menu" className={open ? 'mobile-menu open' : 'mobile-menu'}>
        <div className="mobile-menu-inner">
          <Link to="/" className="mobile-link" onClick={() => setOpen(false)}>
            Home
          </Link>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a href="https://github.com/lokesh-mandadapu" target="_blank" rel="noreferrer" className="mobile-link" onClick={() => setOpen(false)}>
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar