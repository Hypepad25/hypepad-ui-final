import React from 'react';
import banner from '../assets/banner.png';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={banner} alt="HYPEPAD Banner" style={{ maxWidth: '100%', borderRadius: '10px' }} />
      <h1 style={{ color: 'orange', marginTop: '1rem' }}>Fuel Your Launch. Rule the Hype.</h1>
    </div>
  );
};

export default Home;
