
import React from 'react';
import bannerImage from '../assets/hypepad-banner.jpg';

const Home = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 md:px-12 py-10 bg-black min-h-screen">
      <img
        src={bannerImage}
        alt="HYPEPAD Banner"
        className="w-full max-h-[300px] object-cover rounded-2xl shadow-lg"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-white mt-8">Crafted for Creators. Engineered for Trust.</h1>
      <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl">
        Welcome to HYPEPAD – the ultimate launch platform for next-generation tokens, NFT mints, DAOs, and more.
      </p>
    </div>
  );
};

export default Home;
