import React, {type ReactNode} from 'react';
import Layout from '@theme-original/DocItem/Layout';
import type LayoutType from '@theme/DocItem/Layout';
import type {WrapperProps} from '@docusaurus/types';
import Head from '@docusaurus/Head';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = WrapperProps<typeof LayoutType>;

// Wraps the default DocItem/Layout to emit a per-page TechArticle JSON-LD
// block. Docusaurus 3.8 already emits BreadcrumbList structured data via
// DocBreadcrumbs/StructuredData, so we only add the article-level schema here.
// Multiple JSON-LD blocks per page are allowed; existing inline FAQPage blocks
// on landing pages co-exist with this one.
export default function DocItemLayoutWrapper(props: Props): ReactNode {
  const {metadata, frontMatter} = useDoc();
  const {siteConfig} = useDocusaurusContext();

  // metadata.permalink keeps the trailing slash for index docs even when
  // trailingSlash:false is set, so strip it to match the canonical link.
  const permalink = metadata.permalink.replace(/\/$/, '') || '/';
  const url = `${siteConfig.url}${permalink}`;
  const imagePath =
    (frontMatter.image as string | undefined) ?? 'img/og-default.png';
  const image = imagePath.startsWith('http')
    ? imagePath
    : `${siteConfig.url}/${imagePath.replace(/^\//, '')}`;

  // metadata.lastUpdatedAt is a Unix timestamp in milliseconds in 3.8+.
  const dateModified =
    typeof metadata.lastUpdatedAt === 'number'
      ? new Date(metadata.lastUpdatedAt).toISOString()
      : undefined;

  // Raw markdown mirror of this page lives at /docs/<slug>.md
  // (emitted by scripts/mirror-docs-md.mjs). Surface it via rel=alternate
  // so LLMs/crawlers that prefer plain markdown can fetch it directly.
  const markdownUrl = `${url}.md`;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: metadata.title,
    description: metadata.description,
    inLanguage: 'en',
    url,
    mainEntityOfPage: {'@type': 'WebPage', '@id': url},
    image,
    author: {
      '@type': 'Organization',
      name: 'DocJacket',
      url: 'https://docjacket.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DocJacket',
      url: 'https://docjacket.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://help.docjacket.com/img/logo-full.svg',
      },
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'DocJacket Help Center',
      url: siteConfig.url,
    },
  };

  if (dateModified) {
    schema.dateModified = dateModified;
  }
  if (Array.isArray(frontMatter.keywords) && frontMatter.keywords.length > 0) {
    schema.keywords = (frontMatter.keywords as string[]).join(', ');
  }

  return (
    <>
      <Head>
        {dateModified && <meta name="last-modified" content={dateModified} />}
        {dateModified && <meta httpEquiv="last-modified" content={dateModified} />}
        <link rel="alternate" type="text/markdown" href={markdownUrl} title="Plain-markdown version" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
      <Layout {...props} />
    </>
  );
}
