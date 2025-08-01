import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';

export default function Home() {
  return (
    <div style={{ background: '#0f111f', minHeight: '100vh' }}>
      <Navbar />
      <HeroBanner />
    </div>
  );
}
