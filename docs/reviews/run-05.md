# Review run 05 — impact layer + funnel pages verification

Executed the run-04 plan (all three tracks) plus /mba and /mentor pages.

## Verified in browser (localhost preview, Playwright)

- Hero: warm glow, diagonal light ray, glyph field canvas live on the right half,
  grain over everything, choreographed entrance, eyebrow scramble caught mid-animation,
  ruler ticks draw, runner sweeps. The section finally has atmosphere and depth.
- Ruler spine: fixed left rail visible at xl, orange fill tracks scroll progress.
- Count-ups fire on intersection (verified first stat resolves), tick bars render.
- Receipts on paper: featured Anto card, 16→19 stat card, quote, live ticker line.
- Apply: terminal-styled fallback with blinking cursor, honest copy, warm glow.
- /mba and /mentor: full pages render on-family with role telemetry cards, why-grid,
  paper work section, mini proof band, FAQ, apply slot.
- Fixed during run: apply-section glow caused 114px horizontal overflow on mobile
  (globs escape sections without overflow-hidden); all three pages now exactly 390px.

## Deltas vs run-04 audit findings

- Zero-object hero -> glyph field + glow + ray + spotlight (strengthened to 26% alpha).
- Static signature -> ruler spine + tick draw + runner.
- Numbers lie still -> count-ups + tick bars; duplicate stats de-duplicated.
- Anonymous marquee -> monogram chips, hover lift, links where they exist.
- Apology ending -> terminal prompt; ticker no longer claims open applications.
- Motto and inflated credits line removed; investor claim disambiguated.
- One tonal break -> two (program paper band + receipts paper band).

## Still open (needs Michi)

Form URLs (main Tally + /mba + /mentor), cohort 3 dates, Demo Day video URL
(section ships hidden until set), outcome data, named people, logo assets.

Deploy: production via CLI after this log.
