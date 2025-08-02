import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO.jsx';

export default function ComparisonPolkastarter() {
  const title = "HYPEPAD vs Polkastarter: Secure Meme Coin Launchpad Comparison";
  const description = "Compare HYPEPAD and Polkastarter on security, multi-chain support, and launch intelligence. See why creators choose HYPEPAD.";
  return (
    <Layout seoProps={ title, description }>
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="mb-4">A head-to-head breakdown between HYPEPAD and Polkastarter to help creators and investors choose the most secure, multi-chain launchpad.</p>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Overview of Polkastarter</h2>
          <p>Polkastarter focuses on cross-chain token pools and fundraising, enabling projects to raise capital via decentralized pools.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Core Features</h2>
          <ul className="list-disc ml-5">
            <li>Cross-chain pools</li>
            <li>Decentralized fundraising</li>
            <li>Whitelist launch mechanisms</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Why HYPEPAD Stands Out</h2>
          <ul className="list-disc ml-5">
            <li>Specialized meme coin tooling</li>
            <li>Graduated launch flow</li>
            <li>Integrated rug-proof launch intelligence</li>
            <li>Simpler UX for creators</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>While Polkastarter offers some capabilities, HYPEPAD’s rug-proof intelligence, graduated launches, and multi-chain support make it the superior choice for serious meme coin projects.</p>
        </section>
      </main>
    </Layout>
  );
}
