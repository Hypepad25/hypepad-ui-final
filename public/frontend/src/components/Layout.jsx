import SEO from './SEO';

export default function Layout({ children, seoProps }) {
  return (
    <div className="bg-[#111827] min-h-screen text-white">
      <SEO {...seoProps} />
      {children}
      <Footer />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-bold text-lg mb-2">HYPEPAD</div>
          <p className="text-sm">
            The future of Web3 starts here. Fuel your launch. Rule the hype.
          </p>
        </div>
        <div>
          <div className="font-bold mb-2">Links</div>
          <div className="flex flex-col gap-1 text-sm">
            <a href="/launch" className="hover:underline">Launch</a>
            <a href="/presale" className="hover:underline">Presale</a>
            <a href="/staking" className="hover:underline">Staking</a>
            <a href="/launch-token" className="hover:underline">Launch Token</a>
            <a href="/meme" className="hover:underline">Meme</a>
            <a href="/trending" className="hover:underline">Trending</a>
            <a href="/kyc" className="hover:underline">KYC/SAFU</a>
            <a href="/partners" className="hover:underline">Partners</a>
            <a href="/support" className="hover:underline">Support</a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-2">Legal</div>
          <p className="text-xs">
            <strong>Disclaimer:</strong> HYPEPAD is not financial advice. Crypto assets are volatile; do your own research. Use is governed by our <a href="/terms" className="underline">Terms</a> and <a href="/privacy" className="underline">Privacy Policy</a>.
          </p>
          <p className="text-xs mt-2">
            © {new Date().getFullYear()} HYPEPAD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
