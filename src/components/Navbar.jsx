import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoSrc from '/logo-192.png';

const LINKS = [
  { label: 'Launch', to: '/launch' },
  { label: 'Presale/IDO', to: '/presale-ido' },
  { label: '$HYPE Presale', to: '/hype-presale' },
  { label: 'Token Creator', to: '/token-creator' },
  { label: 'Meme Launcher', to: '/meme-launcher' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Docs', to: '/docs' },
  { label: 'Community', to: '/community' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Support', to: '/support' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img src={logoSrc} alt="HYPEPAD" className="h-20 w-auto" />
          </Link>
          <span className="text-2xl font-bold">HYPEPAD</span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 overflow-x-auto whitespace-nowrap">
          {LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-base hover:text-orange-400 whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black p-4 space-y-3">
          {LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="block text-base hover:text-orange-400"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
