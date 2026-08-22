import { profile, specs } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-b-[3px] border-ink">
      <div
        className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-5 gap-12"
        data-stagger
      >
        <div className="md:col-span-3 reveal">
          <span className="nb-chip inline-block font-mono text-xs uppercase tracking-widest font-bold bg-pink text-ink px-2 py-1 rounded">
            01 — Tentang
          </span>
          <h2 className="mt-4 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
            Terbiasa membangun sistem yang dipakai orang sungguhan.
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted max-w-2xl">
            {profile.about}
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted max-w-2xl">
            Terbiasa bekerja sama dengan tim dalam menganalisis kebutuhan bisnis
            dan menerjemahkannya menjadi solusi teknis yang efektif, aman, dan
            efisien — dari rancangan database sampai server yang menjalankannya.
          </p>
        </div>

        <div className="md:col-span-2 reveal">
          <div className="nb-box overflow-hidden font-mono text-sm rounded">
            <div className="bg-ink text-yellow px-4 py-2 flex items-center justify-between border-b-[3px] border-ink font-bold">
              <span>whoami.json</span>
              <span className="text-yellow/60 text-xs">read-only</span>
            </div>
            <dl className="divide-y-2 divide-ink/10 bg-surface">
              {specs.map((s) => (
                <div key={s.label} className="flex justify-between gap-4 px-4 py-3">
                  <dt className="text-muted font-bold">{s.label}</dt>
                  <dd className="text-right text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
