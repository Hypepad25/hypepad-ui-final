import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-black">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="HYPEPAD" className="h-12 w-auto" />
        <div className="hidden md:flex gap-6 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="text-base font-medium text-white hover:text-orange-400">Home</Link>
          <Link to="/hype-presale" className="text-base font-medium text-white hover:text-orange-400">$HYPE Presale</Link>
          <Link to="/presale-ido" className="text-base font-medium text-white hover:text-orange-400">Presale/IDO</Link>
          <Link to="/launch" className="text-base font-medium text-white hover:text-orange-400">Launch</Link>
          <Link to="/token" className="text-base font-medium text-white hover:text-orange-400">Token Creator</Link>
          <Link to="/meme" className="text-base font-medium text-white hover:text-orange-400">Meme Launcher</Link>
          <Link to="/dashboard" className="text-base font-medium text-white hover:text-orange-400">Dashboard</Link>
          <Link to="/docs" className="text-base font-medium text-white hover:text-orange-400">Docs</Link>
          <Link to="/community" className="text-base font-medium text-white hover:text-orange-400">Community</Link>
          <Link to="/faq" className="text-base font-medium text-white hover:text-orange-400">FAQ</Link>
          <Link to="/support" className="text-base font-medium text-white hover:text-orange-400">Support ▾</Link>
        </div>
      </div>
      <button className="px-4 py-2 bg-orange-500 rounded-full font-semibold whitespace-nowrap z-10">
        Connect Wallet
      </button>
    </nav>
);
}
