import { Menu, SunMedium } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 grid place-items-center shadow-sm ring-1 ring-black/10">
            <SunMedium className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-lg font-extrabold tracking-tight text-emerald-700">Energie Egypt</p>
            <p className="text-xs text-gray-500 -mt-0.5">Compare power & save</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#compare" className="hover:text-emerald-700 transition-colors">Compare</a>
          <a href="#how" className="hover:text-emerald-700 transition-colors">How it works</a>
          <a href="#why" className="hover:text-emerald-700 transition-colors">Why us</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors">
            Get started
          </button>
          <button className="md:hidden p-2 rounded-lg hover:bg-black/5">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
