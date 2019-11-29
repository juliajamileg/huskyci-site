/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'huskyCI',
  tagline: 'Orchestrating security tests inside your CI',
  url: 'https://github.com/globocom/huskyCI',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'globocom',
  projectName: 'huskyCI',
  themeConfig: {
    navbar: {
      title: 'huskyCI',
      logo: {
        alt: 'huskyCI Logo',
        src: 'img/logo.png',
      },
      links: [
        {to: 'docs/overview', label: 'Docs', position: 'right'},
        {to: 'blog', label: 'Blog', position: 'right'},
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
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'Globo.com Logo',
        src: 'img/showcases/opensource-globocom.svg',
        href: 'http://globo.com/',
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
