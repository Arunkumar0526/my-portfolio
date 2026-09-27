const FRONTEND = [
  { icon: 'fa-brands fa-html5', color: '#f97316', label: 'HTML' },
  { icon: 'fa-brands fa-css3-alt', color: '#38bdf8', label: 'CSS' },
  { icon: 'fa-brands fa-square-js', color: '#facc15', label: 'JavaScript' },
  { icon: 'fa-brands fa-react', color: '#61dafb', label: 'React' },
  { icon: 'fa-solid fa-wind', color: '#38bdf8', label: 'Tailwind' },
  { icon: 'fa-brands fa-bootstrap', color: '#a855f7', label: 'Bootstrap' },
]

const BACKEND = [
  { icon: 'fa-brands fa-python', color: '#4b8bbe', label: 'Python' },
  { icon: 'fa-solid fa-bolt', color: '#22c55e', label: 'FastAPI' },
  { icon: 'fa-solid fa-network-wired', color: '#60a5fa', label: 'REST APIs' },
]

const DATABASE = [
  { icon: 'fa-solid fa-database', color: '#60a5fa', label: 'MySQL' },
  { icon: 'fa-solid fa-table', color: '#38bdf8', label: 'SQL' },
]

const TOOLS = [
  { icon: 'fa-brands fa-git-alt', color: '#f4511e', label: 'Git' },
  { icon: 'fa-brands fa-github', color: undefined, label: 'GitHub' },
  { icon: 'fa-solid fa-paper-plane', color: '#fb923c', label: 'Postman' },
  { icon: 'fa-solid fa-play', color: '#e5e7eb', label: 'Vercel' },
  { icon: 'fa-solid fa-server', color: '#a78bfa', label: 'Render' },
]

const ADDITIONAL = [
  { icon: 'fa-brands fa-docker', color: '#38bdf8', label: 'Docker' },
  { icon: 'fa-brands fa-aws', color: '#f59e0b', label: 'AWS' },
]

function SkillTag({ icon, color, label }) {
  return (
    <div className="skill-tag">
      <i className={icon} style={color ? { color } : undefined}></i> {label}
    </div>
  )
}

export default function Skills() {
  return (
    <section className="page active" id="skills">
      <div className="wrap">
        <span className="eyebrow"><i className="fa-solid fa-code"></i> Technical Skills</span>
        <div className="section-head" style={{ marginBottom: 0 }}>
          <h2>Skills</h2>
          <p>Technologies I work with and have experience in.</p>
        </div>

        <div className="skills-cols">
          <div className="skill-box">
            <div className="mini-eyebrow"><i className="fa-solid fa-display"></i> Frontend</div>
            <div className="skill-tags">
              {FRONTEND.map((s) => <SkillTag key={s.label} {...s} />)}
            </div>
          </div>

          <div className="skill-box">
            <div className="mini-eyebrow"><i className="fa-solid fa-server"></i> Backend</div>
            <div className="skill-tags" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
              {BACKEND.map((s) => <SkillTag key={s.label} {...s} />)}
            </div>
          </div>

          <div className="skill-box">
            <div className="mini-eyebrow"><i className="fa-solid fa-database"></i> Database</div>
            <div className="skill-tags" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
              {DATABASE.map((s) => <SkillTag key={s.label} {...s} />)}
            </div>
          </div>

          <div className="skill-box">
            <div className="mini-eyebrow"><i className="fa-solid fa-screwdriver-wrench"></i> Tools &amp; DevOps</div>
            <div className="skill-tags" style={{ gridTemplateColumns: 'repeat(5,1fr)' }}>
              {TOOLS.map((s) => <SkillTag key={s.label} {...s} />)}
            </div>
          </div>
        </div>

        <div className="skill-box" style={{ marginTop: '20px' }}>
          <div className="mini-eyebrow"><i className="fa-solid fa-plus"></i> Additional</div>
          <div className="skill-tags" style={{ gridTemplateColumns: 'repeat(2,120px)' }}>
            {ADDITIONAL.map((s) => <SkillTag key={s.label} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
