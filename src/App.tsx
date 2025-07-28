import { useState } from 'react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-700">
        <div className="text-2xl font-bold">HYPEPAD</div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-orange-400">Home</a>
          <a href="#" className="hover:text-orange-400">Launch</a>
          <a href="#" className="hover:text-orange-400">Leaderboard</a>
          <a href="#" className="hover:text-orange-400">Support</a>
        </div>
        <div className="absolute right-4 top-3 md:static">
          <button className="bg-orange-500 px-4 py-2 rounded-md font-semibold hover:bg-orange-600">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start p-4 bg-gray-800 space-y-3">
          <a href="#" className="hover:text-orange-400">Home</a>
          <a href="#" className="hover:text-orange-400">Launch</a>
          <a href="#" className="hover:text-orange-400">Leaderboard</a>
          <a href="#" className="hover:text-orange-400">Support</a>
        </div>
      )}

      {/* Main Content */}
      <main className="p-6 text-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">Welcome to HYPEPAD</h1>
        <p className="text-gray-300">Your launchpad for next-gen Web3 tokens.</p>
      </main>
    </div>
  )
}
