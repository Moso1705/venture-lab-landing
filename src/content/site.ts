/**
 * All page content: copy, numbers, startups, FAQ, links.
 * Components render what is here and never hardcode words.
 * Every claim must be covered by docs/FACTS.md before launch.
 */

// Michi: paste the Cohort 3 application form URL here (Tally/Typeform/Google Form).
// While empty, the apply section shows the get-in-line capture instead of an iframe.
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

export const nav = {
  wordmark: { short: 'VL', poweredBy: 'HACK-NATION' },
  links: [
    { label: 'Program', href: '#program' },
    { label: 'Startups', href: '#startups' },
    { label: 'Proof', href: '#proof' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: { label: 'Apply', href: '#apply' },
};

export const hero = {
  poweredBy: 'powered by hack-nation',
  wordmark: 'Venture Lab',
  subline: 'From the world’s biggest AI hackathon to your first funded company',
  meta: '12 weeks · remote · free · no equity taken',
  live: 'Cohort 2 pitches 19 firms on July 31 · Cohort 3 forms next',
  primaryCta: { label: formIsLive ? 'Apply now' : 'Get in line', href: '#apply' },
  secondaryCta: { label: 'or see the program', href: '#program' },
  // Labeled nodes on the network: the published hub cities. The rest of the
  // 14 hackathon cities stay unlabeled dots.
  cities: ['Munich', 'Zurich', 'London', 'Boston', 'San Francisco'],
  networkNote: '14 cities · 115+ countries',
};

// The signature section: the trajectory from a weekend prototype to a raise.
export const jump = {
  marker: '01 · the program',
  headline: { lead: 'You built it in 24 hours.', emphasis: 'Now build the company.' },
  sub: 'Twelve weeks of pushing, with senior mentors and biweekly gates. At the end you pitch a room full of investors and come out raising. Free to join, no equity taken.',
  chart: {
    startLabel: 'h24 · prototype',
    endLabel: 'wk12 · investor day',
    branchLabel: 'your seed round',
    axis: ['wk00', 'wk02', 'wk04', 'wk06', 'wk08', 'wk10', 'wk12'],
  },
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

export const offer = {
  marker: '02 · what you get',
  headline: 'What you can expect',
  items: [
    {
      lead: 'Operators in your corner:',
      body: 'an MBA coach from schools like Stanford GSB, Harvard, and MIT Sloan, plus senior mentors from successful startups and Big Tech. Matched to your team by domain and time zone. Weekly, not quarterly.',
    },
    {
      lead: 'Compute and tooling credits:',
      body: 'free API credits and premium tools in collaboration with our partners, plus the Start2 catalogue with discounts on the tools you already use.',
    },
    {
      lead: 'Investors in the room:',
      body: 'Demo Day feedback at the midpoint. Then Investor Day: at the last one, 16 teams pitched live in front of 19 firms, including a16z, Antler, Creandum, Cherry Ventures, Entrepreneur First, and EWOR.',
    },
    {
      lead: 'The HackNation network:',
      body: 'the community behind the world’s biggest AI hackathons, connecting builders from 115+ countries with founders and operators at the frontier.',
    },
  ],
  partners: {
    line: 'Run with partners who back founders early.',
    orgs: [
      { name: 'EWOR', logo: '/logos/ewor.svg', href: 'https://ewor.com', h: 26 },
      { name: 'Databricks', logo: '/logos/databricks.svg', href: 'https://databricks.com', h: 24 },
      { name: 'Start2 Group', logo: '/logos/start2.svg', href: 'https://start2.group', h: 24 },
    ],
    schools: 'Coaches from Stanford GSB, Harvard, Wharton, MIT Sloan, LBS, Tuck, Fuqua, and Carnegie Mellon.',
    ewor: 'EWOR, our closest program partner, backs the top 0.1% of founders and co-runs our product-market fit and sales workshops.',
  },
};

export const proof = {
  marker: '03 · proof',
  headline: 'The pipeline works',
  live: 'Happening now: Cohort 2 is in the room. 30 teams pitch investors on July 31.',
  stats: [
    { value: 5500, suffix: '', label: 'builders applied to the last hackathon' },
    { value: 115, suffix: '+', label: 'countries reached' },
    { value: 59, suffix: '', label: 'startups across two cohorts' },
    { value: 19, suffix: '', label: 'firms took the meeting at Investor Day' },
    { value: 8, suffix: '', label: 'top MBA programs coaching teams' },
  ],
  featured: {
    kicker: 'hackathon → funded founder',
    title: 'Anto raised a seed round.',
    body: 'David de Gruijl built Anto at a HackNation hackathon. The same idea carried him through Y Combinator F25 and into a seed round. That is the trajectory this Lab industrializes.',
  },
  quotes: [
    {
      text: 'The Venture Track challenged me to think like a founder. Between the mentorship and pitch sessions, I gained new skills and thought about technology in completely new ways.',
      name: 'Artem Arzyn',
      role: 'Cohort 1 founder',
    },
    // Michi: add approved alumni quotes here as they come in (alumni outreach pending:
    // JanNiti, Rainbow Intelligence, Elyra, Anka, a11y). They render automatically.
    // { text: '...', name: '...', role: 'Cohort 2 founder' },
  ],
};

export const startups = {
  marker: '04 · built in the lab',
  headline: 'Real teams, real companies',
  intro: 'A selection from two cohorts. Traction as pitched at Investor Day.',
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

export const audience = {
  marker: '05 · fit',
  forYou: {
    title: 'Who this is for',
    items: [
      { lead: 'You have a working prototype:', body: 'from our hackathon or your own nights and weekends. Most teams earn their seat at the hackathon; scouted builders clear the same bar.' },
      { lead: 'You can point at a real user pain:', body: 'not just a demo that impressed the judges.' },
      { lead: 'Your team kept shipping:', body: 'after the event ended. Momentum is the strongest signal we read.' },
      { lead: 'You want to raise:', body: 'a pre-seed round or get to first revenue within months, not someday.' },
    ],
  },
  notForYou: {
    title: 'Who this is not for',
    items: [
      { lead: 'You have an idea but nothing running yet:', body: 'do the hackathon first, July 18-19.' },
      { lead: 'You want a certificate:', body: 'there is none.' },
      { lead: 'You cannot commit real weekly hours:', body: 'biweekly gates and 300 cold outreaches do not happen on the side.' },
      { lead: 'You are looking for a job, not a company:', body: 'check HN12 instead.' },
    ],
  },
  soloNote: 'Solo technical founders are welcome. Cohort 1 had five.',
};

export const faq = {
  marker: '07 · faq',
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
      a: 'Dates will be announced soon. Get in line now and you hear from us as soon as selection opens.',
    },
  ],
};

export const apply = {
  marker: '06 · apply',
  headline: 'Request a spot',
  sub: formIsLive
    ? 'Applications for Cohort 3 are open. Tell us what you built and who needs it. Ten minutes, no deck required.'
    : 'Cohort 3 applications open right after Investor Day, July 31. Get in line and you hear first.',
  // Three ways in, folded into the apply section as compact routes.
  routes: [
    { title: 'You hacked with us', body: 'Your prototype already survived 24 hours and a jury. Apply with it.' },
    { title: 'You built on your own', body: 'No hackathon badge needed. A working prototype and momentum clear the same bar.' },
    { title: 'Nothing built yet', body: 'Start where most of our teams started: the Global AI Hackathon, July 18-19.', link: { label: 'hack-nation.ai', href: 'https://hack-nation.ai' } },
  ],
};

export const film = {
  marker: 'inside the room',
  headline: 'This is what Investor Day feels like',
  // Renders only when demoDayVideoUrl is set (top of this file).
};

export const footer = {
  wordmark: 'VENTURE LAB',
  line: 'A Hack-Nation program. Built out of MIT, run worldwide.',
  legal: 'Hack-Nation UG, Tal 44, 80339 München',
  links: [
    { label: 'coach a team', href: '/mba' },
    { label: 'mentor a team', href: '/mentor' },
    { label: 'hack-nation.ai', href: 'https://hack-nation.ai' },
    { label: 'HN12', href: 'https://hn12.hack-nation.ai' },
  ],
};
