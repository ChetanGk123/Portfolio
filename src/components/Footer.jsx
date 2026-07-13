import site from '../content/site.json'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-5 font-mono text-xs text-ink-faint sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          designed & built with <span className="text-accent-violet">react</span> +{' '}
          <span className="text-accent-cyan">vite</span>
        </p>
      </div>
    </footer>
  )
}
