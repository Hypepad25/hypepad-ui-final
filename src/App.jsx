import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routeConfig } from './routes/index.js';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <Routes>
        {routeConfig.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
