export default function HeroBanner() {
  return (
    <section
      className="relative flex items-center justify-center w-full"
      style={{
        backgroundImage: "url('/hypepad-banner.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", // Prevent stretching
        backgroundPosition: "center",
        minHeight: "400px", // Adjust hero height
        maxHeight: "500px", // Optional: prevent oversized scaling
      }}
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content Layer */}
      <div className="relative z-10 text-center p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          The Future of Web3 Starts Here
        </h1>
        <p className="text-lg text-gray-200 mb-4">
          Fuel Your Launch. Rule the Hype.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/launch">
            <button className="px-6 py-3 bg-orange-500 rounded-2xl font-semibold">
              Launch Now
            </button>
          </a>
          <a href="/docs">
            <button className="px-6 py-3 border border-white rounded-2xl font-semibold text-white">
              View Docs
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
