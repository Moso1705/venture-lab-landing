/**
 * All page content: copy, numbers, startups, FAQ, links.
 * Components render what is here and never hardcode words.
 * Every claim must be covered by docs/FACTS.md before launch.
 */

// Michi: paste the Cohort 3 application form URL here (Tally/Typeform/Google Form).
// While empty, the apply section shows a styled notice instead of an iframe.
export const applyFormUrl = '';

export const site = {
  name: 'HackNation Venture Lab',
  tagline: 'From the world’s biggest AI hackathon to your first funded company.',
  url: 'https://ventures.hack-nation.ai',
  parentUrl: 'https://hack-nation.ai',
  ogDescription:
    'The Venture Lab takes the top teams from the HackNation AI hackathon, plus scouted builders from outside, and gives them 12 weeks, senior mentors, and a room of investors to turn a prototype into a company. Free to join, no equity taken.',
};

export const announcement = {
  label: 'cohort 3',
  text: 'Applications are open',
  cta: 'Apply now',
  href: '#apply',
};

export const nav = {
  links: [
    { label: 'Program', href: '#program' },
    { label: 'Startups', href: '#startups' },
    { label: 'Proof', href: '#proof' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: { label: 'Apply', href: '#apply' },
};

export const hero = {
  eyebrow: '/ hacknation venture lab',
  // Serif display; the *company* segment renders italic.
  headline: { lead: 'You built it in 48 hours.', emphasis: 'Now build the company.' },
  sub: 'Twelve weeks, senior mentors, and a room full of investors to turn your prototype into a company. Most teams earn their seat at the world’s biggest AI hackathon; a scouted few come from outside. Free to join, no equity taken.',
  primaryCta: { label: 'Apply for Cohort 3', href: '#apply' },
  secondaryCta: { label: 'See the program', href: '#program' },
  stats: [
    { value: '12', label: 'weeks from prototype to Investor Day' },
    { value: '59', label: 'startups built across two cohorts' },
    { value: '19', label: 'VC firms at the last Investor Day' },
    { value: '€1M+', label: 'in credits and discounts per team' },
  ],
  telemetry: [
    '/ next cohort',
    'c03 · dates tba',
    'format: remote, worldwide',
    'hubs: muc zrh lon bos sf',
    'cost: 0 · equity taken: 0',
  ],
};

export const pipeline = {
  eyebrow: '/ how you get here',
  headline: { lead: 'Where the hackathon ends,', emphasis: 'the Lab begins.' },
  steps: [
    {
      num: '01',
      title: 'Hack',
      body: 'Most teams start at the Global AI Hackathon: 5,500 builders, 24 hours, 14 cities. Others build on their own, nights and weekends.',
    },
    {
      num: '02',
      title: 'Get scouted',
      body: 'We select the strongest teams from every edition and scout ambitious builders from outside. Same bar for both: a working prototype, a real user pain, momentum.',
    },
    {
      num: '03',
      title: 'Build',
      body: '12 weeks of coaching, biweekly challenges, and founder-led workshops. Demo Day at the midpoint, a hard gate before the finale.',
    },
    {
      num: '04',
      title: 'Raise',
      body: 'Pitch live to angels and VCs at Investor Day. Cohort 1 put 16 teams in front of 19 firms.',
    },
  ],
};

export const offer = {
  eyebrow: '/ what you get',
  headline: { lead: 'Everything a weekend team needs', emphasis: 'to become a company.' },
  pillars: [
    {
      title: 'Operators in your corner',
      body: 'An MBA coach from schools like Stanford GSB, Harvard, and MIT Sloan, plus senior mentors from successful startups and Big Tech. Matched to your team by domain and time zone. Weekly, not quarterly.',
    },
    {
      title: 'Credits that actually matter',
      body: 'Anthropic, OpenAI, and AWS credits to build on, plus the Start2 partner catalogue on top. Over €1M in credits and discounts per team.',
    },
    {
      title: 'Investors in the room',
      body: 'Demo Day feedback at the midpoint. Then Investor Day with firms like a16z, Antler, Creandum, Cherry Ventures, Entrepreneur First, and EWOR.',
    },
  ],
};

export const proof = {
  eyebrow: '/ the numbers',
  live: 'Happening now: Cohort 2 is in the room. 30 teams pitch investors on July 31.',
  stats: [
    { value: '5,500', label: 'builders applied to the last hackathon' },
    { value: '115+', label: 'countries reached' },
    { value: '59', label: 'startups across two cohorts' },
    { value: '19', label: 'investor firms at Investor Day' },
    { value: '8', label: 'top MBA programs coaching teams' },
  ],
};

export const program = {
  eyebrow: '/ the program',
  headline: { lead: 'Twelve weeks.', emphasis: 'Zero fluff.' },
  intro:
    'Every two weeks, one challenge that must either feed your Investor Day deck or produce real traction. Workshops with EWOR and operators like Petter Made cover product-market fit, technical depth, sales, and pitch craft.',
  phases: [
    { weeks: 'wk 01-02', title: 'Voice of customer', body: 'Out of the building. Talk to the people you think you are building for.' },
    { weeks: 'wk 03-04', title: 'First commitment', body: 'Get someone to commit something real: money, a pilot, a signed letter.' },
    { weeks: 'wk 05-06', title: 'Public launch', body: 'Ship it where strangers can find it. Demo Day: pitch what you learned.' },
    { weeks: 'wk 07-08', title: 'Deck teardown', body: 'Your peers take your pitch apart before an investor ever sees it.' },
    { weeks: 'wk 09-10', title: 'Pitch video', body: '90 seconds, no fast-forward. Curated investors watch these before the finale.' },
    { weeks: 'wk 11-12', title: 'Investor Day', body: 'The room is full of angels and VCs. Close your pre-seed conversation.' },
  ],
  gate: {
    title: 'The gate to Investor Day',
    body: '300 cold outreaches. 15 customer interviews. A complete deck. Teams that miss the gate do not pitch.',
  },
  motto: 'YC discipline × HackNation ambition × AI-native execution',
};

export const startups = {
  eyebrow: '/ built in the lab',
  headline: { lead: 'Real teams,', emphasis: 'real companies.' },
  intro: 'A selection from the first two cohorts.',
  companies: [
    { name: 'FandS AI', tag: 'Commerce', line: 'Faster and more precise delivery promises for eCommerce.' },
    { name: 'Anka', tag: 'Healthcare', line: 'AI patient companion that adapts healthcare to every patient.' },
    { name: 'Eliot', tag: 'Enterprise', line: 'Semantic middleware between AI agents and enterprise systems.' },
    { name: 'JanNiti', tag: 'GovTech', line: 'Predicts the socioeconomic impact of government decisions.' },
    { name: 'Erudition Systems', tag: 'FinTech', line: 'Sub-100 microsecond data infrastructure for trading firms.' },
    { name: 'Aucta Labs', tag: 'Field Ops', line: 'A senior HVAC expert in every technician’s pocket.' },
    { name: 'AgentDock', tag: 'Enterprise', line: 'The job market for AI agents.' },
    { name: 'Cadio', tag: 'Manufacturing', line: 'Natural-language CAD assistant for hardware engineering.' },
    { name: 'Twin01', tag: 'Construction', line: 'AI tender analysis and Go/No-Go decisions for construction firms.' },
    { name: 'a11y', tag: 'GovTech', line: 'Automated website accessibility for the public sector.' },
    { name: 'Upwind', tag: 'Marketing', line: 'On-brand marketing campaigns at the speed of software.' },
    { name: 'CirqetAI', tag: 'Hardware', line: 'LLM agents for hardware component sourcing.' },
  ],
};

export const successes = {
  eyebrow: '/ receipts',
  headline: { lead: 'It already', emphasis: 'works.' },
  featured: {
    kicker: 'Hackathon → Y Combinator',
    title: 'Anto, YC F25',
    body: 'David de Gruijl built Anto at a HackNation hackathon, got into Y Combinator with the same idea, finished the batch, and raised a seed round.',
  },
  quotes: [
    {
      text: 'Coming from a purely academic background, the Venture Track challenged me to think like a founder. Between the mentorship and pitch sessions, I gained new skills and thought about technology in completely new ways.',
      name: 'Artem Arzyn',
      role: 'Cohort 1 founder',
    },
    // Michi: add approved alumni quotes here as they come in (alumni outreach pending).
    // { text: '...', name: '...', role: 'Cohort 1 founder' },
  ],
  placeholderNote: 'Cohort 2 pitches on July 31. More receipts after Investor Day.',
};

export const audience = {
  eyebrow: '/ who should apply',
  headline: { lead: 'For builders who kept going', emphasis: 'after the weekend.' },
  forYou: {
    title: 'Apply if',
    items: [
      'You have a working prototype, from our hackathon or your own nights and weekends',
      'You can point at a real user pain, not just a demo that impressed the judges',
      'Your team kept shipping after the event ended',
      'You want to raise a pre-seed round or get to first revenue within months',
    ],
  },
  notForYou: {
    title: 'Skip it if',
    items: [
      'You have an idea but nothing running yet. Do the hackathon first.',
      'You want a certificate. There is none.',
      'You cannot commit real weekly hours for 12 weeks',
      'You are looking for a job, not a company. Check HN12 instead.',
    ],
  },
  soloNote: 'Solo technical founders are welcome. Cohort 1 had five.',
};

export const partners = {
  eyebrow: '/ partners',
  headline: 'Run with partners who back founders early.',
  orgs: ['EWOR', 'Databricks', 'Start2 Group', 'Anthropic', 'OpenAI', 'AWS'],
  schools: [
    'Stanford GSB',
    'Harvard',
    'Wharton',
    'MIT Sloan',
    'London Business School',
    'Dartmouth Tuck',
    'Duke Fuqua',
    'Carnegie Mellon',
  ],
  ewor: 'EWOR, our closest program partner, backs the top 0.1% of founders and co-runs our product-market fit and sales workshops.',
};

export const faq = {
  eyebrow: '/ faq',
  headline: 'Fair questions.',
  items: [
    {
      q: 'What does it cost?',
      a: 'Nothing. Participation is free and we take no equity.',
    },
    {
      q: 'Is it remote?',
      a: 'Yes, the program runs fully remote across time zones. Local peer groups meet in person in cities like Munich, Zurich, London, Boston, and San Francisco.',
    },
    {
      q: 'Do I need to have competed in the hackathon?',
      a: 'No. Most teams come from the Global AI Hackathon, and hackathon performance is the strongest signal we have. But we also scout and accept builders from outside. The bar is the same for everyone: a working prototype and evidence of momentum.',
    },
    {
      q: 'How much time does it take?',
      a: 'Enough to pass the gates. Biweekly challenges, weekly coaching, and 300 cold outreaches before Demo Day do not happen on two hours a week. Most founders build alongside a degree or a job, but the Lab has to be your first priority after them.',
    },
    {
      q: 'Can I join solo?',
      a: 'Yes. Cohort 1 had five solo technical founders. You get an MBA coach and senior mentors around you from week one.',
    },
    {
      q: 'What happens at Investor Day?',
      a: 'You pitch live to a curated room of angels and VCs. At the last one, 16 teams pitched in front of 19 firms including a16z, Antler, and Creandum. Afterwards we help you read and act on investor feedback.',
    },
    {
      q: 'When does Cohort 3 start?',
      a: 'Dates will be announced soon. Apply now and you hear from us as soon as selection opens.',
    },
  ],
};

export const apply = {
  eyebrow: '/ apply',
  headline: { lead: 'Ready when', emphasis: 'you are.' },
  sub: 'Applications for Cohort 3 are open. Tell us what you built and who needs it.',
  fallback: {
    text: 'The application form goes live here shortly. Until then, reach the team through',
    linkLabel: 'hack-nation.ai',
    href: 'https://hack-nation.ai',
  },
};

export const footer = {
  wordmark: 'HACKNATION / venture lab',
  line: 'A Hack-Nation program. Built out of MIT, run worldwide.',
  legal: 'Hack-Nation UG, Tal 44, 80339 München',
  links: [
    { label: 'hack-nation.ai', href: 'https://hack-nation.ai' },
    { label: 'HN12', href: 'https://hn12.hack-nation.ai' },
  ],
};
