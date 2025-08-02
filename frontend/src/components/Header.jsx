import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-[#0f111a] text-white shadow sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <img src="/logo-192.png" alt="HYPEPAD" className="h-8 w-auto" />
          <span className="font-bold text-lg tracking-wide">HYPEPAD</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 flex-1 ml-8">
          <a href="/" className="hover:underline text-sm">Home</a>
          <a href="/launch" className="hover:underline text-sm">Launch</a>
          <a href="/token" className="hover:underline text-sm">Token Creator</a>
          <a href="/meme" className="hover:underline text-sm">Meme Launcher</a>
          <a href="/faq" className="hover:underline text-sm">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 text-xs bg-[#1f2230] px-3 py-1 rounded-full">
            <span className="font-semibold">Live Projects:</span>
            <span>128</span>
            <span className="mx-1">•</span>
            <span className="font-semibold">Security Score:</span>
            <span>9.8</span>
          </div>
          <button className="ml-2 px-4 py-2 bg-gradient-to-r from-[#ff9c00] to-[#ff6600] rounded-full font-semibold text-black whitespace-nowrap shadow">
            Connect Wallet
          </button>
          <div className="md:hidden relative">
            <button aria-label="Menu" onClick={() => setOpen(o=>!o)} className="p-2 flex flex-col gap-1">
              <span className={open ? "block w-6 h-0.5 bg-white transform rotate-45 translate-y-1.5 transition" : "block w-6 h-0.5 bg-white transition"} />
              <span className={open ? "block w-6 h-0.5 bg-white opacity-0 transition" : "block w-6 h-0.5 bg-white transition"} />
              <span className={open ? "block w-6 h-0.5 bg-white transform -rotate-45 -translate-y-1.5 transition" : "block w-6 h-0.5 bg-white transition"} />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-[#1f2230] border border-gray-700 rounded-xl shadow-lg py-2 flex flex-col gap-2">
                <a href="/" className="px-4 py-2 hover:bg-[#22263f]">Home</a>
                <a href="/launch" className="px-4 py-2 hover:bg-[#22263f]">Launch</a>
                <a href="/token" className="px-4 py-2 hover:bg-[#22263f]">Token Creator</a>
                <a href="/meme" className="px-4 py-2 hover:bg-[#22263f]">Meme Launcher</a>
                <a href="/faq" className="px-4 py-2 hover:bg-[#22263f]">FAQ</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
