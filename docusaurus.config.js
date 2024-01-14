// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const { version } = require('./package.json');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cook with love',
  tagline: 'Cooking with love is the key to creating delicious meals',
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
      image: 'img/social-card.jpg',
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
            label: 'Menu',
          },
          {
            href: `https://github.com/fabasoad/cook-with-love/releases/tag/v${version}`,
            label: `v${version}`,
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Menu',
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
              {
                label: 'Tokyo, Japan',
                href: 'https://maps.app.goo.gl/G142uf1ZqbE3BtEz7',
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
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
