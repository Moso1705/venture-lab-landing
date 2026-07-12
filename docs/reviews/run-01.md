# Review run 01 — first full render

Build: v1, all 13 sections. Screenshots: desktop 1440 (hero, program, startups, apply),
mobile 390 (hero, program, startups, faq), tablet 768 (hero). No horizontal overflow at
390 or 768. Computed styles verified for the paper band (initial full-page thumbnail
misread; section-level shots are the reliable evidence).

## Scores (rubric in ../design-review.md)

| # | Criterion | Score | Note |
|---|---|---|---|
| 1 | Hero 3-second test | 5 | Headline + sub answer what/who instantly |
| 2 | Looks designed | 4 | Serif/mono/orange system reads intentional |
| 3 | Distinctive | 4 | Ruler + paper band + serif italic carry identity |
| 4 | On-brand | 5 | Phoenix orange, Instrument Serif, HN12 kinship |
| 5 | Token consistency | 4 | One-off text sizes in a few labels, acceptable |
| 6 | Typography | 4 | Display confident; check em-emphasis overuse |
| 7 | Color discipline | 4 | Orange scarce; grid texture slightly loud on Apply |
| 8 | Copy rules | 3 | En dashes leaked into ruler + week labels; bar duplicates "Cohort 3" |
| 9 | Info complete | 4 | Cost/format/selection/timing all answered |
| 10 | Social proof | 4 | Anto + Artem + numbers; more receipts pending |
| 11 | Claims covered | 5 | All from FACTS.md, flags documented |
| 12 | Scroll rhythm | 4 | Paper band breaks well; hero right half empty on desktop |
| 13 | CTA reachability | 4 | Bar + nav + hero + apply; no sticky on mobile scroll depth |
| 14 | FAQ/self-qualify | 5 | Honest answers, who-not-for included |
| 15 | Motion purpose | 4 | Hero rise + reveals + marquee only |
| 16 | 60fps | 5 | transform/opacity only, no JS |
| 17 | Reduced motion | 5 | Snap-to-final everywhere, marquee wraps static |
| 18 | Mobile 390 | 4 | Clean; announcement bar wraps to 2 lines |
| 19 | Tablet 768 | 4 | No overflow; not deeply audited yet |
| 20 | Desktop 1440 | 4 | Constrained; hero asymmetry to resolve |
| 21 | Perf basics | 3 | Favicon default, no og:image, unused motion dep |
| 22 | Semantics/a11y | 4 | h3 inside summary; fog-dim contrast borderline |

Average: 4.2. Not shippable yet per bar (no criterion below 4): #8 and #21 fail.

## Fix list for run 02

1. Announcement bar: text repeats the label. New text: "Applications are open".
2. Ruler: replace en-dash string label with positioned wk01/wk12 spans.
3. site.ts week labels: "wk 01–02" en dash to hyphen.
4. Lighten fog-dim for small-label AA contrast on ink.
5. Grid texture alpha 4% to 3%.
6. Hero desktop: try a restrained mono annotation block right of the headline
   (cohort telemetry: cities, next cohort, format). Screenshot and judge.
7. FAQ: span instead of h3 inside summary.
8. Brand favicon (ink square, orange slash).
9. Remove unused motion dependency.
10. Add .playwright-mcp/ to .gitignore, keep screenshots out of git.
