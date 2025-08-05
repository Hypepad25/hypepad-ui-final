import { useState, useEffect } from 'react';

const LINKS = [
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
      <div className="flex items-center gap-3">
        <span className="font-bold text-xl tracking-wide">HYPEPAD</span>
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
                  <span className="font-bold text-lg">Menu</span>
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
