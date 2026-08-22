import { useEffect, useRef, useState } from 'react'
import { ArrowDown, MapPin } from 'lucide-react'
import { profile } from '../data/content.js'
import { useCountUp } from '../hooks.js'
import { gsap, SplitText, prefersReducedMotion } from '../lib/gsap.js'

function daysSince(dateStr) {
  const start = new Date(dateStr)
  const now = new Date()
  return Math.max(0, Math.floor((now - start) / (1000 * 60 * 60 * 24)))
}

export default function Hero() {
  const [uptime, setUptime] = useState(0)
  const [projRef, projVal] = useCountUp(6)
  const [yearRef, yearVal] = useCountUp(2)
  const [stackRef, stackVal] = useCountUp(4)

  const badgeRef = useRef(null)
  const headingRef = useRef(null)
  const subRef = useRef(null)
  const locRef = useRef(null)
  const ctaRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    setUptime(daysSince(profile.careerStart))
  }, [])

  useEffect(() => {
    if (prefersReducedMotion()) return

    // The name is the one place a bespoke, load-once entrance earns its
    // keep: characters "print" in like a system booting up, matching the
    // monospace / terminal register of the rest of the page.
    const split = new SplitText(headingRef.current, { type: 'chars' })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(badgeRef.current, { opacity: 0, y: -8, duration: 0.5 })
      .from(
        split.chars,
        { opacity: 0, y: 24, duration: 0.5, stagger: 0.018 },
        '-=0.15'
      )
      .from(subRef.current, { opacity: 0, y: 14, duration: 0.6 }, '-=0.25')
      .from(locRef.current, { opacity: 0, y: 10, duration: 0.5 }, '-=0.35')
      .from(
        ctaRef.current.children,
        { opacity: 0, y: 10, duration: 0.5, stagger: 0.08 },
        '-=0.3'
      )
      .from(
        statsRef.current.children,
        { opacity: 0, y: 14, duration: 0.5, stagger: 0.08 },
        '-=0.25'
      )

    return () => {
      tl.kill()
      split.revert()
    }
  }, [])

  return (
    <section
      id="top"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b-[3px] border-ink"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={badgeRef}
          className="nb-box inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold bg-lime-light px-3 py-1.5 rounded"
        >
          <span className="h-2 w-2 rounded-full border-2 border-ink bg-live animate-pulse-dot" />
          Status: Operational
        </div>

        <h1
          ref={headingRef}
          className="mt-6 text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight max-w-4xl"
        >
          {profile.name}
        </h1>

        <span className="nb-box inline-block mt-5 font-mono font-bold text-sm sm:text-base bg-yellow px-3 py-1.5 rounded">
          {profile.role}
        </span>

        <p
          ref={subRef}
          className="mt-5 max-w-xl text-base sm:text-lg text-muted leading-relaxed"
        >
          Merancang, membangun, dan menjaga aplikasi web tetap stabil. Fokus
          pada Laravel, REST API, dan infrastruktur server berbasis Linux.
        </p>

        <div
          ref={locRef}
          className="nb-box mt-6 inline-flex items-center gap-2 font-mono text-sm font-bold bg-surface px-3 py-1.5 rounded"
        >
          <MapPin size={15} strokeWidth={2.5} />
          {profile.location}
        </div>

        <div ref={ctaRef} className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="nb-btn px-5 py-2.5 bg-ink text-bg font-mono font-bold text-sm rounded"
          >
            Hubungi saya
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="nb-btn px-5 py-2.5 bg-surface text-ink font-mono font-bold text-sm rounded flex items-center gap-2"
          >
            Lihat proyek
            <ArrowDown size={14} strokeWidth={2.5} />
          </a>
        </div>

        {/* Status metrics — reads like a monitoring dashboard */}
        <dl
          ref={statsRef}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          <div ref={yearRef} className="nb-box bg-yellow-light p-4 sm:p-5 rounded">
            <dt className="font-mono text-[11px] uppercase tracking-widest font-bold text-muted">
              Pengalaman
            </dt>
            <dd className="mt-1 font-sans text-2xl sm:text-3xl font-extrabold">
              {yearVal}+ <span className="text-sm font-mono font-normal text-muted">tahun</span>
            </dd>
          </div>
          <div ref={projRef} className="nb-box bg-pink-light p-4 sm:p-5 rounded">
            <dt className="font-mono text-[11px] uppercase tracking-widest font-bold text-muted">
              Proyek dikirim
            </dt>
            <dd className="mt-1 font-sans text-2xl sm:text-3xl font-extrabold">
              {projVal}
            </dd>
          </div>
          <div ref={stackRef} className="nb-box bg-blue-light p-4 sm:p-5 rounded">
            <dt className="font-mono text-[11px] uppercase tracking-widest font-bold text-muted">
              Bahasa inti
            </dt>
            <dd className="mt-1 font-sans text-2xl sm:text-3xl font-extrabold">
              {stackVal}
            </dd>
          </div>
          <div className="nb-box bg-lime-light p-4 sm:p-5 rounded">
            <dt className="font-mono text-[11px] uppercase tracking-widest font-bold text-muted">
              Uptime karier
            </dt>
            <dd className="mt-1 font-sans text-2xl sm:text-3xl font-extrabold tabular-nums">
              {uptime.toLocaleString('id-ID')}
              <span className="text-sm font-mono font-normal text-muted"> hari</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
