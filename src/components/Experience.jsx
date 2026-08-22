import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { experiences } from '../data/content.js'

function ExperienceItem({ exp, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="reveal relative pl-10 sm:pl-12 pb-12 last:pb-0">
      {/* timeline line */}
      <div className="absolute left-[8px] sm:left-[10px] top-2 bottom-0 w-[3px] bg-ink/15" />
      {/* status marker on the line — square, bordered, brutalist */}
      <span
        className={`absolute left-0 top-1.5 h-[17px] w-[17px] sm:h-[21px] sm:w-[21px] rounded border-[3px] border-ink ${
          exp.current ? 'bg-lime' : 'bg-surface'
        }`}
      >
        {exp.current && (
          <span className="absolute inset-[3px] rounded-sm bg-live animate-pulse-dot" />
        )}
      </span>

      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left group"
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold text-muted">
              {exp.period}
              {exp.current && (
                <span className="nb-chip text-ink bg-lime rounded px-2 py-0.5">
                  active
                </span>
              )}
            </div>
            <h3 className="mt-1.5 text-xl sm:text-2xl font-sans font-extrabold group-hover:text-pink transition-colors">
              {exp.company}
            </h3>
            <p className="text-muted mt-0.5 font-mono">{exp.role}</p>
          </div>
          <div className="nb-btn mt-1 shrink-0 p-1.5 rounded bg-surface">
            <ChevronDown
              size={18}
              strokeWidth={2.5}
              className={`text-ink transition-transform duration-300 ${
                open ? 'rotate-180' : ''
              }`}
            />
          </div>
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <ul className="overflow-hidden space-y-2.5">
          {exp.points.map((p, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted">
              <span className="font-mono font-bold text-blue shrink-0">{'//'}</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-b-[3px] border-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="reveal">
          <span className="nb-chip inline-block font-mono text-xs uppercase tracking-widest font-bold bg-blue-light text-ink px-2 py-1 rounded">
            02 — Riwayat
          </span>
          <h2 className="mt-4 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
            Log pengalaman kerja
          </h2>
          <p className="mt-3 text-muted max-w-xl">
            Klik tiap entri untuk membuka detail tanggung jawab dan kontribusi.
          </p>
        </div>

        <div className="mt-12 max-w-3xl" data-stagger>
          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.company} exp={exp} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
