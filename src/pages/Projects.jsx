import { useState } from 'react'
import { Link } from 'react-router-dom'
import { personalProjects } from '../data/projectData.js'
import ProjectModal from '../components/ProjectModal.jsx'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="page active" id="projects">
      <div className="wrap">
        <div className="panel card-cols">
          <div className="proj-head">
            <div>
              <h3>Personal Projects</h3>
              <p>
                These are the projects I built to improve my skills and explore
                real-world problems. Each project helped me learn something new
                and grow as a developer.
              </p>
            </div>

            <Link className="link-arrow" to="/freelance">
              See Freelance Work
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="mini-grid three">
            {personalProjects.map((project) => (
              <div className="proj-card" key={project.key}>
                <div className="proj-thumb">
                  <img src={project.image} alt={project.name} className="project-image" />
                </div>
                <div className="proj-body">
                  <h5>{project.name}</h5>
                  <span className="tag">{project.tag}</span>
                  <button className="view-details" onClick={() => setSelected(project)}>
                    View Details
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
