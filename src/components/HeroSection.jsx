export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-black text-white">
      {/* Hero Banner Logo */}
      <img
        src="/hypepad-banner.png"
        alt="HYPEPAD"
        className="max-w-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mb-8"
        style={{ objectFit: 'contain' }}
      />
      {/* Wrapped text container */}
      <div className="text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Fuel Your Launch. Rule the Hype.
        </h1>
      </div>
    </section>
  );
}
