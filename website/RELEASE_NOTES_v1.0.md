# AICA Website Release Notes v1.0

## Release Summary

AICA Website v1.0 delivers the first production-ready version of the programme’s documentation-first Next.js website.

The release presents AICA as an independent, early-stage engineering programme. It documents concepts, research questions, architecture reasoning, development methods, evidence maturity, and conditional future validation without presenting unvalidated performance as established capability.

## Delivered Features

### Technical homepage

- Responsive engineering-focused hero and programme-status presentation.
- System architecture, research areas, development roadmap, Engineering Journal, engineering principles, and public-document sections.
- Technical concept imagery and responsive layouts aligned with the AICA visual system.

### Research and documentation

- Research hub with six engineering areas, current questions, methodology, evidence maturity, and related navigation.
- Documentation hub with a local table of contents, route-aware library, four document-authority classes, evidence vocabulary, principles, confirmed programme history from 2014, and recent records.
- Dedicated Programme Overview, Engineering Process, and Research Standards pages.

### Engineering Journal

- Public Journal index and homepage preview cards driven by `data/journal.ts`.
- Three statically generated records:
  - `/journal/concept-evolution`
  - `/journal/engineering-architecture`
  - `/journal/energy-system-development`
- Route-specific metadata, breadcrumbs, responsive images, versions, evidence statuses, limitations, and related programme links.

### Roadmap and Engineering Overview

- Conditional programme phases, current-focus areas, evidence maturity, decision gates, and future-stage labels.
- `/whitepaper` document status, scope, limitations, embedded PDF viewer, and direct open/download access.
- Hydration-safe PDF iframe markup with unchanged appearance and responsive dimensions.

### Navigation, accessibility, and responsive behaviour

- Shared desktop/mobile navigation with current-page states.
- Mobile-menu focus entry, Escape handling, and focus return.
- Skip link, visible focus styles, semantic landmarks, breadcrumbs, descriptive image text, and titled PDF viewer.
- Responsive grids and readable single-column mobile layouts.

### SEO and discovery

- Route-specific titles, descriptions, canonical URLs, Open Graph URLs, and Twitter summary metadata.
- Production origin set to `https://www.aicaair.com`.
- Public robots and sitemap routes covering all content pages and Journal entries.

## Content Integrity

- Programme history identifies Concept & Research as beginning in 2014.
- No 300 kg payload figure is used.
- No unsupported range, payload, noise, power, energy-density, speed, endurance, service-life, certification, or safety-performance claim is presented as validated.
- Physical subsystem, prototype, flight, certification, and production work is described as future, planned, or conditional.
- Confidential propulsion details remain excluded.

## Technology

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- MDX support
- Static generation for public content and Journal entry routes

## Final Validation

The final implementation passes:

```bash
npm run typecheck
npm run lint
npm run build
```

Local production checks confirmed HTTP 200 for all Journal entry routes and `/whitepaper`. A browser-console check of `/whitepaper` detected no hydration warnings or Recoverable Errors.
