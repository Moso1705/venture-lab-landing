# Run 09 · The HN12 overhaul

Full redesign on Michi's direction (2026-07-14): move to the HN12 design language,
white-first, DM Sans light display (serif dropped), constellation hero, chart as the
signature feature, shorter page, no card walls, honest partner claims.

Screenshots: `.playwright-mcp/new-*.jpeg` (1440), `m-*.jpeg` (390), `t-hero.jpeg` (768),
`mba-new.jpeg` (role page).

## What changed

- Dark constellation hero: hub-city network, thin VENTURE LAB wordmark, mono sublines,
  one CTA, static live line. Ticker bar, runner, ruler spine, telemetry box: deleted.
- Intro overlay now runs wk00 to wk12 under the wordmark (was h00 to h24).
- New signature section: the trajectory chart. Flat prototype line, exponential curve
  over the 12-week ruler, gate marker, orange dashed branch past wk12 into
  "your seed round", counterfactual dotted "the prototype, left alone".
- Everything below the hero is paper: expect-list offer, EWOR-style bare stats,
  speedrun-style giant quote, ledger startup index, HN12 two-column fit section,
  request-a-spot apply with light get-in-line, mono accordion FAQ.
- Partners row: EWOR, Databricks, Start2 only. Anthropic/OpenAI/AWS names and logos
  removed everywhere (Michi: the program is not run with them). Credits copy now
  matches the public site: "free API credits and premium tools with our partners".
- Page height 1440: 10,661px -> ~8,700px.
- Label floor raised: markers 12px, index rows 13px+ (the "5 built in the lab" tiny
  type complaint).

## Scores (1-5)

| # | Criterion | Score | Note |
|---|-----------|-------|------|
| 1 | Hero 3-second test | 5 | wordmark + "from the world's biggest AI hackathon to your first funded company" |
| 2 | Looks designed | 4.5 | constellation + chart are distinctive; FAQ/footer intentionally quiet |
| 3 | Recognizable | 4.5 | trajectory chart + constellation are ownable |
| 4 | On-brand (family) | 4.5 | HN12 kinship explicit; orange kept as the only accent |
| 5 | Token consistency | 5 | all colors/type from @theme; svg uses CSS vars |
| 6 | Typography | 4.5 | DM Sans 275 display, body 17px gray on paper |
| 7 | Color discipline | 5 | orange: live dots, curve branch, gate strip edge, hovers |
| 8 | Copy rules | 4.5 | momentum framing, no banned words, no dashes |
| 9 | Info complete | 5 | what/who/cost/how/when all present |
| 10 | Social proof | 4.5 | numbers bare and big; one quote (more pending Michi's outreach) |
| 11 | Facts coverage | 5 | wrong partner claim removed; hero subline matches public positioning |
| 12 | Scroll rhythm | 4 | dark -> chart -> list -> stats -> quote -> ledger -> columns -> form |
| 13 | CTA reachability | 5 | nav apply, hero, sticky mobile bar, apply section |
| 14 | FAQ/self-qualify | 5 | unchanged content, clearer form |
| 15 | Motion purposeful | 4.5 | one drift in hero (subtle), reveals, chart wipe; all else static |
| 16 | transform/opacity only | 5 | chart reveal is a transform wipe, not dashoffset |
| 17 | reduced motion | 5 | intro skipped, drift/wipe/pulse gated, content complete |
| 18 | Mobile 390 | 4.5 | dedicated compact chart svg; live line wraps cleanly |
| 19 | Tablet 768 | 4.5 | no awkward states found |
| 20 | Desktop 1440 | 4.5 | max-w-6xl, no voids; hero constellation fills edges |
| 21 | Technical sanity | 5 | fonts self-hosted (serif deleted), static svg, lazy iframe |
| 22 | Semantics/a11y | 4.5 | chart has role=img + text alternative; heading order kept |

Average: 4.7. No criterion below 4. Ship bar met.

## Open items

- Michi owes: approved alumni quotes (slots wired in `proof.quotes`), Cohort 3 dates,
  application form URL, partner logo permission check before the real domain goes live.
- Consider trimming Offer/Proof paddings another notch if the page still feels long
  after the quotes land.
