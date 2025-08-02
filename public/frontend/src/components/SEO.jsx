export default function SEO({title = 'HYPEPAD – Launch securely, dominate the hype', description = 'Next-gen multi-chain launchpad with meme coin tools, staking, graduated launches, and paid trending. Built for creators and investors who demand security and speed.', url = typeof window !== 'undefined' ? window.location.href : '', image = '/hypepad-banner.png'}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'HYPEPAD',
          url: 'https://yourdomain.com',
          description
        })
      }} />
    </>
  );
}
