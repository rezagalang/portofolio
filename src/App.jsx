import { useEffect, useRef } from 'react'
import { useContent, useLang } from './i18n.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import { useScrollReveal } from './hooks.js'
import { gsap, ScrollTrigger, prefersReducedMotion } from './lib/gsap.js'
import { startSmoothScroll } from './lib/smoothScroll.js'

export default function App() {
  useScrollReveal()
  const progressRef = useRef(null)
  const lang = useLang()
  const { ui } = useContent()

  useEffect(() => {
    // teks berganti panjangnya, jadi hitung ulang posisi trigger scroll
    const t = setTimeout(() => ScrollTrigger.refresh(), 100)
    return () => clearTimeout(t)
  }, [lang])

  useEffect(() => {
    const stop = startSmoothScroll()
    return () => stop?.()
  }, [])

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    window.addEventListener('load', refresh)
    return () => window.removeEventListener('load', refresh)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion() || !progressRef.current) return
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => gsap.set(progressRef.current, { scaleX: self.progress }),
    })
    return () => st.kill()
  }, [])

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-ink px-4 py-2 text-sm text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {ui.skipToContent}
      </a>
      <div
        ref={progressRef}
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-accent"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden="true"
      />
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}