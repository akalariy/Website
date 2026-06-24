export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        <a href="#home" className="leading-none">
          <div className="text-4xl md:text-5xl font-black tracking-wider text-slate-900">
            SAPPHIRE
          </div>
          <div className="text-4xl md:text-5xl font-black tracking-wider text-blue-700">
            BERRIES
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 font-semibold text-lg">
          <a href="#home" className="hover:text-blue-700 transition">
            Home
          </a>

          <a href="#destinations" className="hover:text-blue-700 transition">
            Destinations
          </a>

          <a href="#how-it-works" className="hover:text-blue-700 transition">
            How It Works
          </a>

          <a href="#contact" className="hover:text-blue-700 transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}