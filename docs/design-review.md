# Design review rubric

Every review cycle screenshots desktop (1440px), tablet (768px), and mobile (390px), then
scores each criterion 1 to 5. A run is logged in `docs/reviews/run-NN.md` with scores,
screenshots referenced, top issues, and the fix list. Ship bar: no criterion below 4,
average 4.5+.

## Criteria

### First impression (the 3-second test)
1. Hero communicates what this is and for whom without scrolling.
2. The page looks designed, not templated. A stranger could not guess "AI-generated".
3. Distinctive: you could recognize this page with the logo removed.

### Brand and visual system
4. On-brand: reads as HackNation family (HN12 kinship: mono labels, thin light
   display, orange accent) while clearly its own layer.
5. Consistent tokens: colors, spacing, radii, type sizes all from the design system,
   no one-off values.
6. Typography: clear hierarchy, display type is confident, body is readable
   (16px+, 65-75ch, 1.5+ line height).
7. Color discipline: orange used sparingly and deliberately; the dark hero doesn't
   feel muddy; the white page feels intentional, not unfinished.

### Content and copy
8. Copy follows docs/BRIEF.md rules: specific, confident, human. No banned vocabulary,
   no em dashes, no AI patterns.
9. Information complete: a visitor can answer "what is it, who is it for, what do I get,
   what does it cost, how do I get in, when".
10. Social proof lands: real names, real numbers, believable claims.
11. Every claim on the page is covered by docs/FACTS.md (safe or flagged, never forbidden).

### Flow and UX
12. Scroll flow has rhythm: sections alternate density, no two identical layouts in a row,
    the dark hero hands off cleanly to the white page.
13. Apply CTA is always reachable (nav/sticky) and repeated at natural decision points.
14. FAQ answers real objections. Selection criteria let visitors self-qualify.

### Motion and feel
15. Motion is purposeful and subtle: only the constellation drift loops (barely),
    nothing moves on scroll except intended reveals.
16. 60fps: only transform/opacity animated. No layout shift (CLS ~0).
17. prefers-reduced-motion: page fully readable and complete with motion off.

### Responsive
18. Mobile 390px: no horizontal scroll, tap targets 44px+, type scales down gracefully,
    marquees/grids collapse sensibly.
19. Tablet 768px: no awkward in-between states.
20. Desktop 1440px+: content constrained, no endless line lengths, no sparse voids.

### Technical
21. Lighthouse-style sanity: fast load, fonts self-hosted with fallbacks, images sized,
    form embed lazy (never blocks first paint).
22. Semantic HTML: landmarks, heading order, alt text, focus states, contrast AA.
