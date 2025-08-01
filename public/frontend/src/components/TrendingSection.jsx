export default function TrendingSection() {
  return (
    <div className="bg-[#0f172a] py-12">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="bg-[#1f2937] rounded-2xl p-6 shadow-lg text-white">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <div className="text-sm text-gray-300">Trending Token</div>
              <div className="text-2xl font-bold">$HYPE</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-300">Score</div>
              <div className="text-2xl font-bold">9.8</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-2.5 rounded-full"
                style={{ width: '75%', background: '#ff8c00' }}
              />
            </div>
            <div className="text-sm text-gray-400 mt-1">
              Graduation progress: 75%
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Meme Coin Creator',
              desc: 'Custom supply, bonding curve, graduation fee logic, and rug-proof LP burn.',
              badge: 'LAUNCH',
            },
            {
              title: 'Anti-bot / Wallet Monitoring',
              desc: 'Cooldown timers, soft fingerprinting, and abuse prevention for devs and traders.',
              badge: 'SECURE',
            },
            {
              title: 'Paid & Organic Trending',
              desc: 'Select slot durations, promote tokens, and show real-time ranking.',
              badge: 'TRENDING',
            },
            {
              title: 'Tiered Rewards',
              desc: 'Flexible lock durations with APYs and penalty enforcement.',
              badge: 'STAKING',
            },
          ].map(f => (
            <div
              key={f.title}
              className="bg-[#1f2937] rounded-2xl p-5 flex flex-col justify-between text-white"
            >
              <div>
                <div className="text-lg font-bold">{f.title}</div>
                <div className="text-sm text-gray-400 mt-1">{f.desc}</div>
              </div>
              <div className="mt-4">
                <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {f.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
