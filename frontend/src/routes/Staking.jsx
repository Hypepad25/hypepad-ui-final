import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default function Staking() {
  return (
    <Layout seoProps={title: 'Staking - HYPEPAD', description: 'Placeholder for Staking page.'}>
      <Navbar />
      <div style={maxWidth:1000,margin:'60px auto',padding:'0 16px'}>
        <h1 style={fontSize:32,fontWeight:700,color:'#fff'}>Staking Page</h1>
        <p style={color:'#ccc'}>Content coming soon for Staking.</p>
      </div>
    </Layout>
  );
}
