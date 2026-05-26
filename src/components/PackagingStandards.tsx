import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2 } from 'lucide-react';

export default function PackagingStandards() {
  const standards = [
    {
      title: "Vacuum-Sealed Barrier Bags",
      desc: "Protects dehydrated powder and granules against ambient moisture, preventing clumping and locked-in aroma preservation."
    },
    {
      title: "Food-Grade Kraft Drums",
      desc: "Sturdy double-walled fiber drums containing heavy-duty inner LDPE plastic lining bags, optimized for large bulk spice shipping."
    },
    {
      title: "Moisture-Resistant PP Bags",
      desc: "High tensile strength polywoven bags (25kg & 50kg capacities) specifically treated to withstand humidity changes in cargo holds."
    },
    {
      title: "OEM Private Labeling & Branding",
      desc: "Custom size, retail-ready cartons, custom brand stickers, barcoding, and local language stickers according to B2B specifications."
    }
  ];

  const safetyLogs = [
    "Export-safe cargo handling protocols",
    "Phytosanitary & fumigation logs verified",
    "Moisture levels testing below 6%",
    "Container floor thermal liner installation",
    "SGS product verification pre-dispatch"
  ];

  return (
    <section id="packaging" className="py-24 bg-luxury-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">Export Standards</span>
          <h2 className="text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">
            Packaging & Quality Assurance
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-luxury-slate font-light leading-relaxed">
            Maintaining product integrity during international ocean transit requires meticulous humidity controls and premium container handling methods.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Packaging Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {standards.map((std, idx) => (
                <div 
                  key={std.title}
                  className="bg-luxury-white border border-luxury-gold/10 hover:border-luxury-gold/30 rounded-3xl p-6 md:p-8 shadow-premium transition-all duration-300"
                >
                  <span className="text-xs font-bold text-luxury-gold-dark font-mono block mb-2">0{idx + 1} &bull; Packaging</span>
                  <h4 className="text-lg font-bold font-luxury text-luxury-charcoal mb-2">{std.title}</h4>
                  <p className="text-xs md:text-sm font-light text-luxury-slate leading-relaxed">{std.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Panel */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-luxury-charcoal to-neutral-900 text-luxury-cream rounded-3xl p-8 md:p-10 border border-luxury-gold/25 shadow-premium text-left relative overflow-hidden">
              {/* Background gold graphic accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-luxury-gold/15 rounded-full blur-2xl" />

              <h4 className="text-2xl font-luxury font-bold text-luxury-white mb-4">Certified Trade Compliance</h4>
              <p className="text-xs font-light text-neutral-400 leading-relaxed mb-8">
                Nexorra Impex complies strictly with national and international export clearance guidelines, including APEDA licensing, FSSAI regulations, and SGS checks.
              </p>

              {/* Safety Logs list */}
              <div className="flex flex-col gap-4 mb-8">
                {safetyLogs.map((log) => (
                  <div key={log} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-luxury-gold/20 flex items-center justify-center shrink-0 border border-luxury-gold/30">
                      <span className="text-luxury-gold text-xs font-bold">&bull;</span>
                    </div>
                    <span className="text-xs md:text-sm font-light text-neutral-200">{log}</span>
                  </div>
                ))}
              </div>

              {/* Badges Container */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800 text-center">
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-6 h-6 text-luxury-gold" />
                  <span className="text-[9px] uppercase font-bold tracking-widest text-neutral-400 mt-1">IEC Licensed</span>
                </div>
                <div className="flex flex-col items-center gap-1 border-l border-neutral-800">
                  <Award className="w-6 h-6 text-luxury-gold" />
                  <span className="text-[9px] uppercase font-bold tracking-widest text-neutral-400 mt-1">MSME Regd</span>
                </div>
                <div className="flex flex-col items-center gap-1 border-l border-neutral-800">
                  <FileText className="w-6 h-6 text-luxury-gold" />
                  <span className="text-[9px] uppercase font-bold tracking-widest text-neutral-400 mt-1">Export Quality</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
