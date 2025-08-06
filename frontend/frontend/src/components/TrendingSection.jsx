export default function TrendingSection() {
  return (
    <div style={{background:'#0f172a', padding:'60px 0'}}>
      <div style={{maxWidth:1000, margin:'0 auto', padding:'0 16px', display:'grid', gap:20}}>
        <div style={{background:'#1f2937', borderRadius:16, padding:20, color:'#fff', boxShadow:'0 30px 60px -10px rgba(0,0,0,0.3)'}}>
          <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap:10}}>
            <div>
              <div style={{fontSize:12, color:'#cbd5e1'}}>Trending Token</div>
              <div style={{fontSize:24, fontWeight:700}}>$HYPE</div>
            </div>
            <div style={{textAlign:'right'}}>
              <div style={{fontSize:12, color:'#cbd5e1'}}>Score</div>
              <div style={{fontSize:24, fontWeight:700}}>9.8</div>
            </div>
          </div>
          <div style={{marginTop:12}}>
            <div style={{background:'#334155', borderRadius:999, height:8, overflow:'hidden'}}>
              <div style={{width:'75%', height:8, borderRadius:999, background:'#ff8c00'}}/>
            </div>
            <div style={{fontSize:12, color:'#94a3b8', marginTop:6}}>
              Graduation progress: 75%
            </div>
          </div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:16}}>
          {[
            {title:'Meme Coin Creator', desc:'Custom supply, bonding curve, graduation fee logic, and rug-proof LP burn.', badge:'LAUNCH'},
            {title:'Anti-bot / Wallet Monitoring', desc:'Cooldown timers, soft fingerprinting, and abuse prevention for devs and traders.', badge:'SECURE'},
            {title:'Paid & Organic Trending', desc:'Select slot durations, promote tokens, and show real-time ranking.', badge:'TRENDING'},
            {title:'Tiered Rewards', desc:'Flexible lock durations with APYs and penalty enforcement.', badge:'STAKING'},
          ].map(f=>(
            <div key={f.title} style={{background:'#1f2937', borderRadius:16, padding:16, color:'#fff', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
              <div>
                <div style={{fontSize:18, fontWeight:700}}>{f.title}</div>
                <div style={{fontSize:14, color:'#94a3b8', marginTop:4}}>{f.desc}</div>
              </div>
              <div style={{marginTop:12}}>
                <span style={{background:'#ff8c00', padding:'6px 12px', borderRadius:999, fontSize:10, fontWeight:700, color:'#fff'}}>{f.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
