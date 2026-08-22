import { skillGroups, softSkills } from '../data/content.js'

const STRIP_COLORS = ['bg-yellow', 'bg-pink', 'bg-blue', 'bg-lime', 'bg-orange']

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-b-[3px] border-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="reveal">
          <span className="nb-chip inline-block font-mono text-xs uppercase tracking-widest font-bold bg-orange-light text-ink px-2 py-1 rounded">
            04 — Kemampuan
          </span>
          <h2 className="mt-4 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
            Stack &amp; kemampuan teknis
          </h2>
        </div>

        <div
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          data-stagger
        >
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="nb-card reveal bg-surface rounded overflow-hidden"
            >
              <div className={`h-2 border-b-[3px] border-ink ${STRIP_COLORS[i % STRIP_COLORS.length]}`} />
              <div className="p-5">
                <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-muted">
                  {group.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="nb-chip font-mono text-[13px] font-bold px-2.5 py-1 rounded bg-bg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 border-t-[3px] border-ink pt-8">
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-muted">
            Soft Skills
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <span
                key={s}
                className="nb-chip text-[13px] font-bold px-3 py-1.5 rounded bg-yellow text-ink"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
