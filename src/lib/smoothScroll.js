import Lenis from 'lenis'
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap.js'

let lenisInstance = null

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

export function scrollToId(id) {
  const target = document.getElementById(id)
  if (!target) return
  if (lenisInstance) lenisInstance.scrollTo(target, { offset: -72, duration: 1.2 })
  else target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}
