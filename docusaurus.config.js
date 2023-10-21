// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cook with love',
  tagline: 'The best cakes are here',
  favicon: 'img/cook-with-love-logo.png',

  // Set the production url of your site here
  url: 'https://fabasoad.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cook-with-love/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fabasoad', // Usually your GitHub org/user name.
  projectName: 'cook-with-love', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Cook with love',
        logo: {
          alt: 'Cook with love logo',
          src: 'img/cook-with-love-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Line up',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/fabasoad/cook-with-love/issues/new/choose',
            label: 'Report a bug',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Line up',
            items: [
              {
                label: 'Cakes',
                to: '/docs/cakes',
              },
              {
                label: 'Macarons',
                to: '/docs/macarons',
              },
              {
                label: 'Marshmallow',
                to: '/docs/marshmallow',
              },
            ],
          },
          {
            title: 'Contacts',
            items: [
              {
                label: 'Email',
                href: 'mailto:vanillacaramel88@gmail.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Report a bug',
                href: 'https://github.com/fabasoad/cook-with-love/issues/new/choose',
              },
            ],
          },
        ],
        copyright: `Copyright © 2020-${new Date().getFullYear()} Natalia Fabizhevska. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
