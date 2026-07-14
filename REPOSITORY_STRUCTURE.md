# Repository Structure

## Current Repository

```text
AICA/
├── .git/
├── assets/
│   ├── aica-coin.png
│   └── hero-banner.png
├── AICA_Whitepaper.docx
├── AICA_Whitepaper.pdf
├── index.html
└── README.txt
```

## File Inventory

| Path | Type | Purpose | Notes |
| --- | --- | --- | --- |
| `index.html` | Static HTML | Complete one-page AICA website | Contains markup, styling, inline SVG, links, and page content in one file. |
| `README.txt` | Text documentation | Local package instructions | Explains opening `index.html` directly and notes placeholder Raydium links. |
| `assets/hero-banner.png` | Image | Hero visual | 1536 x 1024 PNG, approximately 3.3 MB. |
| `assets/aica-coin.png` | Image | Token visual | 1024 x 1024 PNG, approximately 1.36 MB. |
| `AICA_Whitepaper.pdf` | PDF | Public whitepaper | Linked from the static site. |
| `AICA_Whitepaper.docx` | Word document | Editable whitepaper source | Should be treated as source material, not served as the primary public asset unless required. |
| `.git/` | Git metadata | Repository metadata | Branch exists but has no commits at time of audit. |

## Current Page Sections

The static page contains these functional sections:

1. Sticky header.
2. Primary navigation.
3. Hero section.
4. Overview section.
5. Inline SVG blueprint card.
6. Use cases.
7. Roadmap.
8. Token allocation.
9. Founder note and transparency statement.
10. Footer links.

## Current Link Map

Internal anchors:

- `#top`
- `#overview`
- `#use-cases`
- `#roadmap`
- `#token`

Local document links:

- `AICA_Whitepaper.pdf`

Image links:

- `assets/hero-banner.png`
- `assets/aica-coin.png`

External links:

- `https://x.com/AICAair`
- Open Graph URL: `https://www.aicaair.com`
- Open Graph image: `https://www.aicaair.com/assets/hero-banner.png`

Placeholder links:

- Raydium buttons currently use `href="#"`.

## Proposed Next.js 15 Structure

```text
AICA/
├── public/
│   ├── docs/
│   │   ├── AICA_Whitepaper.docx
│   │   └── AICA_Whitepaper.pdf
│   └── images/
│       ├── aica-coin.png
│       └── hero-banner.png
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Blueprint.tsx
│   │   ├── Button.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── StatCard.tsx
│   │   ├── TokenAllocation.tsx
│   │   └── sections/
│   │       ├── CtaSection.tsx
│   │       ├── HeroSection.tsx
│   │       ├── OverviewSection.tsx
│   │       ├── RoadmapSection.tsx
│   │       ├── TokenSection.tsx
│   │       └── UseCasesSection.tsx
│   ├── data/
│   │   └── site.ts
│   └── lib/
│       └── links.ts
├── tests/
│   └── smoke.spec.ts
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── playwright.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Structure Notes

- Public assets should move into `public/` so Next.js can serve them predictably.
- The whitepaper PDF should likely be served from `/docs/AICA_Whitepaper.pdf`.
- Repeated page content should move into typed data objects to avoid duplicating copy across components.
- Visual sections should become React components with clear props and limited responsibility.
- Global visual tokens should be represented through Tailwind theme values and CSS variables where useful.
- Launch-dependent URLs should be centralized in `src/lib/links.ts` or environment configuration.
