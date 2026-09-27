import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Freelance from './pages/Freelance.jsx'
import Services from './pages/Services.jsx'
import Skills from './pages/Skills.jsx'
import Experience from './pages/Experience.jsx'
import Contact from './pages/Contact.jsx'

// Mirrors the original single-file behaviour of jumping to the top
// of the page whenever the visitor navigates to a new section.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
