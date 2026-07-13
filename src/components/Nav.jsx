import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import site from '../content/site.json'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/[0.06] bg-base-900/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-base-700 focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <a href="#top" className="font-mono text-sm text-ink-muted transition-colors hover:text-white">
          <span className="text-accent-cyan">~/</span>
          {site.name.split(' ')[0].toLowerCase()}
          <span className="animate-blink text-accent-violet">_</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map(({ id, label }, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === id ? 'text-white' : 'text-ink-muted hover:text-white'
                }`}
              >
                <span className="mr-1 font-mono text-xs text-accent-cyan">0{i + 1}.</span>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href={site.resumeFile} download className="btn-ghost ml-2 !px-4 !py-2 text-sm">
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-ink-muted transition-colors hover:text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/[0.06] bg-base-900/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto max-w-content space-y-1 px-5 py-4">
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-ink-muted transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resumeFile}
                download
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-accent-cyan"
              >
                Download resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
