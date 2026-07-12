# Facts for the page: usable, flagged, forbidden

Source of truth: `hacknation_administration/` admin repo + live hack-nation.ai properties.
Rule: anything already public on hack-nation.ai or ventures.hack-nation.ai is safe to reuse.
Internal-only facts need Michi's sign-off before publishing (flagged below).

## Safe to publish (already public or aggregate)

- HackNation: biggest AI hackathon series in the world, built out of MIT, 14 cities/hubs,
  115+ countries reached, backers incl. OpenAI, Google, Databricks, Supabase, Vercel,
  Lovable, ElevenLabs, Mozilla.
- Venture Lab: 12-week incubator (public pages say "12-week" / "3-month", use 12 weeks),
  selected teams only, starts where the hackathon ends, goal: pre-seed readiness.
- Program mechanics: MBA coach + senior mentors per team, matched by domain and location;
  founder-led workshops; compute and tooling credits; Demo Day mid-program;
  Investor Day final. Partners: EWOR ("backing the top 0.1% of founders"), Databricks.
- Selection criteria (from public venture-track page): working prototype, clear user pain,
  a team that keeps moving after the weekend, evidence it can become more than a demo.
- Cohort 1 startups + one-liners (public on ventures.hack-nation.ai): FandS AI, CirqetAI,
  Cadio, Twin01, Erudition Systems, Aucta Labs, AgentDock, JanNiti, Anka, Eliot, a11y,
  Upwind (12 with public descriptions; 16 pitched at Investor Day).
- Testimonial (public): Artem Arzyn: "Coming from a purely academic background, the Venture
  Track challenged me to think like a founder. Between the mentorship and pitch sessions,
  I gained new skills and thought about technology in completely new ways."
- Proof point (public on hack-nation.ai): David de Gruijl, founder of Anto (YC F25),
  started at the hackathon, finished the batch and raised a seed.

## Flagged: use but verify with Michi before launch

- "Equity-free / we take no equity": true (fee model is cash-based scout fee), but the
  claim is new to the public page. VERIFY.
- Aggregate numbers: 59 startups across 2 cohorts (29 + 30 public), 19 investor firms at
  Cohort 1 Investor Day (a16z, Antler, Creandum, Cherry Ventures, Entrepreneur First, EWOR
  + 13 more), 8 top MBA programs coaching (Stanford GSB, Harvard, Wharton, MIT Sloan, LBS,
  Tuck, Fuqua, CMU), "€1M+ in credits and discounts per team" (Start2 catalogue marketing
  number). All from internal docs. VERIFY each before launch.
- Stage-gate discipline (300 cold outreaches, 15 customer interviews, complete deck to
  reach Demo Day): internal program doc. Great copy, VERIFY it stays true for Cohort 3.
- Cohort duration inconsistency: C1 was 12 weeks, C2 docs say 11 and 12 in different
  places. Page says 12 weeks. VERIFY for Cohort 3.
- Cohort 3: no confirmed dates, size, or deadline on file. Page uses "Cohort 3" with
  form CTA and no dates until Michi supplies them.
- Anthropic/OpenAI/AWS credit floor: internal doc. VERIFY naming rights before logos.

## Never publish

- The 6.5% venture scout fee and any fee economics.
- Personal emails, phones, WhatsApp links, internal Drive/Doc/Sheet URLs.
- Internal team counts that contradict public numbers (33-34 vs 30 for C2: use 30).
- Demo Day peer feedback, withdrawals, dropouts, individual participant data.
- Alumni outreach drafts and their contact lists.

## Open content slots (Michi fills later)

- Application form URL (embed slot in `src/content/site.ts`).
- Cohort 3 dates and application deadline.
- Real success-story quotes (alumni outreach pending: JanNiti, Rainbow Intelligence,
  Elyra, Anka, a11y).
- Team/founder photos if we add a people section.
