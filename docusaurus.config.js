/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'huskyCI',
  tagline: 'huskyCI makes it easy to find vulnerabilities inside your CI',
  url: 'https://github.com/globocom/huskyCI',
  baseUrl: '/',
  favicon: 'img/favicon2.ico',
  organizationName: 'globocom',
  projectName: 'huskyCI',
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'huskyCI',
      logo: {
        alt: 'huskyCI Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/quickstart/overview', 
          label: 'Docs', 
          position: 'right'
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
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Docs',
        //       to: 'docs/getting-started',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'Social',
        //   items: [
        //     {
        //       label: 'Github',
        //       to: 'blog',
        //     },
        //   ],
        // },
      ],
      logo: {
        alt: 'Globo.com Logo',
        src: 'img/showcases/opensource-globocom.svg',
        href: 'https://opensource.globo.com/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Open Source Globo.com`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
