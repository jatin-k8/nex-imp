import React from 'react';
import { ShieldCheck, Award, FileText } from 'lucide-react';

export default function PackagingStandards() {
  const standards = [
    { title: "Vacuum-Sealed Barrier Bags", desc: "Protects dehydrated powder and granules against ambient moisture, preventing clumping and locked-in aroma preservation." },
    { title: "Food-Grade Kraft Drums", desc: "Sturdy double-walled fiber drums containing heavy-duty inner LDPE plastic lining bags, optimized for large bulk spice shipping." },
    { title: "Moisture-Resistant PP Bags", desc: "High tensile strength polywoven bags (25kg & 50kg capacities) specifically treated to withstand humidity changes in cargo holds." },
    { title: "OEM Private Labeling & Branding", desc: "Custom size, retail-ready cartons, custom brand stickers, barcoding, and local language stickers according to B2B specifications." }
  ];

  const safetyLogs = [
    "Export-safe cargo handling protocols",
    "Phytosanitary & fumigation logs verified",
    "Moisture levels testing below 6%",
    "Container floor thermal liner installation",
    "SGS product verification pre-dispatch"
  ];

  return (
    <section id="packaging" className="py-16 md:py-24 bg-luxury-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">Export Standards</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">Packaging & Quality Assurance</h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-sm md:text-base text-luxury-slate font-light leading-relaxed">
            Maintaining product integrity during international ocean transit requires meticulous humidity controls and premium container handling methods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Packaging Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {standards.map((std, idx) => (
                <div key={std.title} className="bg-luxury-white border border-luxury-gold/10 hover:border-luxury-gold/30 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-premium transition-all duration-300 text-left">
                  <span className="text-xs font-bold text-luxury-gold-dark font-mono block mb-2">0{idx + 1} &bull; Packaging</span>
                  <h4 className="text-base sm:text-lg font-bold font-luxury text-luxury-charcoal mb-2">{std.title}</h4>
                  <p className="text-xs sm:text-sm font-light text-luxury-slate leading-relaxed">{std.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Panel */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-luxury-charcoal to-neutral-900 text-luxury-cream rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-luxury-gold/25 shadow-premium text-left relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-luxury-gold/15 rounded-full blur-2xl" />
              <h4 className="text-xl sm:text-2xl font-luxury font-bold text-luxury-white mb-3">Certified Trade Compliance</h4>
              <p className="text-xs font-light text-neutral-400 leading-relaxed mb-6">
                Nexorra Impex complies strictly with national and international export clearance guidelines, including APEDA licensing, FSSAI regulations, and SGS checks.
              </p>
              <div className="flex flex-col gap-3 mb-6">
                {safetyLogs.map((log) => (
                  <div key={log} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-luxury-gold/20 flex items-center justify-center shrink-0 border border-luxury-gold/30">
                      <span className="text-luxury-gold text-xs font-bold">&bull;</span>
                    </div>
                    <span className="text-xs sm:text-sm font-light text-neutral-200">{log}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 pt-5 border-t border-neutral-800 text-center">
                {[
                  { icon: ShieldCheck, label: "IEC Licensed" },
                  { icon: Award,       label: "MSME Regd" },
                  { icon: FileText,    label: "Export Quality" }
                ].map(({ icon: Icon, label }, i) => (
                  <div key={label} className={`flex flex-col items-center gap-1 ${i > 0 ? 'border-l border-neutral-800' : ''}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-gold" />
                    <span className="text-[9px] uppercase font-bold tracking-widest text-neutral-400 mt-1">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
