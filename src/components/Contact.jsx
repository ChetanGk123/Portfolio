import { Download, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import site from '../content/site.json'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeader index="05" eyebrow="ping" title="Get in touch" />

      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-accent-violet/[0.10] via-transparent to-accent-cyan/[0.08] p-8 text-center sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-violet/25 blur-[100px]"
          />
          <p className="font-mono text-sm text-accent-cyan">status: {site.available ? 'available' : 'busy'}</p>
          <h3 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            Have a project in mind, or a team that ships?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            My inbox is always open — whether it's a role, a collaboration, or just a good frontend
            conversation. I'll get back to you.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${site.email}`} className="btn-primary">
              <Mail size={18} aria-hidden="true" />
              Say hello
            </a>
            <a href={site.resumeFile} download className="btn-ghost">
              <Download size={18} aria-hidden="true" />
              Download resume
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl text-ink-muted transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl text-ink-muted transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
