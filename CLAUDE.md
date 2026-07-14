# CLAUDE.md

Landing page for HackNation Venture Lab: one static page, the funnel entry for Cohort 3.
Read `docs/BRIEF.md` (direction + copy rules) and `docs/FACTS.md` (what may be published)
before touching content. Both are binding.

## Stack

- Astro 7 (static output, zero JS by default), Tailwind CSS v4 (CSS-first tokens in
  `src/styles/global.css` under `@theme`), plain CSS/vanilla JS for the few animations.
- No React, no shadcn, no GSAP. Islands only when a section truly needs JS.
- Fonts self-hosted in `public/fonts/`: DM Sans (display in light weights + body),
  DM Mono (labels/stats). No serif.

## Commands

- `npm run dev` - dev server on localhost:4321
- `npm run build` - static build to dist/
- `npm run preview` - serve the build

## Structure

- `src/pages/index.astro` - the page, composes sections in order
- `src/components/` - one file per section (Hero.astro, Program.astro, ...)
- `src/content/site.ts` - ALL copy, stats, startups, FAQ, form URL. Components never
  hardcode content. Change words here, not in components.
- `src/styles/global.css` - Tailwind theme tokens. Change design here, not per-component.
- `docs/reviews/` - design review run logs (see loop below)

## Hard rules

1. Copy: no em/en dashes, no banned AI vocabulary (list in BRIEF.md), hype through
   specificity. Every claim must be covered by docs/FACTS.md. The 6.5% fee, personal
   contact data, and internal URLs are never published.
2. Motion: animate only transform/opacity. Everything wrapped for
   prefers-reduced-motion (snap to final state, never hide content).
3. Design: tokens only, no one-off hex values or magic px in components.
4. The apply form embed is config-driven via `site.ts` (`applyFormUrl`). It lazy-loads;
   it must never block first paint.

## Review loop (mandatory after visual changes)

Build, screenshot 1440/768/390 with Playwright, score against `docs/design-review.md`,
write `docs/reviews/run-NN.md`, fix, repeat. Ship bar: no criterion below 4, avg 4.5+.

## Git

Conventional commits with WHY. Commit per logical unit. Push to GitHub after each
meaningful step (remote: larrycoder123/venture_lab_landing).
