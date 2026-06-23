import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="text-2xl font-black tracking-wide">
          SapphireBerries
        </a>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#home" className="hover:text-blue-700">Home</a>
          <a href="#destinations" className="hover:text-blue-700">Destinations</a>
          <a href="#how-it-works" className="hover:text-blue-700">How It Works</a>
          <a href="#founder" className="hover:text-blue-700">Founder Story</a>
        </div>
      </div>
    </nav>
  );
}