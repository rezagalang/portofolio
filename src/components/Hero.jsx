import { useLayoutEffect, useRef } from 'react'
import { ArrowDown, Download, MapPin } from 'lucide-react'
import { about, heroStack, profile } from '../data/content.js'
import { gsap, prefersReducedMotion } from '../lib/gsap.js'
import { scrollToId } from '../lib/smoothScroll.js'
import { Button } from './ui.jsx'

function ProfilePanel() {
  const str = (s) => <span className="text-accent">&quot;{s}&quot;</span>
  const key = (k) => <span className="text-ink/70">&quot;{k}&quot;</span>
  const punct = (p) => <span className="text-subtle">{p}</span>

  const lines = []
  const push = (indent, node) => lines.push({ indent, node })

  push(0, punct('{'))
  push(1, <>{key('name')}{punct(': ')}{str(profile.name)}{punct(',')}</>)
  push(1, <>{key('role')}{punct(': ')}{str(profile.role)}{punct(',')}</>)
  push(1, <>{key('location')}{punct(': ')}{str(profile.location)}{punct(',')}</>)
  push(1, <>{key('focus')}{punct(': [')}</>)
  const focus = ['Laravel', 'REST API', 'Flutter', 'Linux & Docker']
  focus.forEach((f, i) => push(2, <>{str(f)}{i < focus.length - 1 && punct(',')}</>))
  push(1, <>{punct('],')}</>)
  push(1, <>{key('open_to')}{punct(': [')}</>)
  const open = ['Software Engineer', 'Backend', 'Web', 'Flutter', 'IT Support']
  open.forEach((f, i) => push(2, <>{str(f)}{i < open.length - 1 && punct(',')}</>))
  push(1, <>{punct(']')}</>)
  push(0, punct('}'))

  return (
    <figure
      className="hero-in overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_80px_-40px_rgb(0_0_0/0.8)]"
      aria-label="Ringkasan profil dalam format JSON"
    >
      <figcaption className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="font-mono text-xs text-muted">profile.json</span>
        <span className="flex items-center gap-2 font-mono text-[11px] text-subtle">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" aria-hidden="true" />
          {about.education.degree}
        </span>
      </figcaption>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-7 sm:text-[13px]">
        <code>
          {lines.map((l, i) => (
            <span key={i} className="flex">
              <span className="w-6 shrink-0 select-none pr-3 text-right text-subtle/60" aria-hidden="true">
                {i + 1}
              </span>
              <span style={{ paddingLeft: `${l.indent * 1.25}rem` }} className="whitespace-nowrap">
                {l.node}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </figure>
  )
}

export default function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-eyebrow', { opacity: 0, y: 8, duration: 0.6 })
        .from('.hero-line', { yPercent: 110, duration: 1, ease: 'expo.out', stagger: 0.1 }, '-=0.3')
        .from('.hero-fade', { opacity: 0, y: 16, duration: 0.7, stagger: 0.08 }, '-=0.6')
        .from('.hero-in', { opacity: 0, y: 24, duration: 0.9 }, '-=0.7')
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section id="top" ref={root} className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-44">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="wrap relative">
        <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="hero-eyebrow eyebrow flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-ink">{profile.role}</span>
              <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={12} strokeWidth={2} aria-hidden="true" />
                {profile.location}
              </span>
            </p>

            <h1 className="mt-8 font-serif text-[clamp(3.4rem,10.5vw,7.75rem)] leading-[0.9] tracking-[-0.02em] text-ink">
              <span className="block overflow-hidden pb-[0.1em]">
                <span className="hero-line block">Reza Galang</span>
              </span>
              <span className="block overflow-hidden pb-[0.1em]">
                <span className="hero-line block">
                  <span className="italic text-ink/60">Kurniawan</span>
                  <span className="text-accent">.</span>
                </span>
              </span>
            </h1>

            <p className="hero-fade mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.intro}
            </p>

            <div className="hero-fade mt-10 flex flex-wrap gap-3">
              <Button
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId('projects')
                }}
                icon={ArrowDown}
              >
                View Projects
              </Button>
              <Button variant="ghost" href={profile.cvUrl} download={profile.cvFileName} icon={Download}>
                Download CV
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ProfilePanel />
          </div>
        </div>

        <div className="hero-fade mt-20 flex flex-col gap-4 border-t border-line py-6 sm:mt-28 sm:flex-row sm:items-center sm:gap-10">
          <span className="eyebrow shrink-0">Stack utama</span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] text-muted">
            {heroStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
