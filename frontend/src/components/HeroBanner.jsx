export default function HeroBanner() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '60px 20px 100px',
        maxWidth: 1200,
        margin: '0 auto',
        gap: 30,
        background: '#0f111f',
        overflow: 'hidden',
      }}
    >
      <div style={{ flex: '1 1 280px', minWidth: 260, color: '#fff', zIndex: 2 }}>
        <div style={{ marginBottom: 8, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: 1, color: '#d1d5db' }}>
          Secure & Multi-Chain
        </div>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 800, lineHeight: 1.05, margin: 0 }}>
          The Future of Web3 Starts Here
        </h1>
        <p style={{ margin: '12px 0 24px', fontSize: '1.1rem', color: '#d1d5db' }}>
          Fuel Your Launch. Rule the Hype.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="/launch">
            <button
              style={{
                background: '#ff8c00',
                border: 'none',
                padding: '12px 24px',
                borderRadius: 999,
                fontWeight: 600,
                cursor: 'pointer',
                color: '#000',
              }}
            >
              Launch Now
            </button>
          </a>
          <a href="/docs">
            <button
              style={{
                background: 'transparent',
                border: '2px solid #fff',
                padding: '12px 24px',
                borderRadius: 999,
                fontWeight: 600,
                cursor: 'pointer',
                color: '#fff',
              }}
            >
              View Docs
            </button>
          </a>
        </div>
      </div>
      <div style={{ flex: '1 1 300px', minWidth: 220, display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <div
          aria-hidden="true"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 500,
            borderRadius: 16,
            overflow: 'hidden',
            backgroundImage: "url('/hypepad-banner.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 220,
            boxShadow: '0 30px 80px -10px rgba(255,140,0,0.4)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(15,17,66,0.7) 100%)',
            }}
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '60%',
          height: '120%',
          backgroundImage: "url('/hypepad-banner.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          filter: 'blur(40px)',
          pointerEvents: 'none',
          transform: 'scale(1.1)',
        }}
      />
    </section>
  );
}
