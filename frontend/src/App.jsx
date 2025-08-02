import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import SEO from '../components/SEO.jsx';
import Hero from '../components/Hero.jsx';

function Placeholder({ title }) {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <SEO title={title} />
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p>This is the {title} page. Content coming soon.</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <SEO />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div><Hero /></div>} />
          <Route path="/launchpad" element={<Placeholder title="Launchpad" />} />
          <Route path="/launchpad/token-creator" element={<Placeholder title="Token Creator" />} />
          <Route path="/launchpad/meme-coin" element={<Placeholder title="Meme Coin Launcher" />} />
          <Route path="/staking" element={<Placeholder title="Staking" />} />
          <Route path="/trending" element={<Placeholder title="Trending" />} />
          <Route path="/docs" element={<Placeholder title="Docs" />} />
          <Route path="/support" element={<Placeholder title="Support" />} />
          <Route path="/faq" element={<Placeholder title="FAQ" />} />
          <Route path="/legal" element={<Placeholder title="Legal" />} />
          <Route path="/terms" element={<Placeholder title="Terms" />} />
          <Route path="/privacy" element={<Placeholder title="Privacy" />} />
          <Route path="/disclaimers" element={<Placeholder title="Disclaimers" />} />
          <Route path="/partners" element={<Placeholder title="Partners" />} />
          <Route path="/comparison/pinksale" element={<Placeholder title="HYPEPAD vs PinkSale" />} />
          <Route path="/comparison/polkastarter" element={<Placeholder title="HYPEPAD vs Polkastarter" />} />
          <Route path="/comparison/trustpad" element={<Placeholder title="HYPEPAD vs TrustPad" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
