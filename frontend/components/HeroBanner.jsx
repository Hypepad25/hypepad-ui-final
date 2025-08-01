export default function HeroBanner() {
  return (
    <section
      className="relative flex items-center justify-center w-full"
      style={{
        backgroundImage: "url('/hypepad-banner.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: '550px',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3 leading-tight">
          The Future of Web3 Starts Here
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Fuel Your Launch. Rule the Hype.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/launch">
            <button className="px-6 py-3 bg-orange-500 rounded-2xl font-semibold shadow hover:brightness-105 transition">
              Launch Now
            </button>
          </a>
          <a href="/docs">
            <button className="px-6 py-3 border border-white rounded-2xl font-semibold text-white hover:bg-white/10 transition">
              View Docs
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
