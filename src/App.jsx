import { useEffect, useRef } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Marquee from './components/Marquee.jsx'
import { useScrollReveal } from './hooks.js'
import { gsap, ScrollTrigger, prefersReducedMotion } from './lib/gsap.js'
import { startSmoothScroll } from './lib/smoothScroll.js'

export default function App() {
  useScrollReveal()
  const progressRef = useRef(null)

  // Guliran halus/smooth scroll (dilewati jika opsi 'prefers-reduced-motion' aktif — lihat smoothScroll.js)
  useEffect(() => {
    const stop = startSmoothScroll()
    return () => stop?.()
  }, [])

  // Indikator kemajuan membaca (read-progress bar) tipis di bawah navigasi — bersifat fungsional, bukan dekoratif:
  // elemen ini mencerminkan sejauh mana Anda telah menggulir halaman, sejalan dengan
  // konsep "status sistem" ketimbang sekadar hiasan gradien biasa.
  useEffect(() => {
    if (prefersReducedMotion() || !progressRef.current) return

    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        gsap.set(progressRef.current, { scaleX: self.progress })
      },
    })

    return () => st.kill()
  }, [])

  return (
    <div className="min-h-screen">
      <div
        ref={progressRef}
        className="fixed top-0 left-0 h-[2px] w-full bg-live origin-left z-[60]"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden="true"
      />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}