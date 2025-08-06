export default function TrendingSection() {
  return (
    <>
      <section className="max-w-5xl mx-auto mt-12 px-4">
        <div className="bg-[#1f2937] rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between gap-4">
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
            <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-orange-500 h-2.5 rounded-full"
                style={{ width: '75%' }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              Graduation progress: 75%
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-8 px-4 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-[#1f2937] rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg">Meme Coin Creator</h3>
              <p className="text-gray-400 text-sm mt-1">
                Custom supply, bonding curve, graduation fee logic, and rug-proof LP burn.
              </p>
            </div>
            <div className="mt-4">
              <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                LAUNCH
              </span>
            </div>
          </div>

          <div className="bg-[#1f2937] rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg">Anti-bot / Wallet Monitoring</h3>
              <p className="text-gray-400 text-sm mt-1">
                Cooldown timers, soft fingerprinting, and abuse prevention for devs and traders.
              </p>
            </div>
            <div className="mt-4">
              <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                SECURE
              </span>
            </div>
          </div>

          <div className="bg-[#1f2937] rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg">Paid & Organic Trending</h3>
              <p className="text-gray-400 text-sm mt-1">
                Select slot durations, promote tokens, and show real-time ranking.
              </p>
            </div>
            <div className="mt-4">
              <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                TRENDING
              </span>
            </div>
          </div>

          <div className="bg-[#1f2937] rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg">Tiered Rewards</h3>
              <p className="text-gray-400 text-sm mt-1">
                Flexible lock durations with APYs and penalty enforcement.
              </p>
            </div>
            <div className="mt-4">
              <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                STAKING
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
