# Changelog

## [Unreleased]

### Added
- Project brief, publishable-facts sheet, and design review rubric (`docs/`)
- Astro 7 + Tailwind v4 scaffold, repo docs (CLAUDE.md, README, MEMORY)
- Full landing page: hero with time-ruler signature and pointer spotlight, pipeline,
  offer, proof band with live line, 12-week program on paper band, startup marquee,
  successes, who-it's-for, partners, FAQ, apply embed slot, footer
- Mobile sticky apply bar (CSS scroll-driven), og:image, brand favicon
- Three design review cycles logged in `docs/reviews/`

### Fixed
- lightningcss dropped all scroll-driven animations at build time; switched CSS
  minification to esbuild
- Contrast, en dashes, duplicate step titles, marquee screen-reader duplication
