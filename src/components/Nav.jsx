import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { content } from '../data/content.js'
import { useContent } from '../i18n.js'
import { useActiveSection } from '../hooks.js'
import { scrollToId } from '../lib/smoothScroll.js'
import ThemeToggle from './ThemeToggle.jsx'
import LangToggle from './LangToggle.jsx'

const sectionIds = content.id.navItems.map((n) => n.id)

export default function Nav() {
  const { navItems, profile, ui } = useContent()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-bg/80 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <a
          href="#top"
          onClick={(e) => go(e, 'top')}
          className="flex items-center gap-3 text-sm font-medium text-ink"
          aria-label={ui.backToTopAria(profile.name)}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-line-strong bg-surface text-ink">
            <svg viewBox="0 0 32 32" className="h-full w-full" fill="none" aria-hidden="true" focusable="false">
              <path
                d="M10 22V10h6.2a3.6 3.6 0 0 1 0 7.2H10m6 0 4.2 4.8"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="23.5" cy="10.5" r="2" fill="var(--color-accent)" />
            </svg>
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav aria-label={ui.mainNav} className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => go(e, item.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`relative py-2 text-sm transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-500 ${
                  isActive
                    ? 'text-ink after:scale-x-100'
                    : 'text-muted after:scale-x-0 hover:text-ink hover:after:scale-x-100'
                }`}
              >
                {item.label}
              </a>
            )
          })}
          <a
            href={profile.cvUrl}
            download={profile.cvFileName}
            className="group inline-flex h-9 items-center gap-2 rounded-full border border-line-strong px-4 text-sm text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            <Download size={14} strokeWidth={2} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5" />
            {ui.cvShort}
          </a>
          <LangToggle />
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LangToggle />
          <ThemeToggle />
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? ui.closeMenu : ui.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-500 ease-out md:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
        ref={(el) => {
          if (el) el.inert = !open
        }}
      >
        <nav aria-label={ui.mobileNav} className="min-h-0 overflow-hidden">
          <div className="wrap flex flex-col pb-8 pt-2">
            {navItems.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => go(e, item.id)}
                className="flex items-baseline justify-between border-t border-line py-4 font-serif text-3xl text-ink"
              >
                {item.label}
                <span className="eyebrow">{String(i + 1).padStart(2, '0')}</span>
              </a>
            ))}
            <a
              href={profile.cvUrl}
              download={profile.cvFileName}
              className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium text-bg"
            >
              <Download size={16} strokeWidth={2} aria-hidden="true" />
              {ui.downloadCv}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}