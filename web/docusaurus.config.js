// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cluster Factory CE',
  tagline: 'A k8s-based infrastructure orchestration tool',
  url: 'https://docs.clusterfactory.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SquareFactory',
  projectName: 'cluster-factory-ce',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/SquareFactory/cluster-factory-ce/tree/main/web/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/SquareFactory/cluster-factory-ce/tree/feat/docs/web/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-ML4FLDLN4Z',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      navbar: {
        title: 'Cluster Factory CE Docs',
        logo: {
          alt: 'Cluster Factory CE Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/SquareFactory/cluster-factory-ce',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          href: 'https://deepsquare.io',
          alt: 'Empowers DeepSquare',
          src: 'img/deepsquare-logo-h.svg',
          srcDark: 'img/deepsquare-logo-h-neg.svg',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Cluster Factory CE Docs, <a href="https://squarefactory.io">SquareFactory</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['properties', 'docker'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
