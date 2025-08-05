const InvestorPitch = () => (
  <section style={{background:'linear-gradient(135deg,#0f111a,#1f2230)', padding:'60px 20px', color:'#f5f5f5'}}>
    <div style={{maxWidth:1100, margin:'0 auto'}}>
      <h2 style={{fontSize:32, fontWeight:700, marginBottom:12}}>Why Invest in HYPEPAD?</h2>
      <p style={{fontSize:16, marginBottom:20}}>
        HYPEPAD solves the fragmented and insecure token launch process by offering a unified, multi-chain, rug-proof launchpad built for creators and investors. 
      </p>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:16}}>
        <div style={{background:'#1f2230', padding:20, borderRadius:12, boxShadow:'0 20px 40px -10px rgba(255,134,0,0.25)'}}>
          <h3 style={{margin:0}}>Security First</h3>
          <p style={{marginTop:6}}>Mandatory LP burn, anti-rug graduation, KYC/SAFU badges, and real-time risk scoring.</p>
        </div>
        <div style={{background:'#1f2230', padding:20, borderRadius:12, boxShadow:'0 20px 40px -10px rgba(255,134,0,0.25)'}}>
          <h3 style={{margin:0}}>Multi-Chain Reach</h3>
          <p style={{marginTop:6}}>Launch on Solana and EVM chains from one dashboard, maximizing audience and liquidity access.</p>
        </div>
        <div style={{background:'#1f2230', padding:20, borderRadius:12, boxShadow:'0 20px 40px -10px rgba(255,134,0,0.25)'}}>
          <h3 style={{margin:0}}>Growth Engine</h3>
          <p style={{marginTop:6}}>Paid & manual trending, referral commissions, KOL partnerships, and a creator spotlight system.</p>
        </div>
        <div style={{background:'#1f2230', padding:20, borderRadius:12, boxShadow:'0 20px 40px -10px rgba(255,134,0,0.25)'}}>
          <h3 style={{margin:0}}>Network Effects</h3>
          <p style={{marginTop:6}}>Affiliate system and graduated project promotion create compounding visibility for creators and investors.</p>
        </div>
      </div>
    </div>
  </section>
);
export default InvestorPitch;
