import { ArrowUpRight } from 'lucide-react'

export function RichTitle({ t }) {
  return (
    <>
      {t.pre}
      <span className="italic text-ink/60">{t.em}</span>
      {t.post}
    </>
  )
}

export function SectionHeader({ index, label, id, children }) {
  return (
    <div className="reveal">
      <p className="eyebrow flex items-center gap-3">
        <span className="text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
        {label}
      </p>
      <h2
        id={id}
        className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]"
      >
        {children}
      </h2>
    </div>
  )
}

const base =
  'group inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-all duration-300 ease-out active:scale-[0.98]'

const variants = {
  primary: 'bg-ink text-bg hover:bg-accent',
  ghost: 'border border-line-strong text-ink hover:border-ink/50 hover:bg-hover',
}

export function Button({ variant = 'primary', icon: Icon, arrow = false, className = '', children, ...props }) {
  const Tag = props.href ? 'a' : 'button'
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {Icon && <Icon size={16} strokeWidth={2} aria-hidden="true" />}
      {arrow && (
        <ArrowUpRight
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </Tag>
  )
}

export function Tag({ children }) {
  return (
    <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] leading-none text-muted">
      {children}
    </span>
  )
}