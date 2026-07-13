# Review run 04 — external audit synthesis (6 agents)

Inputs: award-craft research, Claude-design-pushing research, 8-site reference teardown,
Playwright creative-director audit (scored 2.8/5), Lighthouse/axe technical audit
(100/100/100/100), two-persona customer simulation.

## The diagnosis, in one paragraph

The page is technically flawless and visually inert. It has zero images, objects, depth,
or visible motion; every reference site (speedrun, Linear, Cursor, Resend, Ramp, Clerk,
Vercel) leads with a living focal object and puts an artifact in every viewport. Worse:
"dark editorial + vermilion accent + mono labels" is a named AI-default cluster in
Anthropic's own design guidance, so design-literate visitors read it as generated. And
the funnel is broken at peak intent: the ticker claims applications are open while the
apply section says the form "goes live shortly". Both simulated personas were convinced
by the copy and killed by the ending.

## Plan of record: three tracks

### Track A — make it catch (design impact)
A1. Orchestrated load sequence (~1.2s): headline lines clip-reveal staggered, spec card
    slides in, ruler ticks draw left-to-right, runner starts at h00, stats count up.
A2. Depth system: film-grain overlay (4-8% soft-light), one warm orange radial glow
    behind the hero, one diagonal light ray (Resend pattern). Warm the border neutrals.
A3. Hero focal object (pick one): (a) muted full-bleed Demo Day/founder footage like
    speedrun IF real footage exists; (b) build-time ASCII mark resolved by a one-shot
    text-scramble (zero-jank, dev-native); (c) Paper Shaders mesh, slow or frozen.
A4. Ruler becomes the page spine: fixed left-edge tick ruler, orange fill = scroll
    progress, mono section labels; CSS animation-timeline: scroll(), compositor-only.
A5. Numbers: one-shot count-ups on intersection (tabular-nums), tick-mark bars under
    stats (ruler motif on data), dedupe hero strip vs numbers band (59/19 repeat).
A6. Marquee cards: orange monogram chips, hover lift + border brighten, real links.
A7. Credibility as pixels: monochrome logo band for investors/partners under the hero
    (needs logo assets/permission), faces for mentors/leads (needs photos/permission).
A8. Second tonal band in the back half (proof section inverted or warm) for rhythm.
A9. Micro-layer: strengthen or cut the too-faint hero spotlight; scramble effect on
    mono labels on scroll-into-view; FAQ answer reveal motion; magnetic primary CTA.
A10. Hygiene: kill any global inherited CSS var driving motion; <300ms ease-out
    transform/opacity everywhere; pause off-screen animation; reduced-motion fallbacks.

### Track B — make it convert (funnel and proof)
B1. FATAL FIX: real application form embedded, or interim Tally + terminal-prompt email
    capture (`/// apply_c03 → your@email`) so the ending is never an apology.
B2. Urgency that is true: Cohort 3 dates or at least "selection opens after July 31";
    elevate "30 teams pitch 19 firms on July 31" near hero and apply as live ticker.
B3. Receipts wall rebuild: outcome-proof (raises, term-sheet talks, pilots) over
    attendance-proof; reframe Anto/YC so it does not advertise a competitor; kill the
    apology caption; dense 2x2 mosaic with one artifact/photo.
B4. Named humans: 3+ mentors/coaches/leads with photos and LinkedIn.
B5. Outsider on-ramp: "Didn't do the hackathon?" block before apply; reword "a scouted
    few" (reads invitation-only); named outside-founder example if one exists.
B6. Cut snort-lines: delete the "YC discipline ×..." motto; itemize the €1M credits
    claim; disambiguate "19 firms" (attended vs invested).
B7. Startup cards verifiable: links + one traction line each; fewer but real beats many
    but flat.

### Track C — technical quick wins (all autonomous)
C1. og:url/og:image point at ventures.hack-nation.ai which serves the OLD site today:
    broken share previews. Derive from deploy origin until domain cutover.
C2. Preload italic serif + both DM Mono fonts (kills hero text-flash, the only CLS).
C3. vercel.json: immutable cache headers for /fonts/*.
C4. robots.txt, sitemap, canonical, FAQ + Organization JSON-LD.
C5. Sticky apply bar into a landmark (last axe violation).

## Dependencies on Michi

Form URL (B1), cohort 3 dates (B2), outcome data sign-off (B3), people photos +
permission (B4), outside-founder example (B5), event footage/photos (A3a, B3),
investor/partner logo usage call (A7).

Everything else is buildable autonomously. Suggested order: C (hours) -> A1/A2/A4/A5/A9
(the feel transformation) -> A3/A6/A8 -> B-copy items (B5-B7 partially autonomous) ->
B1-B4 as Michi's inputs arrive.
