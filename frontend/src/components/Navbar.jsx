import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-[#111827] text-white flex items-center justify-between px-6 py-3 relative">
      <div className="flex items-center gap-3">
        <span className="font-bold text-xl tracking-wide">HYPEPAD</span>
      </div>

      <div className="hidden md:flex gap-6 items-center text-sm font-medium">
        <a href="/launch" className="hover:underline">Launch</a>
        <a href="/presale" className="hover:underline">Presale</a>
        <a href="/staking" className="hover:underline">Staking</a>
        <a href="/launch-token" className="hover:underline">Launch Token</a>
        <a href="/meme" className="hover:underline">Meme</a>
        <a href="/trending" className="hover:underline">Trending</a>
        <a href="/kyc" className="hover:underline">KYC/SAFU</a>
        <a href="/partners" className="hover:underline">Partners</a>
        <a href="/support" className="hover:underline">Support</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-orange-500 rounded-full font-semibold shadow">
          Connect Wallet
        </button>
        <div className="md:hidden relative">
          <button onClick={() => setOpen(o => !o)} className="flex flex-col gap-1">
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-56 bg-[#1f2937] border border-gray-700 rounded-lg flex flex-col p-4 gap-2 z-50">
              <a href="/launch" className="hover:underline text-sm">Launch</a>
              <a href="/presale" className="hover:underline text-sm">Presale</a>
              <a href="/staking" className="hover:underline text-sm">Staking</a>
              <a href="/launch-token" className="hover:underline text-sm">Launch Token</a>
              <a href="/meme" className="hover:underline text-sm">Meme</a>
              <a href="/trending" className="hover:underline text-sm">Trending</a>
              <a href="/kyc" className="hover:underline text-sm">KYC/SAFU</a>
              <a href="/partners" className="hover:underline text-sm">Partners</a>
              <a href="/support" className="hover:underline text-sm">Support</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
