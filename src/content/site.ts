/**
 * Page content. Components render what is here and never hardcode words.
 * Claims must stay covered by docs/FACTS.md.
 *
 * Funnel spine: give → how to apply → 12-week arc → pick path → notify → proof.
 * Tone: YC-short, elite, not hackathon-heavy. No em/en dashes. No "get in line".
 * Free / no equity: og meta + FAQ only. Never as hero pills.
 */
// Michi: paste the Cohort application form URL here (Tally/Typeform/Google Form).
export const applyFormUrl = '';
export const formIsLive = Boolean(applyFormUrl);
// Michi: Demo Day / Investor Day video. Empty = section hidden.
export const demoDayVideoUrl = '';
export const site = {
  name: 'HackNation Venture Lab',
  tagline: 'Twelve weeks full-time to Investor Day.',
  url: 'https://venture-lab-landing.vercel.app',
  parentUrl: 'https://hack-nation.ai',
  ogDescription:
    'The new Unicorn Foundry. Twelve weeks full-time to Investor Day. Free to join, no equity taken.',
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
  // Voice: "the new unicorn foundry". Copyright TBD (teen edu site + UK dormant co. exist).
  // Positioning line only, not a claimed product brand.
  headline: { lead: 'The new', emphasis: 'Unicorn Foundry' },
  duration: '12 weeks',
  meta: [] as string[],
  sub: 'For the most ambitious founders.',
  pathLabel: 'How to apply',
  pathEnd: 'Investor Day',
  steps: [
    {
      num: '01',
      title: 'Choose your Exception',
      body: 'Exceptional profile, track record, and drive to go full-time.',
    },
    {
      num: '02',
      title: 'Choose your Moonshot',
      body: 'A working prototype and a sharp thesis. Not a slide deck.',
    },
    {
      num: '03',
      title: 'Get selected',
      body: 'Small cohort on purpose. High bar, few seats.',
    },
    {
      num: '04',
      title: 'Run the lab',
      body: '12 weeks full-time. Intensive. Investor Day at the end.',
    },
  ],
  pillarsLabel: 'This is what we give you',
  pillars: [
    {
      title: 'Mentors',
      body: 'Leaders from Big Tech and Big Pharma who spar ideas, roast you, and coach you.',
    },
    {
      title: 'Coaches',
      body: 'An ambitious business co-founder from a top US, European, or Asian university.',
    },
    {
      title: 'Credits',
      // Start2 gallery highlights. No Notion URL.
      body: '$1M+ in compute and discounts. 130+ startup deals.',
    },
    {
      title: 'Partners',
      body: 'Industry exposure through the Hack-Nation network: feedback and possible customers.',
    },
    {
      title: 'Top Tier Investors',
      body: 'EWOR, a16z, Antler, Creandum, Cherry, EF and more. Waiting on Investor Day.',
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
  // Legacy for Jump / role pages only. Not on the funnel page.
  phasesLabel: 'Twelve weeks',
  phasesSpan: 'Prototype in. Investor Day out.',
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
  sub: 'Founders who want in. Mentors and MBA coaches who raise the bar.',
  paths: [
    {
      role: 'Founders',
      title: 'Build the company',
      body: formIsLive
        ? 'Apply with a working prototype. Ten minutes to submit. No deck required.'
        : 'Leave your email. We write when Cohort 3 selection opens for teams.',
      cta: formIsLive ? 'Apply with your team' : 'Notify me',
      href: '#apply',
      tone: 'ink' as const,
    },
    {
      role: 'Mentors',
      title: 'Guide a team',
      body: 'We pre-select; the team picks. Matched by domain. Operators who shipped.',
      cta: 'Mentor a team',
      href: '/mentor',
      tone: 'blue' as const,
    },
    {
      role: 'MBA coaches',
      title: 'Coach a startup',
      body: 'One team from prototype through Investor Day. Strategy and go-to-market.',
      cta: 'Coach as an MBA',
      href: '/mba',
      tone: 'raised' as const,
    },
  ],
};
export const apply = {
  marker: 'Notice',
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
  sub: 'Alumni who kept shipping after the Lab.',
  // Portraits: same assets as hack-nation.ai/images/testimonials/*
  // Quotes: HN homepage carousel (David softened slightly on hackathon spam).
  testimonials: [
    {
      name: 'David de Gruijl',
      role: 'Founder @ Anto (YC F25)',
      badge: 'YC F25 founder',
      quote:
        'I did Hack-Nation this summer, applied with the same idea to Y Combinator and got in. Just finished the batch and raised a seed. Can\'t thank you guys enough.',
      image: '/portraits/david-de-gruijl.png',
      linkedin: 'https://www.linkedin.com/in/daviddegruijl',
    },
    {
      name: 'Artem Arzyn',
      role: 'Venture Track Alumnus',
      badge: 'Venture Track alumnus',
      quote:
        'Coming from a purely academic background, the Venture Track challenged me to think like a founder. Between the mentorship and pitch sessions, I gained new skills and thought about technology in completely new ways.',
      image: '/portraits/artem-arzyn.png',
      linkedin: 'https://www.linkedin.com/in/artem-arzyn',
    },
    {
      name: 'Dr. Janet Brinz',
      role: 'Venture Track Alumna',
      badge: 'Venture Track alumna',
      quote:
        'What made the Venture Track so valuable was the open exchange of ideas. The peer feedback and honest discussions really pushed my thinking forward.',
      image: '/portraits/janet-brinz.jpg',
      imagePosition: 'center 8%',
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
  meta: whatIs.duration,
  live: 'Cohort 3 forms next',
  primaryCta: { label: formIsLive ? 'Apply now' : 'Notify me', href: '#apply' },
  secondaryCta: { label: 'see the program', href: '#program' },
  cities: ['Munich', 'Zurich', 'London', 'Boston', 'San Francisco'],
  networkNote: '14 cities · 115+ countries',
};
export const jump = {
  marker: 'Twelve weeks',
  headline: whatIs.headline,
  sub: 'Prototype in. Investor Day out.',
  chart: {
    aria: 'Chart: a prototype line stays flat until the Lab starts, rises steeply across twelve weeks, and branches into your seed round after Investor Day.',
    startLabel: 'h24 · prototype',
    endLabel: 'wk12 · Investor Day',
    endLabelShort: 'Investor Day',
    branchLabel: 'your seed round',
    aloneLabel: 'the prototype, left alone',
    labStartLabel: 'the lab starts',
    midLabel: 'demo day',
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
      { lead: 'You cannot commit full-time:', body: 'twelve weeks is not a side project.' },
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
