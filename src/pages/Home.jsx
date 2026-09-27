import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="page active" id="home">
      <div className="wrap hero-grid">
        <div>
          <p className="hero-hello">Hello, I&apos;m</p>
          <h1>Arun <span className="grad">Kumar</span></h1>
          <p className="role">Python Web Developer &amp; Freelancer</p>
          <p className="desc">
            I build modern web applications with Python, React and modern technologies.
            I love solving real-world problems and creating useful digital solutions.
          </p>
          <div className="hero-btns">
            <Link className="btn btn-grad" to="/projects">View My Projects</Link>
            <Link className="btn btn-outline" to="/contact">Contact Me</Link>
          </div>
          <div className="tech-row">
            <span className="tech-item"><i className="fa-brands fa-python python"></i> Python</span>
            <span className="tech-item"><i className="fa-brands fa-react react"></i> React</span>
            <span className="tech-item"><i className="fa-solid fa-bolt" style={{ color: '#38bdf8' }}></i> FastAPI</span>
            <span className="tech-item"><i className="fa-solid fa-database" style={{ color: '#f97316' }}></i> MySQL</span>
            <span className="tech-item"><i className="fa-brands fa-git-alt git"></i> Git</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="blob"></div>
          <div className="avatar-card">
            <div className="avatar-fill">
              <img src="/images/My pic 2.jpeg" alt="Arun Kumar" className="profile-image" />
              <span className="image-label"></span>
            </div>
          </div>
          <div className="handwrite">
            Build<br />Create<br />Grow
            <span className="sig">— Arun Kumar</span>
          </div>
          <div className="available-badge">
            <span className="dot-green"></span> Available for<br />Freelance Projects
          </div>
        </div>
      </div>

      <Link className="scroll-chevron" to="/about" aria-label="Next: About">
        <i className="fa-solid fa-chevron-down"></i>
      </Link>
    </section>
  )
}
