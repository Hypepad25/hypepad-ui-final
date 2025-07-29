
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Launch from './pages/Launch';
import Token from './pages/Token';
import MemeLaunch from './pages/MemeLaunch';
import Staking from './pages/Staking';
import Support from './pages/Support';
import Whitepaper from './pages/Whitepaper';
import Partners from './pages/Partners';
import './index.css';

const App = () => (
  <Router>
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch" element={<Launch />} />
        <Route path="/token" element={<Token />} />
        <Route path="/meme-launch" element={<MemeLaunch />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/support" element={<Support />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </div>
  </Router>
);

export default App;
