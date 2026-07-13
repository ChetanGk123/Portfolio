import { ChevronRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import experience from '../content/experience.json'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeader index="04" eyebrow="git log --career" title="Where I've worked" />

      <ol className="relative ml-3 border-l border-white/10">
        {experience.map((job, i) => (
          <li key={job.company} className="relative pb-14 pl-8 last:pb-0 sm:pl-12">
            {/* Timeline node */}
            <span
              aria-hidden="true"
              className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-base-900 bg-gradient-to-br from-accent-violet to-accent-cyan shadow-[0_0_14px_rgb(139_124_255/0.6)]"
            />
            <Reveal delay={i * 80}>
              <p className="font-mono text-xs text-accent-cyan">{job.period}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                {job.role} <span className="text-gradient animate-gradient-x">@ {job.company}</span>
              </h3>
              <p className="mt-1 text-sm text-ink-faint">{job.location}</p>

              <ul className="mt-4 space-y-2.5">
                {job.highlights.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                    <ChevronRight size={16} className="mt-1 shrink-0 text-accent-violet" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-14">
        <div className="surface flex flex-col gap-1 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs text-accent-cyan">2015 — 2020</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-white">
              B.E. Information Science & Engineering
            </h3>
            <p className="text-sm text-ink-muted">Basaveshwar Engineering College, Bagalkot — First Class</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
