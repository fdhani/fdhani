export type Experience = {
  org: string;
  role: string;
  when: string;
  loc: string;
  startY: number;
  endY: number;
  bullets: string[];
};

export type SkillGroup = { name: string; items: [string, number][] };

export type StickyColor = 'yellow' | 'pink' | 'blue' | 'green' | 'orange';

export type Project = {
  slug: string;
  name: string;
  short: string;
  org: string;
  period: string;
  role: string;
  stack: string[];
  summary: string;
  highlights: string[];
  color: StickyColor;
};

export const RESUME = {
  name: 'F. Dhani Achmad',
  handle: 'dhani48',
  title: 'Frontend Engineer',
  location: 'West Java, Indonesia',
  summary:
    'Passion for web development and fascinated with the world of Artificial Intelligence.',
  topSkills: ['Front-end Development', 'UI/UX Design', 'Android Development'],
  languages: ['English', 'French', 'Bahasa Indonesia'],
  certifications: ['TOEFL IBT'],
  education: [
    { school: 'Universitas Gadjah Mada (UGM)', degree: 'Computer Science' },
    { school: 'Richard Montgomery High School', degree: 'High School' },
  ],
  awards: [
    { year: 2016, title: 'DINUS Application Development', detail: '1st Place' },
    { year: 2016, title: 'WPP STREAM (Un)conference', detail: 'Pitching Competition' },
    { year: 2016, title: 'World in Travel — Startup Pitch', detail: 'Finalist' },
  ],
  contact: {
    email: 'fachran.dhani@gmail.com',
    mobile: '+62 812-2713-9678',
    linkedin: 'https://www.linkedin.com/in/fachran-dhani',
    github: 'https://github.com/dhani48',
    behance: 'https://www.behance.net/dhaniforty8a69',
  },
  experience: [
    {
      org: 'Omni HR',
      role: 'Software Engineer',
      when: 'Apr 2025 – Present',
      loc: 'Singapore',
      startY: 2025.25,
      endY: 2026.4,
      bullets: [
        'Contributed to Attendance, Time Off, and Payroll modules in production.',
        'Feature planning and end-to-end implementation across cross-functional teams.',
        'Explored AI-driven dev workflows to boost engineering productivity.',
      ],
    },
    {
      org: '99 Group (99.co · Rumah123 · SRX)',
      role: 'Staff Software Engineer',
      when: 'Apr 2024 – Apr 2025',
      loc: 'Singapore',
      startY: 2024.25,
      endY: 2025.25,
      bullets: [
        'Led a team of frontend engineers building a stable property platform for SG.',
        'Migrated a large legacy app to Next.js App Router.',
        'Coordinated removal of legacy Redux usages across the platform.',
      ],
    },
    {
      org: 'Tokopedia',
      role: 'Lead Software Engineer — Web Platform',
      when: 'Jan 2023 – Apr 2024',
      loc: 'Jakarta, Indonesia',
      startY: 2023,
      endY: 2024.25,
      bullets: [
        'Led & grew a team of 8 engineers on Tokopedia Seller Dashboard.',
        'Drove frontend observability — standardized hundreds of alerts/dashboards.',
        'Initiated Flutter R&D, shipped the START Summit cross-platform app.',
      ],
    },
    {
      org: 'Tokopedia',
      role: 'Senior Software Engineer — Web Platform',
      when: 'Aug 2020 – Apr 2023',
      loc: 'Jakarta, Indonesia',
      startY: 2020.67,
      endY: 2023,
      bullets: [
        'Improved Lighthouse scores on critical Seller Dashboard pages by 25%.',
        'Shipped Seller Order Management, "Rilisan Spesial", Seller Home, Statistics, +more.',
        'Led cross-platform team to ship the first production Flutter app at Tokopedia.',
        'Mentored engineers; deprecated legacy modules to improve stability & security.',
      ],
    },
    {
      org: 'Tokopedia',
      role: 'Software Engineer — Web Platform',
      when: 'Jul 2019 – Jul 2020',
      loc: 'Jakarta, Indonesia',
      startY: 2019.5,
      endY: 2020.5,
      bullets: [
        'Frontend work across product surfaces in a hyper-growth marketplace.',
      ],
    },
    {
      org: 'Tokopedia',
      role: 'UX Engineer',
      when: 'May 2018 – Jul 2019',
      loc: 'Jakarta, Indonesia',
      startY: 2018.33,
      endY: 2019.5,
      bullets: [
        'Built Tokopedia Lite (mobile web) primarily in React.',
        'Revamped iOS pages (incl. checkout) using React Native.',
        'Owned the Seller Order Management revamp end-to-end.',
      ],
    },
    {
      org: 'impruvmi',
      role: 'UI/UX Designer',
      when: 'Oct 2015 – Jul 2018',
      loc: 'Yogyakarta, Indonesia',
      startY: 2015.75,
      endY: 2018.5,
      bullets: [
        'Designed UI/UX for a Yogyakarta-based startup, plus marketing collateral.',
      ],
    },
    {
      org: 'Ralali.com',
      role: 'Front-End Developer & UI Designer',
      when: 'Feb 2017 – Jun 2018',
      loc: 'Yogyakarta, Indonesia',
      startY: 2017.08,
      endY: 2018.5,
      bullets: [
        'Built internal & external apps with React, Angular, jQuery; some PHP integrations.',
      ],
    },
    {
      org: 'AIESEC Indonesia',
      role: 'Digital PR Manager / Creative Director',
      when: '2014 – 2017',
      loc: 'Indonesia',
      startY: 2014.33,
      endY: 2017.42,
      bullets: [
        'Brand activation, marketing tools, and creative direction across events.',
      ],
    },
    {
      org: 'Kata.ai',
      role: 'UI/UX & Front-End Intern',
      when: 'Aug 2016 – Nov 2016',
      loc: 'Jakarta, Indonesia',
      startY: 2016.58,
      endY: 2016.92,
      bullets: [
        "Designed & shipped B2B + Kata.ai landing pages (SASS, JS, jQuery, EJS, Express).",
      ],
    },
  ] satisfies Experience[],
  skills: [
    {
      name: 'Frontend',
      items: [
        ['React', 9],
        ['Next.js', 9],
        ['TypeScript', 8],
        ['React Native', 7],
        ['Flutter', 6],
        ['Redux', 8],
      ],
    },
    {
      name: 'Engineering',
      items: [
        ['Web Performance', 8],
        ['Observability', 8],
        ['Cross-Platform', 7],
        ['Mentoring', 9],
        ['System Design', 7],
      ],
    },
    {
      name: 'Design & AI',
      items: [
        ['UI / UX', 9],
        ['Design Systems', 8],
        ['AI-assisted Dev', 8],
        ['Prototyping', 8],
      ],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      slug: 'omni-hr-modules',
      name: 'Omni HR — Attendance / Time Off / Payroll',
      short: 'Production HR modules, AI-augmented workflows.',
      org: 'Omni HR',
      period: '2025 – now',
      role: 'Software Engineer',
      stack: ['React', 'TypeScript', 'Next.js', 'AI-assisted dev'],
      summary:
        'Contributing to the build-out of Omni HR\'s Attendance, Time Off, and Payroll modules in production. Cross-functional feature planning and end-to-end implementation alongside design, product, and backend.',
      highlights: [
        'Shipped feature work across three production HR modules used by customer businesses.',
        'Owned features from spec to ship — design review, implementation, QA, rollout.',
        'Experimented with AI-driven dev workflows to streamline review and reduce repetitive engineering tasks.',
      ],
      color: 'yellow',
    },
    {
      slug: '99co-platform-refresh',
      name: '99.co — Property Platform Refresh',
      short: 'Next.js App Router migration, legacy Redux removal.',
      org: '99 Group (99.co · Rumah123 · SRX)',
      period: '2024 – 2025',
      role: 'Staff Software Engineer',
      stack: ['Next.js', 'App Router', 'React', 'TypeScript', 'Tech leadership'],
      summary:
        'Led a frontend team building a stable platform for agents and consumers exploring properties in Singapore. The headline initiatives were a migration from the legacy Pages router to App Router, and a coordinated removal of legacy Redux usage across the codebase.',
      highlights: [
        'Planned and shepherded the App Router migration across multiple surfaces.',
        'Coordinated incremental removal of legacy Redux in favor of newer data patterns.',
        'Helped scope and review feature work for the team, keeping velocity steady through the refactor.',
      ],
      color: 'pink',
    },
    {
      slug: 'tokopedia-seller-dashboard',
      name: 'Tokopedia Seller Dashboard',
      short: '+25% Lighthouse on critical pages; observability standards.',
      org: 'Tokopedia',
      period: '2020 – 2024',
      role: 'Lead / Senior Software Engineer',
      stack: ['React', 'TypeScript', 'Observability', 'Web Performance'],
      summary:
        'Helped maintain and improve the overall architecture of the Tokopedia Seller Dashboard (seller.tokopedia.com). Led a team of 8 engineers and drove the front-end observability working group — standardizing how hundreds of alerts and dashboards were authored across squads.',
      highlights: [
        'Drove Lighthouse-score improvements on critical Seller Dashboard pages by ~25%.',
        'Standardized observability primitives — shared the developer experience for alerts/dashboards across teams.',
        'Shipped major new features including Seller Order Management, Rilisan Spesial, Seller Home, and Statistics.',
        'Mentored engineers and led the deprecation of several legacy modules to improve stability and security.',
      ],
      color: 'blue',
    },
    {
      slug: 'start-summit-app',
      name: 'START Summit App',
      short: "Tokopedia's first cross-platform Flutter app for live events.",
      org: 'Tokopedia',
      period: '2023',
      role: 'Cross-platform initiative lead',
      stack: ['Flutter', 'Cross-platform', 'iOS', 'Android'],
      summary:
        "Initiated and led the R&D effort to use Flutter as a shared codebase across Tokopedia's mobile and web orgs. The first production deliverable was the START Summit application — built by web and iOS engineers together — that improved the on-the-ground experience for event participants.",
      highlights: [
        'First production-ready Flutter application at Tokopedia.',
        'Bridged web and iOS teams into a single delivery team for the event app.',
        'Validated Flutter as a viable cross-platform option for follow-on internal apps.',
      ],
      color: 'green',
    },
    {
      slug: 'tokopedia-lite',
      name: 'Tokopedia Lite',
      short: 'Mobile web for Tokopedia (React) — lighter footprint.',
      org: 'Tokopedia',
      period: '2018 – 2019',
      role: 'UX Engineer / Frontend',
      stack: ['React', 'Mobile Web', 'Performance'],
      summary:
        'Built Tokopedia Lite — a stripped-down mobile-web version of Tokopedia aimed at lower-bandwidth devices and users who did not want to install the full app. Shipped pixel-accurate UI from the design team using React.',
      highlights: [
        'Customer-facing mobile-web surface used as a lighter alternative to the main Tokopedia app.',
        'Tight collaboration with UI/UX designers on the Product Design team.',
      ],
      color: 'orange',
    },
    {
      slug: 'seller-order-management',
      name: 'Seller Order Management Revamp',
      short: 'Owned design → engineering end-to-end.',
      org: 'Tokopedia',
      period: '2019',
      role: 'UX Engineer',
      stack: ['React', 'Design Systems', 'UX'],
      summary:
        "Owned the full revamp of Tokopedia's Seller Order Management page — from design exploration through to engineering delivery. The page is one of the highest-traffic seller-facing flows in the marketplace.",
      highlights: [
        'Single owner from design through to engineering ship.',
        'Modernized one of the busiest seller workflows on the platform.',
      ],
      color: 'yellow',
    },
    {
      slug: 'kata-ai-landing',
      name: 'Kata.ai Landing',
      short: 'Designed + shipped B2B + corporate landing pages.',
      org: 'Kata.ai',
      period: '2016',
      role: 'UI/UX & Frontend Intern',
      stack: ['SASS', 'JavaScript', 'jQuery', 'EJS', 'Express'],
      summary:
        'Designed and implemented the B2B landing page and the main Kata.ai corporate landing page. Worked in a SCRUM cadence with the wider product team.',
      highlights: [
        'Shipped both landing pages from design to production.',
        'Hand-built with SASS + vanilla JS + EJS templating on top of Express.',
      ],
      color: 'pink',
    },
  ] satisfies Project[],
} as const;
