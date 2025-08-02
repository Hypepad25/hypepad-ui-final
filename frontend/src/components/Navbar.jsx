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
      <div className="flex items-center gap-2">
        <img
          src="/rocket-logo.svg"
          alt="HYPEPAD"
          className="h-8 w-auto mr-2"
          onError={(e) => {
            e.currentTarget.src =
              'data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\"%3E%3Ccircle cx=\"16\" cy=\"16\" r=\"14\" fill=\"%23ff8c00\"/%3E%3C/svg%3E';
          }}
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
          <button
            onClick={() => setMoreOpen(o => !o)}
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
        <button className="px-4 py-2 bg-orange-500 rounded-full font-semibold shadow hover:brightness-105 transition fixed top-4 right-4 z-50">
          Connect Wallet
        </button>

        <div className="md:hidden relative">
          <button
            aria-label="Menu"
            onClick={() => setMobileOpen(o => !o)}
            className="flex flex-col gap-1"
          >
            <span className={f"block w-6 h-0.5 bg-white transition-transform {('rotate-45 translate-y-1.5' if mobileOpen else '')}"} />
            <span className={f"block w-6 h-0.5 bg-white transition-opacity {('opacity-0' if mobileOpen else 'opacity-100')}"} />
            <span className={f"block w-6 h-0.5 bg-white transition-transform {('-rotate-45 -translate-y-1.5' if mobileOpen else '')}"} />
          </button>

          {mobileOpen && (
            <div className="fixed inset-0 z-40 flex">
              <div className="flex-1 bg-black/60" onClick={() => setMobileOpen(false)} />
              <div className="w-72 bg-[#1f2937] p-6 flex flex-col gap-5 overflow-auto">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src="/rocket-logo.svg" alt="HYPEPAD" className="h-6 w-auto" />
                    <span className="font-bold text-lg">HYPEPAD</span>
                  </div>
                  <button onClick={() => setMobileOpen(false)} className="text-white text-2xl">×</button>
                </div>
                <nav className="flex flex-col gap-3 text-sm">
                  {[...PRIMARY_LINKS, ...EXTRA_LINKS].map(([label, href]) => (
                    <a key={href} href={href} className="hover:underline" onClick={() => setMobileOpen(false)}>
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
