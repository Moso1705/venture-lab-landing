# Venture Lab Landing Page — Brief

One page. The funnel entry for HackNation Venture Lab Cohort 3. A visitor should get hyped,
understand the program, see proof it works, and apply, in one scroll.

## Positioning

HackNation runs the biggest AI hackathon series in the world (5,500 applicants, 14 cities,
MIT roots). The Venture Lab is the layer on top: a 12-week, equity-free incubator that takes
the top teams from the hackathon and prepares them to raise a pre-seed round at Investor Day.
The page must sell the bridge: "you built it in 48 hours, now build the company."
Since Cohort 3 there are two entry doors: the hackathon funnel stays the anchor story, but
scouted builders from outside can apply too. Copy must never read as hackathon-only.

Audience: technical builders who competed in (or heard about) the hackathon, plus curious
outsiders evaluating the program. They live in editors and terminals, are allergic to
corporate fluff, and respond to specificity, numbers, and named investors.

## Visual direction (decided)

The "grown-up sibling" of the hackathon brand: same family DNA, night shift energy.

- Dark warm-black base with one inverted warm-paper band mid-page for editorial rhythm.
  The main site is light; the Lab is dark. Same family, next level.
- Accent: Phoenix Orange `#e8400d` (the HackNation signature). No purple, no cyan glow,
  no glassmorphism, no gradient text.
- Type: Instrument Serif for display (brand continuity with hack-nation.ai, used huge with
  italic emphasis), DM Sans for body, DM Mono for labels/stats/eyebrows (HN12 kinship).
- Sharp corners (0 to 4px) like HN12, against the main site's soft 8 to 12px. Fine
  grid/graph-paper texture on dark sections. Terminal credibility without cosplay.
- Motion: restrained. One orchestrated hero entrance, subtle one-time scroll reveals
  (CSS, progressive enhancement), marquee for startup/partner rows, counters on stats.
  Only `transform` and `opacity`. Full `prefers-reduced-motion` support: snap to final state.

## Page spine (top to bottom)

1. Announcement bar: Cohort 3 applications open + apply anchor link
2. Hero: bridge headline, one-sentence concrete offer, apply CTA, stat strip
3. The pipeline: hackathon → selection → 12 weeks → Investor Day (the unique wedge)
4. The offer, 3 pillars: Mentorship & coaching / Credits & partners / Investors & demo days
5. Proof band: hard aggregate numbers
6. The program: 12-week journey on the paper band, incl. the Demo Day stage-gate
   (300 cold outreaches, 15 customer interviews, complete deck)
7. Startups: real cohort 1/2 companies with one-liners, category tags
8. Success stories: real quote + Anto/YC proof point + styled placeholder slots
9. Who it's for / who it's not for + the four selection criteria
10. Partners: EWOR, Databricks, Start2, credit providers, MBA coach schools
11. FAQ: equity, cost, remote, time commitment, solo founders, how selection works
12. Apply: embedded application form (config slot) + closing line
13. Footer: legal entity, links to hack-nation.ai

## Copy rules (humanizer extract + incubator research)

- Hype comes from specificity and confidence, never adjectives. "19 VC firms in the room"
  beats "world-class investor network".
- Short declaratives, second person, a hard number or verb doing the work.
- No em dashes or en dashes anywhere. Use commas, periods, colons.
- Banned vocabulary: vibrant, pivotal, testament, landscape, delve, showcase, unlock,
  empower, supercharge, seamless, cutting-edge, world-class, journey (figurative),
  streamline, elevate, game-changing, innovative (as filler).
- No "not just X, it's Y". No forced rule-of-three. No "-ing" tack-on clauses
  ("...highlighting our commitment to..."). No aphorism formulas ("X is the Y of Z").
- No staccato drama runs. One short sentence for emphasis is fine, three in a row is not.
- Simple copulas are good: "The program is free. We take no equity."
- Sentence-case headings. No emojis. Straight quotes.
- Reference tone: a16z speedrun ("We invest up to $1M in your new startup."), YC's dated
  deadlines, EF's "you might have nothing" de-risking, HN12's honest "who this is not for".

## Section-flow patterns stolen from the best

- speedrun: 3-pillar offer, one unmissable aggregate stat line, logo marquee, playful
  repeated micro-copy.
- EWOR: countdown/deadline mechanics, quantified mentor bios, stat blocks, Wall of Love.
- YC: concrete dates + decision-by promise, prose name-drops.
- EF: eligibility self-qualification right before the final CTA, sticky apply bar.
- HN12 (family quality bar): mono slash-labels ("/ program overview"), who-it's-not-for,
  full FAQ, sharp brutalist edges.

## Build loop

Every iteration: build → screenshot desktop (1440) + mobile (390) + tablet (768) →
score against docs/design-review.md → log run in docs/reviews/run-NN.md → fix → repeat.
Ship only when the rubric says so.
