import { useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react'
import { useContent } from '../i18n.js'
import { scrollToId } from '../lib/smoothScroll.js'
import { Button, SectionHeader, RichTitle } from './ui.jsx'

function ContactRow({ label, value, href, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-center justify-between gap-4 border-t border-line py-5 transition-colors duration-300 hover:bg-hover sm:px-2"
    >
      <span>
        <span className="eyebrow block">{label}</span>
        <span className="mt-2 block break-all text-base text-ink sm:text-lg">{value}</span>
      </span>
      <ArrowUpRight
        size={18}
        strokeWidth={2}
        aria-hidden="true"
        className="shrink-0 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </a>
  )
}

export default function Contact() {
  const { profile, ui, contactTitle } = useContent()
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 1800)
    } catch {

    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="pt-24 sm:pt-32">
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <SectionHeader index="05" label="Contact" id="contact-title">
              <RichTitle t={contactTitle} />
            </SectionHeader>
            <p className="reveal mt-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {ui.contactIntro}
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-3">
              <Button href={`mailto:${profile.email}`} icon={Mail}>
                {ui.sendEmail}
              </Button>
              <Button variant="ghost" href={profile.cvUrl} download={profile.cvFileName} icon={Download}>
                {ui.downloadCv}
              </Button>
            </div>
          </div>

          <div className="reveal lg:col-span-5">
            <div className="flex items-stretch border-t border-line">
              <a
                href={`mailto:${profile.email}`}
                className="group flex-1 py-5 transition-colors duration-300 hover:bg-hover sm:px-2"
              >
                <span className="eyebrow block">Email</span>
                <span className="mt-2 block break-all text-base text-ink sm:text-lg">{profile.email}</span>
              </a>
              <button
                onClick={copyEmail}
                aria-label={ui.copyEmail}
                className="grid w-12 place-items-center self-center text-subtle transition-colors hover:text-accent"
              >
                {copied ? <Check size={18} strokeWidth={2} /> : <Copy size={18} strokeWidth={2} />}
              </button>
              <span className="sr-only" role="status">
                {copied ? ui.emailCopied : ''}
              </span>
            </div>
            <ContactRow label={ui.phone} value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
            <ContactRow label="LinkedIn" value={profile.linkedin} href={profile.linkedinUrl} external />
            <div className="border-t border-line" />
          </div>
        </div>

        <footer className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-line py-8 font-mono text-xs text-subtle sm:mt-32 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('top')
            }}
            className="link-line text-muted hover:text-ink"
          >
            {ui.backToTop}
          </a>
        </footer>
      </div>
    </section>
  )
}