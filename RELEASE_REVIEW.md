# AICA Production Release Review

Review date: 14 July 2026

Scope: First-visit investor review of the current Next.js website, all public routes, shared navigation, MDX content, metadata, responsive source behavior, public PDF, local link targets, and production configuration. Internal route targets and the whitepaper asset exist. The production domain and X account could not be independently validated from this environment.

## Critical

1. **The website omits the project's token and funding model while the whitepaper presents them as central.** The public site describes AICA exclusively as an engineering initiative. The whitepaper identifies “Network: Solana,” “Token: AICA,” a community token, treasury/R&D allocation, liquidity allocation, marketing allocation, launch infrastructure, and community-supported funding. An investor encounters this only after opening the primary document. This is a material clarity and trust failure because the site's first impression does not disclose the project's financial and token context.

2. **The website roadmap conflicts with the whitepaper roadmap.** The site says Phase 1 is engineering “Concept consolidation,” Phase 2 is “Model design,” Phase 3 is “Bench testing,” and Phase 4 is an “Integrated prototype decision.” The whitepaper describes early phases around project positioning, narrative, community formation, calculations, and modeling, followed by physical models and a working prototype. These are not merely different levels of detail; they communicate different priorities, maturity, and expected outcomes.

3. **Every route declares the homepage as its canonical URL.** The root layout sets `alternates.canonical` to `/`, and child pages do not override it. `/about`, `/research`, `/documentation`, `/journal`, `/roadmap`, `/whitepaper`, and documentation articles therefore signal that the homepage is their canonical source. Search engines may consolidate or suppress the dedicated pages despite their inclusion in the sitemap.

## Important

1. **The site provides almost no verifiable evidence for its engineering claims.** It mentions years of research, calculations, a proprietary propulsion concept, modeling, measurement, and validation, but publishes no calculations, references, diagrams with engineering values, test data, authorship, revision history, methodology details, or downloadable technical notes. The documentation pages state standards rather than demonstrate work completed to those standards.

2. **There is no accountable identity behind the project.** No founder, engineering lead, advisor, company/legal entity, location, professional biography, credentials, contact address, or direct inquiry channel is provided. For an investor evaluating a technically ambitious and token-associated project, this significantly weakens legitimacy and due-diligence readiness.

3. **The whitepaper is version 0.1 but the viewer page does not expose its version, publication date, revision date, author, or document status.** The page calls it the “Primary document,” which gives it high authority without helping readers judge its age or currency.

4. **The journal emphasizes website production rather than engineering progress.** The newest entry is the documentation-platform reorganization; the other concrete entry is preparation of the first site and whitepaper. The only technical entry is a future baseline. This undermines the homepage claim of a measured engineering program by showing communications milestones rather than research milestones.

5. **The visible document-card action ends with a question mark instead of an arrow or intentional icon.** Every card displays “Read document ?”. This appears to be an encoding defect and reduces polish across the homepage and documentation index.

6. **The mobile menu leaves hidden links keyboard-focusable when collapsed.** The menu is visually collapsed with a zero-row grid and overflow clipping, but it remains in the document and tab order. Keyboard users can focus invisible navigation links.

7. **There is no skip link.** Keyboard and screen-reader users must traverse the sticky global navigation on every page before reaching the main content.

8. **The documentation sidebar has no current-page indication.** It does not expose an active visual state or `aria-current="page"`. Readers cannot quickly confirm their location within the documentation hierarchy, and assistive technology receives no current-item cue.

9. **Primary and footer navigation do not indicate the active route.** There is no current-page styling or `aria-current`, weakening orientation and consistency across the dedicated routes.

10. **The embedded PDF has no accessible fallback content.** The iframe has a title and a separate-open link, but no HTML summary/transcript, download wording, file size, or fallback message for browsers and assistive technologies that cannot render embedded PDFs.

11. **The PDF viewer is likely awkward on narrow mobile screens.** A desktop PDF is placed in a full-width iframe with a fixed minimum height of 36rem. Browser PDF controls and document pages commonly require horizontal scaling or panning on mobile, and the compact viewer header must also fit the title and action in one row.

12. **Route metadata is too generic.** Child pages set only a short title. They inherit the same site-wide description, Open Graph title/description/URL, and Twitter metadata, so shared links do not describe the specific About, Research, Journal, Roadmap, Whitepaper, or documentation content.

13. **Open Graph and Twitter metadata advertise a large image card without supplying an image.** `twitter.card` is `summary_large_image`, but neither Twitter nor Open Graph metadata declares a social image. Shares may render inconsistently or without the intended visual identity.

14. **The configured Open Graph URL is the homepage for every route.** Like the canonical issue, the root `openGraph.url` is fixed to the site root and is not overridden by child pages, producing incorrect share identity for deep links.

15. **The MDX integration major version does not match the framework major version.** The project has Next.js 15.5.20 with `@next/mdx` 16.2.10. Although the current build completes, mixing framework integration packages across major versions creates avoidable production and upgrade risk.

16. **The public proposition is too abstract for a first-time investor.** The homepage explains process posture but not the specific problem boundary, intended first product or demonstrator, present technical hypothesis, funding stage, use of funds, ownership model, time horizon, or concrete next validation milestone. The result is calm and professional but not decision-useful.

17. **The website and whitepaper use inconsistent positioning language.** The site says “AI Controlled Air Mobility” and focuses on propulsion and stability, while the whitepaper emphasizes a proprietary propulsion concept, community token, Solana network, and community-supported development. It does not explain what is AI-controlled, where AI enters the system, or how the token relates to engineering execution.

18. **No legal, privacy, risk, or token disclosure pages are linked from the website.** The whitepaper contains limited disclaimers, but the site footer exposes none. Given the token allocation and investor-facing context, the absence is a material professionalism and trust concern.

19. **The external X profile could not be independently confirmed.** The site gives “Project Updates” prominent CTA treatment, but the account did not surface in search validation. Its availability, ownership, and content should be treated as unverified for release review purposes.

## Minor

1. **Internal navigation uses a mix of Next.js `Link` and plain `<a>` elements.** Breadcrumbs, cards, logo, and sidebar use client-side links, while the header and footer use full-document navigation for equivalent internal routes. The behavior is inconsistent and makes route transitions feel less polished.

2. **The mobile navigation has no Escape-key handling or explicit focus management.** The toggle is labeled and exposes expanded state, but opening the menu does not move focus and closing it does not restore a managed focus flow.

3. **The mobile menu does not close when a Whitepaper button is selected through the shared button component.** The text navigation links attach a close handler; the Whitepaper CTA does not. Navigation still occurs, but component behavior is inconsistent.

4. **The documentation sidebar becomes an undifferentiated vertical block above article content on small screens.** With five links plus breadcrumbs and page labeling, users must pass repeated navigation before reaching the document. There is no compact mobile documentation control.

5. **Typography references Inter without loading or bundling it.** The browser will normally fall back to the system sans-serif stack, so typography varies by operating system despite Inter being declared as the preferred identity font.

6. **Body copy uses slate-600 at relatively small sizes in several navigation and card contexts.** It is visually restrained, but the combination of 12–14px text, muted color, uppercase styling, and wide letter spacing may be tiring for low-vision users and should receive measured contrast/readability verification.

7. **The page layouts are extremely text-light and visually sparse after the homepage.** Large content widths and generous vertical padding surround short articles, making About, Research, Journal, and Roadmap feel incomplete rather than intentionally concise on large displays.

8. **Research and roadmap content is presented as continuous prose rather than scannable engineering artifacts.** Statuses, dates, owners, dependencies, outputs, evidence links, and revision markers are absent, so investors cannot compare phases or evaluate progress efficiently.

9. **The roadmap uses bold paragraphs for status instead of structured status metadata.** This weakens scanning and semantic consistency compared with the homepage’s card-based program status presentation.

10. **Breadcrumb separators are text glyphs rather than CSS decoration.** They are correctly hidden from assistive technology, but wrapping can leave separators visually detached from labels at narrow widths.

11. **The footer lacks utility information expected from a production organization site.** There is no contact link, legal entity, privacy link, terms link, document revision link, or social label beyond the header CTA.

12. **The copyright year is hard-coded.** This is currently correct for 2026 but creates a routine consistency risk at year rollover.

13. **The sitemap applies the same `lastModified` date to every page.** This does not reflect actual document revision dates and reduces the usefulness of the signal to crawlers.

14. **The sitemap claims the journal changes weekly despite showing only two dated historical entries and one undated future item.** The declared cadence is not supported by the visible publication history.

15. **No custom not-found experience is present.** Broken or mistyped routes fall back to the framework default, which does not reinforce AICA’s navigation or visual identity.

16. **External links do not tell users they open a new tab.** The X CTA and “Open separately” action use `target="_blank"` without visible or assistive wording that announces the context change.

17. **The whitepaper link label “Open separately” is ambiguous outside visual context.** It does not state that it opens the PDF in a new tab or offer a direct download action.

18. **The engineering diagram is entirely hidden from assistive technology.** Treating it as decorative is defensible, but visible labels such as “Concept geometry study” and “Stability reference” communicate program context that has no equivalent adjacent description.

19. **The logo mark reads “AI,” while the brand is “AICA.”** Without an explanation of the acronym or a formal logo, the mark can look provisional and may create uncertainty about the organization’s identity.

20. **There is no favicon/social-brand asset beyond the simple SVG app icon.** The project includes no declared Apple touch icon, manifest, or branded share image, leaving production identity incomplete across devices and sharing surfaces.

21. **No internal broken links were found in the reviewed source.** All declared application routes and the local `/docs/AICA_Whitepaper.pdf` target exist; however, this does not validate deployed hosting behavior, redirects, case sensitivity, or the external X destination.
