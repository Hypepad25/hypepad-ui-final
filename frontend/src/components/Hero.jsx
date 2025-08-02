import React from 'react';

export default function Hero() {
  return (
    <section className="relative mt-8 rounded-2xl overflow-hidden min-h-[420px] flex flex-col items-center justify-center bg-[url('/hypepad-banner.jpg')] bg-center bg-cover text-center px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,17,26,0.55)] to-[rgba(15,17,26,0.9)]"></div>
      <div className="relative max-w-2xl">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Launch securely. Dominate the hype.
        </h1>
        <p className="text-lg mb-6">
          Next-gen multi-chain launchpad with meme coin tools, staking, graduated launches, and rug-proof launch intelligence. Built for creators and investors who demand speed and security.
        </p>
        <div className="inline-block">
          <button className="bg-accent text-black px-6 py-3 rounded-full font-semibold uppercase tracking-wider hover:brightness-105 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
