# AICA Website v1.0 Deployment Checklist

## Release scope

- [ ] Deployment root is `website/`.
- [ ] The repository-root static website remains unchanged.
- [ ] Node.js runtime supports Next.js 15.
- [ ] Dependencies are installed with `npm ci`.
- [ ] `package-lock.json` is committed.
- [ ] `archive/legacy/AICA_Whitepaper_v0.1_legacy.pdf` is retained for history and is not publicly served.
- [ ] `public/docs/AICA_Engineering_Overview.pdf` is present.
- [ ] Production origin is `https://www.aicaair.com` with the `www` hostname.

## Required validation

All commands must complete with zero errors and zero warnings:

```bash
npm run typecheck
npm run lint
npm run build
```

- [ ] `npm audit` reports zero known vulnerabilities.

## Route and link verification

Confirm HTTP 200 after deployment:

- [ ] `/`
- [ ] `/about`
- [ ] `/research`
- [ ] `/documentation`
- [ ] `/documentation/program-overview`
- [ ] `/documentation/engineering-process`
- [ ] `/documentation/research-standards`
- [ ] `/journal`
- [ ] `/roadmap`
- [ ] `/whitepaper`
- [ ] `/docs/AICA_Engineering_Overview.pdf`
- [ ] `/icon.svg`
- [ ] `/robots.txt`
- [ ] `/sitemap.xml`

External verification:

- [ ] `https://x.com/AICAair` opens the intended official project account.
- [ ] The legacy `/docs/AICA_Whitepaper.pdf` path is absent or intentionally redirected away from the superseded document.

## Document review

- [ ] `/whitepaper` labels the primary document “AICA Engineering Overview.”
- [ ] PDF and HTML versions show version 1.0, 14 July 2026, and early-stage status.
- [ ] Website and document use the same five roadmap phases.
- [ ] No public page or primary document contains Solana, Raydium, token allocation, or token-economics content.
- [ ] No page claims validation, completed prototypes, test results, production dates, technical success, investment returns, or funding outcomes.
- [ ] PDF opens in desktop viewer and through the mobile download link.

## SEO and metadata

For every page:

- [ ] Canonical URL matches the page route on `https://www.aicaair.com`.
- [ ] Open Graph URL matches the page route.
- [ ] Title and description describe the page content.
- [ ] Twitter card uses the supported summary format.

Site-level:

- [ ] `robots.txt` allows indexing and names `https://www.aicaair.com/sitemap.xml`.
- [ ] `sitemap.xml` contains every public route with `www.aicaair.com` URLs.
- [ ] No staging or non-`www` origin appears in rendered metadata.

## Responsive QA

Check at 390 px, 768 px, 1024 px, and 1440 px:

- [ ] No horizontal page scrolling.
- [ ] Header, hero, cards, breadcrumbs, and footer remain readable.
- [ ] Mobile navigation opens and closes without layout overlap.
- [ ] Documentation navigation precedes content clearly on narrow screens.
- [ ] PDF viewer falls back to the mobile document links and HTML version below.
- [ ] SVG diagram scales within its container.

## Accessibility QA

Keyboard-only:

- [ ] Skip link appears on focus and moves to the main content.
- [ ] Focus indicator is visible on all controls.
- [ ] Mobile menu moves focus to its first link when opened.
- [ ] Escape closes the mobile menu and returns focus to the trigger.
- [ ] Closing from the trigger returns focus to the trigger.
- [ ] Collapsed mobile links are absent from the tab order.

Semantics:

- [ ] Menu trigger exposes accurate `aria-expanded`, `aria-controls`, and accessible labels.
- [ ] Current navigation items expose `aria-current="page"`.
- [ ] Breadcrumbs expose the current page.
- [ ] PDF iframe has a descriptive title and accessible HTML fallback content is present.
- [ ] New-tab links announce the context change.

## Production deployment

Recommended settings:

- Framework preset: Next.js
- Build command: `npm run build`
- Install command: `npm ci`
- Output: default Next.js output
- Root directory: `website`

## Post-deployment

- [ ] Open the deployed site in a private session.
- [ ] Confirm there are no console or hydration errors.
- [ ] Confirm all route and asset checks above return HTTP 200.
- [ ] Confirm canonical, Open Graph, robots, and sitemap output on the live hostname.
- [ ] Test the mobile menu with keyboard and screen reader.
- [ ] Confirm the X destination and account ownership.
- [ ] Run Lighthouse for performance, accessibility, best practices, and SEO.
- [ ] Record deployment URL, commit, timestamp, and reviewer sign-off.
