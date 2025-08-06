import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default function Launch() {
  return (
    <Layout seoProps={title: 'Launch - HYPEPAD', description: 'Placeholder for Launch page.'}>
      <Navbar />
      <div style={maxWidth:1000,margin:'60px auto',padding:'0 16px'}>
        <h1 style={fontSize:32,fontWeight:700,color:'#fff'}>Launch Page</h1>
        <p style={color:'#ccc'}>Content coming soon for Launch.</p>
      </div>
    </Layout>
  );
}
