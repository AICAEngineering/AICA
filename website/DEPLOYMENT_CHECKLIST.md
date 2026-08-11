# AICA Website v1.0 Deployment Checklist

## Build

- [ ] Set the deployment root to `website/`.
- [ ] Use a Node.js runtime supported by Next.js 15.
- [ ] Install dependencies with `npm ci`.
- [ ] Confirm `public/docs/AICA_Engineering_Overview.pdf` is present.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.

## Production Configuration

- [ ] Set the production hostname to `https://www.aicaair.com`.
- [ ] Use the Next.js framework preset and default output.
- [ ] Confirm HTTPS and intended `www` redirect behaviour.
- [ ] Confirm no development server or stale `.next` output is deployed.

## Route Checks

Confirm HTTP 200 for:

- [ ] `/`
- [ ] `/about`
- [ ] `/research`
- [ ] `/documentation`
- [ ] `/documentation/program-overview`
- [ ] `/documentation/engineering-process`
- [ ] `/documentation/research-standards`
- [ ] `/journal`
- [ ] `/journal/concept-evolution`
- [ ] `/journal/engineering-architecture`
- [ ] `/journal/energy-system-development`
- [ ] `/roadmap`
- [ ] `/whitepaper`
- [ ] `/docs/AICA_Engineering_Overview.pdf`
- [ ] `/robots.txt`
- [ ] `/sitemap.xml`

## Content and Links

- [ ] Homepage and Journal cards open the correct Journal records.
- [ ] Research, Documentation, Journal, Roadmap, and Engineering Overview links resolve.
- [ ] PDF open and download actions work.
- [ ] `https://x.com/AICAair` opens the intended project account.
- [ ] No unsupported performance or validation claims appear.

## Responsive and Accessibility QA

- [ ] Check 390 px, 768 px, 1024 px, and 1440 px layouts.
- [ ] Confirm there is no horizontal page overflow.
- [ ] Test mobile navigation, Escape closing, and focus return.
- [ ] Test the skip link, visible focus states, breadcrumbs, and keyboard navigation.
- [ ] Confirm images load with appropriate alternative text.
- [ ] Confirm the PDF viewer is titled, responsive, and offers direct access links.
- [ ] Confirm the browser console contains no hydration warnings or Recoverable Errors.

## SEO

- [ ] Confirm canonical and Open Graph URLs use `https://www.aicaair.com`.
- [ ] Confirm route titles and descriptions render correctly.
- [ ] Confirm `robots.txt` references the production sitemap.
- [ ] Confirm the sitemap contains all public routes and Journal entries.

## Sign-off

- [ ] Record the deployed commit SHA.
- [ ] Record the production deployment URL and timestamp.
- [ ] Complete a private-window smoke test.
- [ ] Record reviewer approval.
