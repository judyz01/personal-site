import { hex2rgba } from '@utils';

const ACCENT = '#BB86fc'; //buttons and fonts
const DARK_BG = '#121212'; //highlights featured projects
const BG = '#111111'; //tool bar

const theme = {
  colors: {
    pureBlack: DARK_BG,
    darkGray: BG,
    lightGray:'#1c1c1c', //project descriptions boxes and github stuff
    lightestPurple: '#ca9ef0', // lines
    slate: hex2rgba("#ffffff", 0.85), // project languages color, subtitle on first page, skills list
    lightSlate: hex2rgba("#ffffff", 0.70), // project descriptions and social icons
    lightestSlate: hex2rgba("#ffffff", 0.90), // name on hero, project and github titles, nav tool font color
    white: '#eeebf5', //paragraphs and words not in featured or projects
    lavender: ACCENT,
    transLav: hex2rgba(ACCENT, 0.07),
    shadowBlack: hex2rgba(DARK_BG, 0.7),
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  navDelay: 1000,
  loaderDelay: 1000,
};

export default theme;
