import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import TrendingSection from '../components/TrendingSection';

export default function Home() {
  return (
    <div style={{ background: '#111827', minHeight: '100vh', color: '#fff' }}>
      <Navbar />
      <HeroBanner />
      <TrendingSection />
    </div>
  );
}
