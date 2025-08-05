import { Link } from 'react-router-dom';
import logoSrc from '/rocket-logo.svg';

export function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-black">
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img
          src={logoSrc}
          alt="HYPEPAD"
          className="h-12 w-auto"
        />
      </Link>

      {/* Nav */}
      <nav className="flex-1 overflow-x-auto whitespace-nowrap">
        <ul className="inline-flex items-center space-x-6">
          {[
            { label: 'Home', to: '/' },
            { label: '$HYPE Presale', to: '/hype-presale' },
            { label: 'Presale/IDO', to: '/presale-ido' },
            { label: 'Launch', to: '/launch' },
            { label: 'Token Creator', to: '/token-creator' },
            { label: 'Meme Launcher', to: '/meme-launcher' },
            { label: 'Dashboard', to: '/dashboard' },
            { label: 'Docs', to: '/docs' },
            { label: 'Community', to: '/community' },
            { label: 'FAQ', to: '/faq' },
            { label: 'Support', to: '/support' },
          ].map(({ label, to }) => (
            <li key={label}>
              <Link
                to={to}
                className="text-base font-medium text-white hover:text-orange-400"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Support dropdown caret if needed */}
      <div className="ml-4">{/* ... */}</div>
    </header>
  );
}
