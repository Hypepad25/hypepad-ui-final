import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO.jsx';

export default function ComparisonPinkSale() {
  const title = "HYPEPAD vs PinkSale: Secure Meme Coin Launchpad Comparison";
  const description = "Compare HYPEPAD and PinkSale on security, multi-chain support, and launch intelligence. See why creators choose HYPEPAD.";
  return (
    <Layout seoProps={ title, description }>
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="mb-4">A head-to-head breakdown between HYPEPAD and PinkSale to help creators and investors choose the most secure, multi-chain launchpad.</p>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Overview of PinkSale</h2>
          <p>PinkSale is a popular launchpad for token projects, often used for initial offerings and community-driven launches.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Core Features</h2>
          <ul className="list-disc ml-5">
            <li>Token launches</li>
            <li>Liquidity locking</li>
            <li>Community staking</li>
            <li>Basic anti-rug measures</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Why HYPEPAD Stands Out</h2>
          <ul className="list-disc ml-5">
            <li>Advanced rug-proof intelligence</li>
            <li>Graduated launch control</li>
            <li>Multi-chain native support</li>
            <li>Stronger analytics and security defaults</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>While PinkSale offers some capabilities, HYPEPAD’s rug-proof intelligence, graduated launches, and multi-chain support make it the superior choice for serious meme coin projects.</p>
        </section>
      </main>
    </Layout>
  );
}
