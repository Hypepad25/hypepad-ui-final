import { useState, useEffect, useRef } from 'react';

const LINKS = [
  ['Home', '/'],
  ['Launchpad', '/launchpad'],
  ['Token Creator', '/launchpad/token-creator'],
  ['Meme Coin Launcher', '/launchpad/meme-coin'],
  ['Staking', '/staking'],
];

const RESOURCE_LINKS = [
  ['Docs', '/docs'],
  ['Support', '/support'],
  ['FAQ', '/faq'],
  ['Legal', '/legal'],
  ['Terms', '/terms'],
  ['Privacy', '/privacy'],
  ['Disclaimers', '/disclaimers'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const resRef = useRef(null);

  // close resource dropdown on outside click
  useEffect(() => {
    function handle(e) {
      if (resRef.current && !resRef.current.contains(e.target)) {
        setShowResources(false);
      }
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  return (
    <header className="w-full bg-[#111827] text-white flex items-center justify-between px-4 md:px-8 py-3 relative z-30">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <img src="/rocket-logo.svg" alt="HYPEPAD" className="h-8 w-auto" />
        <span className="font-bold text-xl tracking-wide">HYPEPAD</span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6 items-center">
        {LINKS.map(([label, href]) => (
          <a key={href} href={href} className="hover:underline text-sm font-medium">
            {label}
          </a>
        ))}

        <div className="relative" ref={resRef}>
          <button
            onClick={() => setShowResources(r => !r)}
            className="hover:underline text-sm font-medium flex items-center gap-1"
          >
            Resources ▾
          </button>
          {showResources && (
            <div className="absolute top-full mt-2 bg-[#1f2937] rounded-md shadow-lg min-w-[160px] py-2 z-50">
              {RESOURCE_LINKS.map(([label, href]) => (
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

      {/* Wallet + mobile */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-orange-500 rounded-full font-semibold shadow hover:brightness-105 transition fixed top-4 right-4 z-50">
          Connect Wallet
        </button>

        <div className="md:hidden relative">
          <button
            aria-label="Menu"
            onClick={() => setOpen(o => !o)}
            className="flex flex-col gap-1"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${
                open ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${
                open ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>

          {open && (
            <div className="fixed inset-0 z-40 flex">
              <div className="flex-1 bg-black/60" onClick={() => setOpen(false)} />
              <div className="w-72 bg-[#1f2937] p-6 flex flex-col gap-5 overflow-auto">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src="/rocket-logo.svg" alt="HYPEPAD" className="h-6 w-auto" />
                    <span className="font-bold text-lg">HYPEPAD</span>
                  </div>
                  <button onClick={() => setOpen(false)} className="text-white text-2xl">
                    ×
                  </button>
                </div>
                <nav className="flex flex-col gap-3 text-sm">
                  {LINKS.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      className="hover:underline"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-2 font-medium">Resources</div>
                  {RESOURCE_LINKS.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      className="hover:underline pl-2"
                      onClick={() => setOpen(false)}
                    >
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
