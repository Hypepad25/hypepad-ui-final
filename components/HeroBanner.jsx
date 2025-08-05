export default function HeroBanner() {
  return (
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '60px 20px 100px',
        maxWidth: 1200,
        margin: '0 auto',
        gap: 30,
        background: '#0f111f',
      }}
    >
      <div style={{ flex: '1 1 280px', minWidth: 260, color: '#fff' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
          The Future of Web3 Starts Here
        </h1>
        <p style={{ margin: '8px 0 20px', fontSize: '1rem', color: '#d1d5db' }}>
          Fuel Your Launch. Rule the Hype.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="/launch">
            <button
              style={{
                background: '#ff8c00',
                border: 'none',
                padding: '10px 18px',
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
                padding: '10px 18px',
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
      <div style={{ flex: '1 1 300px', minWidth: 220, display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 500,
            borderRadius: 16,
            overflow: 'hidden',
            backgroundImage: "url('/hypepad-banner.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 200,
            boxShadow: '0 30px 60px -10px rgba(255,140,0,0.3)',
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
    </section>
  );
}
