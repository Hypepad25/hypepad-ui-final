import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-sm text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <div className="flex items-center mb-4">
            <img src="/rocket-logo.svg" alt="HYPEPAD" className="h-8 w-auto mr-2" />
            <span className="font-bold text-lg text-white">HYPEPAD</span>
          </div>
          <p className="text-xs">
            Next-gen multi-chain launchpad with meme coin tools, staking, graduated launches, and rug-proof launch intelligence.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Pages</h3>
          <ul className="space-y-1">
            {[
              ['Home', '/'],
              ['Launchpad', '/launchpad'],
              ['Token Creator', '/launchpad/token-creator'],
              ['Meme Coin Launcher', '/launchpad/meme-coin'],
              ['Staking', '/staking'],
              ['Trending', '/trending'],
              ['Docs', '/docs'],
              ['Support', '/support'],
              ['FAQ', '/faq'],
              ['Legal', '/legal'],
              ['Terms', '/terms'],
              ['Privacy', '/privacy'],
              ['Disclaimers', '/disclaimers'],
              ['Partners', '/partners'],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Resources</h3>
          <ul className="space-y-1">
            <li><a href="/docs" className="hover:underline">Docs</a></li>
            <li><a href="/support" className="hover:underline">Support</a></li>
            <li><a href="/trending" className="hover:underline">Trending</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Contact</h3>
          <p>Email: <a href="mailto:contact@hypepad.app" className="hover:underline">contact@hypepad.app</a></p>
          <p>Telegram: <a href="https://t.me/hypepad25" className="hover:underline">@hypepad25</a></p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs">
        <p>© {new Date().getFullYear()} HYPEPAD. All rights reserved.</p>
        <p className="mt-1">Built for creators and investors who demand security and speed.</p>
      </div>
    </footer>
}
