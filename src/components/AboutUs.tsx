import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2, User } from 'lucide-react';

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
    <section id="about" className="py-16 md:py-24 bg-luxury-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-luxury-gold/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-luxury-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">Who We Are</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">
            Connecting India's Finest to the World
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-sm md:text-base text-luxury-slate font-light leading-relaxed">
            Nexorra Impex is a fast-growing Indian import-export company committed to delivering premium-quality agricultural, industrial, textile, and handcrafted products to global markets.
          </p>
        </div>

        {/* Story + Founder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 md:mb-20">
          <div className="lg:col-span-7 flex flex-col gap-5 text-left order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-luxury font-bold text-luxury-charcoal">
              Manufacturer-cum-Trader Operating with Integrity
            </h3>
            <p className="text-sm md:text-base text-luxury-slate font-light leading-relaxed">
              Founded on 14th March by <strong>Hrushabh Manoj Gadiya</strong>, Nexorra Impex operates as a premium trade partner. Driven by global standards and seamless logistics, we aim to build long-term international partnerships while ensuring timely delivery, competitive pricing, and trusted service across every market we serve.
            </p>
            <p className="text-sm md:text-base text-luxury-slate font-light leading-relaxed">
              We leverage direct partnerships with farmers, local artisans, and certified industrial factories to ensure every batch of cargo meets the meticulous specifications required by international buying houses and B2B clients.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {coreValues.map((val) => (
                <div key={val} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-luxury-gold-dark shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-luxury-slate">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Card */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-sm rounded-3xl bg-gradient-to-br from-luxury-cream to-luxury-beige border border-luxury-gold/25 p-6 sm:p-8 shadow-premium text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold/5 rounded-full blur-xl" />
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-luxury-gold/20">
                <User className="w-8 h-8 sm:w-10 sm:h-10 text-luxury-gold-dark" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold font-luxury text-luxury-charcoal">Hrushabh Manoj Gadiya</h4>
              <p className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark mt-1.5 mb-3">Founder & Managing Director</p>
              <div className="w-12 h-[1px] bg-luxury-gold/40 mx-auto mb-3" />
              <p className="text-xs font-light text-luxury-slate leading-relaxed mb-4">
                "Nexorra Impex represents Indian premium quality, consistent execution, and transparency in international commerce."
              </p>
              <div className="w-12 h-[1px] bg-luxury-gold/40 mx-auto my-3" />
              <div className="flex flex-col gap-2 text-left w-full">
                <a href="tel:+917744096751" className="flex items-center gap-2 text-xs text-luxury-slate hover:text-luxury-gold-dark transition-colors">
                  <span className="w-5 h-5 rounded-full bg-luxury-gold/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-luxury-gold-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.63 4.92 2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.3a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </span>
                  +91 77440 96751
                </a>
                <a href="mailto:nexorra.impex95@gmail.com" className="flex items-center gap-2 text-xs text-luxury-slate hover:text-luxury-gold-dark transition-colors">
                  <span className="w-5 h-5 rounded-full bg-luxury-gold/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-luxury-gold-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </span>
                  nexorra.impex95@gmail.com
                </a>
                <div className="flex items-start gap-2 text-xs text-luxury-slate">
                  <span className="w-5 h-5 rounded-full bg-luxury-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-luxury-gold-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span className="leading-relaxed">Bhosarigaon, Bhosari, Pune – 411039, Maharashtra, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 md:mb-20">
          {[
            { icon: Target, title: "Our Mission", text: "To deliver premium Indian products globally with trust, quality, consistency, and seamless export solutions." },
            { icon: Eye,    title: "Our Vision",  text: "To become a globally trusted export brand representing Indian excellence worldwide." }
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl glass-panel p-6 sm:p-8 md:p-10 border border-luxury-gold/10 shadow-premium flex gap-4 sm:gap-6 items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-luxury-gold/10 flex items-center justify-center shrink-0 border border-luxury-gold/20">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-gold-dark" />
              </div>
              <div className="flex flex-col text-left">
                <h4 className="text-lg sm:text-xl font-bold font-luxury text-luxury-charcoal mb-2">{title}</h4>
                <p className="text-xs sm:text-sm font-light text-luxury-slate leading-relaxed">"{text}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="rounded-3xl bg-luxury-cream border border-luxury-gold/10 p-6 sm:p-8 md:p-12 shadow-premium text-center overflow-hidden">
          <h3 className="text-lg sm:text-xl md:text-2xl font-luxury font-bold text-luxury-charcoal mb-8 md:mb-10">Our Growth Trajectory</h3>
          <div className="relative w-full">
            <div className="absolute top-[26px] left-[10%] right-[10%] h-[2px] bg-luxury-gold/20 hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
              {[
                { year: "2022", title: "Local Sourcing Alliance", desc: "Established direct farmer networks in key districts." },
                { year: "2023", title: "National Bulk Trade", desc: "Supplied bulk dehydrated produce across major Indian trading houses." },
                { year: "2024", title: "Foundation Building", desc: "Built strong domestic presence, supplier network, and product quality foundation." },
                { year: "2026", title: "Supply Scale", desc: "Expanding routes to Europe & North America with digital B2B tools.", active: true }
              ].map(({ year, title, desc, active }) => (
                <div key={year} className="flex flex-col items-center">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center text-xs font-bold shadow-md z-20 ${active ? 'bg-luxury-gold text-luxury-white border-luxury-white' : 'bg-luxury-white border-luxury-gold text-luxury-gold-dark'}`}>
                    {year}
                  </div>
                  <h5 className="font-bold text-xs sm:text-sm text-luxury-charcoal mt-3">{title}</h5>
                  <p className="text-xs font-light text-luxury-slate mt-1 max-w-[130px]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
