# Review run 02 — content pivot + motion layer

Scope: two-door funnel copy, hero telemetry box, proof band live line, mobile sticky
apply bar, hero pointer spotlight, ruler runner, og:image, brand favicon.

## Found and fixed

1. CRITICAL: lightningcss (Astro's default CSS minifier) folded `animation-timeline`
   into the `animation` shorthand (`animation:1ms linear both reveal-in view()`), which
   browsers reject. Every scroll-driven animation (reveals, sticky bar) was silently
   dead in the production build while looking fine in source. Fixed by switching to
   esbuild CSS minification; verified computed styles in-browser afterwards
   (`animationName: reveal-in`, `animationTimeline: view()`).
2. Pipeline steps 01 and 03 were both titled "Build" after the two-door rewrite.
   01 is "Hack" again.
3. og:image headline overflowed the ruler at 104px; regenerated at 82px.

## Verified in browser

- Hero spotlight follows the pointer (desktop only), subtle orange grid glow. Approved.
- Ruler runner sweeps the timeline every 16s, hidden under reduced motion. Approved.
- Mobile sticky apply bar slides in over the first 100vh of scroll and stays. Approved.
- Live-ping dot in proof band. Telemetry box fits at 1120 and 1440 without overlap.
- No horizontal overflow at 390/768. Stats grid 2x2 on mobile.

## Scores vs run 01 (changed rows only)

| # | Criterion | Run 01 | Now | Note |
|---|---|---|---|---|
| 8 | Copy rules | 3 | 4 | En dashes gone, announcement fixed, two-door copy in |
| 12 | Scroll rhythm | 4 | 5 | Telemetry box fills hero; live line adds pulse |
| 15 | Motion purpose | 4 | 5 | Spotlight + runner + sticky bar, all restrained |
| 21 | Perf basics | 3 | 4 | og:image + favicon + esbuild fix; Lighthouse pending |

Remaining below ship bar: none at 3, but run 03 must audit: tablet in depth,
FAQ interaction, hero at ultrawide (1920), Lighthouse pass, and a fresh
skeptical full-scroll read of all copy in context.
