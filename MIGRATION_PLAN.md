# Migration Plan

## Goal

Migrate the current static AICA website into a production-ready Next.js 15, React, TypeScript, and Tailwind CSS application while preserving the current content, visual direction, and reusable assets.

## Guiding Principles

- Keep the first migration conservative.
- Preserve the existing public page before adding new features.
- Separate structure, styling, content, and configuration.
- Fix known correctness issues during migration, especially corrupted text and placeholder links.
- Add production guardrails early: type checking, linting, build validation, and basic smoke testing.

## Phase 0: Baseline And Source Control

Objectives:

- Create an initial commit of the existing static package before migration work begins.
- Confirm intended canonical domain.
- Confirm final Raydium URL behavior before token launch.
- Confirm whether the `.docx` whitepaper should be publicly downloadable or retained as internal source only.

Deliverables:

- Clean Git baseline.
- Confirmed asset and link inventory.
- Confirmed deployment target.

Acceptance criteria:

- Repository has an initial commit.
- Existing static site can still be opened locally.
- No asset or document is lost.

## Phase 1: Scaffold Next.js 15 Application

Objectives:

- Add Next.js 15 with React, TypeScript, and Tailwind CSS.
- Add `src/app` structure.
- Add `package.json`, lockfile, `tsconfig.json`, `next.config.ts`, Tailwind, PostCSS, and ESLint configuration.
- Move static assets into `public/images` and documents into `public/docs`.

Deliverables:

- Running Next.js dev server.
- Empty or minimally composed homepage.
- Working build command.

Acceptance criteria:

- `npm run dev` starts the app.
- `npm run build` succeeds.
- TypeScript and lint commands are available.

## Phase 2: Rebuild Current Page As Components

Objectives:

- Convert the current `index.html` into React components.
- Preserve the page structure, copy, visual identity, and responsive behavior.
- Extract the inline SVG blueprint into a dedicated component.
- Replace repeated markup with reusable components.

Deliverables:

- `Header`
- `Footer`
- `Button`
- `SectionHeader`
- `HeroSection`
- `OverviewSection`
- `UseCasesSection`
- `RoadmapSection`
- `TokenSection`
- `CtaSection`
- `Blueprint`

Acceptance criteria:

- The Next.js homepage visually matches the current static page.
- Whitepaper links work from the new public path.
- X links open safely with `target="_blank"` and `rel="noopener noreferrer"`.
- Placeholder Raydium links are either disabled clearly or read from configuration.

## Phase 3: Content And Configuration Layer

Objectives:

- Move repeated page copy and link values into typed data/config files.
- Centralize external URLs.
- Add environment variables for launch-dependent URLs if needed.
- Replace corrupted characters with valid punctuation.

Deliverables:

- `src/data/site.ts`
- `src/lib/links.ts`
- Typed content structures for stats, use cases, roadmap, and token allocation.

Acceptance criteria:

- Components are mostly presentational.
- Page copy can be updated without editing component structure.
- No mojibake text remains.

## Phase 4: Production Metadata And SEO

Objectives:

- Use the Next.js Metadata API.
- Add canonical metadata.
- Add Open Graph and Twitter metadata.
- Add sitemap and robots configuration.
- Confirm production social preview image path.

Deliverables:

- Metadata in `src/app/layout.tsx` or page-level metadata.
- `src/app/sitemap.ts`.
- `src/app/robots.ts`.

Acceptance criteria:

- Metadata renders correctly in built output.
- Social image resolves from the production domain.
- Sitemap includes the homepage.

## Phase 5: Accessibility, Responsiveness, And UX Hardening

Objectives:

- Add a real mobile navigation pattern.
- Improve keyboard focus states.
- Ensure placeholder actions are accessible.
- Validate heading order, landmark structure, alt text, and link text.
- Check color contrast.

Deliverables:

- Mobile header/menu.
- Focus-visible styles.
- Accessibility fixes.

Acceptance criteria:

- The page is usable by keyboard.
- Mobile navigation works without hiding important navigation.
- Lighthouse accessibility score is acceptable for launch.

## Phase 6: Performance Optimization

Objectives:

- Use `next/image` for local image optimization.
- Add image sizes and priority only where appropriate.
- Review PNG formats and consider WebP/AVIF generation through Next.js.
- Reduce unnecessary CSS and improve caching.

Deliverables:

- Optimized image usage.
- Production build performance review.

Acceptance criteria:

- Hero image has appropriate responsive sizing.
- No oversized image is loaded unnecessarily on mobile.
- Lighthouse performance issues are reviewed and addressed where practical.

## Phase 7: Testing And CI

Objectives:

- Add automated quality checks.
- Add smoke tests for the homepage.
- Verify primary links and static documents.

Deliverables:

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Playwright smoke tests.
- CI workflow.

Acceptance criteria:

- CI runs on pull requests or pushes.
- Homepage smoke test passes.
- Whitepaper link resolves.
- Primary navigation anchors work.

## Phase 8: Deployment

Objectives:

- Deploy the Next.js application to the selected host.
- Configure domain, HTTPS, caching, and security headers.
- Confirm production metadata and social previews.

Deliverables:

- Production deployment.
- Deployment documentation.
- Environment variable documentation.

Acceptance criteria:

- Production URL loads successfully.
- Canonical domain is correct.
- Whitepaper and images load.
- Raydium behavior matches launch status.

## Phase 9: Post-Launch Enhancements

Potential enhancements:

- Add analytics after privacy and measurement goals are defined.
- Add a CMS if non-developers need to update content.
- Add project updates or news route.
- Add richer whitepaper landing/download flow.
- Add token launch state management.
- Add legal, privacy, risk disclosure, and terms pages if required.

## Suggested Migration Order

1. Commit the current static package.
2. Scaffold the Next.js app.
3. Move assets into `public/`.
4. Rebuild the homepage component by component.
5. Fix text encoding and placeholder link behavior.
6. Add metadata, sitemap, and robots.
7. Add accessibility and responsive improvements.
8. Add build/lint/typecheck and smoke tests.
9. Deploy to staging.
10. Review and deploy to production.
