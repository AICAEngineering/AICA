# AICA Website Release Notes v1.0

Release date: 14 July 2026

## Release summary

AICA Website v1.0 is the first public release of the documentation-first Next.js platform in `website/`.

The release presents AICA as an independent, early-stage engineering initiative working from concept documentation toward possible prototype validation. It does not claim a validated technology, completed prototype, test result, production date, technical success, investment return, or funding outcome.

## Public engineering document

- Added `AICA_Engineering_Overview.pdf` as the primary public document.
- Added the maintained MDX source at `content/docs/AICA_Engineering_Overview.mdx`.
- Published the overview as accessible HTML on `/whitepaper` and as an embedded/downloadable PDF.
- Included purpose, current status, engineering philosophy, development process, conditional roadmap, transparency and risk statements, and intellectual-property limitations.
- Moved the superseded v0.1 document to `archive/legacy/AICA_Whitepaper_v0.1_legacy.pdf`; it is not served from `public/`.
- Kept any hypothetical future token initiative explicitly separate from the engineering program. No token offering or token economics appear in the public engineering narrative.

## Documentation platform

Public routes:

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

The documentation architecture includes MDX content, reusable document cards, breadcrumbs, current-page navigation state, a documentation sidebar, and a responsive document viewer.

## Release hardening

- Aligned the website and engineering overview around one five-phase conditional roadmap.
- Added route-specific titles, descriptions, canonical URLs, Open Graph URLs, and Twitter summary metadata.
- Standardized the production origin as `https://www.aicaair.com` across metadata, sitemap, and robots.
- Fixed the document-card action glyph and validated source/PDF encoding.
- Added a skip link and focusable main targets.
- Removed collapsed mobile navigation from the tab order.
- Added mobile-menu focus entry, Escape closing, focus return, accurate ARIA state, and current-page indication.
- Added PDF version, publication date, status, file size, mobile fallback, new-tab wording, and accessible HTML content.
- Aligned `@next/mdx` with Next.js 15.
- Applied a scoped patched PostCSS override; `npm audit` reports zero vulnerabilities.
- Disabled webpack filesystem caching to prevent dependency-snapshot warnings in the OneDrive-backed release workspace.

## Validation

The release candidate passes:

```bash
npm run typecheck
npm run lint
npm run build
```

All application routes are statically prerendered. Local production-server checks return HTTP 200 for every route, the engineering overview PDF, `robots.txt`, and `sitemap.xml`.

See `RELEASE_REVIEW_RC2.md` for the final production recommendation and remaining non-blocking observations.
