import Navbar from './components/Navbar';

export default function App() {
  return (
    <div style={{background:'#0f111a', color:'#f5f5f5', minHeight:'100vh', fontFamily:'system-ui,-apple-system,BlinkMacSystemFont,sans-serif'}}>
      <Navbar />
      <main style={{padding:'40px 20px', maxWidth: '1100px', margin: '0 auto'}}>
        <section style={{display:'flex', flexWrap:'wrap', gap:'30px', alignItems:'center', justifyContent:'space-between'}}>
          <div style={{flex:1, minWidth:280}}>
            <h1 style={{fontSize:'2.2rem', margin:0}}>The Future of Web3 Starts Here</h1>
            <p style={{margin:'10px 0', fontSize:'1rem', lineHeight:1.4}}>
              Secure, launch-native token launches + multi-chain innovation with HYPEPAD.
            </p>
            <a href="/presale" style={{display:'inline-block', marginTop:10, background:'#ff8600', padding:'14px 24px', borderRadius:999, fontWeight:700, color:'#000'}}>Join $HYPE Presale</a>
          </div>
          <div style={{flex:1, minWidth:280}}>
            <div style={{background:'#1f2230', padding:16, borderRadius:16}}>
              <img src="/hypepad-banner.jpg" alt="HYPEPAD Banner" style={{width:'100%', borderRadius:12}} />
            </div>
          </div>
        </section>
        <section style={{marginTop:40}}>
          <h2>Why HYPEPAD</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:16, marginTop:16}}>
            <div style={{background:'#1f2230', padding:16, borderRadius:12, boxShadow:'0 10px 30px -10px rgba(255,134,0,0.2)'}}>
              <strong>Multi-chain</strong>
              <p>Solana + EVM support</p>
            </div>
            <div style={{background:'#1f2230', padding:16, borderRadius:12, boxShadow:'0 10px 30px -10px rgba(255,134,0,0.2)'}}>
              <strong>Rug-Proof Graduation</strong>
              <p>Mandatory LP burn at $65K cap</p>
            </div>
            <div style={{background:'#1f2230', padding:16, borderRadius:12, boxShadow:'0 10px 30px -10px rgba(255,134,0,0.2)'}}>
              <strong>Low Fees</strong>
              <p>1% trade fees, competitive launch pricing</p>
            </div>
            <div style={{background:'#1f2230', padding:16, borderRadius:12, boxShadow:'0 10px 30px -10px rgba(255,134,0,0.2)'}}>
              <strong>Security</strong>
              <p>Anti-bot, KYC badges, audits</p>
            </div>
          </div>
        </section>
      </main>
      <footer style={{padding:'40px 20px', marginTop:40, borderTop:'1px solid rgba(255,255,255,0.1)', fontSize:14, color:'#aaa'}}>
        <div style={{display:'flex', flexWrap:'wrap', gap:30, maxWidth:1100, margin:'0 auto'}}>
          <div style={{flex:1, minWidth:200}}>
            <div style={{fontWeight:700, fontSize:16}}>HYPEPAD</div>
            <div>Contact: <a href="mailto:contact@hypepad.app" style={{color:'#fff', textDecoration:'underline'}}>contact@hypepad.app</a></div>
          </div>
          <div style={{flex:1, minWidth:200}}>
            <div><a href="/terms" style={{color:'#fff', textDecoration:'none'}}>Terms of Service</a></div>
            <div><a href="/privacy" style={{color:'#fff', textDecoration:'none'}}>Privacy Policy</a></div>
            <div><a href="/disclaimer" style={{color:'#fff', textDecoration:'none'}}>Legal Disclaimer</a></div>
          </div>
          <div style={{flex:1, minWidth:200, maxWidth:300}}>
            <div>Legal: Users must conduct their own due diligence. HYPEPAD is not financial advice. Token launches are subject to jurisdictional compliance.</div>
          </div>
        </div>
        <div style={{textAlign:'center', marginTop:20}}>&copy; 2025 HYPEPAD. All rights reserved.</div>
      </footer>
    </div>
  );
}
