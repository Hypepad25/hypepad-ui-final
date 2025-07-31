import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroBanner />

      {/* Trending Token Card */}
      <section className="max-w-5xl mx-auto mt-10 px-4">
        <div className="bg-[#111827] rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Trending Token</p>
              <h2 className="text-2xl font-bold">$HYPE</h2>
            </div>
            <div className="text-right">
              <p className="text-gray-300 text-sm">Score</p>
              <p className="text-2xl font-bold">9.8</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-gray-400 mt-1">Graduation progress: 75%</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto mt-8 px-4 space-y-4">
        <div className="bg-[#111827] rounded-2xl p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div>
            <h3 className="font-bold text-lg">Meme Coin Creator</h3>
            <p className="text-gray-400 text-sm">
              Custom supply, bonding curve, graduation fee logic, and rug-proof LP burn.
            </p>
          </div>
          <span className="mt-3 sm:mt-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            LAUNCH
          </span>
        </div>

        <div className="bg-[#111827] rounded-2xl p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div>
            <h3 className="font-bold text-lg">Anti-bot / Wallet Monitoring</h3>
            <p className="text-gray-400 text-sm">
              Cooldown timers, soft fingerprinting, and abuse prevention for devs and traders.
            </p>
          </div>
          <span className="mt-3 sm:mt-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            SECURE
          </span>
        </div>

        <div className="bg-[#111827] rounded-2xl p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div>
            <h3 className="font-bold text-lg">Paid & Organic Trending</h3>
            <p className="text-gray-400 text-sm">
              Select slot durations, promote tokens, and show real-time ranking.
            </p>
          </div>
          <span className="mt-3 sm:mt-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            TRENDING
          </span>
        </div>

        <div className="bg-[#111827] rounded-2xl p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div>
            <h3 className="font-bold text-lg">Tiered Rewards</h3>
            <p className="text-gray-400 text-sm">
              Flexible lock durations with APYs and penalty enforcement.
            </p>
          </div>
          <span className="mt-3 sm:mt-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            STAKING
          </span>
        </div>
      </section>
    </div>
  );
}
