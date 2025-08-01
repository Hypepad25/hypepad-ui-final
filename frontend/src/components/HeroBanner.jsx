export default function HeroBanner() {
  return (
    <section
      className="relative flex items-center justify-center w-full"
      style={{
        backgroundColor: '#111827',
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
          The Future of Web3 Starts Here
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-5">
          Fuel Your Launch. Rule the Hype.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a href="/launch">
            <button className="px-5 py-2 bg-orange-500 rounded-full font-semibold shadow">
              Launch Now
            </button>
          </a>
          <a href="/docs">
            <button className="px-5 py-2 border border-white rounded-full font-semibold text-white">
              View Docs
            </button>
          </a>
        </div>
        <div>
          <img
            src="/hypepad-banner-transparent.png"
            alt="HypePad Banner"
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'inline-block',
            }}
          />
        </div>
      </section>
  );
}
