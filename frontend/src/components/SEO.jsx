import React from 'react';

const DEFAULT_TITLE = 'HYPEPAD – Launch securely. Dominate the hype.';
const DEFAULT_DESCRIPTION = 'HYPEPAD is a next-gen multi-chain launchpad offering meme coin tools, staking, graduated launches, and rug-proof launch intelligence for creators and investors who demand speed and security.';
const SITE_URL = 'https://www.hypepad.app';
const DEFAULT_IMAGE = '/hypepad-banner.jpg';

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url = typeof window !== 'undefined' ? window.location.href : SITE_URL,
  noIndex = false,
  additionalStructuredData = null,
}) {
  const fullTitle = title.includes('HYPEPAD') ? title : `${title} | HYPEPAD`;
  const safeUrl = url.split('?')[0].split('#')[0];
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'HYPEPAD',
        description: DEFAULT_DESCRIPTION,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'HYPEPAD',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/rocket-logo.svg`,
        },
        sameAs: ['https://t.me/hypepad25'],
      },
      {
        '@type': 'WebPage',
        '@id': safeUrl + '#webpage',
        url: safeUrl,
        name: fullTitle,
        description: description,
        inLanguage: 'en-US',
        isPartOf: { '@id': SITE_URL + '/#website' },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: image,
        },
      },
    ],
  };
  if (additionalStructuredData) {
    if (Array.isArray(additionalStructuredData)) {
      schemaOrg['@graph'].push(...additionalStructuredData);
    } else {
      schemaOrg['@graph'].push(additionalStructuredData);
    }
  }

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? 'noindex,follow' : 'index,follow'} />
      <link rel="canonical" href={safeUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="HYPEPAD" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={safeUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="HYPEPAD Launchpad" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@HYPEPAD" />
      <meta name="twitter:site" content="@HYPEPAD" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <link rel="preload" href="/hypepad-banner.jpg" as="image" />
    </>
  );
}
