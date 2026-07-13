import Reveal from './Reveal.jsx'

export default function SectionHeader({ index, eyebrow, title }) {
  return (
    <Reveal className="mb-12">
      <p className="section-index mb-2">
        {index} <span className="text-ink-faint">//</span> {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-accent-violet to-accent-cyan" />
    </Reveal>
  )
}
