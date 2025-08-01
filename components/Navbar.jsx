import { useState, useEffect } from 'react';

const LINKS = [
  ['Launch', '/launch'],
  ['Presale', '/presale'],
  ['Staking', '/staking'],
  ['Launch Token', '/launch-token'],
  ['Meme', '/meme'],
  ['Trending', '/trending'],
  ['KYC/SAFU', '/kyc'],
  ['Partners', '/partners'],
  ['Support', '/support'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  return (
    <>
      <header className="navbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="logo">HYPEPAD</div>
        </div>

        <nav className="links">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <div className="actions">
          <button className="btn-primary">Connect Wallet</button>
          <button
            className="hamburger"
            aria-label="menu"
            onClick={() => setOpen(o => !o)}
          >
            <span style={{ transform: open ? 'rotate(45deg) translateY(6px)' : '' }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? 'rotate(-45deg) translateY(-6px)' : '' }} />
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-overlay" style={{ display: 'block' }}>
          <div className="mobile-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: 16 }}>Menu</div>
              <button
                className="close-btn"
                onClick={() => setOpen(false)}
                aria-label="close"
              >
                ×
              </button>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {LINKS.map(([label, href]) => (
                <a key={href} href={href} style={{ color: '#fff', textDecoration: 'none' }} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
