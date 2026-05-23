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
} as const;
