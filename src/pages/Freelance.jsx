import { useState } from 'react'
import { Link } from 'react-router-dom'
import { freelanceProjects } from '../data/projectData.js'
import ProjectModal from '../components/ProjectModal.jsx'

export default function Freelance() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="page active" id="freelance">
      <div className="wrap">
        <div className="panel card-cols">
          <div className="proj-head">
            <div>
              <h3>Freelance Products / Client Solutions</h3>
              <p>
                Real client projects and digital products I&apos;ve built for businesses.
                These solutions are designed to solve actual business needs.
              </p>
            </div>

            <Link className="link-arrow" to="/projects">
              See Personal Projects
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="mini-grid three">
            {freelanceProjects.map((project) => (
              <div className="proj-card" key={project.key}>
                <div className="proj-thumb">
                  <img src={project.image} alt={project.name} className="project-image" />
                </div>
                <div className="proj-body">
                  <h5>{project.name}</h5>
                  <span className="tag">{project.tag}</span>
                  <span className={`status-pill ${project.status.className}`}>
                    <i className={`fa-solid ${project.status.icon}`}></i>
                    {project.status.label}
                  </span>
                  <button className="view-details" onClick={() => setSelected(project)}>
                    {project.ctaLabel || 'View Details'}
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}

            <div className="more-soon">
              <i className="fa-solid fa-magnifying-glass-chart"></i>
              <div>
                More Client Solutions<br />
                Coming Soon
              </div>
              <Link className="btn btn-outline btn-sm" to="/contact">
                Explore
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
