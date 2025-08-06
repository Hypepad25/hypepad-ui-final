const HeroSection = () => (
  <section className="hero">
    <div className="container" style={{display:'flex', flexWrap:'wrap', gap:40, padding:'80px 16px', alignItems:'center'}}>
      <div style={{flex:1, minWidth:280}}>
        <h1>The Future of Web3 Starts Here</h1>
        <p style={{margin:'12px 0'}}>Secure, launch-native token launches + multi-chain innovation with HYPEPAD.</p>
        <a href="/presale" style={{
          display:'inline-block',
          background:'#ff8600',
          padding:'16px 28px',
          borderRadius:999,
          fontWeight:700,
          color:'#000',
          marginTop:10,
          textDecoration:'none'
        }}>Join $HYPE Presale</a>
      </div>
      <div style={{flex:1, minWidth:280}}>
        <div style={{
          background:'#1f2230',
          borderRadius:16,
          padding:8,
          overflow:'hidden'
        }}>
          <img src="/hypepad-banner.jpg" alt="HYPEPAD Banner" style={{width:'100%', display:'block', borderRadius:12}} />
        </div>
      </div>
    </div>
  </section>
);
export default HeroSection;
