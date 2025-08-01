export default function HeroBanner() {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-16 max-w-[1200px] mx-auto gap-8"
      style={{ backgroundColor: '#111827' }}
    >
      <div className="flex-1 min-w-[280px]">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          The Future of Web3 Starts Here
        </h1>
        <p className="mt-3 text-lg text-gray-300 max-w-lg">
          Fuel Your Launch. Rule the Hype.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="/launch">
            <button className="px-6 py-3 bg-orange-500 rounded-full font-semibold shadow hover:brightness-105 transition">
              Launch Now
            </button>
          </a>
          <a href="/docs">
            <button className="px-6 py-3 border border-white rounded-full font-semibold text-white hover:bg-white/10 transition">
              View Docs
            </button>
          </a>
        </div>
      </div>

      <div className="flex-1 min-w-[220px] flex justify-center">
        <div
          className="relative w-full max-w-md rounded-2xl overflow-hidden"
          style={{
            backgroundImage: "url('/hypepad-banner.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 280,
            boxShadow: '0 25px 60px -10px rgba(255,140,0,0.3)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
        </div>
      </div>
    </section>
  );
}
