import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-dark-background px-6 py-4">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <img src="/rocket-logo.svg" alt="HYPEPAD" className="h-12 mr-2" />
          <span className="text-2xl font-extrabold text-white">HYPEPAD</span>
        </Link>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="text-white hover:text-gray-200">Home</Link>
        <Link href="/presale" className="text-white hover:text-gray-200">$HYPE Presale</Link>
        <Link href="/launch" className="text-white hover:text-gray-200">Presale/IDO</Link>
        <Link href="/launchpad" className="text-white hover:text-gray-200">Launch</Link>
        <Link href="/creator" className="text-white hover:text-gray-200">Token Creator</Link>
        <Link href="/meme" className="text-white hover:text-gray-200">Meme Launcher</Link>
        <Link href="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
        <Link href="/docs" className="text-white hover:text-gray-200">Docs</Link>
        <Link href="/community" className="text-white hover:text-gray-200">Community</Link>
        <Link href="/faq" className="text-white hover:text-gray-200">FAQ</Link>
        <div className="relative group">
          <button className="text-white hover:text-gray-200">Support</button>
          <div className="absolute hidden group-hover:block bg-dark-background mt-2 rounded shadow-lg">
            <Link href="/support/email" className="block px-4 py-2 text-white hover:bg-gray-700">Email</Link>
            <Link href="/support/telegram" className="block px-4 py-2 text-white hover:bg-gray-700">Telegram</Link>
          </div>
        </div>
      </div>
      <button className="md:hidden">
        {/* Mobile menu button */}
      </button>
      <button className="bg-orange-500 text-dark-background px-4 py-2 rounded-full hover:bg-orange-600">
        Connect Wallet
      </button>
    </nav>
);
}
