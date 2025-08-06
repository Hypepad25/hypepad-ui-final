const ReferralDashboard = ({ referrals = 42, earnings = '2.3 ETH', topReferrers = [] }) => (
  <section style={{padding:'40px 20px', background:'#0f111a', color:'#f5f5f5'}}>
    <div style={{maxWidth:1100, margin:'0 auto'}}>
      <h2 style={{fontSize:24, fontWeight:700}}>Referral Dashboard</h2>
      <div style={{display:'flex', flexWrap:'wrap', gap:20, marginTop:12}}>
        <div style={{flex:1, minWidth:220, background:'#1f2230', padding:16, borderRadius:12}}>
          <div style={{fontWeight:600}}>Total Referrals</div>
          <div style={{fontSize:32}}>{referrals}</div>
        </div>
        <div style={{flex:1, minWidth:220, background:'#1f2230', padding:16, borderRadius:12}}>
          <div style={{fontWeight:600}}>Earnings</div>
          <div style={{fontSize:32}}>{earnings}</div>
        </div>
        <div style={{flex:2, minWidth:220, background:'#1f2230', padding:16, borderRadius:12}}>
          <div style={{fontWeight:600}}>Top Referrers</div>
          <ul style={{marginTop:8, paddingLeft:16}}>
            {topReferrers.map((u,i)=><li key={i}>{u.name}: {u.score}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
export default ReferralDashboard;
