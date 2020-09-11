module.exports = {
  siteTitle: 'Judy Zhang | Software Engineer',
  siteDescription:
    'Judy Zhang is a software engineer based in San Jose, CA, who is passionate about developing and building websites, applications, etc.',
  siteKeywords:
    'Judy Zhang, Judy, Zhang, judyz01, software engineer, front-end engineer, web developer, developer portfolio',
  siteUrl: 'https://nostalgic-borg-51d306.netlify.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-156497773-1',
  googleVerification: 'MgJueIQMAw5SNqtVjLv_F3BWYEgEzfMhcux_dLHlZ_U',
  name: 'Judy Zhang',
  location: 'San Jose, CA',
  email: 'judy.j.zhang@gmail.com',
  github: 'https://github.com/judyz01',
  socialMedia: [
    {
      name: 'Email',
      url: `mailto:judy.j.zhang@gmail.com`,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/judyz01',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/judyjzhang/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/judyz01',
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    lavender: '#b27af5',
    darkGray: '#030202',
    pureBlack: '#000000',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
