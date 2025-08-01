export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>The Future of Web3 Starts Here</h1>
        <p>Fuel Your Launch. Rule the Hype.</p>
        <div className="cta-group">
          <a href="/launch">
            <button className="btn-primary">Launch Now</button>
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
