import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default function Presale() {
  return (
    <Layout seoProps={title: 'Presale - HYPEPAD', description: 'Placeholder for Presale page.'}>
      <Navbar />
      <div style={maxWidth:1000,margin:'60px auto',padding:'0 16px'}>
        <h1 style={fontSize:32,fontWeight:700,color:'#fff'}>Presale Page</h1>
        <p style={color:'#ccc'}>Content coming soon for Presale.</p>
      </div>
    </Layout>
  );
}
