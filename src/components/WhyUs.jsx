import { ShieldCheck, Sparkles, Gauge } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Independent & transparent",
    desc: "We compare fairly across providers with no hidden fees.",
  },
  {
    icon: Gauge,
    title: "Egypt-ready",
    desc: "Built around local tiers, smart meters, and governorates.",
  },
  {
    icon: Sparkles,
    title: "Fast switching",
    desc: "Finish in minutes and track status right from your phone.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Egyptians choose us</h2>
        <p className="mt-2 text-gray-600">Focused on savings and simplicity, with a design inspired by the Nile's calm flow.</p>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white shadow-sm ring-1 ring-black/10">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 text-white grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
