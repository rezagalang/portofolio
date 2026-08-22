import { useMemo, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/content.js'
import { gsap, prefersReducedMotion } from '../lib/gsap.js'

const ALL = 'Semua'
const TAG_COLORS = ['bg-yellow-light', 'bg-pink-light', 'bg-blue-light', 'bg-lime-light', 'bg-orange-light']

// Deterministic per-project "response time" so the hover detail feels like
// a real status readout instead of a randomly re-rolled number on every
// hover — same project always reports the same figure.
function fakeLatency(index) {
  return 18 + ((index * 37) % 64)
}

function ProjectCard({ project, index }) {
  const statusRef = useRef(null)
  const arrowRef = useRef(null)

  const handleEnter = () => {
    if (prefersReducedMotion()) return
    gsap.to(statusRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' })
    gsap.to(arrowRef.current, { x: 2, y: -2, duration: 0.25, ease: 'power2.out' })
  }
  const handleLeave = () => {
    if (prefersReducedMotion()) return
    gsap.to(statusRef.current, { opacity: 0, y: 4, duration: 0.25, ease: 'power2.in' })
    gsap.to(arrowRef.current, { x: 0, y: 0, duration: 0.25, ease: 'power2.in' })
  }

  return (
    <article
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="nb-card reveal bg-surface p-5 sm:p-6 rounded"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-mono text-[11px] font-bold">
          <span className="text-live">{project.method}</span>
          <span className="text-muted truncate">{project.route}</span>
        </div>
        <div ref={arrowRef} className="shrink-0 border-2 border-ink rounded p-0.5">
          <ArrowUpRight size={14} strokeWidth={2.5} className="text-ink" />
        </div>
      </div>

      <h3 className="mt-3 text-lg sm:text-xl font-sans font-extrabold">
        {project.name}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t, i) => (
            <span
              key={t}
              className={`nb-chip font-mono text-[11px] font-bold px-2 py-1 rounded ${TAG_COLORS[i % TAG_COLORS.length]}`}
            >
              {t}
            </span>
          ))}
        </div>
        <span
          ref={statusRef}
          className="font-mono text-[11px] font-bold text-live whitespace-nowrap opacity-0 translate-y-1"
        >
          200 OK · {fakeLatency(index)}ms
        </span>
      </div>
    </article>
  )
}

export default function Projects() {
  const tags = useMemo(() => {
    const set = new Set()
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)))
    return [ALL, ...Array.from(set)]
  }, [])

  const [filter, setFilter] = useState(ALL)

  const filtered =
    filter === ALL ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <section id="projects" className="py-20 sm:py-28 border-b-[3px] border-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="nb-chip inline-block font-mono text-xs uppercase tracking-widest font-bold bg-lime-light text-ink px-2 py-1 rounded">
              03 — Proyek
            </span>
            <h2 className="mt-4 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
              Sistem yang sudah dibangun
            </h2>
          </div>
          <p className="font-mono text-xs font-bold text-muted">
            {filtered.length} / {projects.length} ditampilkan
          </p>
        </div>

        <div className="reveal mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`nb-btn font-mono text-xs font-bold px-3 py-1.5 rounded ${
                filter === tag ? 'bg-ink text-bg' : 'bg-surface text-ink'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6" data-stagger>
          {filtered.map((p) => {
            const originalIndex = projects.findIndex((op) => op.name === p.name)
            return <ProjectCard key={p.name} project={p} index={originalIndex} />
          })}
        </div>
      </div>
    </section>
  )
}
