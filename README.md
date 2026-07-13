# Chetan Kajjidoni — Portfolio

Dark, animated developer portfolio built with **React + Vite + Tailwind CSS**. All content is file-based: add a markdown file, get a project card. No CMS, no database.

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Adding your work (the important part)

### Add a project
Drop a new `.md` file into `src/content/projects/`. That's it — it appears automatically.

```md
---
title: My New Project
description: One-liner shown on the card.
image: /projects/my-new-project.png
tech: React, TypeScript, Tailwind CSS
github: https://github.com/ChetanGk123/my-new-project
live: https://my-new-project.vercel.app
featured: true
order: 1
---

Optional longer notes (kept with the project, used as fallback description).
```

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Card heading |
| `description` | recommended | Card body text |
| `tech` | no | Comma-separated, shown as tags |
| `image` | no | Screenshot shown on the card (16:9, ~1280×720 works best). Put the file in `public/projects/`. Cards without an image fall back to the text layout |
| `github` / `live` | no | Icon links (omit either) |
| `featured` | no | `true` = wider card + badge |
| `order` | no | Lower number = shown first |

### Update experience / skills / bio
- `src/content/experience.json` — jobs on the timeline
- `src/content/skills.json` — skill categories and chips
- `src/content/site.json` — name, tagline, bio, email, links, hero stats, availability badge

### Years of experience — automatic
Your experience is computed from `careerStart` in `site.json` (`"2021-03-01"`) — never update it manually. Write `{years}` anywhere in `site.json` text (bio, stat values) and it renders as the current count, e.g. `5+`. The number increments automatically as time passes.

> `scripts/make_resume.py` has its own `CAREER_START` constant — keep it in sync if you regenerate the PDF.

### Project screenshots
Generated SVG covers ship in `public/projects/` as placeholders. To use a real screenshot, save it as e.g. `public/projects/lms.png` and update the project's `image:` line — a real UI screenshot always beats a placeholder.

### Replace the resume
Swap `public/resume.pdf` with your own file (a generated one is included as a starting point — you can also tweak `scripts/make_resume.py` and re-run it).

## Deploying

Any static host works:
- **Netlify / Vercel**: import the repo, build command `npm run build`, output `dist`
- **GitHub Pages**: build, then publish `dist/` (set `base` in `vite.config.js` if the site isn't at the domain root)

## Structure

```
src/
├── content/          ← everything you edit lives here
│   ├── projects/*.md ← one file per project
│   ├── experience.json
│   ├── skills.json
│   └── site.json
├── components/       ← Hero, Projects, Experience, …
├── lib/content.js    ← markdown/frontmatter loader
└── index.css         ← design tokens & effects
```

Design notes: respects `prefers-reduced-motion`, keyboard-navigable, semantic color tokens, ~69 KB gzipped JS.
