import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import TrendingSection from '../components/TrendingSection';

export default function Home() {
  return (
    <Layout seoProps={{ title: 'HYPEPAD', description: 'Launch securely, dominate the hype.' }}>
      <Navbar />
      <HeroBanner />
      <TrendingSection />
    </Layout>
  );
}
