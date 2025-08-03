// frontend/src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-r from-[#0f172a] to-[#1f2235] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <img
            src="/rocket-logo.svg"
            alt="HYPEPAD"
            className="h-24 w-auto"
            style={{ display: 'block' }}
          />
        </div>

        <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-tight text-white mb-4 break-words max-w-full">
          Launch securely. Dominate the hype.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Next-gen multi-chain launchpad with meme coin tools, staking, graduated launches, and rug-proof launch intelligence. Built for creators and investors who demand speed and security.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/launchpad"
            className="px-8 py-4 bg-accent text-black font-semibold rounded-full uppercase tracking-wider shadow hover:brightness-105 transition"
          >
            Get Started
          </a>
          <a
            href="/docs"
            className="px-8 py-4 border border-white text-white font-semibold rounded-full uppercase tracking-wider hover:bg-white hover:text-black transition"
          >
            View Docs
          </a>
        </div>
      </div>
    </section>
  );
}
