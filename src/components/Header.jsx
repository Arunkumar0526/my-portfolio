import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/freelance', label: 'Freelance' },
  { to: '/services', label: 'Services' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenuStyle = {
    position: 'absolute',
    top: '64px',
    left: 0,
    right: 0,
    background: 'rgba(5,8,16,.98)',
    flexDirection: 'column',
    padding: '20px 24px',
    gap: '18px',
    borderBottom: '1px solid var(--border)',
    zIndex: 60,
    display: 'flex',
  }

  return (
    <header>
      <div className="wrap nav-row">
        <Link className="logo" to="/" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark">AK</span>
          <span>Arun Kumar</span>
        </Link>

        <nav className="links" id="navLinks" style={menuOpen ? openMenuStyle : undefined}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <Link className="btn btn-grad btn-sm" to="/contact">Hire Me</Link>
          <button
            className="burger"
            id="burgerBtn"
            aria-label="Menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  )
}
