import { Link } from 'react-router-dom';
import { routeConfig } from '../routes/index.js';
import logoSrc from '/rocket-logo.svg';

export function Navbar() {
  return (
    // Changed bg to red so you can’t miss it
    <nav className="bg-red-600 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo (now extra big) */}
      <Link to="/">
        <img src={logoSrc} alt="HYPEPAD" className="h-32 w-auto" />
      </Link>

      {/* Debug text so you know this version is live */}
      <span className="ml-4 font-bold text-lg">🚀 DEBUG NAVBAR 🚀</span>

      {/* Your normal dynamic links */}
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
