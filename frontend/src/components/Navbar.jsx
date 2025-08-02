import React, {useState, useEffect, useRef} from 'react';

const PRIMARY_LINKS = [
  ['Home', '/'],
  ['Launchpad', '/launchpad'],
  ['Token Creator', '/launchpad/token-creator'],
  ['Meme Coin Launcher', '/launchpad/meme-coin'],
  ['Staking', '/staking'],
];

const EXTRA_LINKS = [
  ['Trending', '/trending'],
  ['Docs', '/docs'],
  ['Support', '/support'],
  ['FAQ', '/faq'],
  ['Legal', '/legal'],
  ['Terms', '/terms'],
  ['Privacy', '/privacy'],
  ['Disclaimers', '/disclaimers'],
  ['Partners', '/partners'],
];

export default function Navbar(){
  const [mobileOpen,setMobileOpen]=useState(false);
  const [moreOpen,setMoreOpen]=useState(false);
  const moreRef=useRef(null);
  useEffect(()=>{function onClick(e){ if(moreRef.current && !moreRef.current.contains(e.target)){ setMoreOpen(false);} }
    document.addEventListener('mousedown',onClick);
    return ()=>document.removeEventListener('mousedown',onClick);
  },[]);
  return (
    <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 24px',background:'#111827',position:'sticky',top:0,zIndex:50}}>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <img src="/rocket-logo.svg" alt="HYPEPAD" style={{height:32}}/>
        <span style={{fontWeight:700,fontSize:20}}>HYPEPAD</span>
      </div>
      <div style={{display:'none',gap:16}} className="desktop-links">
        {PRIMARY_LINKS.map(([label,href])=>(
          <a key={href} href={href} style={{fontSize:14,fontWeight:500}}>{label}</a>
        ))}
        <div style={{position:'relative'}} ref={moreRef}>
          <button onClick={()=>setMoreOpen(o=>!o)} style={{background:'none',border:'none',color:'#fff',cursor:'pointer',fontSize:14,fontWeight:500}}>More ▾</button>
          {moreOpen && (
            <div style={{position:'absolute',top:'100%',marginTop:4,background:'#1f2937',borderRadius:6,padding:8,minWidth:160}}>
              {EXTRA_LINKS.map(([label,href])=>(
                <a key={href} href={href} style={{display:'block',padding:'4px 8px',fontSize:14}}>{label}</a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <button style={{padding:'8px 16px',background:'#f59e0b',border:'none',borderRadius:999,fontWeight:600}}>Connect Wallet</button>
        <div className="mobile-menu" style={{display:'block',position:'relative'}}>
          <button aria-label="Menu" onClick={()=>setMobileOpen(o=>!o)} style={{background:'none',border:'none',display:'flex',flexDirection:'column',gap:4}}>
            <span style={{width:24,height:3,background:'#fff',display:'block',transform: mobileOpen ? 'rotate(45deg) translateY(6px)' : 'none'}}></span>
            <span style={{width:24,height:3,background:'#fff',display:'block',opacity: mobileOpen ? 0:1}}></span>
            <span style={{width:24,height:3,background:'#fff',display:'block',transform: mobileOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'}}></span>
          </button>
          {mobileOpen && (
            <div style={{position:'fixed',inset:0,display:'flex',zIndex:60}}>
              <div style={{flex:1,background:'rgba(0,0,0,0.6)'}} onClick={()=>setMobileOpen(false)}></div>
              <div style={{width:260,background:'#1f2937',padding:16,display:'flex',flexDirection:'column',gap:12,overflow:'auto'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <div style={{display:'flex',alignItems:'center',gap:8}}>
                    <img src="/rocket-logo.svg" alt="HYPEPAD" style={{height:24}}/>
                    <span style={{fontWeight:700}}>HYPEPAD</span>
                  </div>
                  <button onClick={()=>setMobileOpen(false)} style={{background:'none',border:'none',color:'#fff',fontSize:22}}>×</button>
                </div>
                {[...PRIMARY_LINKS,...EXTRA_LINKS].map(([label,href])=>(
                  <a key={href} href={href} style={{padding:'6px 0',fontSize:14}} onClick={()=>setMobileOpen(false)}>{label}</a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
