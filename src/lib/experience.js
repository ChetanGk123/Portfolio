import site from '../content/site.json'

/**
 * Years of experience, computed from site.json's `careerStart` date.
 * Set it once — the site stays current forever.
 */
export function yearsOfExperience(asOf = new Date()) {
  const start = new Date(site.careerStart)
  const ms = asOf - start
  return Math.max(0, Math.floor(ms / (365.2425 * 24 * 60 * 60 * 1000)))
}

/** "5+" style label. */
export function yearsLabel() {
  return `${yearsOfExperience()}+`
}

/** Replaces every `{years}` token in a content string (e.g. bio, stats). */
export function withYears(text) {
  return typeof text === 'string' ? text.replaceAll('{years}', yearsLabel()) : text
}
