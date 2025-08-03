import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Presale from './pages/Presale.jsx';
import SEO from './components/SEO.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <SEO />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/presale" element={<Presale />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
