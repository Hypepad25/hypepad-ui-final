import { useState } from 'react';

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold">HYPEPAD</div>
        <div className="hidden md:flex gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/launch" className="hover:underline">Launch</a>
          <a href="/token" className="hover:underline">Token Creator</a>
          <a href="/meme" className="hover:underline">Meme Launcher</a>
          <a href="/faq" className="hover:underline">FAQ</a>
        </div>
      </div>

      {/* Connect Wallet fixed top-right */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-orange-500 rounded-2xl font-semibold">Connect Wallet</button>
        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex flex-col gap-1 relative w-8 h-6"
          >
            <span
              className={cx(
                'block w-6 h-0.5 bg-white transition-transform',
                mobileOpen ? 'rotate-45 translate-y-1.5' : ''
              )}
            />
            <span
              className={cx(
                'block w-6 h-0.5 bg-white transition-opacity',
                mobileOpen ? 'opacity-0' : 'opacity-100'
              )}
            />
            <span
              className={cx(
                'block w-6 h-0.5 bg-white transition-transform',
                mobileOpen ? '-rotate-45 -translate-y-1.5' : ''
              )}
            />
          </button>
          {mobileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-2 flex flex-col gap-2">
              <a href="/" className="px-4 py-2 hover:bg-gray-800">Home</a>
              <a href="/launch" className="px-4 py-2 hover:bg-gray-800">Launch</a>
              <a href="/token" className="px-4 py-2 hover:bg-gray-800">Token Creator</a>
              <a href="/meme" className="px-4 py-2 hover:bg-gray-800">Meme Launcher</a>
              <a href="/faq" className="px-4 py-2 hover:bg-gray-800">FAQ</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
