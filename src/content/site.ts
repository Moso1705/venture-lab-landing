/**
 * All page content: copy, numbers, startups, FAQ, links.
 * Components render what is here and never hardcode words.
 * Every claim must be covered by docs/FACTS.md before launch.
 */

// Michi: paste the Cohort 3 application form URL here (Tally/Typeform/Google Form).
// While empty, the apply section shows a styled notice instead of an iframe and the
// announcement bar avoids claiming applications are open (persona audit: a ticker that
// promises a form that does not exist kills conversion at peak intent).
export const applyFormUrl = '';
export const formIsLive = Boolean(applyFormUrl);

// Michi: paste a Demo Day / Investor Day video URL here (mp4 file, YouTube, or Vimeo).
// While empty, the film section does not render at all.
export const demoDayVideoUrl = '';

export const site = {
  name: 'HackNation Venture Lab',
  tagline: 'From the world’s biggest AI hackathon to your first funded company.',
  // Flip to https://ventures.hack-nation.ai once the domain points at THIS deployment.
  // Until then it must stay the Vercel origin: the old domain serves the old site, so
  // og:image/canonical pointing there break share previews.
  url: 'https://venture-lab-landing.vercel.app',
  parentUrl: 'https://hack-nation.ai',
  ogDescription:
    'The Venture Lab takes the top teams from the HackNation AI hackathon, plus scouted builders from outside, and gives them 12 weeks, senior mentors, and a room of investors to turn a prototype into a company. Free to join, no equity taken.',
};

export const announcement = formIsLive
  ? { label: 'cohort 3', text: 'applications are open', cta: 'Apply now', href: '#apply' }
  : { label: 'live', text: 'Cohort 2 pitches 19 firms on July 31 · Cohort 3 forms next', cta: 'Get in line', href: '#apply' };

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
  headline: { lead: 'You built it in 24 hours.', emphasis: 'Now build the company.' },
  sub: 'Twelve weeks, senior mentors, and a room full of investors to turn your prototype into a company. Most teams earn their seat at the world’s biggest AI hackathon. The rest apply from outside and clear the same bar. Free to join, no equity taken.',
  primaryCta: { label: 'Apply for Cohort 3', href: '#apply' },
  secondaryCta: { label: 'See the program', href: '#program' },
  stats: [
    { value: 12, suffix: '', label: 'weeks from prototype to Investor Day' },
    { value: 6, suffix: '', label: 'challenges, each feeding your deck or traction' },
    { value: 1, suffix: '', label: 'hard gate before you may pitch' },
    { value: 0, suffix: '%', label: 'equity taken, and no fee to join' },
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
      body: 'Anthropic, OpenAI, and AWS credits from day one, so you build on someone else’s compute bill. On top: the Start2 partner catalogue with discounts on the tools you already use.',
    },
    {
      title: 'Investors in the room',
      body: 'Demo Day feedback at the midpoint. Then Investor Day: at the last one, 16 teams pitched live in front of 19 firms, including a16z, Antler, Creandum, Cherry Ventures, Entrepreneur First, and EWOR.',
    },
  ],
};

export const proof = {
  eyebrow: '/ the numbers',
  live: 'Happening now: Cohort 2 is in the room. 30 teams pitch investors on July 31.',
  stats: [
    { value: 5500, suffix: '', label: 'builders applied to the last hackathon' },
    { value: 115, suffix: '+', label: 'countries reached' },
    { value: 59, suffix: '', label: 'startups across two cohorts' },
    { value: 19, suffix: '', label: 'firms took the meeting at Investor Day' },
    { value: 8, suffix: '', label: 'top MBA programs coaching teams' },
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
};

export const film = {
  eyebrow: '/ inside the room',
  headline: { lead: 'This is what Investor Day', emphasis: 'feels like.' },
  // Renders only when demoDayVideoUrl is set (top of this file).
};

export const startups = {
  eyebrow: '/ built in the lab',
  headline: { lead: 'Real teams,', emphasis: 'real companies.' },
  intro: 'A selection. Traction as pitched at Investor Day.',
  companies: [
    { name: 'FandS AI', tag: 'Commerce', line: 'Precise delivery promises for eCommerce.', traction: '3 enterprise PoCs' },
    { name: 'Anka', tag: 'Healthcare', line: 'AI patient companion for every patient.', traction: '4 US hospital pilots in talks' },
    { name: 'Eliot', tag: 'Enterprise', line: 'Semantic middleware for AI agents.', traction: 'champion user at BASF' },
    { name: 'JanNiti', tag: 'GovTech', line: 'Predicts the impact of government decisions.', traction: '6 governments interested' },
    { name: 'Erudition Systems', tag: 'FinTech', line: 'Sub-100 microsecond trading data infra.', traction: 'in discovery with top HFT firms' },
    { name: 'Upwind', tag: 'Marketing', line: 'On-brand campaigns at software speed.', traction: 'first revenue signed' },
    { name: 'Twin01', tag: 'Construction', line: 'AI tender analysis for construction firms.', traction: '5 beta customers' },
    { name: 'a11y', tag: 'GovTech', line: 'Automated accessibility for the public sector.', traction: 'live product', url: 'https://a11ygov.com' },
  ],
};

export const successes = {
  eyebrow: '/ receipts',
  headline: { lead: 'The pipeline', emphasis: 'works.' },
  featured: {
    kicker: 'hackathon → funded founder',
    title: 'Anto raised a seed round',
    body: 'David de Gruijl built Anto at a HackNation hackathon. The same idea carried him through Y Combinator F25 and into a seed round. That is the pipeline this Lab industrializes.',
  },
  statCard: {
    value: '16',
    label: 'teams pitched live in front of 19 venture firms at the last Investor Day.',
  },
  quotes: [
    {
      text: 'Coming from a purely academic background, the Venture Track challenged me to think like a founder. Between the mentorship and pitch sessions, I gained new skills and thought about technology in completely new ways.',
      name: 'Artem Arzyn',
      role: 'Cohort 1 founder (the Lab ran as Venture Track then)',
    },
    // Michi: add approved alumni quotes here as they come in (alumni outreach pending).
    // { text: '...', name: '...', role: 'Cohort 1 founder' },
  ],
  live: 'Cohort 2 is in the room right now. 30 teams pitch on July 31.',
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
  orgs: [
    { name: 'EWOR', logo: '/logos/ewor.svg', href: 'https://ewor.com', h: 26 },
    { name: 'Databricks', logo: '/logos/databricks.svg', href: 'https://databricks.com', h: 24 },
    { name: 'Start2 Group', logo: '/logos/start2.svg', href: 'https://start2.group', h: 24 },
    { name: 'Anthropic', logo: '/logos/anthropic.svg', href: 'https://anthropic.com', h: 22 },
    { name: 'OpenAI', logo: '/logos/openai.svg', href: 'https://openai.com', h: 26 },
    { name: 'AWS', logo: '/logos/aws.svg', href: 'https://aws.amazon.com', h: 30 },
  ],
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

export const doors = {
  eyebrow: '/ pick your door',
  items: [
    {
      title: 'You hacked with us',
      body: 'Your prototype already survived 24 hours and a jury. Apply with it.',
      cta: 'Apply for Cohort 3',
      href: '#apply',
    },
    {
      title: 'You built on your own',
      body: 'No hackathon badge needed. A working prototype and momentum clear the same bar.',
      cta: 'Apply from outside',
      href: '#apply',
    },
    {
      title: 'Nothing built yet',
      body: 'Start where most of our teams started: the Global AI Hackathon, July 18-19.',
      cta: 'Join the hackathon',
      href: 'https://hack-nation.ai',
    },
  ],
};

export const apply = {
  eyebrow: '/ apply',
  headline: { lead: 'Ready when', emphasis: 'you are.' },
  sub: formIsLive
    ? 'Applications for Cohort 3 are open. Tell us what you built and who needs it. Ten minutes, no deck required.'
    : 'Cohort 3 applications open right after Investor Day. The form will live here.',
  fallback: {
    prompt: '/// apply_c03',
    text: 'opens after Investor Day, July 31. Until then: watch Cohort 2 pitch, or start at the hackathon on July 18-19.',
    linkLabel: 'hack-nation.ai',
    href: 'https://hack-nation.ai',
  },
};

export const footer = {
  wordmark: 'HACKNATION / venture lab',
  line: 'A Hack-Nation program. Built out of MIT, run worldwide.',
  legal: 'Hack-Nation UG, Tal 44, 80339 München',
  links: [
    { label: 'coach a team', href: '/mba' },
    { label: 'mentor a team', href: '/mentor' },
    { label: 'hack-nation.ai', href: 'https://hack-nation.ai' },
    { label: 'HN12', href: 'https://hn12.hack-nation.ai' },
  ],
};
