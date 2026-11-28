import { useContent } from '../i18n.js'
import { SectionHeader, RichTitle } from './ui.jsx'

function Row({ label, children }) {
  return (
    <div className="grid gap-3 border-t border-line py-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
      <dt className="eyebrow pt-1">{label}</dt>
      <dd>{children}</dd>
    </div>
  )
}

export default function About() {
  const { about, ui } = useContent()
  const { summary, focus, education, openTo, title } = about

  return (
    <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeader index="01" label="About" id="about-title">
              <RichTitle t={title} />
            </SectionHeader>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="reveal space-y-5 text-lg leading-relaxed text-ink/85 sm:text-xl">
            {summary.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-14" data-stagger>
            <div className="reveal">
              <Row label={ui.aboutFocus}>
                <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {focus.map((f) => (
                    <li key={f.title}>
                      <p className="text-ink">{f.title}</p>
                      <p className="mt-0.5 text-sm text-muted">{f.detail}</p>
                    </li>
                  ))}
                </ul>
              </Row>
            </div>
            <div className="reveal">
              <Row label={ui.aboutEducation}>
                <p className="text-ink">{education.school}</p>
                <p className="mt-0.5 text-sm text-muted">
                  {education.degree} · {education.gpa}
                </p>
                <p className="mt-2 font-mono text-xs text-subtle">{education.period}</p>
              </Row>
            </div>
            <div className="reveal">
              <Row label={ui.aboutOpenTo}>
                <ul className="flex flex-wrap gap-2">
                  {openTo.map((r) => (
                    <li key={r} className="rounded-full border border-line px-3 py-1.5 text-sm text-ink/85">
                      {r}
                    </li>
                  ))}
                </ul>
              </Row>
            </div>
            <div data-rule className="h-px bg-line" aria-hidden="true" />
          </dl>
        </div>
      </div>
    </section>
  )
}