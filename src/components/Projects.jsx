import { ExternalLink, Folder, Star } from 'lucide-react'
import { GithubIcon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { getProjects } from '../lib/content.js'

const projects = getProjects()

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeader index="03" eyebrow="ls ./projects" title="Things I've built" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={(i % 3) * 90}
            className={project.featured ? 'sm:col-span-2 lg:col-span-2' : ''}
          >
            <article className="spotlight-card group flex h-full flex-col p-6" onMouseMove={trackMouse}>
              {project.image && (
                <a
                  href={project.live || project.github || '#projects'}
                  target={project.live || project.github ? '_blank' : undefined}
                  rel="noreferrer"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="relative -mx-6 -mt-6 mb-5 block overflow-hidden rounded-t-2xl border-b border-white/[0.07]"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="aspect-video w-full object-cover opacity-90 transition-transform duration-300 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-800/60 to-transparent"
                  />
                </a>
              )}
              <div className="mb-4 flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/25 to-accent-cyan/25 text-accent-cyan">
                  <Folder size={20} aria-hidden="true" />
                </span>
                <div className="flex items-center gap-1">
                  {project.featured && (
                    <span className="mr-1 inline-flex items-center gap-1 rounded-full border border-accent-violet/40 bg-accent-violet/10 px-2.5 py-0.5 font-mono text-[11px] text-accent-violet">
                      <Star size={11} aria-hidden="true" /> featured
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-white/[0.06] hover:text-white"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-white/[0.06] hover:text-white"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-accent-cyan">
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{project.description}</p>

              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-ink-faint">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <a
          href="https://github.com/ChetanGk123?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          <GithubIcon size={18} aria-hidden="true" />
          More on GitHub
        </a>
      </Reveal>
    </section>
  )
}

function trackMouse(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
}
