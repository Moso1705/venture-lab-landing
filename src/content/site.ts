/**
 * Page content. Components render what is here and never hardcode words.
 * Claims must stay covered by docs/FACTS.md.
 *
 * Structure: sketch order. Substance: Michi's Venture Lab copy, adapted.
 * Tone: YC-short, top-tier, not hackathon-heavy. No em/en dashes. No "get in line".
 * Free / no equity: stated once in hero meta pills (and once in og meta). Not repeated.
 */
// Michi: paste the Cohort application form URL here (Tally/Typeform/Google Form).
export const applyFormUrl = '';
export const formIsLive = Boolean(applyFormUrl);
// Michi: Demo Day / Investor Day video. Empty = section hidden.
export const demoDayVideoUrl = '';
export const site = {
  name: 'HackNation Venture Lab',
  tagline: 'Twelve weeks from prototype to a company that can raise.',
  url: 'https://venture-lab-landing.vercel.app',
  parentUrl: 'https://hack-nation.ai',
  ogDescription:
    'Twelve weeks, senior mentors, and a room of investors. Free to join, no equity taken.',
};
export const nav = {
  hn: { label: 'HN', href: 'https://hack-nation.ai' },
  wordmark: { short: 'VL', long: 'Venture Lab' },
  parent: { label: 'Hack-Nation', href: 'https://hack-nation.ai' },
  partnerSlot: null as null | { name: string; logo: string; href: string },
  links: [
    { label: 'Program', href: '#program' },
    { label: 'Apply', href: '#apply' },
    { label: 'Stories', href: '#stories' },
  ],
  cta: { label: 'Apply', href: '#apply' },
};
export const whatIs = {
  eyebrow: 'HackNation Venture Lab',
  badge: 'Cohort 3',
  headline: { lead: 'You built the prototype.', emphasis: 'Now build the company.' },
  // Free / no-equity stated once in meta (and in og meta). Duration kept for legacy hero.meta.
  duration: '12 weeks',
  meta: ['Remote', 'Free', 'No equity'],
  sub: 'Twelve weeks with senior mentors, biweekly gates, and a room of investors.',
  pathLabel: 'How to apply', // rendered uppercase as HOW TO APPLY
  pathEnd: 'Investor Day',
  steps: [
    {
      num: '01',
      title: 'Show us your exceptional profile',
      body: 'Builders who ship. Track record, clarity, and the drive to go full-time.',
    },
    {
      num: '02',
      title: 'Show us your moonshot idea',
      body: 'A working prototype and a sharp thesis. Not a slide deck.',
    },
    {
      num: '03',
      title: 'Get selected',
      body: 'Real user pain, a sharp team, proof you keep shipping. Small cohort on purpose.',
    },
    {
      num: '04',
      title: 'Run the lab. 12 weeks full-time.',
      body: 'Intensive. Biweekly gates, coaching, and Investor Day at the end.',
    },
  ],
  pillarsLabel: 'What you get',
  pillars: [
    {
      title: 'Mentors',
      body: 'Leaders from Big Tech and Big Pharma who spar ideas, roast you, and coach you.',
    },
    {
      title: 'Coaches',
      body: 'An ambitious business co-founder from a top US, European, or Asian university on the business side.',
    },
    {
      title: 'Credits',
      body: 'API credits and partner discounts',
      link: {
        label: 'via Start2',
        href: 'https://start2group.notion.site/Let-s-save-your-Startups-Money-sign-up-today-and-unlock-access-to-exclusive-Discounts-a49e51a43e114b64a888d346b8857fe6',
      },
    },
    {
      title: 'Partners',
      body: 'Industry exposure through the Hack-Nation network: feedback and possible customers.',
    },
    {
      title: 'Top Tier Investors',
      body: 'EWOR, a16z, Antler, Creandum, Cherry, EF and more. Waiting for the best teams on Investor Day.',
    },
  ],
  partners: {
    line: 'Partners',
    orgs: [
      { name: 'EWOR', logo: '/logos/ewor.svg', href: 'https://ewor.com', h: 26 },
      { name: 'Databricks', logo: '/logos/databricks.svg', href: 'https://databricks.com', h: 24 },
      { name: 'Start2 Group', logo: '/logos/start2.svg', href: 'https://start2.group', h: 24 },
    ],
  },
  phasesLabel: 'The twelve-week journey',
  phasesSpan: 'wk 01 → wk 12',
  phases: [
    { weeks: 'wk 01-02', title: 'Voice of customer', body: 'Talk to the people you think you are building for.' },
    { weeks: 'wk 03-04', title: 'First commitment', body: 'Money, a pilot, or a signed letter. Something real.' },
    { weeks: 'wk 05-06', title: 'Public launch', body: 'Ship where strangers can find it. Demo Day mid-point.' },
    { weeks: 'wk 07-08', title: 'Deck teardown', body: 'Peers take the pitch apart before investors see it.' },
    { weeks: 'wk 09-10', title: 'Pitch video', body: 'Ninety seconds. Investors watch these before the finale.' },
    { weeks: 'wk 11-12', title: 'Investor Day', body: 'Angels and VCs in the room. Close the pre-seed conversation.' },
  ],
  gate: {
    title: 'Clear the gate',
    note: 'Before Investor Day',
    body: 'You pitch only if you hit all three.',
    requirements: [
      { value: '300', label: 'cold outreaches' },
      { value: '15', label: 'customer interviews' },
      { value: '1', label: 'complete deck' },
    ],
  },
};
export const applyRoutes = {
  marker: 'Apply',
  headline: 'Pick your path',
  sub: 'Founders, mentors, and MBA coaches. Same program, different seats.',
  paths: [
    {
      role: 'Founders',
      title: 'Build the company',
      body: formIsLive
        ? 'Apply with a working prototype. Ten minutes, no deck required.'
        : 'Leave your email. We write when Cohort 3 selection opens.',
      cta: formIsLive ? 'Apply with your team' : 'Notify me',
      href: '#apply',
      tone: 'ink' as const,
    },
    {
      role: 'Mentors',
      title: 'Guide a team',
      body: 'We pre-select; the team picks. Matched by domain. Operators who have shipped.',
      cta: 'Mentor a team',
      href: '/mentor',
      tone: 'blue' as const,
    },
    {
      role: 'MBA coaches',
      title: 'Coach a startup',
      body: 'One team from prototype through Investor Day. Strategy, GTM, and the gates.',
      cta: 'Coach as an MBA',
      href: '/mba',
      tone: 'raised' as const,
    },
  ],
};
export const apply = {
  marker: 'Founders',
  headline: 'Apply now. Your future starts here.',
  sub: formIsLive
    ? 'VL3 cohort applications are open. Tell us what you built and who needs it.'
    : 'VL3 cohort applications open soon.',
  cta: formIsLive ? 'Continue' : 'Notify me',
  note: 'Email is only used to tell you when applications open.',
};
export const stories = {
  marker: 'Outcomes',
  headline: 'Founders who shipped further.',
  sub: 'Alumni have landed Y Combinator and seed rounds.',
  // Photos: placeholders until Michi supplies portraits.
  // LinkedIn: paste real profile URLs; empty string shows a pending slot.
  testimonials: [
    {
      name: 'David de Gruijl',
      role: 'Founder @ Anto (YC F25)',
      badge: 'YC F25',
      quote:
        'I got into Y Combinator with the same idea, finished the batch, and raised a seed. Grateful for the push that got me there.',
      image: '/portraits/placeholder.svg',
      linkedin: 'https://www.linkedin.com/in/daviddegruijl',
    },
    {
      name: 'Artem Arzyn',
      role: 'Venture Lab alumnus',
      badge: 'Alumnus',
      quote:
        'The Venture Track challenged me to think like a founder. Mentorship and pitch sessions changed how I build.',
      image: '/portraits/placeholder.svg',
      linkedin: 'https://www.linkedin.com/in/artem-arzyn',
    },
    {
      name: 'Dr. Janet Brinz',
      role: 'Venture Lab alumna',
      badge: 'Alumna',
      quote: 'Open exchange and honest peer feedback pushed my thinking forward.',
      image: '/portraits/placeholder.svg',
      linkedin: 'https://www.linkedin.com/in/dr-janet-brinz',
    },
  ],
  examplesLabel: 'From past cohorts',
  examplesIntro: 'A few teams from Investor Day.',
  startups: [
    { name: 'a11y', tag: 'GovTech', line: 'Automated accessibility for the public sector.', traction: 'Live product', url: 'https://a11ygov.com' },
    { name: 'Anka', tag: 'Healthcare', line: 'AI patient companion.', traction: 'Hospital pilots in talks', url: 'https://anka.health' },
    { name: 'Upwind', tag: 'Marketing', line: 'On-brand campaigns at software speed.', traction: 'First revenue' },
    { name: 'Eliot', tag: 'Enterprise', line: 'Semantic middleware for AI agents.', traction: 'Champion at BASF' },
  ],
  sponsors: {
    line: 'Partners',
    orgs: [
      { name: 'EWOR', logo: '/logos/ewor.svg', href: 'https://ewor.com', h: 26 },
      { name: 'Databricks', logo: '/logos/databricks.svg', href: 'https://databricks.com', h: 24 },
      { name: 'Start2 Group', logo: '/logos/start2.svg', href: 'https://start2.group', h: 24 },
    ],
    ewor: 'EWOR co-runs product-market fit and sales workshops with the Lab.',
  },
};

export const footer = {
  wordmark: 'Venture Lab',
  line: 'A Hack-Nation program. Built out of MIT, run worldwide.',
  legal: 'Hack-Nation UG, Tal 44, 80339 München',
  links: [
    { label: 'Coach a team', href: '/mba' },
    { label: 'Mentor a team', href: '/mentor' },
    { label: 'hack-nation.ai', href: 'https://hack-nation.ai' },
  ],
};
/* --------------------------------------------------------------------------
   Legacy exports for /mba, /mentor, and older components.
--------------------------------------------------------------------------- */
export const hero = {
  poweredBy: 'powered by hack-nation',
  wordmark: 'Venture Lab',
  subline: site.tagline,
  meta: [whatIs.duration, ...whatIs.meta].join(' · '),
  live: 'Cohort 3 forms next',
  primaryCta: { label: formIsLive ? 'Apply now' : 'Notify me', href: '#apply' },
  secondaryCta: { label: 'see the program', href: '#program' },
  cities: ['Munich', 'Zurich', 'London', 'Boston', 'San Francisco'],
  networkNote: '14 cities · 115+ countries',
};
export const jump = {
  marker: '01 · the program',
  headline: whatIs.headline,
  sub: whatIs.sub,
  chart: {
    startLabel: 'h24 · prototype',
    endLabel: 'wk12 · investor day',
    branchLabel: 'your seed round',
    axis: ['wk00', 'wk02', 'wk04', 'wk06', 'wk08', 'wk10', 'wk12'],
  },
  phases: whatIs.phases,
  gate: whatIs.gate,
};
export const offer = {
  marker: '02 · what you get',
  headline: 'What you can expect',
  items: whatIs.pillars.map((p) => ({ lead: `${p.title}:`, body: p.body })),
  partners: {
    line: stories.sponsors.line,
    orgs: stories.sponsors.orgs,
    schools: 'Coaches from Stanford GSB, Harvard, Wharton, MIT Sloan, LBS, Tuck, Fuqua, and Carnegie Mellon.',
    ewor: stories.sponsors.ewor,
  },
};
export const proof = {
  marker: '03 · proof',
  headline: stories.headline,
  live: 'Cohort 2 pitched investors. Cohort 3 forms next.',
  stats: [
    { value: 59, suffix: '', label: 'startups across two cohorts' },
    { value: 19, suffix: '', label: 'firms at Investor Day' },
    { value: 8, suffix: '', label: 'top MBA programs coaching' },
    { value: 12, suffix: '', label: 'weeks to the room' },
  ],
  featured: {
    kicker: 'YC F25',
    title: 'Anto raised a seed round.',
    body: 'David de Gruijl took Anto from an early prototype through Y Combinator F25 and into a seed. That is the trajectory this Lab is built to repeat.',
  },
  quotes: stories.testimonials.map((t) => ({
    text: t.quote,
    name: t.name,
    role: t.role,
  })),
};
export const startups = {
  marker: '04 · built in the lab',
  headline: 'Real teams, real companies',
  intro: stories.examplesIntro,
  companies: stories.startups.map((s) => ({
    name: s.name,
    tag: s.tag,
    line: s.line,
    traction: s.traction,
    url: 'url' in s ? s.url : undefined,
  })),
};
export const audience = {
  marker: '05 · fit',
  forYou: {
    title: 'Who this is for',
    items: [
      { lead: 'You have a working prototype:', body: 'something running beats a deck every time.' },
      { lead: 'You can point at a real user pain:', body: 'not just a demo that impressed a room once.' },
      { lead: 'Your team keeps shipping:', body: 'momentum is the strongest signal we read.' },
      { lead: 'You want to raise:', body: 'a pre-seed round or get to first revenue within months.' },
    ],
  },
  notForYou: {
    title: 'Who this is not for',
    items: [
      { lead: 'Idea only:', body: 'come back when something is running.' },
      { lead: 'You want a certificate:', body: 'there is none.' },
      { lead: 'You cannot commit weekly hours:', body: 'gates do not happen on the side.' },
    ],
  },
  soloNote: 'Solo technical founders are welcome. Cohort 1 had five.',
};
export const faq = {
  marker: 'FAQ',
  items: [
    { q: 'What does it cost?', a: 'Nothing. Participation is free and we take no equity.' },
    {
      q: 'Is it remote?',
      a: 'Yes. Fully remote across time zones, with local peer groups in cities like Munich, Zurich, London, Boston, and San Francisco.',
    },
    {
      q: 'Do I need a prior event badge?',
      a: 'No. A working prototype and evidence of momentum clear the bar, whether you built with us or on your own.',
    },
  ],
};
export const film = {
  marker: 'inside the room',
  headline: 'This is what Investor Day feels like',
};
