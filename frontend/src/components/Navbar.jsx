import Link from 'next/link';

export default function Navbar() {
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
      <div className="hidden md:flex space-x-6 items-center">
        <Link href="/"><a className="text-white hover:text-gray-200">Home</a></Link>
        <Link href="/presale"><a className="text-white hover:text-gray-200">$HYPE Presale</a></Link>
        <Link href="/launch"><a className="text-white hover:text-gray-200">Presale/IDO</a></Link>
        <Link href="/launchpad"><a className="text-white hover:text-gray-200">Launch</a></Link>
        <Link href="/creator"><a className="text-white hover:text-gray-200">Token Creator</a></Link>
        <Link href="/meme"><a className="text-white hover:text-gray-200">Meme Launcher</a></Link>
        <Link href="/dashboard"><a className="text-white hover:text-gray-200">Dashboard</a></Link>
        <Link href="/docs"><a className="text-white hover:text-gray-200">Docs</a></Link>
        <Link href="/community"><a className="text-white hover:text-gray-200">Community</a></Link>
        <Link href="/faq"><a className="text-white hover:text-gray-200">FAQ</a></Link>
        <div className="relative group">
          <button className="text-white hover:text-gray-200">Support</button>
          <div className="absolute hidden group-hover:block right-0 bg-dark-background mt-2 rounded shadow-lg z-10">
            <Link href="/support/email"><a className="block px-4 py-2 text-white hover:bg-gray-700">Email</a></Link>
            <Link href="/support/telegram"><a className="block px-4 py-2 text-white hover:bg-gray-700">Telegram</a></Link>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        {/* Mobile menu button here */}
      </div>
      <button className="bg-orange-500 text-dark-background px-4 py-2 rounded-full hover:bg-orange-600">
        Connect Wallet
      </button>
    </nav>
  );
}
