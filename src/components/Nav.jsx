import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { navItems } from '../data/content.js'
import { useActiveSection } from '../hooks.js'
import { gsap } from '../lib/gsap.js'
import { scrollToId } from '../lib/smoothScroll.js'

// Computed once at module scope so the reference stays stable across
// re-renders (avoids re-running the ScrollTrigger effect on every scroll).
const sectionIds = navItems.map((n) => n.id)

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)

  const listRef = useRef(null)
  const indicatorRef = useRef(null)
  const btnRefs = useRef({})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Slide the little pill behind the nav link that matches the section
  // currently in view — a quiet nod to the "route" framing of the nav.
  useLayoutEffect(() => {
    const btn = btnRefs.current[active]
    const list = listRef.current
    const indicator = indicatorRef.current
    if (!btn || !list || !indicator) return

    const listBox = list.getBoundingClientRect()
    const btnBox = btn.getBoundingClientRect()

    gsap.to(indicator, {
      x: btnBox.left - listBox.left,
      width: btnBox.width,
      duration: 0.45,
      ease: 'power3.out',
    })
  }, [active])

  const handleClick = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  // Esc closes the mobile menu; crossing the md breakpoint resets it.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 768px)')
    const onMq = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b-[3px] border-ink transition-colors duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur' : 'bg-bg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick('top')}
          className="font-mono text-sm font-bold tracking-tight flex items-center gap-2"
        >
          <span className="inline-block h-2.5 w-2.5 border-2 border-ink rounded-full bg-live animate-pulse-dot" />
          <span className="bg-ink text-yellow px-1.5 py-0.5">rgk</span>
          <span className="text-muted">.dev</span>
        </button>

        <nav
          ref={listRef}
          className="hidden md:flex items-center gap-1 font-mono text-[13px] font-bold relative border-[3px] border-ink bg-surface rounded-md p-1"
        >
          <span
            ref={indicatorRef}
            className="absolute inset-y-1 left-1 h-[calc(100%-8px)] rounded border-2 border-ink bg-yellow -z-10"
            style={{ width: 0 }}
            aria-hidden="true"
          />
          {navItems.map((item) => (
            <button
              key={item.id}
              ref={(el) => (btnRefs.current[item.id] = el)}
              onClick={() => handleClick(item.id)}
              className={`px-3 py-1.5 rounded transition-colors ${
                active === item.id ? 'text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/CV_Reza_Galang_Kurniawan.pdf"
            download
            className="nb-btn ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded bg-lime text-ink font-bold"
          >
            <Download size={14} strokeWidth={2.5} />
            CV
          </a>
        </nav>

        <button
          className="md:hidden p-2 border-[3px] border-ink rounded bg-surface"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
        </button>
      </div>

      <div
        className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
        ref={(el) => {
          if (el) el.inert = !open
        }}
      >
        <nav className="overflow-hidden min-h-0">
        <div className="bg-bg border-t-[3px] border-ink px-5 pb-6 pt-2 font-mono text-sm font-bold flex flex-col">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`text-left py-3 border-b-2 border-ink/15 ${
                active === item.id ? 'text-ink' : 'text-muted'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/CV_Reza_Galang_Kurniawan.pdf"
            download
            className="nb-btn mt-4 flex items-center justify-center gap-2 py-2.5 rounded bg-lime text-ink"
          >
            <Download size={14} strokeWidth={2.5} />
            Unduh CV
          </a>
        </div>
        </nav>
      </div>
    </header>
  )
}