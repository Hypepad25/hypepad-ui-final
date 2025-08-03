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
      <div className="flex items-center gap-3">
        <img
          src="/rocket-logo.svg"
          alt="HYPEPAD"
          className="h-14 w-auto mr-2"
          style={{ display: 'block' }}
        />
        <span className="font-bold text-xl tracking-wider">HYPEPAD</span>
      </div>

      <div className="hidden md:flex items-center gap-4 flex-1 overflow-visible">
        {PRIMARY_LINKS.map(([label, href]) => (
          <a key={href} href={href} className="hover:underline text-sm font-medium whitespace-nowrap">
            {label}
          </a>
        ))}
        <div className="relative" ref={moreRef}>
          <button onClick={() => setMoreOpen(o => !o)} className="hover:underline text-sm font-medium flex items-center gap-1">
            More ▾
          </button>
          {moreOpen && (
            <div className="absolute top-full mt-2 bg-[#1f2937] rounded-md shadow-lg min-w-[180px] py-2 z-50">
              {EXTRA_LINKS.map(([label, href]) => (
                <a key={href} href={href} className="block px-4 py-2 text-sm hover:bg-[#272f4a] whitespace-nowrap">
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a href="/presale" className="px-4 py-2 bg-accent text-black rounded-full font-semibold">Presale</a>
        <div className="md:hidden relative">
          <button aria-label="Menu" onClick={() => setMobileOpen(o => !o)} className="flex flex-col gap-1">
            <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
