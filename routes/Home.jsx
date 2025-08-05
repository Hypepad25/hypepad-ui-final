import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import TrendingSection from '../components/TrendingSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <Navbar />
      <HeroBanner />
      <TrendingSection />
    </div>
  );
}
