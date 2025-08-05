import React from 'react';

export default function SEO({ title = 'HYPEPAD', description = 'Next-gen multi-chain launchpad with meme coin tools, staking, graduated launches, and rug-proof launch intelligence. Built for creators and investors who demand speed and security.' }) {
  React.useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name=description]');
    if (meta) meta.setAttribute('content', description);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = description;
      document.head.appendChild(m);
    }
  }, [title, description]);
  return null;
}
