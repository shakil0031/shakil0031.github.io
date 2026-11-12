/**
 * All site content lives here (taken from the CV). Edit text here, not in components.
 */

export const profile = {
  name: 'Shakil Ahmed',
  handle: 'shakil',
  role: 'Senior Software Engineer',
  // Lines that type out one after another after the ">" in the hero. The first one is what
  // search engines, link previews and screen readers see, so keep your title first.
  roles: [
    'full-stack developer',
    'competitive programmer',
    'problem solver',
    'turning requirements into releases',
    'automating manual workflows',
  ],
  tagline: 'building SaaS products & 3D web apps', // used in the page description for search and link previews
  careerStart: 2018, // first year in the industry (not shown on the page right now)
  location: 'Dhaka, BD · working remote',
  // One short sentence shown under the rotating role in the hero.
  lead: 'Full-stack developer from Bangladesh with 8+ years of building scalable web apps. Fueled by new tech and good coffee. ☕',
  status: 'open to new opportunities',

  email: 'shakilme0031@gmail.com',
  github: 'https://github.com/shakil0031',
  linkedin: 'https://www.linkedin.com/in/shakil0031',
  // Drop your CV into /public as resume.pdf and this link will work.
  resume: '/resume.pdf',

  about: [
    'I’m a senior software engineer at <strong>InsideMaps Inc.</strong>, working remotely with a US team. I build the tools clients and operators use every day: 3D tour and interior configurators, asset libraries, and dashboards with automated workflows.',
    'Before that I redesigned an e-commerce platform at <a href="https://www.unishopr.com/" target="_blank" rel="noopener">Unishopr</a>. I studied Computer Science at MIST, where I competed in two international robotics competitions: <strong>URC in the USA</strong> and <strong>ERC in Poland</strong>.',
  ],
};

export const skills: { group: string; items: string[] }[] = [
  { group: 'languages', items: ['javascript', 'typescript', 'python', 'c'] },
  { group: 'frontend', items: ['react', 'next.js', 'three.js', 'tailwind'] },
  { group: 'backend', items: ['node', 'express', 'nest.js'] },
  { group: 'database', items: ['mongodb', 'postgresql', 'mysql'] },
  { group: 'cloud-devops', items: ['aws', 'docker', 'git', 'webpack'] },
  { group: 'ai', items: ['claude-code', 'codex'] },
];

export type Project = {
  slug: string;
  where: string;
  summary: string;
  impact: string; // the headline result
  tags: string[];
  link?: string;  // optional live/demo link
};

// Tags are best guesses from the CV. Adjust them to the real stack of each project.
export const projects: Project[] = [
  {
    slug: 'blue-dot-photos',
    where: 'Blue Dot Photos',
    summary: 'Real-estate marketing platform for HDR photos, 3D virtual tours and floor plans. I build features and lead sprints and releases across dev, QA and UI/UX.',
    impact: 'faster, more reliable release cycles',
    tags: [], // add the stack here, e.g. ['react', 'node']
    link: 'https://bluedotphotos.com/',
  },
  {
    slug: '3d-tour-configurator',
    where: 'InsideMaps',
    summary: 'Lets clients customize home interiors inside a 3D tour in real time, with personalized visualization and interactive exploration.',
    impact: 'real-time 3D customization',
    tags: ['three.js', 'react', 'typescript'],
  },
  {
    slug: 'hoa-dashboard',
    where: 'InsideMaps',
    summary: 'HOA dashboard with full CRUD, analytics, task assignment for operators, and AI-powered PDF data extraction.',
    impact: '−50% manual work · clients 1 → 3',
    tags: ['react', 'tailwind', 'shadcn', 'nestjs'],
  },
  {
    slug: 'asset-material-library',
    where: 'InsideMaps',
    summary: 'Rebuilt the 3D asset and material library as one platform with advanced filtering and usage analytics.',
    impact: 'unified library + usage tracking',
    tags: ['react', 'three.js', 'analytics'],
  },
  {
    slug: 'ftp-automation',
    where: 'InsideMaps',
    summary: 'Script that automates FTP data workflows so clients get updated data on time without anyone doing it by hand.',
    impact: '0% manual effort · 100% on time',
    tags: ['node', 'automation', 'aws'],
  },
  {
    slug: 'todays-deal-scraper',
    where: 'Unishopr',
    summary: 'Real-time scraper that keeps the “Today’s Deal” section of the store up to date.',
    impact: '+70% deal freshness',
    tags: ['node', 'scraping'],
  },
];

export type Job = {
  hash: string;
  period: string;
  title: string;
  org: string;
  orgUrl?: string; // makes the company name a link
  place: string;
  current?: boolean;
  points: string[];
};

export const experience: Job[] = [
  {
    hash: 'a3f9c21',
    period: 'Apr 2020 – now',
    title: 'Senior Software Engineer',
    org: 'InsideMaps Inc.',
    place: 'California, US · remote',
    current: true,
    points: [
      'Built a dynamic HOA dashboard with automated webhook notifications, cutting manual workload by 50%, improving workflows by 55% and growing clients from 1 to 3.',
      'Built a questionnaire configurator with version control and logs, improving operational efficiency by 30%.',
      'Automated FTP workflows, taking manual effort to 0% with 100% on-time, error-free data updates.',
      'Revamped the 3D asset and material library and built a real-time 3D tour configurator for interiors.',
    ],
  },
  {
    hash: '7be04d8',
    period: 'Apr 2019 – Apr 2020',
    title: 'Software Engineer',
    org: 'Unishopr.com',
    orgUrl: 'https://www.unishopr.com/',
    place: 'Dhaka, BD',
    points: [
      'Led the redesign of Unishopr, improving the user experience and interface.',
      'Built and integrated new admin panels for marketing and operations.',
      'Built a real-time scraper for “Today’s Deal”, increasing deal freshness by 70%.',
    ],
  },
  {
    hash: '4d1e9b0',
    period: 'Feb 2018 – Jan 2019',
    title: 'Android Developer',
    org: 'Business Accelerate BD Ltd.',
    place: 'Dhaka, BD',
    points: [
      'Delivered Android apps for clients like Coke and Pepsi.',
      'Built an offline sync module that brought order data loss to 0%.',
      'Built an auto APK update module and redesigned an app, improving operational efficiency by 45%.',
    ],
  },
  {
    hash: '1c02e5a',
    period: '2013 – 2016',
    title: 'B.Sc. in Computer Science & Engineering',
    org: 'Military Institute of Science and Technology',
    place: 'Dhaka, BD',
    points: ['Competed in 2 international robotics competitions: URC (USA) and ERC (Poland).'],
  },
];
