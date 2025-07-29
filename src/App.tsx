import React from 'react';
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
  return (
    <Router>
      <div className="navbar">
        <div className="navbar-left">HYPEPAD</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/staking">Staking</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/support">Support</Link>
          <Link to="/whitepaper">Whitepaper</Link>
          <Link to="/partners">Partners</Link>
        </nav>
        <div className="connect-wallet">Connect Wallet</div>
      </div>
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
    </Router>
  );
};

export default App;
