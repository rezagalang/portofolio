import Lenis from 'lenis'
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap.js'

let lenisInstance = null

/**
 * Starts Lenis smooth scrolling and wires it to GSAP's ticker so
 * ScrollTrigger stays in sync with the eased scroll position instead of
 * the raw (jumpy) native scroll events.
 *
 * Skipped entirely when the user prefers reduced motion — native scroll
 * behaves normally in that case.
 */
export function startSmoothScroll() {
  if (lenisInstance || prefersReducedMotion()) return null

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
  })

  lenis.on('scroll', ScrollTrigger.update)

  const tick = (time) => {
    lenis.raf(time * 1000)
  }
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)

  lenisInstance = lenis
  return () => {
    gsap.ticker.remove(tick)
    lenis.destroy()
    lenisInstance = null
  }
}

export function getLenis() {
  return lenisInstance
}
