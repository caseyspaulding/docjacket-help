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

  // No trailing slash: makes URLs and <link rel="canonical"> match. Without
  // this, Docusaurus serves /docs/X/ while emitting canonical=/docs/X, and
  // the non-slash URL 307-redirects back — Ahrefs flags this as
  // "Canonical points to redirect" across the whole /docs tree.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // The REST API + webhook docs moved out of Integrations into their own
        // "Developer API" section. The app and the live API reference deep-link
        // to the old paths, so 301 them to the new homes.
        redirects: [
          { from: '/docs/integrations/rest-api', to: '/docs/api' },
          { from: '/docs/integrations/webhooks', to: '/docs/api/webhooks' },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Populates metadata.lastUpdatedAt (used for dateModified in the
          // per-doc TechArticle JSON-LD emitted by src/theme/DocItem/Layout).
          showLastUpdateTime: true,
          // "Edit this page" link target. Also signals to LLMs/crawlers
          // that the docs are open-source and quoteable — every page links
          // back to canonical markdown on GitHub.
          editUrl:
            'https://github.com/docjacket-inc/help/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Site-wide head tags for SEO + analytics + verification.
  // Each entry is appended to <head> on every page.
  headTags: [
    // og:type — Docusaurus's default theme emits og:title/description/url/image/
    // locale/site_name but NOT og:type, which Ahrefs flags on every page.
    // "website" is the right default for a help/docs site (per Open Graph spec).
    {tagName: 'meta', attributes: {property: 'og:type', content: 'website'}},

    // Organization schema — populates Google's brand panel.
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'DocJacket',
        legalName: 'DocJacket Inc.',
        url: 'https://www.docjacket.com',
        logo: 'https://help.docjacket.com/img/logo-full.svg',
        sameAs: [
          'https://app.docjacket.com',
          'https://www.facebook.com/docjacket',
          'https://www.linkedin.com/company/DocJacket',
          'https://github.com/docjacket-inc',
        ],
      }),
    },
    // WebSite schema — enables sitelinks search box in Google.
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'DocJacket Help Center',
        url: 'https://help.docjacket.com',
        publisher: {'@type': 'Organization', name: 'DocJacket'},
      }),
    },
    // SoftwareApplication schema — describes the DocJacket product itself so
    // search engines and LLMs can ground answers in what the platform actually
    // is (category, audience, pricing model, supporting docs).
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'DocJacket',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Real Estate Transaction Coordination',
        operatingSystem: 'Web',
        url: 'https://www.docjacket.com',
        description:
          'AI-powered transaction coordination platform for real estate professionals. DocJacket helps independent transaction coordinators, agents, and brokers manage deals from contract to closing with AI contract extraction, smart timelines, task management, client portals, and document management.',
        audience: {
          '@type': 'Audience',
          audienceType:
            'Real estate transaction coordinators, agents, and brokers',
        },
        offers: {
          '@type': 'Offer',
          url: 'https://www.docjacket.com/pricing',
          priceCurrency: 'USD',
          category: 'subscription',
        },
        publisher: {
          '@type': 'Organization',
          name: 'DocJacket',
          url: 'https://www.docjacket.com',
        },
      }),
    },
  ],

  themeConfig: {
    // Default social card image used by Open Graph + Twitter Card meta tags.
    // Override per-page by setting `image:` in the page's frontmatter.
    image: 'img/og-default.png',
    metadata: [
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@docjacket'},
    ],
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
          href: 'https://www.docjacket.com',
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
              href: 'https://www.docjacket.com',
            },
            {
              label: 'Pricing',
              href: 'https://www.docjacket.com/pricing',
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
      copyright: `Copyright © ${new Date().getFullYear()} DocJacket Inc. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
