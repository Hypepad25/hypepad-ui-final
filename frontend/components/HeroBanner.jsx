export function HeroBanner() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-black text-white">
      <div
        className="absolute inset-0 -z-10"
        style={{
          width: '80%',
          height: '130%',
          backgroundImage: "url('/hypepad-banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          filter: 'blur(30px)',
          pointerEvents: 'none',
          transform: 'scale(1.2)',
        }}
      />
      {/* ...existing hero content... */}
    </section>
  );
}
