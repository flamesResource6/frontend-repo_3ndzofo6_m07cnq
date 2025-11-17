import { useState } from "react";
import { Search } from "lucide-react";

export default function CompareForm() {
  const [region, setRegion] = useState("Cairo");
  const [usage, setUsage] = useState(350);
  const [result, setResult] = useState(null);

  const sampleRates = {
    Cairo: 0.92,
    Giza: 0.95,
    Alexandria: 0.9,
    Luxor: 0.88,
  };

  const onCompare = (e) => {
    e.preventDefault();
    const base = sampleRates[region] ?? 0.95;
    const best = base * (usage > 500 ? 0.97 : 0.93);
    const saving = Math.max(0, base - best);
    setResult({ best: best.toFixed(2), saving: (saving / base * 100).toFixed(0) });
  };

  return (
    <section id="compare" className="py-14 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl ring-1 ring-black/10 bg-white/80 backdrop-blur p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Find the best tariff for your home</h2>
          <p className="mt-2 text-gray-600">Enter your region and monthly usage to preview rates tailored for Egypt's tiers.</p>

          <form onSubmit={onCompare} className="mt-6 grid sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Region</label>
              <select value={region} onChange={(e) => setRegion(e.target.value)} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-600 focus:border-emerald-600">
                <option>Cairo</option>
                <option>Giza</option>
                <option>Alexandria</option>
                <option>Luxor</option>
                <option>Aswan</option>
                <option>Mansoura</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Monthly usage (kWh)</label>
              <input type="number" min="50" step="10" value={usage} onChange={(e) => setUsage(+e.target.value)} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
            </div>
            <div className="flex items-end">
              <button className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm">
                <Search className="h-5 w-5 mr-2" /> Compare now
              </button>
            </div>
          </form>

          {result && (
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50 ring-1 ring-emerald-200">
                <p className="text-sm text-emerald-800">Best estimated rate</p>
                <p className="text-3xl font-bold text-emerald-700">E£ {result.best} / kWh</p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 ring-1 ring-amber-200">
                <p className="text-sm text-amber-800">Potential saving</p>
                <p className="text-3xl font-bold text-amber-700">{result.saving}%</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
