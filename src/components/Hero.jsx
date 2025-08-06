export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center px-6 py-20 bg-dark-background">
      <div className="md:w-1/2 max-w-lg break-words">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Launch. Graduate. Grow.
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          HYPEPAD is a multi-chain, rug-proof launchpad aligning incentives between creators, investors, and builders. Back the ecosystem early via the $HYPE Presale.
        </p>
        <div className="flex space-x-4">
          <a href="/presale" className="bg-orange-500 text-dark-background px-6 py-3 rounded-full font-semibold hover:bg-orange-600">
            Join $HYPE Presale
          </a>
          <a href="/launch" className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700">
            View Launch / IDO
          </a>
        </div>
      </div>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src="/hypepad-banner.jpg" alt="HYPEPAD banner" className="w-full h-auto object-contain" />
      </div>
    </section>
);
}
