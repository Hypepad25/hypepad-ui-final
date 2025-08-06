import logo from '../assets/rocket-logo.svg';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/presale', label: '$HYPE Presale' },
    { href: '/launch', label: 'Presale/IDO' },
    { href: '/launchpad', label: 'Launch' },
    { href: '/creator', label: 'Token Creator' },
    { href: '/meme', label: 'Meme Launcher' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/docs', label: 'Docs' },
    { href: '/community', label: 'Community' },
    { href: '/faq', label: 'FAQ' }
  ];

  return (
    <nav className="flex items-center justify-between bg-dark-background px-6 py-4 relative">
      <a href="/" className="flex items-center">
        <img src={logo} alt="HYPEPAD" className="h-12 mr-2" />
        <span className="text-2xl font-extrabold text-white">HYPEPAD</span>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 items-center">
        {links.map(({ href, label }) => (
          <a key={href} href={href} className="text-white hover:text-gray-200">
            {label}
          </a>
        ))}
        <div className="relative group">
          <button className="text-white hover:text-gray-200">Support</button>
          <div className="absolute hidden group-hover:block bg-dark-background mt-2 rounded shadow-lg right-0">
            <a href="/support/email" className="block px-4 py-2 text-white hover:bg-gray-700">Email</a>
            <a href="/support/telegram" className="block px-4 py-2 text-white hover:bg-gray-700">Telegram</a>
          </div>
        </div>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'Close' : 'Menu'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-dark-background md:hidden flex flex-col space-y-2 px-6 py-4">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="block text-white hover:text-gray-200">{label}</a>
          ))}
          <a href="/support/email" className="block text-white hover:text-gray-200">Email</a>
          <a href="/support/telegram" className="block text-white hover:text-gray-200">Telegram</a>
        </div>
      )}

      <button className="bg-orange-500 text-dark-background px-4 py-2 rounded-full hover:bg-orange-600">
        Connect Wallet
      </button>
    </nav>
);
}
