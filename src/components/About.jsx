import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import site from '../content/site.json'
import { withYears } from '../lib/experience.js'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeader index="01" eyebrow="whoami" title="About me" />

      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="text-lg leading-relaxed text-ink-muted">{withYears(site.bio)}</p>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Beyond work, I keep a steady stream of side projects going — from learning platforms to
            AI-driven development workflows — because the best way to stay sharp is to keep building.
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-2">
          <dl className="grid grid-cols-2 gap-4">
            {site.stats.map(({ value, label }) => (
              <div key={label} className="surface p-5">
                <dt className="order-2 mt-1 block text-sm text-ink-muted">{label}</dt>
                <dd className="font-display text-3xl font-bold text-gradient animate-gradient-x">{withYears(value)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
