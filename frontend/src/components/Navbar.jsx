import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const NAV_ITEMS = [
    { label: 'Launch', href: '/launch' },
    { label: 'Presale', href: '/presale' },
    { label: 'Staking', href: '/staking' },
    { label: 'Launch Token', href: '/launch-token' },
    { label: 'Meme', href: '/meme' },
    { label: 'Trending', href: '/trending' },
    { label: 'KYC/SAFU', href: '/kyc' },
    { label: 'Partners', href: '/partners' },
    { label: 'Support', href: '/support' },
  ];

  return (
    <>
      <header className="w-full bg-[#111827] text-white flex items-center justify-between px-6 py-3 relative z-30">
        <div className="flex items-center gap-4">
          <span className="font-bold text-xl tracking-wide">HYPEPAD</span>
        </div>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          {NAV_ITEMS.map(item => (
            <a key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-orange-500 rounded-full font-semibold shadow-md hover:brightness-105 transition">
            Connect Wallet
          </button>

          {/* Mobile toggle */}
          <div className="md:hidden relative">
            <button
              aria-label="Menu"
              onClick={() => setOpen(o => !o)}
              className="flex flex-col gap-1 focus:outline-none"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${
                  open ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${
                  open ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>

            {/* Slide-out */}
            <div
              className={`fixed inset-0 z-40 flex pointer-events-none ${
                open ? '' : 'opacity-0'
              } transition-opacity duration-200`}
              aria-hidden={!open}
            >
              <div
                className="flex-1 bg-black/60"
                onClick={() => setOpen(false)}
              />
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
                  {NAV_ITEMS.map(item => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="hover:underline"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
