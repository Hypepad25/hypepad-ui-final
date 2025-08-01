import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default function Trending() {
  return (
    <Layout seoProps={title: 'Trending - HYPEPAD', description: 'Placeholder for Trending page.'}>
      <Navbar />
      <div style={maxWidth:1000,margin:'60px auto',padding:'0 16px'}>
        <h1 style={fontSize:32,fontWeight:700,color:'#fff'}>Trending Page</h1>
        <p style={color:'#ccc'}>Content coming soon for Trending.</p>
      </div>
    </Layout>
  );
}
