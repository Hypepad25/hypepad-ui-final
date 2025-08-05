export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-black text-white">
      {/* Hero Banner Logo */}
      <img
        src="/hypepad-banner.png"
        alt="HYPEPAD"
        className="max-w-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mb-8"
        style={{ objectFit: 'contain' }}
      />
      {/* ...rest of your hero content... */}
    </section>
  );
}
