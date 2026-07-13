import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons.jsx'
import site from '../content/site.json'
import { yearsLabel } from '../lib/experience.js'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden bg-dots">
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent-violet/20 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent-cyan/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-content px-5 pb-20 pt-28 sm:px-8">
        {site.available && (
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-xs text-ink-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-lime opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-lime" />
            </span>
            open to interesting work
          </p>
        )}

        <p className="mb-4 font-mono text-sm text-accent-cyan sm:text-base">Hi, my name is</p>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
          {site.name.split(' ')[0]}{' '}
          <span className="text-gradient animate-gradient-x">{site.name.split(' ').slice(1).join(' ')}</span>
          <span className="text-accent-violet">.</span>
        </h1>

        <h2 className="mt-4 font-display text-2xl font-semibold text-ink-muted sm:text-4xl lg:text-5xl">
          {site.tagline}
        </h2>

        <p className="mt-7 max-w-xl text-ink-muted">
          {site.role} based in {site.location} — {yearsLabel()} years turning complex product ideas
          into clean, high-performance interfaces.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn-primary">
            See my work
            <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a href={`mailto:${site.email}`} className="btn-ghost">
            <Mail size={18} aria-hidden="true" />
            Get in touch
          </a>
          <div className="flex items-center gap-1">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl text-ink-muted transition-colors hover:bg-white/[0.05] hover:text-white"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl text-ink-muted transition-colors hover:bg-white/[0.05] hover:text-white"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        {/* Terminal flourish */}
        <div className="surface mt-16 hidden max-w-md p-4 font-mono text-sm sm:block">
          <p className="text-ink-faint">
            <span className="text-accent-lime">$</span> whoami
          </p>
          <p className="mt-1 text-ink-muted">
            frontend engineer <span className="text-ink-faint">·</span> react + typescript{' '}
            <span className="text-ink-faint">·</span> ships fast, renders faster
            <span className="animate-blink text-accent-cyan">▍</span>
          </p>
        </div>
      </div>
    </section>
  )
}
