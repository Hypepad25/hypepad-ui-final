export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Launch securely. Dominate the hype.</h1>
        <p>Next-gen multi-chain launchpad with meme coin tools, staking, graduated launches, and rug-proof launch intelligence. Built for creators and investors who demand security and speed.</p>
        <div className="cta-group">
          <a href="/launch">
            <button className="btn-primary">Get Started</button>
          </a>
          <a href="/docs">
            <button className="btn-secondary">View Docs</button>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div
          className="banner"
          style={{ backgroundImage: "url('/hypepad-banner.png')" }}
        >
          <div className="overlay" />
        </div>
      </div>
    </section>
  );
}
