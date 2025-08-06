import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  console.log('Navbar loaded');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-dark-background px-6 py-4">
      <div className="flex items-center">
        <Link href="/">
          <a className="flex items-center">
            <img src="/rocket-logo.svg" alt="HYPEPAD" className="h-12 mr-2" />
            <span className="text-2xl font-extrabold text-white">HYPEPAD</span>
          </a>
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 items-center">
        {['/', '/presale', '/launch', '/launchpad', '/creator', '/meme', '/dashboard', '/docs', '/community', '/faq'].map((path, idx) => (
          <Link key={idx} href={path}>
            <a className="text-white hover:text-gray-200">
              {['Home', '$HYPE Presale', 'Presale/IDO', 'Launch', 'Token Creator', 'Meme Launcher', 'Dashboard', 'Docs', 'Community', 'FAQ'][idx]}
            </a>
          </Link>
        ))}
        <div className="relative group">
          <button className="text-white hover:text-gray-200">Support</button>
          <div className="absolute hidden group-hover:block right-0 bg-dark-background mt-2 rounded shadow-lg z-10">
            <Link href="/support/email"><a className="block px-4 py-2 text-white hover:bg-gray-700">Email</a></Link>
            <Link href="/support/telegram"><a className="block px-4 py-2 text-white hover:bg-gray-700">Telegram</a></Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-white focus:outline-none" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'Close' : 'Menu'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-dark-background md:hidden space-y-2 px-6 py-4">
          {['/', '/presale', '/launch', '/launchpad', '/creator', '/meme', '/dashboard', '/docs', '/community', '/faq'].map((path, idx) => (
            <Link key={idx} href={path}>
              <a className="block text-white hover:text-gray-200">{['Home', '$HYPE Presale', 'Presale/IDO', 'Launch', 'Token Creator', 'Meme Launcher', 'Dashboard', 'Docs', 'Community', 'FAQ'][idx]}</a>
            </Link>
          ))}
          <div className="border-t border-gray-700 pt-2">
            <Link href="/support/email"><a className="block text-white py-1">Email Support</a></Link>
            <Link href="/support/telegram"><a className="block text-white py-1">Telegram Support</a></Link>
          </div>
        </div>
      )}

      <button className="bg-orange-500 text-dark-background px-4 py-2 rounded-full hover:bg-orange-600">
        Connect Wallet
      </button>
    </nav>
);
}
