import { Link, NavLink } from 'react-router-dom'

const FOOTER_NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/freelance', label: 'Freelance' },
  { to: '/services', label: 'Services' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-row">
          <div className="footer-brand">
            <Link className="logo" to="/">
              <span className="logo-mark">AK</span>
              <span>Arun Kumar</span>
            </Link>
            <p>Python Web Developer &amp; Freelancer</p>
          </div>

          <div className="footer-links">
            {FOOTER_NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="footer-cta">
            <span>Have a project in mind?</span>
            <Link className="btn btn-grad btn-sm" to="/contact">
              Let&apos;s Talk <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>

        <div className="footer-social">
          <a href="https://github.com/Arunkumar0526" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/arun-kumar--j" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://wa.me/919342741283" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="mailto:victorarun32@gmail.com"><i className="fa-solid fa-envelope"></i></a>
          <a href="https://www.instagram.com/im_.arunn?igsh=cmcwYTJwem02dHJ0" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
        </div>

        <p className="footer-bottom">&copy; 2026 Arun Kumar. All rights reserved.</p>
      </div>
    </footer>
  )
}
