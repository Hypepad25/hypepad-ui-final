import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import SEO from './components/SEO.jsx';
import Hero from './components/Hero.jsx';
import Placeholder from './components/Placeholder.jsx';
import ComparisonPinkSale from './pages/comparison/ComparisonPinkSale.jsx';
import ComparisonPolkastarter from './pages/comparison/ComparisonPolkastarter.jsx';
import ComparisonTrustPad from './pages/comparison/ComparisonTrustPad.jsx';

export default function App(){
  return (
    <>
      <SEO />
      <Navbar />
      <Hero />
      <div style={{padding:'1rem'}}>
        <Routes>
          <Route path="/" element={<Placeholder title='Home' />} />
          <Route path="/launchpad" element={<Placeholder title='Launchpad' />} />
          <Route path="/launch" element={<Placeholder title='Launch' />} />
          <Route path="/launchpad/token-creator" element={<Placeholder title='Token Creator' />} />
          <Route path="/launchpad/meme-coin" element={<Placeholder title='Meme Coin Launcher' />} />
          <Route path="/staking" element={<Placeholder title='Staking' />} />
          <Route path="/trending" element={<Placeholder title='Trending' />} />
          <Route path="/docs" element={<Placeholder title='Docs' />} />
          <Route path="/support" element={<Placeholder title='Support' />} />
          <Route path="/faq" element={<Placeholder title='FAQ' />} />
          <Route path="/legal" element={<Placeholder title='Legal' />} />
          <Route path="/terms" element={<Placeholder title='Terms' />} />
          <Route path="/privacy" element={<Placeholder title='Privacy' />} />
          <Route path="/disclaimers" element={<Placeholder title='Disclaimers' />} />
          <Route path="/partners" element={<Placeholder title='Partners' />} />
          <Route path="/comparison/pinksale" element={<ComparisonPinkSale />} />
          <Route path="/comparison/polkastarter" element={<ComparisonPolkastarter />} />
          <Route path="/comparison/trustpad" element={<ComparisonTrustPad />} />
        </Routes>
      </div>
    </>
  );
}
