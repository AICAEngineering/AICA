# AICA Documentation Platform

This directory contains the production Next.js application for the independent AICA engineering initiative.

## Public positioning

AICA is in early-stage development and uses a documentation-first process to define a path from concept toward possible prototype validation. The website does not claim validated technology, a completed prototype, technical success, production dates, or investment outcomes.

The primary public document is:

- Source: `content/docs/AICA_Engineering_Overview.mdx`
- PDF: `public/docs/AICA_Engineering_Overview.pdf`
- Viewer: `/whitepaper`

The superseded v0.1 document is retained only in `archive/legacy/` and is not publicly served.

## Routes

- `/`
- `/about`
- `/research`
- `/documentation`
- `/documentation/program-overview`
- `/documentation/engineering-process`
- `/documentation/research-standards`
- `/journal`
- `/roadmap`
- `/whitepaper`

## Project structure

- `app/` — App Router pages, metadata, robots, and sitemap
- `components/` — Shared interface and documentation components
- `content/` — MDX engineering content
- `data/` — Site configuration and navigation
- `lib/` — Shared utilities and metadata generation
- `public/docs/` — Current public document assets
- `archive/legacy/` — Superseded documents excluded from public serving

## Development

```bash
npm ci
npm run dev
```

## Release validation

```bash
npm run typecheck
npm run lint
npm run build
```

Production metadata uses the canonical origin `https://www.aicaair.com`.
