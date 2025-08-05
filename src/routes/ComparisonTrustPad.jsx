import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO.jsx';

export default function ComparisonTrustPad() {
  const title = "HYPEPAD vs TrustPad: Secure Meme Coin Launchpad Comparison";
  const description = "Compare HYPEPAD and TrustPad on security, multi-chain support, and launch intelligence. See why creators choose HYPEPAD.";
  return (
    <Layout seoProps={ title, description }>
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="mb-4">A head-to-head breakdown between HYPEPAD and TrustPad to help creators and investors choose the most secure, multi-chain launchpad.</p>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Overview of TrustPad</h2>
          <p>TrustPad is a decentralized launchpad offering IDO and token launch services with community-focused vetting.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Core Features</h2>
          <ul className="list-disc ml-5">
            <li>IDO launches</li>
            <li>Community vetting</li>
            <li>Staking integrations</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Why HYPEPAD Stands Out</h2>
          <ul className="list-disc ml-5">
            <li>Rug-proof intelligence baked in</li>
            <li>Flexible graduated launches</li>
            <li>Multi-chain fee abstraction</li>
            <li>Unified dashboard experience</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>While TrustPad offers some capabilities, HYPEPAD’s rug-proof intelligence, graduated launches, and multi-chain support make it the superior choice for serious meme coin projects.</p>
        </section>
      </main>
    </Layout>
  );
}
