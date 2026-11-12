/**
 * ─────────────────────────────────────────────────────────────
 *  THEME / COLOR PALETTES: edit colors here, and only here.
 * ─────────────────────────────────────────────────────────────
 *
 *  The site has a dark mode and a light mode.
 *  • `modes` below picks which palette is used for each mode.
 *  • Visitors get their system setting by default and can flip it
 *    with the toggle in the top bar (their choice is remembered).
 *  • To tweak a color: edit the hex value inside a palette.
 *  • To try another palette: add a block to `palettes` and point
 *    `modes.dark` or `modes.light` at it.
 *
 *  Every component reads these as CSS variables (var(--bg), var(--accent), …),
 *  so nothing else in the codebase needs to change.
 */

export type Palette = {
  bg: string;        // page background
  surface: string;   // cards, terminal windows, top bar
  line: string;      // borders and dividers
  text: string;      // main text
  muted: string;     // secondary text, labels
  accent: string;    // prompt "$", buttons, highlights (the main brand color)
  onAccent: string;  // text drawn on top of the accent color
  link: string;      // links, folder names, project titles
  highlight: string; // git hashes, tab numbers, small details
  // optional extras (sensible defaults are used when a palette leaves them out)
  accentFill?: string; // dots, cursor, live indicator (can be brighter than `accent`)
  panel?: string;      // the see-through sheets every section sits on
  grid?: string;       // fine graph-paper lines
  gridMajor?: string;  // every 6th, stronger line
};

export const palettes = {
  // Colors from the Localhost Framer template: warm charcoal / warm paper + one emerald.
  charcoal: {
    bg: '#23252A',
    surface: '#2B2E33',
    line: '#3A3D43',
    text: '#E9E9E6',
    muted: '#959891',
    accent: '#1FCB8C',
    onAccent: '#0E0F11',
    link: '#E9E9E6',
    highlight: '#1FCB8C',
    accentFill: '#12B981',
    panel: 'rgba(30, 32, 36, 0.76)',
    grid: 'rgba(255, 255, 255, 0.055)',
    gridMajor: 'rgba(255, 255, 255, 0.11)',
  },
  warmpaper: {
    bg: '#F7F6F2',
    surface: '#FFFEF9',
    line: '#DEDCD5',
    text: '#16171A',
    muted: '#6E706A',
    accent: '#0A8A5F', // the template's emerald, darkened so text on paper stays readable
    onAccent: '#FFFFFF',
    link: '#16171A',
    highlight: '#0A8A5F',
    accentFill: '#12B981',
    panel: 'rgba(251, 250, 246, 0.8)',
    grid: 'rgba(22, 23, 26, 0.05)',
    gridMajor: 'rgba(22, 23, 26, 0.10)',
  },
  graphite: {
    bg: '#0E0F11',
    surface: '#17181B',
    line: '#2A2C31',
    text: '#EDEEF0',
    muted: '#8E9199',
    accent: '#6E9BFF',
    onAccent: '#0E0F11',
    link: '#A9C1FF',
    highlight: '#F0B35A',
  },
  glacier: {
    bg: '#F4F7FB',
    surface: '#FFFFFF',
    line: '#D5DDE8',
    text: '#152030',
    muted: '#56677D',
    accent: '#3B6FE0', // same blue as graphite's accent, darkened so white button text stays readable
    onAccent: '#FFFFFF',
    link: '#2A57C9',
    highlight: '#A8520C',
  },
  paper: {
    bg: '#F6F8FA',
    surface: '#FFFFFF',
    line: '#D0D7DE',
    text: '#1F2328',
    muted: '#59636E',
    accent: '#1A7F37',
    onAccent: '#FFFFFF',
    link: '#0969DA',
    highlight: '#9A6700',
  },
  midnight: {
    bg: '#0B0F14',
    surface: '#141A22',
    line: '#232B36',
    text: '#E6EDF3',
    muted: '#8B949E',
    accent: '#3FB950',
    onAccent: '#0B0F14',
    link: '#58A6FF',
    highlight: '#D29922',
  },
  amber: {
    bg: '#0F0B05',
    surface: '#1A140A',
    line: '#2E2414',
    text: '#FFE4BA',
    muted: '#A88A5E',
    accent: '#FFB000',
    onAccent: '#0F0B05',
    link: '#FFCC66',
    highlight: '#FF8A50',
  },
  ocean: {
    bg: '#0A1220',
    surface: '#111C2E',
    line: '#1F2D44',
    text: '#E2E8F0',
    muted: '#8896AB',
    accent: '#2DD4BF',
    onAccent: '#0A1220',
    link: '#7AA2F7',
    highlight: '#F7768E',
  },
} satisfies Record<string, Palette>;

export type PaletteName = keyof typeof palettes;

/** 👉 Which palette each mode uses. */
export const modes: { dark: PaletteName; light: PaletteName } = {
  dark: 'charcoal',
  light: 'warmpaper',
};

/** Builds the CSS variables for both modes. Used by the Base layout. */
export function themeCss(): string {
  const all = palettes as Record<string, Palette>;
  const vars = (p: Palette, dark: boolean) =>
    `--bg:${p.bg};--surface:${p.surface};--line:${p.line};--text:${p.text};--muted:${p.muted};--accent:${p.accent};--on-accent:${p.onAccent};--link:${p.link};--highlight:${p.highlight};` +
    `--accent-fill:${p.accentFill ?? p.accent};--panel:${p.panel ?? p.surface};` +
    `--grid:${p.grid ?? (dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)')};--grid-major:${p.gridMajor ?? (dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)')};`;
  const light = `color-scheme:light;${vars(all[modes.light], false)}`;
  const dark = `color-scheme:dark;${vars(all[modes.dark], true)}`;
  return [
    // Default: light, unless the visitor's system prefers dark…
    `:root{${light}}`,
    `@media (prefers-color-scheme: dark){:root:not([data-mode="light"]){${dark}}}`,
    // …and an explicit choice from the toggle always wins.
    `:root[data-mode="dark"]{${dark}}`,
    `:root[data-mode="light"]{${light}}`,
  ].join('\n');
}
