import { Link } from 'react-router-dom'

const SERVICES = [
  { className: 'svc-website', icon: 'fa-solid fa-laptop-code', title: 'Website Development', desc: 'Modern, responsive and SEO-friendly websites.' },
  { className: 'svc-python', icon: 'fa-brands fa-python', title: 'Python Backend Development', desc: 'Scalable and secure backend solutions.' },
  { className: 'svc-api', icon: 'fa-solid fa-plug', title: 'REST API Development', desc: 'Connect your applications and services.' },
  { className: 'svc-react', icon: 'fa-brands fa-react', title: 'React Frontend Development', desc: 'Fast and interactive user interfaces.' },
  { className: 'svc-db', icon: 'fa-solid fa-database', title: 'MySQL Database Integration', desc: 'Reliable and optimized database solutions.' },
  { className: 'svc-deploy', icon: 'fa-solid fa-rocket', title: 'Deployment & Maintenance', desc: 'Keep your website secure and updated.' },
  { className: 'svc-wa', icon: 'fa-brands fa-whatsapp', title: 'WhatsApp Enquiry Integration', desc: 'Direct leads to WhatsApp or Email.' },
]

const WHY_ME = [
  { color: '#60a5fa', icon: 'fa-solid fa-mobile-screen-button', title: 'Mobile Optimized', desc: 'Perfect experience on all devices.' },
  { color: '#2dd4bf', icon: 'fa-solid fa-magnifying-glass', title: 'SEO Friendly', desc: 'Better visibility in search engines.' },
  { color: '#a78bfa', icon: 'fa-solid fa-bolt', title: 'Fast Turnaround', desc: 'Clear timelines and steady updates.' },
]

export default function Services() {
  return (
    <section className="page active" id="services">
      <div className="wrap">
        <div className="services-grid">
          <div className="panel card-cols">
            <h3 style={{ fontSize: '1.5rem' }}>Services</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '.92rem', marginTop: '8px' }}>
              Professional web development and digital solutions to help your business grow.
            </p>

            <div className="services-list">
              {SERVICES.map((s) => (
                <Link key={s.title} className={`service-row ${s.className}`} to="/contact">
                  <div className="icon-chip"><i className={s.icon}></i></div>
                  <div><h5>{s.title}</h5><p>{s.desc}</p></div>
                  <i className="fa-solid fa-arrow-right arrow"></i>
                </Link>
              ))}
            </div>
          </div>

          <div className="side-col">
            <div className="panel card-cols">
              <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>Why work with me</h4>
              <p style={{ color: 'var(--text-dim)', fontSize: '.85rem', marginBottom: '16px' }}>
                A few things that make the experience smooth from brief to launch.
              </p>

              <div className="services-list" style={{ gap: 0 }}>
                {WHY_ME.map((item, i) => (
                  <div
                    key={item.title}
                    className="service-row"
                    style={{
                      border: 'none',
                      borderBottom: i < WHY_ME.length - 1 ? '1px solid var(--border)' : 'none',
                      borderRadius: 0,
                      padding: '14px 4px',
                      cursor: 'default',
                    }}
                  >
                    <div className="icon-chip" style={{ color: item.color }}>
                      <i className={item.icon}></i>
                    </div>
                    <div><h5>{item.title}</h5><p>{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
