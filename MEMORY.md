# Project memory

Working notes that do not fit README/CLAUDE.md. Keep short, keep current.

- Design identity locked (Jul 2026): dark warm-black + phoenix orange #e8400d (taken
  from hack-nation.ai's own CSS tokens), Instrument Serif display + DM Sans + DM Mono,
  sharp corners, paper band for the program section, time-ruler signature element.
- Two-door funnel since Cohort 3: hackathon teams + scouted outside builders. Never
  write copy that reads hackathon-only.
- lightningcss breaks scroll-driven animations (folds animation-timeline into the
  animation shorthand). We pin cssMinify: 'esbuild' in astro.config.mjs. Do not revert.
- Review loop lives in docs/reviews/. Next run number: 07 (judge rounds: 7.2 -> 7.9
  [stale-cache artifact] -> round 3 pending). Judge agents MUST pass maxAge: 0 to
  Firecrawl and verify freshness markers, or they review cached snapshots.
- Design direction is binding in .claude/skills/vl-design ("the measured page").
  Judges' do-not-touch list: measurement system, copywriting voice, hero typographic
  move, 24h intro.
- Impact layer shipped Jul 13 (run-04 plan): glyph-field hero, grain/glow/ray depth,
  ruler spine, count-ups, receipts on paper, three-door section, /mba + /mentor pages.
- Config slots waiting for Michi in src/content: applyFormUrl + demoDayVideoUrl
  (site.ts), mbaFormUrl + mentorFormUrl (roles.ts). Sections adapt automatically.
- Live on Vercel: https://venture-lab-landing.vercel.app (project venture-lab-landing,
  personal team, deployed via CLI from disk; npx vercel is authenticated). GitHub repo
  not yet connected to Vercel; until then deploy with `npx vercel deploy --prod --yes`.
- scripts/ensure-assets.mjs restores fonts/og.png during build if missing (needed for
  source-only deploys); no-ops on normal checkouts.
- Waiting on Michi: apply form URL, cohort 3 dates, alumni quotes, sign-off on the
  flagged claims in docs/FACTS.md.
