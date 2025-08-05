import { Link } from 'react-router-dom';
import { routeConfig } from '../routes/index.js';
import logoSrc from '/logo-192.png';

export function Navbar() {
  return (
    <header className="bg-black text-white px-6 py-4 flex items-center justify-between">
      <Link to="/">
        <img src={logoSrc} alt="HYPEPAD" className="h-20 w-auto" />
      </Link>
      <nav className="hidden lg:flex space-x-8 overflow-x-auto whitespace-nowrap">
        {routeConfig.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className="text-base font-medium hover:text-orange-400"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
