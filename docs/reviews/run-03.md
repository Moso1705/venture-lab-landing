# Review run 03 — audit pass

Scope: ultrawide 1920, tablet 768 depth, FAQ interaction, full-copy skeptical read,
asset weight, a11y details.

## Found and fixed

1. Sticky apply bar leaked onto tablet: the scoped `.sticky-apply` selector outweighs
   Tailwind's `md:hidden` utility in specificity. Width guard moved into the scoped
   style (`@media (width < 48rem)`); verified display none at 768, block at 390.
2. Ruler label still carried an en dash (`h00–h48`), now a hyphen.
3. Marquee duplicate cards were exposed to screen readers (every startup read twice).
   Clones now carry `aria-hidden`.

## Verified

- Ultrawide 1920: content constrained, ruler bleeds full width intentionally, no voids.
- Tablet 768: program grid columns tight but readable; no overflow.
- FAQ: details/summary opens on click, plus marker rotates. Keyboard accessible natively.
- Full-copy read in context: no AI vocabulary, no em/en dashes in prose, claims match
  FACTS.md, tone consistent from hero to footer.
- Weight: 6KB CSS gzipped, 8KB HTML gzipped, ~110KB fonts (5 files, self-hosted,
  preloaded display+body), og.png 60KB, zero JS bundles (one inline spotlight script).

## Score summary

All 22 rubric criteria at 4 or 5. Average 4.6. Ship bar met.

## Still open (content-dependent, not design)

- Apply form URL from Michi (embed slot ready in site.ts).
- Cohort 3 dates + deadline for the announcement bar and telemetry box (urgency
  mechanics upgrade to countdown when a real date exists).
- Approved alumni quotes to fill the second/third testimonial slots.
- Claims flagged in FACTS.md need Michi's sign-off before the domain goes live.
