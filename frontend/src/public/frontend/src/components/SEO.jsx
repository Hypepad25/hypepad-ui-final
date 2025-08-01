export default function SEO({
  title = 'HYPEPAD - Launch Securely. Dominate the Hype.',
  description = 'Next-gen multi-chain launchpad with meme coin tools, staking, graduated launches, and rug-proof launch intelligence. Built for creators and investors who demand security and speed.',
  image = '/hypepad-banner.png',
  url = typeof window !== 'undefined' ? window.location.href : 'https://yourdomain.com',
}) {
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'HYPEPAD',
            url: url,
            description: description,
          }),
        }}
      />
    </>
  );
}
