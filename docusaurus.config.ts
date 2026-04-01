import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DocJacket Help Center',
  tagline: 'Find answers, guides, and tips for DocJacket',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://help.docjacket.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'DocJacket',
        src: 'img/logo-full.svg',
        srcDark: 'img/logo-full-white.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'helpSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://app.docjacket.com',
          label: 'Go to App',
          position: 'right',
        },
        {
          href: 'https://docjacket.com',
          label: 'Website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Transactions',
              to: '/docs/transactions',
            },
            {
              label: 'AI Features',
              to: '/docs/ai-features',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Go to App',
              href: 'https://app.docjacket.com',
            },
            {
              label: 'Website',
              href: 'https://docjacket.com',
            },
            {
              label: 'Pricing',
              href: 'https://docjacket.com/pricing',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Contact Us',
              href: 'mailto:hello@docjacket.com',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/docjacket',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/DocJacket',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DocJacket LLC. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
