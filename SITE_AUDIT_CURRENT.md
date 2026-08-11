# AICA Current Site Audit

## Executive Summary

The current Next.js application contains 10 public content routes. The redesigned homepage establishes a strong visual baseline: restrained green and navy, wide technical imagery, disciplined cards, generous spacing, clear stage language, and responsive layouts. `/research`, `/documentation`, `/journal`, `/roadmap`, and `/whitepaper` broadly follow that system. `/about` and the three documentation detail routes still use the older, much plainer MDX article shell.

The site is structurally sound and all declared internal route, image, and PDF targets inspected in the repository exist. Every content route defines route-specific metadata through the same helper, canonical paths are consistent with `https://www.aicaair.com`, and the sitemap contains all 10 content routes. No 300 kg payload statement or numerical range, payload, noise, power, energy-density, speed, endurance, or service-life claim was found.

The site is not yet release-ready. The Journal calls itself an active engineering record but supplies only three non-linked summaries with no dates, versions, evidence status, or full records. The Whitepaper mobile fallback says an accessible HTML version appears below, but the page does not render that HTML document. Evidence vocabulary also varies between Documentation, Research, and Roadmap, and several homepage/research phrases could more clearly distinguish present activity from planned validation.

Audit method: source-level review of every route, shared layout/navigation, MDX content, metadata generation, responsive utility classes, asset references, PDF text, sitemap, robots configuration, and internal link targets. No application file was changed.

## Route Inventory

### `/`

- **Status:** Minor polish needed
- **Page purpose:** Primary introduction to AICA, current maturity, system architecture, research areas, development roadmap, journal preview, engineering principles, and public documents.
- **What is complete:** This is the visual-quality benchmark for the site. It has a high-quality responsive hero, restrained concept imagery, explicit early-stage status, strong content hierarchy, system/research/roadmap sections, clear CTAs, useful alt text, and route-specific metadata/canonical URL. Mobile layouts collapse cleanly and images use `next/image` with responsive sizing.
- **Problems found:** The research introduction contains the typo “AICAs.” Some present-tense wording—particularly “combines simulation, experimental validation…,” “development and validation” of materials, and “prediction, measurement, and mitigation” of noise—can read as current completed activity rather than a research scope or planned method. “View architecture” links to the general `/research` page rather than a dedicated or anchored architecture destination. The Development Roadmap graphic may be difficult to read at mobile width because a full 1536×1024 diagram is scaled into the viewport. Homepage Journal content duplicates the same three record concepts used on `/journal` and `/documentation` rather than coming from a single data source.
- **Required action:** Correct the typo; qualify experimental, measurement, validation, and production language as research/planned work; point the architecture CTA to a precise destination if one becomes available; verify roadmap graphic legibility on physical mobile devices; centralise Journal record data when real entries are introduced.
- **Priority:** Medium

### `/about`

- **Status:** Significant redesign needed
- **Page purpose:** Explain programme purpose, status, mission, engineering philosophy, and public boundaries.
- **What is complete:** Copy is concise, transparent, and appropriately avoids prototype, certification, production, investment, and validation claims. Breadcrumbs, responsive prose typography, metadata, canonical URL, and the shared site shell are present.
- **Problems found:** The page is a short, unillustrated MDX article and falls well below the homepage’s visual depth, hierarchy, pacing, and navigation quality. It does not include the confirmed 2014 programme origin. It has no status panel, programme structure, historical context, related-page navigation, or closing CTA. The token/funding boundary receives disproportionate prominence relative to the engineering story. There are no empty placeholders, but the overall page feels incomplete as the main organisational overview.
- **Required action:** Later redesign the route within the established technical visual system; add confirmed history and programme structure; provide restrained related navigation; rebalance the public-boundary content without weakening it.
- **Priority:** High

### `/research`

- **Status:** Minor polish needed
- **Page purpose:** Present research disciplines, active questions, methodology, evidence maturity, and links to programme outputs.
- **What is complete:** Strong technical layout, six coherent research areas, responsive images and grids, breadcrumbs, open questions, methodology, evidence caveat, useful internal navigation, metadata, and canonical URL. It is visually close to the homepage and uses the same imagery and UI language.
- **Problems found:** Evidence terms do not match `/documentation`: “Analytical & Conceptual,” “Simulation & Digital Validation,” “Subsystem Validation,” and “Vehicle Validation” replace Concept, Simulated, Bench Validated, Prototype Validated, and Measured. Levels 3 and 4 are not explicitly labelled as future programme stages inside their cards. “Experimental validation” and “progressive hardware development” in the hero can imply current activity despite the programme’s documented baseline stage. “Digital Validation” may overstate simulation authority. No dedicated research detail routes exist; all six area cards are informational only, which is acceptable but limits depth.
- **Required action:** Adopt one evidence vocabulary site-wide; label physical evidence levels as future where appropriate; tighten current-versus-planned wording; consider detail documents only when genuine content exists.
- **Priority:** High

### `/documentation`

- **Status:** Ready
- **Page purpose:** Main technical documentation hub and evidence-status guide.
- **What is complete:** Clear technical hero, documentation status, local table of contents, route-aware library, four document classes, explicit future labels for Classes 03 and 04, five-level evidence vocabulary, documentation principles, confirmed 2014 history, Journal navigation, closing CTAs, responsive multi-column layouts, metadata, and canonical URL. The page correctly avoids fake System Architecture, Technical Notes, and individual Journal routes.
- **Problems found:** The three record titles are locally duplicated from `/journal` because no shared Journal data source exists. System Architecture’s “Available within programme documentation” label is vague because it does not identify a precise document. Unlike `/research` and documentation detail pages, the hub has no breadcrumb; the local table of contents largely compensates. No images are used, intentionally, and the subtle blueprint grid is appropriate.
- **Required action:** No release-blocking change. When real record data or an architecture document exists, centralise those entries and provide a precise destination.
- **Priority:** Low

### `/documentation/program-overview`

- **Status:** Minor polish needed
- **Page purpose:** State programme scope, present phase, boundaries, decision standard, and current evidence status.
- **What is complete:** Accurate, concise foundational content; documentation sidebar; breadcrumbs; readable responsive prose; clear non-validation statement; metadata and canonical URL.
- **Problems found:** The older MDX article shell is visually sparse compared with the homepage and Documentation hub. The document does not display a version, publication/update date, formal status, owner, limitations block, or next/previous navigation, despite the Research Standards page saying documents should carry status, date, version, and limitations. It does not include the confirmed 2014 origin. “Program” and “programme” usage is inconsistent across the site.
- **Required action:** Add document metadata and lightweight document navigation when the documentation system is matured; align terminology and decide whether the historical origin belongs in this foundational document.
- **Priority:** Medium

### `/documentation/engineering-process`

- **Status:** Minor polish needed
- **Page purpose:** Define the staged documentation-first engineering process.
- **What is complete:** Clear five-stage process, explicit conditional language, no implied completed testing, documentation sidebar, breadcrumbs, responsive prose, metadata, and canonical URL.
- **Problems found:** Same visual and document-governance gaps as the Programme Overview: no version/date/status/limitations header or next/previous navigation. Stages are presented as plain prose rather than a scan-friendly process structure. It overlaps substantially with the Whitepaper development-process content and Roadmap phase descriptions without cross-references or a declared source of authority.
- **Required action:** Establish document metadata and authority; distinguish this process standard from overview/roadmap summaries; improve scanability without turning it into a marketing page.
- **Priority:** Medium

### `/documentation/research-standards`

- **Status:** Minor polish needed
- **Page purpose:** Define standards for traceability, repeatability, claims, safety visibility, and inconclusive results.
- **What is complete:** Strong claim discipline, appropriate future-oriented wording, concise standards, documentation sidebar, breadcrumbs, responsive prose, metadata, and canonical URL.
- **Problems found:** The document requires status, date, version, and limitations, but does not itself display them. It has no revision history, standards authority, downloadable/versioned artifact, or related-document navigation. Its sparse article presentation is visually consistent with the other subroutes but not with the redesigned homepage quality.
- **Required action:** Make the standards document comply with its own metadata/versioning rules; define revision history and relationship to other programme documents.
- **Priority:** Medium

### `/journal`

- **Status:** Incomplete
- **Page purpose:** Serve as the living record of programme decisions, observations, changes, and milestones.
- **What is complete:** Strong visual consistency with the newer pages, restrained technical imagery, confirmed 2014 origin, future-stage labelling, appropriate non-validation warning, responsive grids/timeline, closing navigation, metadata, and canonical URL. Journal imagery is used consistently and has descriptive alt text.
- **Problems found:** The three “Featured engineering records” are static cards, not links, and contain only summaries. There are no article pages, dates, authors, document versions, evidence status, revision history, or complete entries. The hero says the record is active and continuously updated, and Documentation directs visitors here for recent records, but there is no actual navigable living record. The same three titles are duplicated in homepage and Documentation code. A separate legacy `content/pages/journal.mdx` exists but is not rendered, creating stale/duplicated content risk.
- **Required action:** Before release, either publish genuine dated/versioned record content with valid destinations or clearly reframe the page as a future Journal index. Consolidate the record data source and decide whether the unused MDX file is authoritative or obsolete.
- **Priority:** Blocker

### `/roadmap`

- **Status:** Minor polish needed
- **Page purpose:** Explain conditional programme phases, evidence maturity, decision gates, and future progression.
- **What is complete:** Excellent transparency around conditional progress, confirmed “2014 — Present” origin, explicit future-stage labels, no fake intermediate dates, strong technical hierarchy, responsive phase grids, cross-navigation, metadata, and canonical URL. No achieved physical-validation milestone is claimed.
- **Problems found:** Evidence vocabulary differs from Documentation (“Conceptual,” “Integrated validation,” “Vehicle measured”). Phase 02 is labelled “Active / Expanding” while other public documents call the current phase a documentation baseline; that may be accurate, but it requires a clearly published basis to avoid a programme-status contradiction. The full roadmap image duplicates the subsequent structured phase content and may be unreadable when scaled to mobile. The image alt text and homepage roadmap heading mention “validation and production” without stating “future” in the alt itself. An unused legacy `content/pages/roadmap.mdx` contains a different five-phase framework while the live route presents six phases, creating source-of-truth drift.
- **Required action:** Reconcile the current phase and evidence vocabulary; verify the diagram at mobile sizes; align or retire the unused five-phase MDX source; qualify future production/validation wording consistently.
- **Priority:** High

### `/whitepaper`

- **Status:** Significant redesign needed
- **Page purpose:** Present and provide access to the current AICA Engineering Overview.
- **What is complete:** Strong technical visual treatment, clear document maturity and limitations, valid 57,339-byte PDF target (reasonably displayed as 56 KB), working direct/open/download targets, responsive topic and related-page grids, route-specific metadata, canonical URL, and careful non-performance language. The PDF text matches the intended early-stage, conditional programme boundary and contains no prohibited figures.
- **Problems found:** On mobile, the PDF iframe is hidden and the fallback says “The complete document is also provided as accessible HTML below,” but no HTML rendition of `content/docs/AICA_Engineering_Overview.mdx` is rendered below. This is a functional and accessibility mismatch. The route is labelled `/whitepaper` while the UI consistently calls the artifact an Engineering Overview, producing naming/URL debt. PDF access is robust, but no visible document checksum, revision history, or last-updated relationship to the web summaries exists. The embedded iframe may vary by browser and should not be the only desktop reading mode.
- **Required action:** Render the existing HTML/MDX document or remove the false fallback promise; establish accessible reading parity and a clear revision relationship between PDF and web content; decide whether `/whitepaper` remains the canonical public name or should eventually redirect to an Engineering Overview route.
- **Priority:** Blocker

## Cross-Site Issues

1. **Multiple sources of truth:** Journal titles are repeated across homepage, Documentation, and Journal. Legacy `content/pages/journal.mdx`, `content/pages/research.mdx`, `content/pages/roadmap.mdx`, and `content/pages/documentation.mdx` are not used by their current live routes. The Roadmap MDX and live route describe different phase counts.
2. **Evidence vocabulary drift:** Documentation provides the clearest vocabulary, but Research and Roadmap use alternate labels. This weakens the promise that claim maturity is immediately understandable.
3. **Current-stage wording:** Site-level data and foundation documents say “documentation baseline,” while Roadmap says Simulation & Analysis is “Active / Expanding,” and homepage/research copy refers to experimental validation and progressive hardware development. These may describe intent, but they should not read as completed or currently evidenced physical work.
4. **Uneven internal-page quality:** Newer hubs use technical motifs, structured grids, status labels, and strong closing navigation. About and documentation detail pages remain sparse MDX articles.
5. **Document governance:** Public documents repeatedly advocate versioning, traceability, dates, and limitations, but only the PDF exposes a version and publication date.
6. **Language consistency:** “Program” and “programme” are both used. British spellings such as “modelling” and “behaviour” otherwise dominate the newer pages.

## Content Consistency

- Confirmed programme origin is consistently shown as 2014 on Documentation, Journal, and Roadmap. It is absent from About, Research, the homepage, and documentation detail pages rather than contradicted.
- No `300 kg` payload figure was found.
- No numerical range, payload, noise, power, energy-density, speed, endurance, or service-life capability figure was found.
- Payload, range, acoustic performance, certification, prototype validation, and production readiness appear only as limitations, future work, questions, or evidence categories.
- Documentation correctly distinguishes Concept, Simulated, Bench Validated, Prototype Validated, and Measured evidence. Research and Roadmap preserve the general maturity progression but use inconsistent names and do not always label physical levels as future.
- No code or copy refers to exposed propellers or external rotors. Vehicle images are consistently referenced as AICA concept/engineering visualisations, and the homepage explicitly states that visual studies do not represent a validated aircraft. A final human visual check of production-rendered assets should confirm the no-exposed-rotor rule at all crops and breakpoints.
- No certification, production, prototype, subsystem-test, or flight-test milestone is stated as achieved.

## Visual Consistency

- **Strong consistency:** Homepage, Research, Documentation, Journal, Roadmap, and Whitepaper share white/light-neutral surfaces, navy typography, restrained AICA green, thin borders, compact uppercase labels, responsive grids, and generous section spacing.
- **Weak consistency:** About and documentation detail routes use a generic prose shell with little visual hierarchy beyond typography, breadcrumbs, and the documentation sidebar.
- The newer pages appropriately avoid glassmorphism, heavy gradients, dramatic animation, and large shadows. Homepage uses the most imagery and polish; Documentation intentionally uses no large illustration and remains documentation-first.
- Repeated technical hero compositions on Documentation, Journal, Roadmap, and Whitepaper are consistent but somewhat formulaic. This is polish rather than a release blocker.
- Large roadmap/blueprint diagrams require real-device legibility verification; source-level responsive sizing prevents overflow but cannot guarantee embedded text readability.

## Navigation and Links

- Primary desktop/mobile navigation includes About, Research, Documentation, Journal, and Roadmap. Engineering Overview is consistently available as a separate CTA. Active-route states support subroutes.
- Footer navigation mirrors the top-level structure and marks active routes.
- Breadcrumbs appear on About, Research, and all three documentation detail pages. The newer Documentation, Journal, Roadmap, and Whitepaper hubs do not use breadcrumbs, relying on strong heroes and cross-navigation.
- Documentation detail pages have a dedicated responsive sidebar; it becomes a non-sticky block above content on small screens.
- All literal internal routes and referenced public assets inspected exist. No intentionally fabricated Technical Notes, System Architecture, or Journal-entry route is linked.
- Known navigation gaps: Journal record cards are non-interactive; homepage “View architecture” opens generic Research; Documentation record cards all lead to the Journal index; Whitepaper mobile fallback promises HTML that is not present.
- The external Project Updates link targets `https://x.com/AICAair`; availability and destination ownership should be checked as part of deployment QA.

## Responsive Behaviour

- The navigation collapses below `lg`, includes keyboard Escape handling, moves focus into the menu, returns focus on close, and uses appropriately sized controls.
- Newer hub pages consistently collapse from multi-column layouts to one column, wrap labels/CTAs, constrain imagery, and avoid explicit wide fixed widths.
- Documentation local navigation uses wrapping anchor links and should avoid horizontal overflow.
- Research cards progress from one to two to three columns; evidence cards progress from one to two to four.
- Roadmap and Journal tables are implemented as responsive grids rather than HTML tables, avoiding horizontal scrolling. Status labels generally use `flex-wrap` or `w-fit`.
- About and documentation subroutes remain readable on mobile; documentation sidebar precedes the article and becomes sticky only at large sizes.
- Remaining device checks: roadmap graphic text legibility, long uppercase labels, mobile PDF fallback, mobile menu focus containment (focus moves in and Escape works, but focus is not trapped), and layout at 320 px width.

## SEO and Metadata

- All 10 content routes use `createPageMetadata`, producing unique titles, descriptions, canonical paths, Open Graph URLs, and Twitter summary metadata.
- `metadataBase` is consistently `https://www.aicaair.com`; canonical URLs resolve against that base.
- The sitemap includes all 10 content routes and uses the same host. Robots configuration allows crawling and points to the correct sitemap.
- The homepage correctly uses an absolute title, avoiding duplicated site-name templating.
- No route defines a route-specific Open Graph/Twitter image; social shares will lack a controlled page preview image unless supplied elsewhere by the deployment platform.
- The sitemap uses one hard-coded `lastModified` date (14 July 2026) for every route rather than reflecting actual route/document revisions.
- Structured data is absent. This is not required for correctness, but Organization/WebSite and CreativeWork metadata would improve the Engineering Overview and documentation discoverability.
- `/whitepaper` naming does not match the public label “Engineering Overview,” although its canonical is internally consistent.

## Recommended Final Tasks Before Deployment

1. **Blocker:** Make `/journal` an honest, navigable record: publish real dated/versioned entries or clearly mark the current cards as an unpublished/future index.
2. **Blocker:** Fix `/whitepaper` accessible-reading mismatch by rendering the existing MDX/HTML document or removing the claim that it is available below.
3. Standardise evidence labels across Documentation, Research, Roadmap, Journal, and Engineering Overview; explicitly mark physical validation levels as future where no evidence exists.
4. Reconcile “documentation baseline” with “Simulation & Analysis — Active / Expanding,” and qualify homepage/research experimental-validation wording.
5. Resolve live-versus-unused content sources, especially the five-phase Roadmap MDX versus six-phase live Roadmap and the unused Journal MDX.
6. Add status, version, publication/update date, and limitations metadata to documentation detail pages so the documentation system follows its own standards.
7. Bring `/about` closer to the homepage’s design and content quality, including the confirmed 2014 origin and useful programme navigation.
8. Correct the homepage “AICAs” typo and refine the generic architecture link.
9. Conduct real-device QA at 320 px, common tablet widths, and desktop; specifically inspect roadmap text, status-label wrapping, mobile navigation focus behaviour, PDF fallback, and every vehicle-image crop.
10. Add controlled social-preview imagery and revision-aware sitemap dates before final SEO sign-off.

## Release Recommendation

**Hold release.** The application builds a credible early-stage engineering narrative and contains no prohibited performance figures, but the Journal’s lack of actual records and the Whitepaper’s missing promised HTML rendition are release blockers. After those two issues are resolved, evidence terminology/current-stage language and stale duplicate content should receive a final consistency pass. The remaining visual gaps—primarily About and documentation detail pages—are important but can be scheduled after the functional/content-integrity blockers if the initial release scope is explicitly limited.
