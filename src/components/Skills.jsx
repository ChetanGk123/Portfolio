import { Layout, Server, Wrench } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import skills from '../content/skills.json'

const ICONS = { layout: Layout, server: Server, wrench: Wrench }

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeader index="02" eyebrow="stack" title="Skills & tools" />

      <div className="grid gap-5 md:grid-cols-3">
        {skills.map(({ category, icon, skills: list }, i) => {
          const Icon = ICONS[icon] ?? Wrench
          return (
            <Reveal key={category} delay={i * 100}>
              <div className="spotlight-card h-full p-6" onMouseMove={trackMouse}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/25 to-accent-cyan/25 text-accent-cyan">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{category}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <li key={skill} className="chip">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function trackMouse(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
}
