// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Presale from './routes/Presale.jsx';
import Staking from './routes/Staking.jsx';
import LaunchToken from './routes/LaunchToken.jsx';
import LaunchMeme from './routes/LaunchMeme.jsx';
import AdminPanel from './routes/AdminPanel.jsx';
import KYC from './routes/KYC.jsx';
import Trending from './routes/Trending.jsx';
import Airdrop from './routes/Airdrop.jsx';
import Support from './routes/Support.jsx';
import Partner from './routes/Partner.jsx';
import Portfolio from './routes/Portfolio.jsx';
import TokenPage from './routes/TokenPage.jsx';
import PresaleLanding from './routes/PresaleLanding.jsx';
import ConnectWallet from './components/ConnectWallet.jsx';

const Navbar = () => (
  <div style={{
    display: 'flex',
    gap: '1rem',
    padding: '0.75rem 1rem',
    background: '#0f0f17',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'system-ui, sans-serif',
    position: 'sticky',
    top: 0,
    zIndex: 100
  }}>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'orange' }}>HYPEPAD</div>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/presale" style={{ color: '#fff', textDecoration: 'none' }}>Presale</Link>
      <Link to="/staking" style={{ color: '#fff', textDecoration: 'none' }}>Staking</Link>
      <Link to="/launch-token" style={{ color: '#fff', textDecoration: 'none' }}>Launch Token</Link>
      <Link to="/launch-meme" style={{ color: '#fff', textDecoration: 'none' }}>Meme</Link>
      <Link to="/trending" style={{ color: '#fff', textDecoration: 'none' }}>Trending</Link>
    </div>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ConnectWallet />
    </div>
  </div>
);

export default function App() {
  return (
    <div style={{ background: '#0f0f17', minHeight: '100vh', color: '#e5e5e5' }}>
      <Router>
        <Navbar />
        <div style={{ padding: '1rem', fontFamily: 'system-ui, sans-serif' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presale" element={<Presale />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/launch-token" element={<LaunchToken />} />
            <Route path="/launch-meme" element={<LaunchMeme />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/kyc" element={<KYC />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/airdrop" element={<Airdrop />} />
            <Route path="/support" element={<Support />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/token/:id" element={<TokenPage />} />
            <Route path="/presale-landing" element={<PresaleLanding />} />
            <Route path="*" element={<div>404: Page not found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
