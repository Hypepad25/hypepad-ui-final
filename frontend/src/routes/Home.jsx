import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
// Import your current trending/features section if it's a component
import TrendingSection from '../components/TrendingSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroBanner />

      {/* Keep your existing Trending + Features section */}
      <TrendingSection />
    </div>
  );
}
