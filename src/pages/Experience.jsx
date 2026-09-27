export default function Experience() {
  return (
    <section className="page active" id="experience">
      <div className="wrap">
        <span className="eyebrow"><i className="fa-solid fa-briefcase"></i> Experience</span>
        <div className="section-head" style={{ marginBottom: 0 }}>
          <h2>Experience</h2>
          <p>My Professional Journey</p>
        </div>

        <div className="exp-grid">
          <div>
            <div className="timeline">
              <div className="t-item">
                <div className="t-dot"><i className="fa-solid fa-graduation-cap"></i></div>
                <h5>Python Full Stack Developer Intern</h5>
                <div className="org">Besant Technologies</div>
                <ul>
                  <li>Learned and worked on real-world web applications.</li>
                  <li>Gained hands-on experience in Python, Django/FastAPI, React and database management.</li>
                </ul>
              </div>
              <div className="t-item">
                <div className="t-dot"><i className="fa-solid fa-code-branch"></i></div>
                <h5>Personal Projects</h5>
                <div className="org">Self-driven</div>
                <p>Built multiple web applications to improve my development skills and solve real-world problems.</p>
              </div>
              <div className="t-item">
                <div className="t-dot"><i className="fa-solid fa-handshake"></i></div>
                <h5>Freelance Projects</h5>
                <div className="org">Independent clients</div>
                <p>Developed client websites and digital products for small businesses and local clients.</p>
              </div>
            </div>

            <a
              href="/images/ARUN-FULL-STACK1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ marginTop: '26px' }}
            >
              <i className="fa-solid fa-file-lines"></i> View Full Resume
            </a>
          </div>

          <div className="exp-side">
            <div className="panel quote-card">
              <i className="fa-solid fa-quote-left"></i>
              <p>&quot;Continuous learning is the key to growth.&quot;</p>
              <div className="who">— Arun Kumar</div>
            </div>
            <div className="desk-card">
              <img src="/images/experience/my ex.png" alt="Professional workspace" className="experience-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
