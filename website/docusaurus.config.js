module.exports = {
  title: 'Handbook',
  tagline: 'SUNY Geneseo Center for Digital Learning',
  url: 'https://cit-geneseo.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'cdl-geneseo', // Usually your GitHub org/user name.
  projectName: '/handbook/', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CDL Handbook',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/cdl-geneseo/handbook',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'CDL Website',
              href: 'https://www.geneseo.edu/cdl',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/WhatTheDickens',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cdl-geneseo/handbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Center for Digital Learning. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/cdl-geneseo/handbook/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/cdl-geneseo/handbook/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
