import { useState, useEffect } from 'react';

const LINKS=[
  ['Launch','/launch'],
  ['Presale','/presale'],
  ['Staking','/staking'],
  ['Launch Token','/launch-token'],
  ['Meme','/meme'],
  ['Trending','/trending'],
  ['KYC/SAFU','/kyc'],
  ['Partners','/partners'],
  ['Support','/support'],
];

export default function Navbar(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{ document.body.style.overflow=open?'hidden':''; return ()=>{document.body.style.overflow='';};},[open]);
  return (
    <>
      <header style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', padding:12, background:'#0f172a', position:'sticky', top:0, zIndex:50, gap:16}}>
        <div style={{fontWeight:700,fontSize:18,color:'#fff'}}>HYPEPAD</div>
        <nav style={{display:'flex', gap:16, flex:1, marginLeft:16, flexWrap:'wrap'}}>
          {LINKS.map(([label,href])=>(
            <a key={href} href={href} style={{color:'#fff', textDecoration:'none', fontSize:14}}>{label}</a>
          ))}
        </nav>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <button style={{background:'#ff8c00', border:'none', padding:'10px 18px', borderRadius:999, fontWeight:600, cursor:'pointer', color:'#000'}}>Connect Wallet</button>
          <button aria-label="menu" onClick={()=>setOpen(o=>!o)} style={{background:'none',border:'none',display:'flex',flexDirection:'column',gap:4,padding:6,cursor:'pointer'}}>
            <span style={{width:22,height:3,background:'#fff',borderRadius:2,transition:'all .25s', transform: open?'rotate(45deg) translateY(6px)':'none'}}/>
            <span style={{width:22,height:3,background:'#fff',borderRadius:2,transition:'all .25s', opacity: open?0:1}}/>
            <span style={{width:22,height:3,background:'#fff',borderRadius:2,transition:'all .25s', transform: open?'rotate(-45deg) translateY(-6px)':'none'}}/>
          </button>
        </div>
      </header>
      {open && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', zIndex:60, display:'flex', justifyContent:'flex-end'}}>
          <div style={{width:260, background:'#1f2937', padding:20, display:'flex', flexDirection:'column', gap:16, height:'100%'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div style={{fontWeight:700, fontSize:16, color:'#fff'}}>Menu</div>
              <button onClick={()=>setOpen(false)} aria-label="close" style={{background:'none',border:'none',color:'#fff',fontSize:24,cursor:'pointer'}}>×</button>
            </div>
            <nav style={{display:'flex', flexDirection:'column', gap:12}}>
              {LINKS.map(([label,href])=>(
                <a key={href} href={href} onClick={()=>setOpen(false)} style={{color:'#fff', textDecoration:'none'}}>{label}</a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
