import { useEffect } from 'react'

// project: the currently selected entry from projectData.js, or null when closed.
// onClose: callback to clear the selection and hide the modal.
export default function ProjectModal({ project, onClose }) {
  const isOpen = Boolean(project)

  // Close on Escape, and lock page scroll while the modal is open —
  // matches the original single-file behaviour.
  useEffect(() => {
    if (!isOpen) return

    document.body.classList.add('modal-open')
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('modal-open')
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="details-modal show"
      aria-hidden="false"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="details-dialog" role="dialog" aria-modal="true" aria-labelledby="detailsTitle">
        <button className="details-close" aria-label="Close details" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <span className="eyebrow">{project.type}</span>
        <h3 id="detailsTitle">{project.title}</h3>
        <div className="details-category">{project.category}</div>
        <p className="details-description">{project.description}</p>
        <div className="details-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
