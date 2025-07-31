export default function HeroBanner() {
  return (
    <section
      className="w-full bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/hypepad-banner.jpg')",
        minHeight: '300px',
      }}
    >
      <div className="bg-black bg-opacity-60 p-6 rounded-2xl text-center max-w-2xl">
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
