import { skillGroups, softSkills } from '../data/content.js'
import { useContent } from '../i18n.js'
import { SectionHeader, RichTitle } from './ui.jsx'

function SkillRow({ title, items }) {
  return (
    <div className="reveal grid gap-4 border-t border-line py-6 md:grid-cols-12 md:gap-8">
      <dt className="eyebrow md:col-span-4 md:pt-2.5">{title}</dt>
      <dd className="md:col-span-8">
        <ul className="flex flex-wrap gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink/85 transition-colors duration-300 hover:border-accent/60 hover:text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </dd>
    </div>
  )
}

export default function Skills() {
  const { skillsTitle } = useContent()
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHeader index="04" label="Technical Skills" id="skills-title">
          <RichTitle t={skillsTitle} />
        </SectionHeader>

        <dl className="mt-14 sm:mt-20" data-stagger>
          {skillGroups.map((g) => (
            <SkillRow key={g.title} title={g.title} items={g.items} />
          ))}
          <SkillRow title="Soft Skills" items={softSkills} />
          <div data-rule className="h-px bg-line" aria-hidden="true" />
        </dl>
      </div>
    </section>
  )
}