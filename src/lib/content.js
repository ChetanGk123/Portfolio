// ---------------------------------------------------------------------------
// Content loader — the "add your work easily" engine.
//
// To add a project: drop a new .md file into src/content/projects/
// with frontmatter (title, description, tech, github, live, featured, order)
// and it appears on the site automatically on the next build/dev reload.
// ---------------------------------------------------------------------------

const files = import.meta.glob('../content/projects/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

/** Minimal frontmatter parser: `key: value` lines between --- fences. */
function parseFrontmatter(raw) {
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/.exec(raw.trim())
  if (!match) return { data: {}, body: raw.trim() }

  const data = {}
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    if (value === 'true') value = true
    else if (value === 'false') value = false
    else if (value !== '' && !Number.isNaN(Number(value))) value = Number(value)
    data[key] = value
  }
  return { data, body: match[2].trim() }
}

export function getProjects() {
  return Object.entries(files)
    .map(([path, raw]) => {
      const { data, body } = parseFrontmatter(raw)
      return {
        slug: path.split('/').pop().replace(/\.md$/, ''),
        title: data.title ?? 'Untitled project',
        description: data.description ?? body.split('\n')[0] ?? '',
        tech: typeof data.tech === 'string' ? data.tech.split(',').map((t) => t.trim()).filter(Boolean) : [],
        github: data.github || null,
        live: data.live || null,
        image: data.image || null,
        featured: data.featured === true,
        order: typeof data.order === 'number' ? data.order : 999,
        body,
      }
    })
    .sort((a, b) => a.order - b.order)
}
