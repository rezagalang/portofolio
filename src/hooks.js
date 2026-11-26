import { useEffect, useLayoutEffect, useState } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion } from './lib/gsap.js'

export function useScrollReveal() {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const grouped = new Set()

      document.querySelectorAll('[data-stagger]').forEach((group) => {
        const items = group.querySelectorAll(':scope > .reveal')
        if (!items.length) return
        items.forEach((el) => grouped.add(el))

        gsap.set(items, { opacity: 0, y: 22 })
        ScrollTrigger.create({
          trigger: group,
          start: 'top 85%',
          once: true,
          onEnter: () =>
            gsap.to(items, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              stagger: 0.08,
              clearProps: 'transform,opacity',
            }),
        })
      })

      document.querySelectorAll('.reveal').forEach((el) => {
        if (grouped.has(el)) return
        gsap.set(el, { opacity: 0, y: 22 })
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          once: true,
          onEnter: () =>
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
            }),
        })
      })

      document.querySelectorAll('[data-rule]').forEach((el) => {
        gsap.set(el, { scaleX: 0, transformOrigin: 'left center' })
        ScrollTrigger.create({
          trigger: el,
          start: 'top 92%',
          once: true,
          onEnter: () => gsap.to(el, { scaleX: 1, duration: 1.2, ease: 'power3.inOut' }),
        })
      })
    })

    return () => ctx.revert()
  }, [])
}

export function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const triggers = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((section) =>
        ScrollTrigger.create({
          trigger: section,
          start: 'top 55%',
          end: 'bottom 55%',
          onToggle: (self) => {
            if (self.isActive) setActive(section.id)
          },
        })
      )

    return () => triggers.forEach((t) => t.kill())
  }, [ids])

  return active
}
