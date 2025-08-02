import { useState } from "react";

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav style={{background:'#0f111a', color:'#f5f5f5'}} className="p-4 flex items-center justify-between relative flex-wrap">
      <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
        <div style={{fontWeight:700, fontSize:'1.25rem'}}>HYPEPAD</div>
        <div className="desktop-nav" style={{display:'flex', gap:'1.5rem'}}>
          <a href="/" style={{textDecoration:'none', color:'#f5f5f5'}}>Home</a>
          <a href="/launch" style={{textDecoration:'none', color:'#f5f5f5'}}>Launch</a>
          <a href="/token" style={{textDecoration:'none', color:'#f5f5f5'}}>Token Creator</a>
          <a href="/meme" style={{textDecoration:'none', color:'#f5f5f5'}}>Meme Launcher</a>
          <a href="/faq" style={{textDecoration:'none', color:'#f5f5f5'}}>FAQ</a>
        </div>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:'0.75rem'}}>
        <div className="mobile-menu-wrapper" style={{position:'relative'}}>
          <button aria-label="Toggle menu" onClick={() => setMobileOpen(o=>!o)} style={{background:'none', border:'none', display:'flex', flexDirection:'column', gap:'4px', width:'32px', height:'24px', cursor:'pointer', zIndex:20}}>
            <span style={{display:'block', width:'24px', height:'4px', background:'#fff', transition:'transform .2s', transform: mobileOpen ? 'rotate(45deg) translateY(6px)' : 'none'}}></span>
            <span style={{display:'block', width:'24px', height:'4px', background:'#fff', transition:'opacity .2s', opacity: mobileOpen ? 0 : 1}}></span>
            <span style={{display:'block', width:'24px', height:'4px', background:'#fff', transition:'transform .2s', transform: mobileOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'}}></span>
          </button>
          {mobileOpen && (
            <div style={{position:'absolute', right:0, marginTop:'8px', width:'160px', background:'#1f2230', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'10px', padding:'8px', display:'flex', flexDirection:'column', gap:'4px'}}>
              <a href="/" style={{padding:'6px 8px', color:'#f5f5f5', textDecoration:'none'}}>Home</a>
              <a href="/launch" style={{padding:'6px 8px', color:'#f5f5f5', textDecoration:'none'}}>Launch</a>
              <a href="/token" style={{padding:'6px 8px', color:'#f5f5f5', textDecoration:'none'}}>Token Creator</a>
              <a href="/meme" style={{padding:'6px 8px', color:'#f5f5f5', textDecoration:'none'}}>Meme Launcher</a>
              <a href="/faq" style={{padding:'6px 8px', color:'#f5f5f5', textDecoration:'none'}}>FAQ</a>
            </div>
          )}
        </div>
        <button style={{padding:'10px 16px', background:'#ff8600', border:'none', borderRadius:'999px', fontWeight:600, cursor:'pointer', whiteSpace:'nowrap'}}>Connect Wallet</button>
      </div>
    </nav>
  );
}
