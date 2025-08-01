import { useState, useEffect } from 'react';

const LINKS = [
  ['Home', '/'],
  ['Launchpad', '/launchpad'],
  ['Launch', '/launch'],
  ['Presale', '/presale'],
  ['Staking', '/staking'],
  ['Launch Token', '/launch-token'],
  ['Meme', '/meme'],
  ['Trending', '/trending'],
  ['KYC/SAFU', '/kyc'],
  ['Partners', '/partners'],
  ['Support', '/support'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  return (
    <header className="w-full bg-[#111827] text-white flex items-center justify-between px-4 md:px-8 py-3 relative z-30">
            <div className="flex items-center gap-2">
        <img src="/rocket-logo.svg" alt="HYPEPAD" className="h-8 w-auto" />
        <span className="font-bold text-xl tracking-wide">HYPEPAD</span>
      </div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 flex-shrink-0">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="rocketGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFAA33" />
                  <stop offset="100%" stopColor="#FF6F00" />
                </linearGradient>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="rgba(0,0,0,0.35)" />
                </filter>
              </defs>
              <g filter="url(#shadow)">
                <path
                  d="M32 4C32 4 19 17 19 30C19 44 32 58 32 58C32 58 45 44 45 30C45 17 32 4 32 4Z"
                  fill="url(#rocketGrad)"
                  stroke="#FFF"
                  strokeWidth="0.5"
                />
                <circle cx="32" cy="28" r="6" fill="#1f2235" stroke="#FFF" strokeWidth="1" />
                <path d="M16 46C16 46 12 52 12 56C12 57.1046 12.8954 58 14 58H22L16 46Z" fill="#22273f" />
                <path d="M52 46C52 46 56 52 56 56C56 57.1046 55.1046 58 54 58H46L52 46Z" fill="#22273f" />
                <g transform="translate(32,58)">
                  <path d="M0 0C-6 4 -6 12 0 16C6 12 6 4 0 0Z" fill="rgba(255,140,0,0.8)" />
                  <path d="M0 4C-3 6 -3 10 0 12C3 10 3 6 0 4Z" fill="rgba(255,200,100,0.9)" />
                </g>
              </g>
            </svg>
          </div>
          <span className="font-bold text-xl tracking-wide">HYPEPAD</span>
        </div>
      </div>

      <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
        {LINKS.map(([label, href]) => (
          <a key={href} href={href} className="hover:underline">
            {label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-orange-500 rounded-full font-semibold shadow hover:brightness-105 transition">
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
              <div className="w-64 bg-[#1f2937] p-6 flex flex-col gap-5 overflow-auto">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6">
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M32 4C32 4 19 17 19 30C19 44 32 58 32 58C32 58 45 44 45 30C45 17 32 4 32 4Z"
                          fill="#ff8c00"
                        />
                        <circle cx="32" cy="28" r="5" fill="#1f2235" stroke="#fff" strokeWidth="1" />
                      </svg>
                    </div>
                    <span className="font-bold text-lg">HYPEPAD</span>
                  </div>
                  <button
                    aria-label="Close"
                    onClick={() => setOpen(false)}
                    className="text-white text-2xl leading-none"
                  >
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
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
