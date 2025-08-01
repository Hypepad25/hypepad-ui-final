import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default function Support() {
  return (
    <Layout seoProps={title: 'Support - HYPEPAD', description: 'Placeholder for Support page.'}>
      <Navbar />
      <div style={maxWidth:1000,margin:'60px auto',padding:'0 16px'}>
        <h1 style={fontSize:32,fontWeight:700,color:'#fff'}>Support Page</h1>
        <p style={color:'#ccc'}>Content coming soon for Support.</p>
      </div>
    </Layout>
  );
}
