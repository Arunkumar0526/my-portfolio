import { useState, useRef } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)
  const timeoutRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    formRef.current?.reset()

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="page active" id="contact">
      <div className="wrap">
        <span className="eyebrow"><i className="fa-solid fa-comment-dots"></i> Get In Touch</span>
        <div className="section-head" style={{ marginBottom: 0 }}>
          <h2>Get In Touch</h2>
          <p>Have a project, question or just want to say hello? Feel free to reach out, I&apos;d love to hear from you.</p>
        </div>

        <div className="contact-grid">
          <div>
            <div className="contact-info-item">
              <div className="icon-chip"><i className="fa-solid fa-envelope"></i></div>
              <div>
                <div className="label" style={{ fontSize: '.78rem', color: 'var(--text-dimmer)' }}>Email</div>
                <div className="value" style={{ fontWeight: 600 }}>victorarun32@gmail.com</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="icon-chip"><i className="fa-solid fa-phone"></i></div>
              <div>
                <div className="label" style={{ fontSize: '.78rem', color: 'var(--text-dimmer)' }}>Phone</div>
                <div className="value" style={{ fontWeight: 600 }}>+91 93427 41283</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="icon-chip"><i className="fa-solid fa-location-dot"></i></div>
              <div>
                <div className="label" style={{ fontSize: '.78rem', color: 'var(--text-dimmer)' }}>Location</div>
                <div className="value" style={{ fontWeight: 600 }}>Chennai, Tamil Nadu</div>
              </div>
            </div>

            <div className="social-row">
              <a href="https://www.linkedin.com/in/arun-kumar--j" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://github.com/Arunkumar0526" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
              <a href="https://wa.me/919342741283" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="mailto:victorarun32@gmail.com" className="social-circle" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
              <a href="https://www.instagram.com/im_.arunn?igsh=cmcwYTJwem02dHJ0" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>

          <div className="panel form-card">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name <span className="req">*</span></label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Email <span className="req">*</span></label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>Purpose <span className="req">*</span></label>
                <select required defaultValue="">
                  <option value="" disabled>Select purpose</option>
                  <option>Freelance Project</option>
                  <option>Job Opportunity</option>
                  <option>Collaboration</option>
                  <option>Just Saying Hi</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message <span className="req">*</span></label>
                <textarea placeholder="Type your message here..." required></textarea>
              </div>
              <button type="submit" className="btn btn-grad btn-full">Send Message</button>
              <p className={`form-msg ok${submitted ? ' show' : ''}`}>
                <i className="fa-solid fa-circle-check"></i> Thanks! Your message has been noted.
              </p>
            </form>

            <div className="divider-text">Or chat directly on WhatsApp</div>
            <a href="https://wa.me/919342741283" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-full">
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
