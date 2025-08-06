import { useState } from 'react';

const steps = [
  'Select Chain & Token Type',
  'Configure Tokenomics',
  'Set Graduation Parameters',
  'Enable Security / KYC',
  'Launch & Promote'
];

const OnboardingWizard = () => {
  const [current, setCurrent] = useState(0);
  return (
    <section style={{padding:'40px 20px', background:'#1a1f3a', color:'#f5f5f5'}}>
      <div style={{maxWidth:900, margin:'0 auto'}}>
        <h2 style={{fontSize:24, fontWeight:700}}>Launch Token Wizard</h2>
        <div style={{display:'flex', gap:10, marginTop:16, flexWrap:'wrap'}}>
          {steps.map((s,i)=>(
            <div key={i} style={{
              flex:1,
              minWidth:120,
              padding:12,
              borderRadius:8,
              background: i===current ? '#ff8600' : '#1f2230',
              color: i===current ? '#0f111a' : '#f5f5f5',
              fontWeight:600,
              cursor:'pointer'
            }} onClick={()=>setCurrent(i)}>
              {s}
            </div>
          ))}
        </div>
        <div style={{marginTop:24}}>
          <p>Step {current+1}: {steps[current]}</p>
          <div style={{marginTop:12, background:'#0f111a', padding:16, borderRadius:8}}>
            {/* Insert form fields relevant to step here */}
            <div style={{opacity:0.8}}>Form fields for "{steps[current]}" go here.</div>
          </div>
        </div>
      </div>
    </section>
);
};

export default OnboardingWizard;
