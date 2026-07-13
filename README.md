# HackNation Venture Lab — Landing Page

One-page site for the HackNation Venture Lab, the 12-week equity-free incubator that takes
the top teams from the HackNation AI hackathon and prepares them for a pre-seed raise.
This page is the funnel for Cohort 3: explain the program, show proof, collect applications.

## Stack

Astro 7 (static) + Tailwind CSS v4 + vanilla Motion. No framework runtime on the page.
Deployment-agnostic static output (`dist/`), ready for Vercel, Netlify, or Cloudflare Pages.

## Develop

```sh
npm install
npm run dev       # localhost:4321
npm run build     # static build to dist/
npm run preview   # serve the build locally
```

## Where things live

| Path | Purpose |
| --- | --- |
| `src/content/site.ts` | All copy, stats, startups, FAQ, apply form URL |
| `src/styles/global.css` | Design tokens (Tailwind v4 `@theme`) |
| `src/components/` | One `.astro` file per page section |
| `docs/BRIEF.md` | Design + copy direction (binding) |
| `docs/FACTS.md` | What may be published, what needs sign-off |
| `docs/design-review.md` | Review rubric; runs logged in `docs/reviews/` |

## Waitlist submissions

The apply sections capture emails via `/api/get-in-line` into the private Vercel Blob
store `vl-waitlist` (paths `waitlist/<founder|mba|mentor>/...json`). Read them with
`npx vercel blob list --prefix waitlist/` or in the Vercel dashboard. This is the
interim funnel until the Tally forms replace it (paste URLs in `src/content/`).

## Editing content

Change text, numbers, startups, or the application form URL in `src/content/site.ts`.
Components render whatever is there. Before publishing new claims, check `docs/FACTS.md`.
