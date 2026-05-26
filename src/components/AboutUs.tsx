import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, HeartHandshake, CheckCircle2, User } from 'lucide-react';

export default function AboutUs() {
  const coreValues = [
    "International quality standards",
    "Reliable sourcing network",
    "Professional grade packaging",
    "Competitive global contract pricing",
    "Timely port-to-port delivery",
    "Long-term B2B partnerships"
  ];

  return (
    <section id="about" className="py-24 bg-luxury-white relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">Who We Are</span>
          <h2 className="text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">
            Connecting India's Finest to the World
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-luxury-slate font-light leading-relaxed">
            Nexorra Impex is a fast-growing Indian import-export company committed to delivering premium-quality agricultural, industrial, textile, and handcrafted products to global markets.
          </p>
        </div>

        {/* Top Split: Story & Founder Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <h3 className="text-2xl md:text-3xl font-luxury font-bold text-luxury-charcoal">
              Manufacturer-cum-Trader Operating with Integrity
            </h3>
            <p className="text-luxury-slate font-light leading-relaxed">
              Founded on 14th March by <strong>Hrushabh Manoj Gadiya</strong>, Nexorra Impex operates as a premium trade partner. Driven by global standards and seamless logistics, we aim to build long-term international partnerships while ensuring timely delivery, competitive pricing, and trusted service across every market we serve.
            </p>
            <p className="text-luxury-slate font-light leading-relaxed">
              We leverage direct partnerships with farmers, local artisans, and certified industrial factories to ensure every batch of cargo meets the meticulous specifications required by international buying houses and B2B clients.
            </p>
            
            {/* Value Check Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
              {coreValues.map((val) => (
                <div key={val} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-luxury-gold-dark shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-luxury-slate">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-sm rounded-3xl bg-gradient-to-br from-luxury-cream to-luxury-beige border border-luxury-gold/25 p-8 shadow-premium text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold/5 rounded-full blur-xl" />
              <div className="w-20 h-20 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto mb-6 border border-luxury-gold/20 shadow-inner">
                <User className="w-10 h-10 text-luxury-gold-dark" />
              </div>
              <h4 className="text-xl font-bold font-luxury text-luxury-charcoal">Hrushabh Manoj Gadiya</h4>
              <p className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark mt-1.5 mb-4">Founder & Managing Director</p>
              <div className="w-12 h-[1px] bg-luxury-gold/40 mx-auto mb-4" />
              <p className="text-xs font-light text-luxury-slate leading-relaxed mb-6">
                "Nexorra Impex represents Indian premium quality, consistent execution, and transparency in international commerce. We build bridges that foster lasting trade relations worldwide."
              </p>

              {/* Corporate Contact Details */}
              <div className="text-left border-t border-luxury-gold/20 pt-6 mt-6 flex flex-col gap-3">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-luxury-gold-dark">Registered Corporate Address</span>
                  <span className="text-[10px] md:text-xs font-light text-luxury-charcoal mt-1 leading-normal uppercase">
                    SURVEY NO. 228 PLOT NO. 4,5,<br/>
                    VARDHAMAN APARTMENT,<br/>
                    KHANDOBA MAL,<br/>
                    BHOSARIGAON, BHOSARI,<br/>
                    HAVELI, PUNE – 411039,<br/>
                    MAHARASHTRA, INDIA
                  </span>
                </div>
                <div className="w-full h-[1px] bg-luxury-gold/10" />
                <div className="flex flex-col gap-1.5 text-[10px] font-semibold text-luxury-slate">
                  <div className="flex justify-between">
                    <span>Direct: +91 77440 96751</span>
                    <span>Email: nexorra.impex95@gmail.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mission & Vision Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-3xl glass-panel p-8 md:p-10 border border-luxury-gold/10 shadow-premium flex gap-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-luxury-gold/10 flex items-center justify-center shrink-0 border border-luxury-gold/20">
              <Target className="w-6 h-6 text-luxury-gold-dark" />
            </div>
            <div className="flex flex-col text-left">
              <h4 className="text-xl font-bold font-luxury text-luxury-charcoal mb-2">Our Mission</h4>
              <p className="text-sm font-light text-luxury-slate leading-relaxed">
                “To deliver premium Indian products globally with trust, quality, consistency, and seamless export solutions.”
              </p>
            </div>
          </div>

          <div className="rounded-3xl glass-panel p-8 md:p-10 border border-luxury-gold/10 shadow-premium flex gap-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-luxury-gold/10 flex items-center justify-center shrink-0 border border-luxury-gold/20">
              <Eye className="w-6 h-6 text-luxury-gold-dark" />
            </div>
            <div className="flex flex-col text-left">
              <h4 className="text-xl font-bold font-luxury text-luxury-charcoal mb-2">Our Vision</h4>
              <p className="text-sm font-light text-luxury-slate leading-relaxed">
                “To become a globally trusted export brand representing Indian excellence worldwide.”
              </p>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="rounded-3xl bg-luxury-cream border border-luxury-gold/10 p-8 md:p-12 shadow-premium text-center">
          <h3 className="text-xl md:text-2xl font-luxury font-bold text-luxury-charcoal mb-10">
            Our Growth Trajectory
          </h3>
          <div className="relative w-full overflow-hidden">
            {/* Line connecting points */}
            <div className="absolute top-[26px] left-[10%] right-[10%] h-[2px] bg-luxury-gold/20 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-luxury-white border-2 border-luxury-gold flex items-center justify-center text-xs font-bold text-luxury-gold-dark shadow-md z-20">2022</div>
                <h5 className="font-bold text-sm text-luxury-charcoal mt-4">Local Sourcing Alliance</h5>
                <p className="text-xs font-light text-luxury-slate mt-1 max-w-[150px]">Established direct farmer networks in key districts.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-luxury-white border-2 border-luxury-gold flex items-center justify-center text-xs font-bold text-luxury-gold-dark shadow-md z-20">2023</div>
                <h5 className="font-bold text-sm text-luxury-charcoal mt-4">National Bulk Trade</h5>
                <p className="text-xs font-light text-luxury-slate mt-1 max-w-[150px]">Supplied bulk dehydrated produce across major Indian trading houses.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-luxury-white border-2 border-luxury-gold flex items-center justify-center text-xs font-bold text-luxury-gold-dark shadow-md z-20">2024</div>
                <h5 className="font-bold text-sm text-luxury-charcoal mt-4">First Global Contracts</h5>
                <p className="text-xs font-light text-luxury-slate mt-1 max-w-[150px]">Initiated container exports to Middle East & East Asia ports.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-luxury-gold text-luxury-white border-2 border-luxury-white flex items-center justify-center text-xs font-bold shadow-md z-20">2026</div>
                <h5 className="font-bold text-sm text-luxury-charcoal mt-4">Supply Scale</h5>
                <p className="text-xs font-light text-luxury-slate mt-1 max-w-[150px]">Expanding routes to Europe & North America with digital B2B tools.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
