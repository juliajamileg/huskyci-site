// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Husky CI',
  tagline: 'Husky CI makes it easy to find vulnerabilities inside your CI',
  baseUrl: '/',
  favicon: 'img/favicon2.ico',
  organizationName: 'globo',
  projectName: 'Husky CI',
  url: 'https://your-docusaurus-test-site.com',
  

  onBrokenLinks: 'warn', 
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'HuskyCI',
        logo: {
          alt: 'huskyCI Logo',
          src: 'img/logo.png',
        },
        hideOnScroll: false,
        items: [
          {
            to: 'docs/overview/',
            label: 'Docs',
            position: 'right',
          },
          {
            href: 'https://github.com/globocom/huskyCI',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        logo: {
          alt: 'Globo.com Logo',
          src: 'img/showcases/globoLogo.svg',
          href: 'https://opensource.globo.com/',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Open Source Globo.com`,
      },
    }),
};

module.exports = config;
