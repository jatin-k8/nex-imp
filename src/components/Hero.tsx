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
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Hero({ onExploreProducts, onContactUs }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center justify-center bg-luxury-cream overflow-hidden">
      {/* Background visual with luxury warm lighting overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="images/hero_logistics.png" 
          alt="Premium Export Logistics"
          className="w-full h-full object-cover object-center opacity-30 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-luxury-cream via-luxury-cream/80 to-luxury-cream/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-luxury-cream" />
      </div>

      {/* Floating particles/glowing dot accents */}
      <div className="absolute top-[30%] left-[20%] w-[350px] h-[350px] rounded-full bg-luxury-gold/5 blur-[80px] pointer-events-none z-10" />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-luxury-gold/10 blur-[100px] pointer-events-none z-10" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-3.5 py-1.5 rounded-full text-[10px] font-semibold tracking-widest uppercase text-luxury-gold-dark bg-luxury-gold/10 border border-luxury-gold/20 mb-6 shadow-sm"
          >
            Global Trade Alliance &bull; Established 2025
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-luxury text-luxury-charcoal font-bold tracking-tight leading-[1.1] mb-6"
          >
            Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold-dark to-luxury-gold">Indian Excellence</span> to Global Markets
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg text-luxury-slate font-light leading-relaxed mb-10 max-w-xl"
          >
            Premium Import-Export Solutions Delivering Quality Agricultural, Industrial, Textile & Handcrafted Products Worldwide. Sourced reliably and packaged to perfection.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <button 
              onClick={onExploreProducts}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-widest uppercase text-luxury-white bg-luxury-charcoal hover:bg-luxury-gold-dark rounded shadow-lg transition-all duration-300"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={onContactUs}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-widest uppercase text-luxury-charcoal bg-transparent hover:bg-luxury-gold/5 border border-luxury-charcoal/20 hover:border-luxury-gold-dark rounded transition-all duration-300"
            >
              Contact Us
              <PhoneCall className="w-4 h-4 text-luxury-gold-dark" />
            </button>
          </motion.div>
        </div>

        {/* Right Animated SVG Map Column */}
        <div className="lg:col-span-5 hidden lg:block relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-full relative aspect-square max-w-[450px] mx-auto rounded-3xl border border-luxury-gold/15 bg-luxury-white/40 backdrop-blur-md p-6 shadow-premium"
          >
            {/* World Network Graphic */}
            <svg viewBox="0 0 500 500" className="w-full h-full fill-none stroke-luxury-gold/10" strokeWidth="1.5">
              {/* Abstract circular meridians */}
              <circle cx="250" cy="250" r="230" strokeDasharray="3 6" />
              <circle cx="250" cy="250" r="160" className="opacity-75" />
              <circle cx="250" cy="250" r="90" strokeDasharray="5 5" className="opacity-50" />

              {/* Glowing animated routes */}
              {/* Route 1: India to Europe */}
              <motion.path 
                d="M250 250 Q 180 180, 150 150" 
                stroke="url(#goldGradient)" 
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Route 2: India to USA */}
              <motion.path 
                d="M250 250 Q 150 250, 100 200" 
                stroke="url(#goldGradient)" 
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
              {/* Route 3: India to ME */}
              <motion.path 
                d="M250 250 Q 220 280, 180 320" 
                stroke="url(#goldGradient)" 
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
              {/* Route 4: India to East Asia */}
              <motion.path 
                d="M250 250 Q 320 220, 380 180" 
                stroke="url(#goldGradient)" 
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              />
              {/* Route 5: India to Africa */}
              <motion.path 
                d="M250 250 Q 280 330, 320 380" 
                stroke="url(#goldGradient)" 
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              />

              {/* Pins and Glows */}
              {/* Center - India Hub */}
              <circle cx="250" cy="250" r="7" className="fill-luxury-gold animate-ping" opacity="0.4" />
              <circle cx="250" cy="250" r="5" className="fill-luxury-gold-dark stroke-luxury-white" strokeWidth="1.5" />
              
              {/* Destinations */}
              <circle cx="150" cy="150" r="4" className="fill-luxury-charcoal" />
              <circle cx="100" cy="200" r="4" className="fill-luxury-charcoal" />
              <circle cx="180" cy="320" r="4" className="fill-luxury-charcoal" />
              <circle cx="380" cy="180" r="4" className="fill-luxury-charcoal" />
              <circle cx="320" cy="380" r="4" className="fill-luxury-charcoal" />

              {/* Gradients */}
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#AA7C11" stopOpacity="0" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                  <stop offset="100%" stopColor="#EEDEB2" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* floating stats badge overlay */}
            <div className="absolute -bottom-4 -left-4 glass-panel rounded-2xl p-4 shadow-lg border border-luxury-gold/20 flex flex-col items-start gap-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Live Transit</span>
              <span className="text-xs font-semibold text-luxury-charcoal">99.8% Cargo Safety</span>
              <div className="w-24 h-1 bg-luxury-beige rounded-full overflow-hidden mt-1.5">
                <div className="w-[99.8%] h-full bg-luxury-gold-dark rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Statistics Bar */}
      <div className="absolute bottom-0 left-0 w-full z-20 py-8 bg-gradient-to-t from-luxury-cream to-transparent border-t border-luxury-gold/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-between text-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-luxury-gold-dark font-sans">
                <Counter target={10} suffix="+" />
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase text-luxury-slate mt-1">Product Categories</span>
            </div>
            <div className="flex flex-col items-center border-l border-luxury-gold/10">
              <span className="text-2xl md:text-3xl font-bold text-luxury-gold-dark font-sans">
                <Counter target={100} suffix="%" />
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase text-luxury-slate mt-1">Export Quality Standards</span>
            </div>
            <div className="flex flex-col items-center border-l border-luxury-gold/10">
              <span className="text-2xl md:text-3xl font-bold text-luxury-gold-dark font-sans">
                24/7
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase text-luxury-slate mt-1">Reliable Global Supply</span>
            </div>
            <div className="flex flex-col items-center border-l border-luxury-gold/10">
              <span className="text-2xl md:text-3xl font-bold text-luxury-gold-dark font-sans">
                Premium
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase text-luxury-slate mt-1">Packaging Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
