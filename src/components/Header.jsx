import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header-wrapper">
      <div className="container navbar">
        <div className="brand">
          <img src="/logo-192.png" alt="HYPEPAD Logo" className="logo" />
          <div className="brand-text">HYPEPAD</div>
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/launch">Launch</a>
          <a href="/token">Token Creator</a>
          <a href="/meme">Meme Launcher</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="action-group">
          <div className="badge">
            <span>Live Projects: 128</span>
            <span className="separator">•</span>
            <span>Security Score: 9.8</span>
          </div>
          <button className="cta-wallet">Connect Wallet</button>
          <div className="mobile-toggle">
            <button aria-label="Menu" id="mobileMenuBtn">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
            <div className="mobile-menu" id="mobileMenu" style={{display:'none'}}>
              <a href="/">Home</a>
              <a href="/launch">Launch</a>
              <a href="/token">Token Creator</a>
              <a href="/meme">Meme Launcher</a>
              <a href="/faq">FAQ</a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        :root {
          --bg:#0f111a;
          --fg:#f5f5f5;
          --accent:#ff8600;
          --radius:14px;
        }
        *{box-sizing:border-box;}
        .header-wrapper {
          position:sticky;
          top:0;
          z-index:60;
          background:var(--bg);
          border-bottom:1px solid rgba(255,255,255,0.07);
          box-shadow:0 10px 30px -10px rgba(0,0,0,0.6);
        }
        .container{max-width:1200px;margin:0 auto;padding:0 16px;display:flex;align-items:center;justify-content:space-between;height:64px;gap:12px;flex-wrap:wrap;}
        .brand{display:flex;align-items:center;gap:8px;}
        .brand img.logo{height:32px;width:auto;}
        .brand-text{font-weight:700;font-size:1rem;letter-spacing:1px;color:var(--fg);}
        .nav-links{display:flex;gap:18px;margin-left:16px;}
        .nav-links a{position:relative;padding:6px 4px;font-size:0.9rem;color:var(--fg);text-decoration:none;}
        .nav-links a:hover::after{content:'';position:absolute;left:0;bottom:-2px;height:3px;width:100%;background: linear-gradient(90deg,var(--accent),#ffcc66);border-radius:2px;}
        .action-group{display:flex;align-items:center;gap:12px;}
        .badge{background:#1f2230;padding:6px 10px;border-radius:999px;font-size:10px;display:flex;gap:6px;align-items:center;color:var(--fg);}
        .separator{margin:0 4px;}
        .cta-wallet{background: linear-gradient(90deg,var(--accent) 0%, #ff6600 100%);padding:10px 18px;border-radius:999px;font-weight:600;color:#000;box-shadow:0 15px 40px -10px rgba(255,134,0,0.4);transition:filter .2s;border:none;}
        .cta-wallet:hover{filter:brightness(1.05);}
        .mobile-toggle{display:none;position:relative;}
        .mobile-menu{position:absolute;top:100%;right:0;background:#1f2230;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:8px 0;min-width:200px;display:flex;flex-direction:column;gap:4px;margin-top:8px;}
        .mobile-menu a{padding:10px 16px;color:var(--fg);text-decoration:none;}
        .bar{display:block;width:24px;height:3px;background:#fff;margin:4px 0;transition:all .2s;}
        @media (max-width:1024px){
          .nav-links{display:none;}
          .mobile-toggle{display:block;}
        }
      `}</style>
      <script>{`
        const btn = document.getElementById('mobileMenuBtn');
        const menu = document.getElementById('mobileMenu');
        if (btn) {
          btn.addEventListener('click', () => {
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
          });
        }
      `}</script>
    </header>
  );
};

export default Header;
