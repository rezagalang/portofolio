import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion } from './lib/gsap.js'

/**
 * Batches every `.reveal` element on the page into a single ScrollTrigger
 * pass. Elements sharing a `data-stagger` wrapper animate in together with
 * a slight offset; everything else reveals on its own. Runs once — this is
 * meant to be called at the top level (App.jsx) after the page has mounted.
 */
export function useScrollReveal() {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const staggerGroups = document.querySelectorAll('[data-stagger]')
      const grouped = new Set()

      staggerGroups.forEach((group) => {
        const items = group.querySelectorAll(':scope > .reveal')
        if (!items.length) return
        items.forEach((el) => grouped.add(el))

        gsap.set(items, { opacity: 0, y: 28 })
        ScrollTrigger.create({
          trigger: group,
          start: 'top 82%',
          once: true,
          onEnter: () =>
            gsap.to(items, {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: 'power3.out',
              stagger: 0.08,
              clearProps: 'transform,opacity',
            }),
        })
      })

      const singles = Array.from(document.querySelectorAll('.reveal')).filter(
        (el) => !grouped.has(el)
      )
      singles.forEach((el) => {
        gsap.set(el, { opacity: 0, y: 28 })
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () =>
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
            }),
        })
      })
    })

    return () => ctx.revert()
  }, [])
}

/** Tracks which section id is currently most visible in the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const st = sections.map((section) =>
      ScrollTrigger.create({
        trigger: section,
        start: 'top 55%',
        end: 'bottom 55%',
        onToggle: (self) => {
          if (self.isActive) setActive(section.id)
        },
      })
    )

    return () => st.forEach((t) => t.kill())
  }, [ids])

  return active
}

/**
 * Animates a number from 0 to `target` once its element scrolls into view,
 * driven by GSAP tweening a plain object (smoother easing than manual rAF).
 */
export function useCountUp(target, durationSeconds = 1.1) {
  const ref = useRef(null)
  const [value, setValue] = useState(prefersReducedMotion() ? target : 0)

  useEffect(() => {
    const node = ref.current
    if (!node || prefersReducedMotion()) return

    const proxy = { val: 0 }
    const trigger = ScrollTrigger.create({
      trigger: node,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(proxy, {
          val: target,
          duration: durationSeconds,
          ease: 'power3.out',
          onUpdate: () => setValue(Math.round(proxy.val)),
        })
      },
    })

    return () => trigger.kill()
  }, [target, durationSeconds])

  return [ref, value]
}