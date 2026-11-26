import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { experiences } from '../data/content.js'
import { ScrollTrigger } from '../lib/gsap.js'
import { SectionHeader } from './ui.jsx'

const VISIBLE = 4

function ExperienceItem({ exp }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const mounted = useRef(false)
  const head = exp.points.slice(0, VISIBLE)
  const rest = exp.points.slice(VISIBLE)

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    const t = setTimeout(() => ScrollTrigger.refresh(), 520)
    return () => clearTimeout(t)
  }, [open])

  const bullet = (p) => (
    <li key={p} className="flex gap-4 text-[15px] leading-relaxed text-muted">
      <span aria-hidden="true" className="mt-[0.72em] h-px w-3 shrink-0 bg-accent" />
      <span>{p}</span>
    </li>
  )

  return (
    <article className="reveal grid gap-6 border-t border-line py-10 sm:py-12 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-4">
        <p className="font-mono text-sm text-ink">{exp.period}</p>
        <p className="eyebrow mt-3">{exp.type}</p>
      </div>

      <div className="lg:col-span-8">
        <h3 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">{exp.company}</h3>
        <p className="mt-2 text-base text-ink/75">{exp.role}</p>

        <ul className="mt-7 space-y-3.5">{head.map(bullet)}</ul>

        {rest.length > 0 && (
          <>
            <div
              id={panelId}
              ref={(el) => {
                if (el) el.inert = !open
              }}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <ul className="min-h-0 space-y-3.5 overflow-hidden">
                <li className="h-0" aria-hidden="true" />
                {rest.map(bullet)}
              </ul>
            </div>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls={panelId}
              className="group mt-6 inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-accent"
            >
              {open ? 'Ringkas' : `Lihat ${rest.length} tanggung jawab lainnya`}
              <ChevronDown
                size={16}
                strokeWidth={2}
                aria-hidden="true"
                className={`transition-transform duration-500 ${open ? 'rotate-180' : ''}`}
              />
            </button>
          </>
        )}
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHeader index="02" label="Work Experience" id="experience-title">
          Pengalaman <span className="italic text-ink/60">kerja</span>
        </SectionHeader>

        <div className="mt-14 sm:mt-20" data-stagger>
          {experiences.map((exp) => (
            <ExperienceItem key={exp.company} exp={exp} />
          ))}
          <div data-rule className="h-px bg-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
