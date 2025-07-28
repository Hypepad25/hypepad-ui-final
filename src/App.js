import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <nav className={menuOpen ? 'expanded' : ''}>
        <div className="nav-left">HYPEPAD</div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/staking">Staking</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/support">Support</Link>
          <Link to="/whitepaper">Whitepaper</Link>
          <Link to="/partners">Partners</Link>
        </div>
      </nav>
      <div className="wallet-button">Connect Wallet</div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
