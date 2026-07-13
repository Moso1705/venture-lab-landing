/**
 * Content for the two supporting funnels: /mba (coach a team) and /mentor.
 * Same rules as site.ts: components render what is here, claims must be
 * covered by docs/FACTS.md.
 */

// Michi: paste the Tally form URLs here once created. While empty, each page
// shows the terminal-styled notice instead of an iframe.
export const mbaFormUrl = '';
export const mentorFormUrl = '';

// Shown under the proof numbers on both pages: the room, named.
export const theRoom =
  'in the room at the last Investor Day: a16z · Antler · Creandum · Cherry Ventures · Entrepreneur First · EWOR + 13 more firms';

export const mba = {
  title: 'Coach a team · HackNation Venture Lab',
  description:
    'Coach a startup from the world’s biggest AI hackathon through 12 weeks to Investor Day. For MBA students at top schools. One team, weekly cadence, remote.',
  eyebrow: '/ venture lab · mba coaches',
  headline: { lead: 'Coach a startup before', emphasis: 'the world knows it exists.' },
  sub: 'One technical team from the world’s biggest AI hackathon. Twelve weeks from prototype to Investor Day. You are their business brain: strategy, go-to-market, and the discipline to hit the gates.',
  telemetry: ['/ the role', '1 team · 12 weeks', 'cadence: weekly', 'format: remote', 'cohort 3 · dates tba'],
  cta: 'Apply as a coach',
  why: {
    eyebrow: '/ why coaches do it',
    items: [
      {
        title: 'Deal experience you cannot buy',
        body: 'You work inside a startup between its first demo and its first term-sheet conversation. Every case study ends; this one pitches 19 firms at the end of it.',
      },
      {
        title: 'The room at the end',
        body: 'Demo Day and Investor Day put you in front of the investors and operators around the program. Your team’s pitch carries your fingerprints.',
      },
      {
        title: 'A story with numbers in it',
        body: '“I coached an AI startup from prototype through a 300-outreach customer sprint to a live investor pitch” beats another club membership in any interview.',
      },
    ],
  },
  work: {
    eyebrow: '/ what you actually do',
    items: [
      { title: 'Weekly coaching call', body: 'One hour with your team: priorities, blockers, and the honest read on their traction.' },
      { title: 'Challenge feedback', body: 'Biweekly challenges feed the Investor Day deck. You add the structured comment: what is strong, what is missing, what to push.' },
      { title: 'Gate discipline', body: '300 cold outreaches, 15 customer interviews, a complete deck. You keep the team honest about the gap.' },
      { title: 'Pitch prep', body: 'Deck teardowns and rehearsals before Demo Day and Investor Day.' },
    ],
  },
  bar: {
    eyebrow: '/ who we look for',
    items: [
      'MBA candidates at top programs. Cohort coaches came from Stanford GSB, Harvard, Wharton, MIT Sloan, LBS, Tuck, Fuqua, and Carnegie Mellon',
      'Comfortable pushing technical founders on customers, pricing, and narrative',
      'Reliable weekly hours for 12 weeks, matched to your time zone',
      'Bonus: startup, VC, or product experience before your MBA',
    ],
  },
  proof: [
    { value: 8, suffix: '', label: 'top MBA programs represented' },
    { value: 30, suffix: '', label: 'coaches worked with Cohort 1 teams' },
    { value: 59, suffix: '', label: 'startups coached across two cohorts' },
    { value: 19, suffix: '', label: 'firms took the meeting at Investor Day' },
  ],
  faq: [
    { q: 'How much time does it take?', a: 'Plan for 3 to 4 focused hours per week: the team call, challenge feedback, and pitch prep peaks before Demo Day (mid-program) and Investor Day (week 12). Cohort 3 selection starts after July 31.' },
    { q: 'Is it remote?', a: 'Yes. Matching considers your time zone, and everything runs remotely. Local peer groups meet in person in cities like Boston, SF, London, Munich, and Zurich.' },
    { q: 'How does matching work?', a: 'One coach per team, matched on domain and location. You get a written brief on the role, the cadence, and what good looks like.' },
    { q: 'What do I get out of it?', a: 'A real venture track record, the investor room at the end, and a network of operators, mentors, and founders who build fast. No pay, no equity; nobody does this for the money.' },
  ],
  apply: {
    headline: { lead: 'Your team is', emphasis: 'forming now.' },
    sub: 'Cohort 3 coach applications open after Investor Day, July 31. The form will live right here.',
  },
};

export const mentor = {
  title: 'Mentor a team · HackNation Venture Lab',
  description:
    'Mentor a startup from the world’s biggest AI hackathon: one hour a week, 12 weeks, from prototype to Investor Day. For operators, founders, and senior engineers.',
  eyebrow: '/ venture lab · mentors',
  headline: { lead: 'An hour a week with a team', emphasis: 'moving at hackathon speed.' },
  sub: 'You have shipped, scaled, or sold. Give one hour a week to a technical team racing from prototype to Investor Day, and get the earliest look at AI startups before any investor sees them.',
  telemetry: ['/ the role', '1-2 teams · 12 weeks', 'cadence: ~1h weekly', 'format: remote', 'matching: mutual opt-in'],
  cta: 'Apply as a mentor',
  why: {
    eyebrow: '/ why operators do it',
    items: [
      {
        title: 'The earliest look there is',
        body: 'These teams pitch 19 venture firms at the end of the program. You work with them months before that room ever sees them.',
      },
      {
        title: 'Leverage for your hour',
        body: 'A team at week 4 changes course in one conversation. The same advice at a Series-B company moves a metric by a percent.',
      },
      {
        title: 'A room worth being in',
        body: 'Mentors sit alongside EWOR, the MBA coach bench, and the investors at Demo Day and Investor Day. Operators meet operators here.',
      },
    ],
  },
  work: {
    eyebrow: '/ how it works',
    items: [
      { title: 'Mutual opt-in', body: 'We pre-select mentor candidates per team by domain and location. You meet for a short call and both sides opt in. No blind assignments, in either direction.' },
      { title: 'One weekly hour', body: 'A regular slot with your team: unblock the hard decision of the week, then get out of their way.' },
      { title: 'Moments that matter', body: 'Deck teardown in week 7, pitch rehearsals before Demo Day and Investor Day. Show up where your judgment compounds.' },
      { title: 'Twelve weeks, then done', body: 'The commitment ends at Investor Day. What you keep: the relationship with a funded team you shaped early.' },
    ],
  },
  bar: {
    eyebrow: '/ who we look for',
    items: [
      'Founders and operators who have built, scaled, or exited',
      'Senior engineers and product leads from serious tech companies',
      'Domain depth the teams can use: healthcare, fintech, infra, enterprise, hardware',
      'The honesty to tell a team their demo is not a business yet',
    ],
  },
  proof: [
    { value: 36, suffix: '', label: 'mentors worked with Cohort 1 teams' },
    { value: 59, suffix: '', label: 'startups mentored across two cohorts' },
    { value: 12, suffix: '', label: 'weeks from prototype to Investor Day' },
    { value: 19, suffix: '', label: 'firms took the meeting at Investor Day' },
  ],
  faq: [
    { q: 'How much time is it really?', a: 'About an hour a week with your team, plus optional pitch rehearsals before the two big days. Peaks are predictable and scheduled weeks ahead.' },
    { q: 'Is it remote?', a: 'Yes, fully. Matching considers your time zone and domain first.' },
    { q: 'Do I get equity or pay?', a: 'No. The program is free for teams and unpaid for mentors. What mentors take away: first-look relationships with fast teams and the operator network around the Lab.' },
    { q: 'Can I invest in or advise my team afterward?', a: 'After Investor Day the program steps back. What you and your team agree on from there is between you.' },
    { q: 'What kind of teams would I get?', a: 'Technical founders from the Global AI Hackathon plus scouted outside builders: working prototypes, real user pain, and a hard gate to pass before they may pitch.' },
  ],
  apply: {
    headline: { lead: 'The next cohort needs', emphasis: 'your hour.' },
    sub: 'Cohort 3 mentor applications open after Investor Day, July 31. The form will live right here.',
  },
};
