import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import Staking from './pages/Staking';
import Leaderboard from './pages/Leaderboard';
import Support from './pages/Support';
import Whitepaper from './pages/Whitepaper';
import Partners from './pages/Partners';
import './index.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const handleWalletConnect = () => {
    setWalletConnected(!walletConnected);
  };

  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-header">
          <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
          <button className="wallet-button" onClick={handleWalletConnect}>
            {walletConnected ? 'Connected' : 'Connect Wallet'}
          </button>
        </div>
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/create" onClick={() => setMenuOpen(false)}>Create</Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/staking" onClick={() => setMenuOpen(false)}>Staking</Link>
          <Link to="/leaderboard" onClick={() => setMenuOpen(false)}>Leaderboard</Link>
          <Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link>
          <Link to="/whitepaper" onClick={() => setMenuOpen(false)}>Whitepaper</Link>
          <Link to="/partners" onClick={() => setMenuOpen(false)}>Partners</Link>
        </div>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/support" element={<Support />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
