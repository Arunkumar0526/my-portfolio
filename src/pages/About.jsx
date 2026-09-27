export default function About() {
  return (
    <section className="page active" id="about">
      <div className="wrap">
        <span className="eyebrow">
          <i className="fa-solid fa-user"></i>
          Get to know me
        </span>

        <div className="about-grid">
          <div className="about-copy">
            <h2>About Me</h2>
            <p>
              I&apos;m Arun Kumar, a passionate Python Web Developer and Freelancer.
              I love building clean, scalable and user-friendly web applications.
              I enjoy learning new technologies and working on real-world problems.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <div className="icon-chip">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <div className="label">Location</div>
                  <div className="value">Chennai,Tamilnadu</div>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-chip">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <div className="label">Email</div>
                  <div className="value">victorarun32@gmail.com</div>
                </div>
              </div>

              <div className="info-card full">
                <div className="icon-chip">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <div>
                  <div className="label">Experience</div>
                  <div className="value">Fresher (Open to Opportunities)</div>
                </div>
              </div>
            </div>
          </div>

          {/* ABOUT IMAGE */}
          <div className="about-side">
            <div className="photo-card">
              <img src="/images/My pic 2.jpeg" alt="Arun Kumar" className="about-photo" />
              <div className="handwrite" style={{ position: 'absolute' }}>
                Arun<br />Kumar
              </div>
            </div>

            {/* JOURNEY */}
            <div className="panel journey-card">
              <h4>My Journey</h4>
              <p>
                Started my coding journey with Python, explored full stack
                development, and now building projects &amp; freelancing products
                to grow my career and skills.
              </p>

              {/* VIEW RESUME */}
              <a
                href="/images/ARUN-FULL-STACK1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <i className="fa-solid fa-file-lines"></i>
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
