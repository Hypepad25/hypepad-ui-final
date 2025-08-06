import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default function Partners() {
  return (
    <Layout seoProps={title: 'Partners - HYPEPAD', description: 'Placeholder for Partners page.'}>
      <Navbar />
      <div style={maxWidth:1000,margin:'60px auto',padding:'0 16px'}>
        <h1 style={fontSize:32,fontWeight:700,color:'#fff'}>Partners Page</h1>
        <p style={color:'#ccc'}>Content coming soon for Partners.</p>
      </div>
    </Layout>
  );
}
