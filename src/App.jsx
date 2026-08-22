import { useEffect, useRef } from 'react'
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

  // Smooth scroll (skipped under prefers-reduced-motion — see smoothScroll.js)
  useEffect(() => {
    const stop = startSmoothScroll()
    return () => stop?.()
  }, [])

  // A thin read-progress bar under the nav — functional, not decorative:
  // it mirrors how far down the page you are, in keeping with the
  // "system status" framing rather than being a generic gradient flourish.
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
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
