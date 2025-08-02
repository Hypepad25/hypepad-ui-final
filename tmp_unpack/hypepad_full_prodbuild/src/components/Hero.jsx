import React from 'react';

export default function Hero() {
  return (
    <section style={{position:'relative',marginTop:32,borderRadius:24,overflow:'hidden',minHeight:420,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundImage:'url(/hypepad-banner.jpg)',backgroundSize:'cover',backgroundPosition:'center',padding:32,textAlign:'center',color:'#fff'}}>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg, rgba(15,17,26,0.55) 0%, rgba(15,17,26,0.9) 100%)'}}></div>
      <div style={{position:'relative',maxWidth:768}}>
        <h1 style={{fontSize:48,fontWeight:800,margin:0,lineHeight:1.1}}>Launch securely. Dominate the hype.</h1>
        <p style={{fontSize:18,margin:'16px 0 24px'}}>
          Next-gen multi-chain launchpad with meme coin tools, staking, graduated launches, and rug-proof launch intelligence. Built for creators and investors who demand speed and security.
        </p>
        <button style={{background:'#f59e0b',border:'none',padding:'14px 28px',borderRadius:999,fontWeight:700,cursor:'pointer'}}>Get Started</button>
      </div>
    </section>
  );
}
