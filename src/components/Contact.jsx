import { useState } from 'react'
import { Mail, Phone, Linkedin, Copy, Check } from 'lucide-react'
import { profile } from '../data/content.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard API unavailable — fail silently, the email is still visible.
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="reveal relative">
          {/* offset color block behind the card — classic neobrutalist layering */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 bg-yellow border-[3px] border-ink rounded-xl" aria-hidden="true" />
          <div className="relative border-[3px] border-ink rounded-xl bg-surface p-8 sm:p-14 text-center">
            <span className="nb-chip inline-block font-mono text-xs uppercase tracking-widest font-bold bg-pink text-ink px-2 py-1 rounded">
              05 — Kontak
            </span>
            <h2 className="mt-4 font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
              Terbuka untuk peluang baru
            </h2>
            <p className="mt-4 text-muted max-w-lg mx-auto">
              Punya proyek Laravel, kebutuhan REST API, atau posisi software
              engineer yang cocok? Kirim pesan langsung, saya akan balas
              secepatnya.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="nb-btn flex items-center gap-2 px-5 py-2.5 bg-ink text-bg font-mono font-bold text-sm rounded"
              >
                <Mail size={15} strokeWidth={2.5} />
                {profile.email}
              </a>
              <button
                onClick={copyEmail}
                aria-label="Salin alamat email"
                className="nb-btn p-2.5 bg-surface rounded"
              >
                {copied ? (
                  <Check size={16} strokeWidth={2.5} className="text-live" />
                ) : (
                  <Copy size={16} strokeWidth={2.5} />
                )}
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-mono text-sm font-bold text-muted">
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:text-pink transition-colors"
              >
                <Phone size={15} strokeWidth={2.5} />
                {profile.phone}
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink transition-colors"
              >
                <Linkedin size={15} strokeWidth={2.5} />
                {profile.linkedin}
              </a>
            </div>
          </div>
        </div>

        <footer className="reveal mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs font-bold text-muted">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Dibangun dengan React &amp; Tailwind CSS</span>
        </footer>
      </div>
    </section>
  )
}
