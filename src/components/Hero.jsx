import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-1/2 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-amber-300 via-yellow-200 to-emerald-200 blur-3xl opacity-60" />
        <div className="absolute -right-1/3 -top-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-emerald-300 via-teal-200 to-cyan-200 blur-3xl opacity-60" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 sm:pt-24 sm:pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-xs font-semibold">
            <Zap className="h-4 w-4" /> Live tariffs across Egypt
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Compare electricity prices in Egypt and save every month
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Instantly see rates from major providers in Cairo, Giza, Alexandria and beyond.
            Switch in minutes and keep more of your money for koshary, not kilowatts.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#compare" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm">
              Start comparing
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#how" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white hover:bg-gray-50 text-gray-800 font-semibold shadow-sm ring-1 ring-black/10">
              How it works
            </a>
          </div>
          <div className="mt-6 text-xs text-gray-500">
            Transparent prices • No hidden fees • Works with smart meters
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white shadow-lg ring-1 ring-black/10 p-4">
            <div className="h-full w-full rounded-xl bg-gradient-to-br from-emerald-50 via-amber-50 to-white grid place-items-center text-center p-6">
              <p className="text-emerald-800 font-semibold">Live comparison widget</p>
              <p className="text-gray-600 text-sm mt-1">Egypt-focused, Arabic-friendly, mobile-first</p>
              <div className="mt-4 grid grid-cols-2 gap-3 w-full max-w-md">
                <div className="p-3 rounded-lg bg-white ring-1 ring-black/10 text-left">
                  <p className="text-xs text-gray-500">Region</p>
                  <p className="font-semibold">Cairo</p>
                </div>
                <div className="p-3 rounded-lg bg-white ring-1 ring-black/10 text-left">
                  <p className="text-xs text-gray-500">Usage</p>
                  <p className="font-semibold">350 kWh</p>
                </div>
                <div className="p-3 rounded-lg bg-white ring-1 ring-black/10 text-left">
                  <p className="text-xs text-gray-500">Best rate</p>
                  <p className="font-semibold text-emerald-700">E£ 0.90 / kWh</p>
                </div>
                <div className="p-3 rounded-lg bg-white ring-1 ring-black/10 text-left">
                  <p className="text-xs text-gray-500">Potential saving</p>
                  <p className="font-semibold text-emerald-700">up to 18%</p>
                </div>
              </div>
              <div className="mt-5 text-[10px] text-gray-400">Illustrative only. Real rates vary by governorate and tier.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
