/**
 * Maps a skill name (as written in profile.ts `skills`) to an icon.
 * Brand icons come from the `simple-icons` package and are inlined at build time.
 * To add a skill: add it in profile.ts, then map it here (search names at https://simpleicons.org).
 * Anything not mapped here falls back to a text badge, so nothing breaks.
 */
import {
  siTypescript, siJavascript, siPython, siC,
  siReact, siNextdotjs, siThreedotjs, siTailwindcss, siMui, siSass,
  siNodedotjs, siExpress, siNestjs,
  siMongodb, siPostgresql, siMysql,
  siDocker, siGit, siWebpack,
  siClaude,
} from 'simple-icons';

export type SkillIcon = { label: string; path: string; hex: string };

const si = (label: string, icon: { path: string; hex: string }): SkillIcon => ({ label, path: icon.path, hex: icon.hex });

// simple-icons no longer ships AWS or SendGrid (the brands asked for removal), so these are generic stand-ins.
const cloudPath = 'M6.5 19a4.5 4.5 0 0 1-.6-8.96A6.5 6.5 0 0 1 18.4 8.6 5.2 5.2 0 0 1 17.7 19H6.5Z';
// OpenAI's logo isn't in simple-icons either, so Codex gets a terminal ">_" icon.
const terminalPath = 'M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 2v14h16V5H4Zm2.3 3.7 1.4-1.4L12.4 12l-4.7 4.7-1.4-1.4L9.6 12 6.3 8.7ZM12 15h6v2h-6v-2Z';
const mailPath = 'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2L12 12.2 19.6 7H4.4ZM20 8.8l-7.43 5.07a1 1 0 0 1-1.14 0L4 8.8V17h16V8.8Z';

export const skillIcons: Record<string, SkillIcon> = {
  typescript: si('TypeScript', siTypescript),
  javascript: si('JavaScript', siJavascript),
  python: si('Python', siPython),
  c: si('C', siC),
  react: si('React', siReact),
  'next.js': si('Next.js', siNextdotjs),
  'three.js': si('Three.js', siThreedotjs),
  tailwind: si('Tailwind CSS', siTailwindcss),
  'material-ui': si('Material UI', siMui),
  sass: si('Sass', siSass),
  node: si('Node.js', siNodedotjs),
  express: si('Express', siExpress),
  'nest.js': si('NestJS', siNestjs),
  mongodb: si('MongoDB', siMongodb),
  postgresql: si('PostgreSQL', siPostgresql),
  mysql: si('MySQL', siMysql),
  aws: { label: 'AWS', path: cloudPath, hex: 'FF9900' },
  docker: si('Docker', siDocker),
  git: si('Git', siGit),
  webpack: si('webpack', siWebpack),
  sendgrid: { label: 'SendGrid', path: mailPath, hex: '1A82E2' },
  'claude-code': si('Claude Code', siClaude),
  codex: { label: 'Codex', path: terminalPath, hex: '000000' }, // black → uses text color on hover
};
