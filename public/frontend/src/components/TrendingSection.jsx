export default function TrendingSection() {
  return (
    <div style={{ background: '#0f172a', paddingTop: 40, paddingBottom: 40 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        {/* Trending card */}
        <div
          style={{
            background: '#1f2937',
            borderRadius: 20,
            padding: 24,
            marginBottom: 32,
            color: '#fff',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.4)',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: '#9ca3af' }}>Trending Token</div>
              <div style={{ fontSize: 28, fontWeight: 700 }}>$HYPE</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 12, color: '#9ca3af' }}>Score</div>
              <div style={{ fontSize: 28, fontWeight: 700 }}>9.8</div>
            </div>
          </div>
          <div style={{ marginTop: 16 }}>
            <div style={{ background: '#374151', borderRadius: 999, height: 10, overflow: 'hidden' }}>
              <div
                style={{
                  width: '75%',
                  height: '100%',
                  background: '#ff8c00',
                  borderRadius: 999,
                }}
              />
            </div>
            <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 6 }}>
              Graduation progress: 75%
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
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
              style={{
                background: '#1f2937',
                borderRadius: 20,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#fff',
              }}
            >
              <div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>{f.title}</div>
                <div style={{ fontSize: 14, marginTop: 4, color: '#cbd5e1' }}>{f.desc}</div>
              </div>
              <div style={{ marginTop: 12 }}>
                <span
                  style={{
                    background: '#ff8c00',
                    padding: '6px 14px',
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 700,
                    display: 'inline-block',
                  }}
                >
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
