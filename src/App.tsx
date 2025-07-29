import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <nav className="p-4 flex justify-between items-center border-b border-gray-800">
          <div className="text-orange-500 text-2xl font-bold">HYPEPAD</div>
          <div className="md:hidden">☰</div>
          <div className="hidden md:flex space-x-6">
            <Link to="/">Home</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;