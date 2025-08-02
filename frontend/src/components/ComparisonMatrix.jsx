const ComparisonMatrix = () => (
  <section style={{padding:'60px 20px', maxWidth:1100, margin:'0 auto'}}>
    <h2 style={{fontSize:28, fontWeight:700, marginBottom:16}}>HYPEPAD vs Competitors</h2>
    <div style={{overflowX:'auto'}}>
      <table style={{width:'100%', borderCollapse:'collapse', minWidth:700}}>
        <thead>
          <tr>
            <th style={th}>Feature</th>
            <th style={th}>HYPEPAD</th>
            <th style={th}>PinkSale</th>
            <th style={th}>Pump.fun</th>
            <th style={th}>Bonk.fun</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Fees', 'Lower & competitive', 'Higher', 'Trade-based', 'Trade-based'],
            ['Graduation', 'Rug-proof with mandatory LP burn', 'No', 'No', 'No'],
            ['Multi-Chain', 'Solana + EVM', 'Mostly EVM', 'EVM', 'Solana'],
            ['KYC/SAFU', 'Yes (customizable)', 'Limited', 'No', 'No'],
            ['Trending', 'Paid + Manual', 'Paid', 'Organic', 'Organic'],
            ['Referral', 'Commission system', 'Limited', 'None', 'None']
          ].map((row, i) => (
            <tr key={i} style={{borderTop:'1px solid rgba(255,255,255,0.1)'}}>
              <td style={td}>{row[0]}</td>
              <td style={td}>{row[1]}</td>
              <td style={td}>{row[2]}</td>
              <td style={td}>{row[3]}</td>
              <td style={td}>{row[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

const th = {
  textAlign:'left', padding:'12px', background:'#1f2230', fontWeight:600, position:'sticky', top:0
};
const td = {
  padding:'12px', background:'#0f111a'
};

export default ComparisonMatrix;
