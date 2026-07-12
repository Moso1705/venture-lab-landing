# Project memory

Working notes that do not fit README/CLAUDE.md. Keep short, keep current.

- Design identity locked (Jul 2026): dark warm-black + phoenix orange #e8400d (taken
  from hack-nation.ai's own CSS tokens), Instrument Serif display + DM Sans + DM Mono,
  sharp corners, paper band for the program section, time-ruler signature element.
- Two-door funnel since Cohort 3: hackathon teams + scouted outside builders. Never
  write copy that reads hackathon-only.
- lightningcss breaks scroll-driven animations (folds animation-timeline into the
  animation shorthand). We pin cssMinify: 'esbuild' in astro.config.mjs. Do not revert.
- Review loop lives in docs/reviews/. Next run number: 04.
- Live on Vercel: https://venture-lab-landing.vercel.app (project venture-lab-landing,
  personal team, deployed via CLI from disk; npx vercel is authenticated). GitHub repo
  not yet connected to Vercel; until then deploy with `npx vercel deploy --prod --yes`.
- scripts/ensure-assets.mjs restores fonts/og.png during build if missing (needed for
  source-only deploys); no-ops on normal checkouts.
- Waiting on Michi: apply form URL, cohort 3 dates, alumni quotes, sign-off on the
  flagged claims in docs/FACTS.md.
