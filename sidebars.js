/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  docs: [
    'overview/overview',
    // {
    //   type: 'category',
    //   label: 'Requirements',
    //   collapsed: true,
    //   items: [
    //     'requirements/requirements',
    //   ],
    // },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'HuskyCI Getting Started',
        description:
          "In this section, you will find guidelines to install HuskyCI.",
        keywords: ['Getting Started'],
        image: '/img/docusaurus.png',
      },
      items: [
        'requirements/requirements',
        'quickstart/local-installation',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'HuskyCI Guides',
        description:
          "Let's learn about the most important HuskyCI concepts!",
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: [
        'guides/setup-my-ci',
        'guides/install-in-my-org',
        'guides/integrating-with-sonar',
        'guides/handling-false-positives',
        'guides/accessing-internal-repositories',
      ],
    },
    {
      type: 'category',
      label: 'API',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'HuskyCI API',
        keywords: ['api'],
        image: '/img/docusaurus.png',
      },
      items: [
        'api/routes',
        'api/env-vars',
      ],
    },
    'feedback/about', 

  ],
};
module.exports = sidebars;