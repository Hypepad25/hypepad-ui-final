import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default function LaunchToken() {
  return (
    <Layout seoProps={title: 'LaunchToken - HYPEPAD', description: 'Placeholder for LaunchToken page.'}>
      <Navbar />
      <div style={maxWidth:1000,margin:'60px auto',padding:'0 16px'}>
        <h1 style={fontSize:32,fontWeight:700,color:'#fff'}>LaunchToken Page</h1>
        <p style={color:'#ccc'}>Content coming soon for LaunchToken.</p>
      </div>
    </Layout>
  );
}
