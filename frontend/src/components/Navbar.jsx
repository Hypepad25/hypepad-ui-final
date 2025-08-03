import { useState, useEffect, useRef } from 'react';

const PRIMARY_LINKS = [
  ['Home', '/'],
  ['Launchpad', '/launchpad'],
  ['Token Creator', '/launchpad/token-creator'],
  ['Meme Coin Launcher', '/launchpad/meme-coin'],
  ['Staking', '/staking'],
];

const EXTRA_LINKS = [
  ['Trending', '/trending'],
  ['Docs', '/docs'],
  ['Support', '/support'],
  ['FAQ', '/faq'],
  ['Legal', '/legal'],
  ['Terms', '/terms'],
  ['Privacy', '/privacy'],
  ['Disclaimers', '/disclaimers'],
  ['Partners', '/partners'],
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    function handle(e) {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  return (
    <header className="w-full bg-[#0f172a] text-white flex items-center justify-between px-4 md:px-8 py-3 relative z-30">
      <div className="flex items-center gap-4">
        <img
          src="/rocket-logo.svg"
          alt="HYPEPAD"
          className="h-16 w-auto"
          style={{ display: 'block' }}
          onError={(e) => {
            e.currentTarget.src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48"%3E%3Ccircle cx="24" cy="24" r="20" fill="%23ff8c00"/%3E%3C/svg%3E';
          }}
        />
        <span className="font-bold text-xl tracking-wider">HYPEPAD</span>
      </div>

      <div className="hidden md:flex items-center gap-4 flex-1 overflow-visible">
        {PRIMARY_LINKS.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="hover:underline text-sm font-medium whitespace-nowrap"
          >
            {label}
          </a>
        ))}

        <div className="relative" ref={moreRef}>
          <button
            onClick={() => setMoreOpen((o) => !o)}
            className="hover:underline text-sm font-medium flex items-center gap-1"
          >
            More ▾
          </button>
          {moreOpen && (
            <div className="absolute top-full mt-2 bg-[#1f2937] rounded-md shadow-lg min-w-[180px] py-2 z-50">
              {EXTRA_LINKS.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="block px-4 py-2 text-sm hover:bg-[#272f4a] whitespace-nowrap"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-orange-500 rounded-full font-semibold shadow hover:brightness-105 transition">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
