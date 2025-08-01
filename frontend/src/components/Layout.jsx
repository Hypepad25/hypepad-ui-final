import SEO from './SEO';

export default function Layout({children, seoProps}) {
  return (
    <div style={{background:'#0f111f', minHeight:'100vh', color:'#fff', fontFamily:'system-ui,-apple-system,BlinkMacSystemFont,sans-serif'}}>
      <SEO {...seoProps}/>
      {children}
      <Footer/>
    </div>
  );
}

export function Footer(){
  return (
    <footer style={{background:'#0f172a', padding:'40px 20px', color:'#ccc', fontSize:12}}>
      <div style={{maxWidth: '1000px', margin:'0 auto', display:'flex', flexWrap:'wrap', gap:30}}>
        <div style={{flex:'1 1 200px'}}>
          <div style={{fontWeight:700, marginBottom:8}}>HYPEPAD</div>
          <div>The future of Web3 starts here. Fuel your launch. Rule the hype.</div>
        </div>
        <div style={{flex:'1 1 200px'}}>
          <div style={{fontWeight:700, marginBottom:8}}>Links</div>
          <div style={{display:'flex', flexDirection:'column', gap:4}}>
            {['Launch','Presale','Staking','Launch Token','Meme','Trending','KYC/SAFU','Partners','Support'].map(l=>(
              <a key={l} href={'/'+l.toLowerCase().replace(/\s+/g,'-').replace('/','') } style={{color:'#fff'}}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{flex:'1 1 200px'}}>
          <div style={{fontWeight:700, marginBottom:8}}>Legal</div>
          <div style={{marginBottom:6}}>
            <strong>Disclaimer:</strong> HYPEPAD is not financial advice. Crypto assets are volatile; do your own research. Use is governed by our <a href="/terms" style={{color:'#fff'}}>Terms</a> and <a href="/privacy" style={{color:'#fff'}}>Privacy Policy</a>.
          </div>
          <div>© {new Date().getFullYear()} HYPEPAD. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
