import { LANGS } from '../data/content.js'
import { setLang, useContent, useLang } from '../i18n.js'

const LABELS = { id: 'Bahasa Indonesia', en: 'English' }

export default function LangToggle() {
  const lang = useLang()
  const { ui } = useContent()

  return (
    <div
      role="group"
      aria-label={ui.langGroup}
      className="inline-flex h-10 shrink-0 items-center rounded-full border border-line-strong p-0.5 font-mono text-[11px] md:h-9"
    >
      {LANGS.map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            lang={code}
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={LABELS[code]}
            title={LABELS[code]}
            className={`h-full rounded-full px-2.5 uppercase tracking-wider transition-colors duration-300 ${
              active ? 'bg-ink text-bg' : 'text-muted hover:text-ink'
            }`}
          >
            {code}
          </button>
        )
      })}
    </div>
  )
}
