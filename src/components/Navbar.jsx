import { Link } from 'react-router-dom';
import { routeConfig } from '../routes/index.js';
import logoSrc from '/rocket-logo.svg';

export function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/">
        <img src={logoSrc} alt="HYPEPAD" className="h-20 w-auto" />
      </Link>

      {/* Dynamic Links */}
      <div className="hidden lg:flex space-x-8 overflow-x-auto">
        {routeConfig.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className="text-base font-medium hover:text-orange-400 whitespace-nowrap"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
