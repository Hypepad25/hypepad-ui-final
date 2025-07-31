import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white flex items-center justify-between px-4 py-2 relative">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src="/hypepad-rocket-logo.png" alt="HYPEPAD" className="h-8 w-auto" />
        <span className="font-bold text-xl tracking-wide">HYPEPAD</span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6 items-center">
        <a href="/launch" className="hover:underline">Launch</a>
        <a href="/presale" className="hover:underline">Presale</a>
        <a href="/meme" className="hover:underline">Meme Launcher</a>
        <a href="/trending" className="hover:underline">Trending</a>
        <a href="/kyc" className="hover:underline">KYC/SAFU</a>
        <a href="/partners" className="hover:underline">Partners</a>
        <a href="/support" className="hover:underline">Support</a>
      </div>

      {/* Connect Wallet + Mobile Menu */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-orange-500 rounded-2xl font-semibold shadow-sm">
          Connect Wallet
        </button>

        {/* Hamburger for mobile */}
        <div className="md:hidden relative">
          <button onClick={() => setOpen(!open)} className="flex flex-col gap-1">
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-60 bg-gray-900 border border-gray-700 rounded-lg flex flex-col p-4 gap-3 z-50">
              <a href="/launch" className="hover:underline">Launch</a>
              <a href="/presale" className="hover:underline">Presale</a>
              <a href="/meme" className="hover:underline">Meme Launcher</a>
              <a href="/trending" className="hover:underline">Trending</a>
              <a href="/kyc" className="hover:underline">KYC/SAFU</a>
              <a href="/partners" className="hover:underline">Partners</a>
              <a href="/support" className="hover:underline">Support</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
