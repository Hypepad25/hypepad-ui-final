import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default function KYC() {
  return (
    <Layout seoProps={title: 'KYC - HYPEPAD', description: 'Placeholder for KYC page.'}>
      <Navbar />
      <div style={maxWidth:1000,margin:'60px auto',padding:'0 16px'}>
        <h1 style={fontSize:32,fontWeight:700,color:'#fff'}>KYC Page</h1>
        <p style={color:'#ccc'}>Content coming soon for KYC.</p>
      </div>
    </Layout>
  );
}
