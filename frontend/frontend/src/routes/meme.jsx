import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default function Meme() {
  return (
    <Layout seoProps={title: 'Meme - HYPEPAD', description: 'Placeholder for Meme page.'}>
      <Navbar />
      <div style={maxWidth:1000,margin:'60px auto',padding:'0 16px'}>
        <h1 style={fontSize:32,fontWeight:700,color:'#fff'}>Meme Page</h1>
        <p style={color:'#ccc'}>Content coming soon for Meme.</p>
      </div>
    </Layout>
  );
}
