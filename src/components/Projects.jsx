import { useEffect, useMemo, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import { featuredProject as fp, projects } from '../data/content.js'
import { gsap, prefersReducedMotion } from '../lib/gsap.js'
import { Button, SectionHeader, Tag } from './ui.jsx'

const ALL = 'Semua'

function FlowPhone() {
  const dot = {
    done: 'border-accent bg-accent text-bg',
    active: 'border-accent text-accent animate-pulse-dot',
    next: 'border-line-strong text-subtle',
  }

  return (
    <div className="mx-auto w-[15.5rem] rounded-[2.4rem] border border-line-strong bg-bg p-2.5 shadow-phone sm:w-[16.5rem]">
      <div className="rounded-[1.9rem] bg-surface px-5 pb-6 pt-7">
        {fp.screenshot ? (
          <img src={fp.screenshot} alt={`Tampilan aplikasi ${fp.name}`} className="rounded-2xl" loading="lazy" />
        ) : (
          <>
            <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-line-strong" aria-hidden="true" />
            <p className="eyebrow">Alur pesanan</p>
            <ol className="mt-5 space-y-5">
              {fp.flow.map((step, i) => (
                <li key={step.title} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border font-mono text-[10px] ${dot[step.state]}`}
                  >
                    {step.state === 'done' ? <Check size={12} strokeWidth={3} aria-hidden="true" /> : i + 1}
                  </span>
                  <div>
                    <p className={`text-[13px] leading-snug ${step.state === 'next' ? 'text-muted' : 'text-ink'}`}>
                      {step.title}
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-subtle">{step.actor}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-7 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-wider text-subtle">
              + Program poin
            </p>
          </>
        )}
      </div>
    </div>
  )
}

function Featured() {
  return (
    <article className="reveal overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="grid lg:grid-cols-12">
        <div className="flex flex-col p-7 sm:p-12 lg:col-span-7">
          <p className="eyebrow flex items-center gap-3">
            <span className="flex items-center gap-2 text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Featured
            </span>
            <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
            {fp.eyebrow}
          </p>
          <h3 className="mt-8 font-serif text-6xl leading-none tracking-tight text-ink sm:text-7xl">{fp.name}</h3>
          <p className="mt-4 text-lg text-ink/85">{fp.headline}</p>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">{fp.description}</p>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Teknologi">
            {fp.tags.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>

          {fp.url && (
            <div className="mt-10">
              <Button href={fp.url} target="_blank" rel="noopener noreferrer" arrow>
                {fp.urlLabel}
              </Button>
            </div>
          )}
        </div>

        <div className="relative border-t border-line bg-raised px-6 py-12 sm:py-16 lg:col-span-5 lg:border-l lg:border-t-0">
          <FlowPhone />
          {!fp.screenshot && (
            <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-wider text-subtle">
              Ilustrasi alur — bukan tangkapan layar
            </p>
          )}
        </div>
      </div>
    </article>
  )
}

function HighlightCard({ project, index }) {
  return (
    <article className="group rounded-2xl border border-line bg-surface p-7 transition-colors duration-500 hover:border-line-strong hover:bg-raised sm:p-9">
      <p className="font-mono text-xs text-subtle">{String(index).padStart(2, '0')}</p>
      <h3 className="mt-10 font-serif text-3xl leading-tight text-ink transition-colors duration-300 group-hover:text-accent sm:text-4xl">
        {project.name}
      </h3>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-7 flex flex-wrap gap-2" aria-label="Teknologi">
        {project.tags.map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>
    </article>
  )
}

function ProjectRow({ project, index }) {
  return (
    <li className="group grid gap-3 border-t border-line px-1 py-7 transition-colors duration-300 hover:bg-hover md:grid-cols-12 md:gap-8 md:px-4">
      <span className="font-mono text-xs text-subtle md:col-span-1 md:pt-2">{String(index).padStart(2, '0')}</span>
      <h3 className="font-serif text-2xl text-ink transition-transform duration-500 group-hover:translate-x-1 md:col-span-4">
        {project.name}
      </h3>
      <p className="text-[15px] leading-relaxed text-muted md:col-span-4">{project.description}</p>
      <ul className="flex flex-wrap content-start gap-2 md:col-span-3 md:justify-end" aria-label="Teknologi">
        {project.tags.map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default function Projects() {

  const filters = useMemo(() => {
    const count = {}
    ;[{ tags: fp.tags }, ...projects].forEach((p) => p.tags.forEach((t) => (count[t] = (count[t] || 0) + 1)))
    return [ALL, ...Object.keys(count).filter((t) => count[t] >= 2)]
  }, [])

  const [filter, setFilter] = useState(ALL)
  const listRef = useRef(null)
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    if (prefersReducedMotion() || !listRef.current) return
    const tween = gsap.fromTo(
      listRef.current.children,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.05, clearProps: 'transform,opacity' }
    )
    return () => tween.kill()
  }, [filter])

  const filtered = filter === ALL ? projects : projects.filter((p) => p.tags.includes(filter))
  const cards = filtered.filter((p) => p.highlight)
  const rows = filtered.filter((p) => !p.highlight)

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHeader index="03" label="Featured Projects" id="projects-title">
          Proyek <span className="italic text-ink/60">nyata</span>, dari ide sampai rilis.
        </SectionHeader>

        <div className="mt-14 sm:mt-20">
          <Featured />
        </div>

        <div className="reveal mt-20 flex flex-wrap items-end justify-between gap-6">
          <h3 className="font-serif text-3xl text-ink sm:text-4xl">Proyek lainnya</h3>
          <div role="group" aria-label="Filter teknologi" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`h-9 rounded-full border px-4 text-sm transition-colors duration-300 ${
                  filter === f
                    ? 'border-ink bg-ink text-bg'
                    : 'border-line-strong text-muted hover:border-ink/50 hover:text-ink'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div ref={listRef} className="mt-10 space-y-10" aria-live="polite">
          {cards.length > 0 && (
            <div className="grid gap-5 md:grid-cols-2">
              {cards.map((p) => (
                <HighlightCard key={p.name} project={p} index={projects.indexOf(p) + 1} />
              ))}
            </div>
          )}
          {rows.length > 0 && (
            <ul>
              {rows.map((p) => (
                <ProjectRow key={p.name} project={p} index={projects.indexOf(p) + 1} />
              ))}
              <li aria-hidden="true" className="border-t border-line" />
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}