import { skillGroups } from '../data/content.js'

const GROUPS = ['Programming', 'Web Development', 'Mobile Development', 'Database', 'Server & Infrastruktur']
const ITEMS = skillGroups.filter((g) => GROUPS.includes(g.title)).flatMap((g) => g.items)

/** Running stack band between hero and about — content comes from skillGroups. */
export default function Marquee() {
  return (
    <div
      className="marquee overflow-hidden border-b-[3px] border-ink bg-ink text-yellow py-3 select-none"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center font-mono text-sm font-bold">
            {ITEMS.map((item) => (
              <li key={item} className="flex items-center">
                <span className="px-5">{item}</span>
                <span className="h-2 w-2 bg-pink" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
