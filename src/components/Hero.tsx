import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onContactUs: () => void;
}

function Counter({ target, duration = 2, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const incrementTime = Math.max(Math.floor((duration * 1000) / target), 20);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <span>{count}{suffix}</span>;
}

export default function Hero({ onExploreProducts, onContactUs }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen pt-20 pb-32 flex items-center justify-center bg-luxury-cream overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/hero_logistics.png"
          alt="Premium Export Logistics"
          className="w-full h-full object-cover object-center opacity-25 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-luxury-cream via-luxury-cream/85 to-luxury-cream/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-luxury-cream" />
      </div>

      {/* Glow blobs */}
      <div className="absolute top-[25%] left-[10%] w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-luxury-gold/5 blur-[80px] pointer-events-none z-10" />
      <div className="absolute bottom-[15%] right-[5%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-luxury-gold/8 blur-[100px] pointer-events-none z-10" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-12 z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* ── LEFT CONTENT ── */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          <motion.span
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-widest uppercase text-luxury-gold-dark bg-luxury-gold/10 border border-luxury-gold/20 mb-5 shadow-sm">
            Global Trade Alliance &bull; Established 2025
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-luxury text-luxury-charcoal font-bold tracking-tight leading-[1.15] mb-5">
            Connecting{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold-dark to-luxury-gold">
              Indian Excellence
            </span>{' '}
            to Global Markets
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-luxury-slate font-light leading-relaxed mb-8 max-w-xl">
            Premium Import-Export Solutions Delivering Quality Agricultural, Industrial, Textile &amp; Handcrafted Products Worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button onClick={onExploreProducts}
              className="flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold tracking-widest uppercase text-luxury-white bg-luxury-charcoal hover:bg-luxury-gold-dark rounded shadow-lg transition-all duration-300 w-full sm:w-auto">
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={onContactUs}
              className="flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold tracking-widest uppercase text-luxury-charcoal bg-transparent hover:bg-luxury-gold/5 border border-luxury-charcoal/20 hover:border-luxury-gold-dark rounded transition-all duration-300 w-full sm:w-auto">
              Contact Us
              <PhoneCall className="w-4 h-4 text-luxury-gold-dark" />
            </button>
          </motion.div>
        </div>

        {/* ── RIGHT: SHIP IMAGE (desktop only) ── */}
        <div className="lg:col-span-5 hidden lg:block relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-full relative max-w-[500px] mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-luxury-gold/10 blur-[60px] scale-110 pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden border border-luxury-gold/20 shadow-premium-hover">
              <img src="images/hero_ship.png" alt="Global Export Shipping"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/30 via-transparent to-transparent" />
            </div>
            {/* Badge bottom-left */}
            <div className="absolute -bottom-4 -left-4 glass-panel rounded-2xl p-4 shadow-lg border border-luxury-gold/20 flex flex-col items-start gap-1 z-10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Live Transit</span>
              <span className="text-xs font-semibold text-luxury-charcoal">99.8% Cargo Safety</span>
              <div className="w-24 h-1 bg-luxury-beige rounded-full overflow-hidden mt-1">
                <div className="w-[99.8%] h-full bg-luxury-gold-dark rounded-full" />
              </div>
            </div>
            {/* Badge top-right */}
            <div className="absolute -top-4 -right-4 glass-panel rounded-2xl px-4 py-3 shadow-lg border border-luxury-gold/20 flex items-center gap-2 z-10">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-charcoal">5 Continents Served</span>
            </div>
          </motion.div>
        </div>

        {/* ── MOBILE: ship image shown below text ── */}
        <div className="lg:hidden w-full relative mt-2">
          <div className="relative rounded-2xl overflow-hidden border border-luxury-gold/15 shadow-premium max-h-[220px]">
            <img src="images/hero_ship.png" alt="Global Export Shipping"
              className="w-full h-[220px] object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/40 via-transparent to-transparent" />
            {/* Inline badge on mobile */}
            <div className="absolute bottom-3 left-3 glass-panel rounded-xl px-3 py-2 border border-luxury-gold/20 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[9px] uppercase font-bold tracking-widest text-luxury-charcoal">5 Continents · 99.8% Safety</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="absolute bottom-0 left-0 w-full z-20 py-5 bg-gradient-to-t from-luxury-cream to-transparent border-t border-luxury-gold/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center">
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-luxury-gold-dark">
                <Counter target={10} suffix="+" />
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-widest uppercase text-luxury-slate mt-1">Product Categories</span>
            </div>
            <div className="flex flex-col items-center border-l border-luxury-gold/10">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-luxury-gold-dark">
                <Counter target={100} suffix="%" />
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-widest uppercase text-luxury-slate mt-1">Quality Standards</span>
            </div>
            <div className="flex flex-col items-center border-l border-luxury-gold/10">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-luxury-gold-dark">24/7</span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-widest uppercase text-luxury-slate mt-1">Global Supply</span>
            </div>
            <div className="flex flex-col items-center border-l border-luxury-gold/10">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-luxury-gold-dark">5+</span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-widest uppercase text-luxury-slate mt-1">Continents Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
