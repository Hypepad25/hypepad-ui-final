import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
// Page components
import LaunchpadPage from './pages/LaunchpadPage';
import TokenCreatorPage from './pages/TokenCreatorPage';
import MemeCreatorPage from './pages/MemeCreatorPage';
import StakingPage from './pages/StakingPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroBanner />} />
        <Route path="/launchpad" element={<LaunchpadPage />} />
        <Route path="/token-creator" element={<TokenCreatorPage />} />
        <Route path="/meme-creator" element={<MemeCreatorPage />} />
        <Route path="/staking" element={<StakingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
