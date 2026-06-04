import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ship, Clock, Check, Anchor } from 'lucide-react';

interface ShippingLane {
  id: string;
  name: string;
  flag: string;
  transit: string;
  port: string;
  desc: string;
  products: string[];
  pinX: number;
  pinY: number;
  routeD: string;
}

// Animated dashed route with moving gold particle
function AnimatedRoute({ d, isActive }: { d: string; isActive: boolean }) {
  return (
    <g>
      {/* Base dim route always visible */}
      <path
        d={d}
        stroke="#D4AF37"
        strokeOpacity={isActive ? 0 : 0.12}
        strokeWidth="1.5"
        strokeDasharray="4 8"
        fill="none"
      />
      {isActive && (
        <>
          {/* Glowing route line */}
          <path d={d} stroke="url(#routeGlow)" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Bright core line */}
          <path d={d} stroke="#D4AF37" strokeOpacity="0.9" strokeWidth="1" fill="none" strokeLinecap="round" />
          {/* Moving particle */}
          <motion.circle r="3.5" fill="#FFE484" filter="url(#particleGlow)">
            <animateMotion dur="2s" repeatCount="indefinite" path={d} />
          </motion.circle>
        </>
      )}
    </g>
  );
}

export default function GlobalPresence() {
  const [activeRegion, setActiveRegion] = useState<string>('me');
  const [tick, setTick] = useState(0);

  // Pulse tick for rings
  useEffect(() => {
    const t = setInterval(() => setTick(v => v + 1), 50);
    return () => clearInterval(t);
  }, []);

  const shippingLanes: ShippingLane[] = [
    {
      id: "me",
      name: "Middle East Corridor",
      flag: "🇦🇪",
      transit: "4 - 7 Days (FCL)",
      port: "Jebel Ali, Jeddah, Dammam",
      desc: "Direct sailing from Nhava Sheva (JNPT) or Mundra Port. We handle full customs clearance for food-grade cargo, dry ingredients, and industrial commodities.",
      products: ["Onion Powder & Dehydrated Garlic", "Premium CTC Tea & Coffee Blends", "Organic Cotton Yarns & Textiles"],
      pinX: 580, pinY: 240,
      routeD: "M 640 255 Q 610 248 580 240"
    },
    {
      id: "europe",
      name: "European Corridor",
      flag: "🇳🇱",
      transit: "18 - 22 Days (FCL)",
      port: "Rotterdam, Hamburg, Antwerp",
      desc: "Serving Western Europe corridors. All consignments are accompanied by accredited phytosanitary clearance certificates conforming to EFSA standards.",
      products: ["Dehydrated Onion Flakes (Hygienic)", "Absorbent Cotton & Finished Fabrics", "Artisanal Handicrafts & Ceramics"],
      pinX: 490, pinY: 165,
      routeD: "M 640 255 Q 565 195 490 165"
    },
    {
      id: "usa",
      name: "North American Corridor",
      flag: "🇺🇸",
      transit: "25 - 28 Days (FCL)",
      port: "New York, Savannah, Los Angeles",
      desc: "Regular ocean freight logs. Export documentation complies with US FDA registration guidelines for agricultural and chemical cargo products.",
      products: ["Organic Ground Spices (Turmeric, Chilli)", "Engineering Fasteners & Alloys", "UN Standard Industrial Chemicals"],
      pinX: 210, pinY: 190,
      routeD: "M 640 255 Q 425 175 210 190"
    },
    {
      id: "asia",
      name: "East Asian Corridor",
      flag: "🇯🇵",
      transit: "12 - 15 Days (FCL)",
      port: "Osaka, Tokyo, Shanghai, Singapore",
      desc: "Fast sailing routes booking under premium cargo liners. Strong coverage for textile raw items and industrial components.",
      products: ["Organic Cotton Bales & Yarn", "Industrial Fasteners & Casting Spares", "Dehydrated Onion & Garlic Blends"],
      pinX: 780, pinY: 200,
      routeD: "M 640 255 Q 710 228 780 200"
    },
    {
      id: "africa",
      name: "East & South African Corridor",
      flag: "🇰🇪",
      transit: "8 - 11 Days (FCL)",
      port: "Mombasa, Dar es Salaam, Durban",
      desc: "Direct shipping lanes. Providing flexible payment arrangements (CAD, L/C) for emerging B2B agricultural and textile markets.",
      products: ["Bulk Dehydrated Spices", "Woven Canvas & Apparel Textiles", "Heavy Casting Spares & Equipment Parts"],
      pinX: 545, pinY: 330,
      routeD: "M 640 255 Q 592 292 545 330"
    }
  ];

  const currentLane = shippingLanes.find(l => l.id === activeRegion) || shippingLanes[0];

  return (
    <section id="presence" className="py-24 bg-luxury-charcoal relative overflow-hidden">

      {/* Deep ambient glows */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-luxury-gold/4 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-luxury-gold/3 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-[140px] pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold">Worldwide Supply Chain</span>
          <h2 className="text-3xl md:text-5xl font-bold font-luxury text-luxury-white mt-3 mb-6">
            Global Trade & Export Capabilities
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-neutral-400 font-light leading-relaxed">
            From our strategic headquarters in Pune, India, we coordinate shipping corridors to key ports across five continents.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── MAP PANEL ── */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-luxury-gold/15 shadow-[0_0_80px_rgba(212,175,55,0.07)]"
            style={{ background: 'linear-gradient(135deg, #0d0c0a 0%, #141210 50%, #0a0908 100%)' }}
          >
            {/* Inner corner glow */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-luxury-gold/5 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-blue-800/10 blur-[60px] pointer-events-none" />

            {/* Status bar */}
            <div className="absolute top-4 left-5 right-5 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)] animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">Live Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-luxury-gold shadow-[0_0_6px_rgba(212,175,55,0.8)] animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">India Export Hub · Pune</span>
              </div>
            </div>

            <div className="p-4 pt-12">
              <svg viewBox="0 0 1000 480" className="w-full h-auto" fill="none">
                <defs>
                  {/* Route glow gradient */}
                  <linearGradient id="routeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#AA7C11" stopOpacity="0.1" />
                    <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFE484" stopOpacity="0.3" />
                  </linearGradient>
                  {/* Particle glow filter */}
                  <filter id="particleGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  {/* Hub glow filter */}
                  <filter id="hubGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  {/* Continent fill */}
                  <radialGradient id="continentFill" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.01" />
                  </radialGradient>
                </defs>

                {/* ── CONTINENTS (improved shapes) ── */}
                {/* North America */}
                <path d="M60 100 C100 75, 170 85, 220 110 C250 130, 260 160, 255 200 C245 240, 220 265, 195 255 C165 240, 145 210, 140 180 C130 150, 80 140, 60 100 Z"
                  fill="url(#continentFill)" stroke="#D4AF37" strokeOpacity="0.12" strokeWidth="1" />
                {/* Greenland */}
                <path d="M220 55 C240 45, 270 50, 275 70 C270 90, 245 95, 225 85 Z"
                  fill="url(#continentFill)" stroke="#D4AF37" strokeOpacity="0.08" strokeWidth="0.8" />
                {/* South America */}
                <path d="M200 290 C230 275, 265 280, 275 320 C285 365, 270 420, 245 450 C220 465, 195 445, 185 410 C170 370, 175 320, 200 290 Z"
                  fill="url(#continentFill)" stroke="#D4AF37" strokeOpacity="0.12" strokeWidth="1" />
                {/* Europe */}
                <path d="M420 100 C455 80, 510 75, 545 95 C560 105, 555 125, 535 140 C515 155, 480 160, 455 150 C430 140, 415 120, 420 100 Z"
                  fill="url(#continentFill)" stroke="#D4AF37" strokeOpacity="0.12" strokeWidth="1" />
                {/* Africa */}
                <path d="M450 210 C490 195, 540 200, 560 230 C580 265, 575 320, 560 370 C545 415, 510 440, 480 435 C450 425, 430 390, 425 350 C415 305, 415 240, 450 210 Z"
                  fill="url(#continentFill)" stroke="#D4AF37" strokeOpacity="0.12" strokeWidth="1" />
                {/* Asia / India region */}
                <path d="M560 90 C620 70, 720 75, 800 100 C850 120, 870 160, 850 200 C830 235, 790 250, 750 245 C710 238, 680 220, 660 200 C640 178, 625 155, 615 175 C605 195, 620 230, 640 250 C625 265, 600 270, 580 255 C555 238, 545 200, 550 165 C555 130, 555 105, 560 90 Z"
                  fill="url(#continentFill)" stroke="#D4AF37" strokeOpacity="0.12" strokeWidth="1" />
                {/* Australia */}
                <path d="M780 310 C820 295, 870 300, 890 330 C905 355, 895 390, 870 405 C845 418, 810 410, 790 390 C770 368, 762 330, 780 310 Z"
                  fill="url(#continentFill)" stroke="#D4AF37" strokeOpacity="0.1" strokeWidth="1" />

                {/* ── SHIPPING ROUTES ── */}
                {shippingLanes.map((lane) => (
                  <AnimatedRoute key={lane.id} d={lane.routeD} isActive={lane.id === activeRegion} />
                ))}

                {/* ── INDIA HUB ── */}
                {/* Outer pulse rings */}
                <motion.circle cx="640" cy="255" r="22"
                  stroke="#D4AF37" strokeOpacity="0.15" strokeWidth="1" fill="none"
                  animate={{ r: [18, 28, 18], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.circle cx="640" cy="255" r="14"
                  stroke="#D4AF37" strokeOpacity="0.3" strokeWidth="1.5" fill="none"
                  animate={{ r: [10, 18, 10], opacity: [0.5, 0.1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                />
                {/* Hub glow blob */}
                <circle cx="640" cy="255" r="12" fill="#D4AF37" fillOpacity="0.08" filter="url(#hubGlow)" />
                {/* Hub ring */}
                <circle cx="640" cy="255" r="8" fill="#1a1612" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.9" />
                {/* Hub core */}
                <circle cx="640" cy="255" r="4" fill="#D4AF37" filter="url(#particleGlow)" />

                {/* ── DESTINATION PINS ── */}
                {shippingLanes.map((lane) => {
                  const isActive = lane.id === activeRegion;
                  return (
                    <g key={lane.id} onClick={() => setActiveRegion(lane.id)} style={{ cursor: 'pointer' }}>
                      {/* Outer glow ring (active only) */}
                      {isActive && (
                        <motion.circle
                          cx={lane.pinX} cy={lane.pinY} r="16"
                          stroke="#D4AF37" strokeOpacity="0.4" strokeWidth="1" fill="none"
                          animate={{ r: [12, 20, 12], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      )}
                      {/* Pin shadow */}
                      <circle cx={lane.pinX} cy={lane.pinY} r={isActive ? 9 : 5}
                        fill="#D4AF37" fillOpacity={isActive ? 0.15 : 0.05} filter="url(#hubGlow)" />
                      {/* Pin body */}
                      <circle
                        cx={lane.pinX} cy={lane.pinY}
                        r={isActive ? 7 : 4.5}
                        fill={isActive ? '#D4AF37' : '#2a2520'}
                        stroke={isActive ? '#FFE484' : '#D4AF37'}
                        strokeWidth={isActive ? 1.5 : 1}
                        strokeOpacity={isActive ? 1 : 0.4}
                      />
                      {/* Pin core dot */}
                      {isActive && <circle cx={lane.pinX} cy={lane.pinY} r="2.5" fill="#1a1200" />}
                      {/* Flag label */}
                      <text
                        x={lane.pinX}
                        y={lane.pinY - 14}
                        textAnchor="middle"
                        fontSize="12"
                        className="select-none"
                        style={{ userSelect: 'none' }}
                      >{lane.flag}</text>
                    </g>
                  );
                })}

                {/* Hub label */}
                <text x="640" y="278" textAnchor="middle" fontSize="8"
                  fill="#D4AF37" fillOpacity="0.7" fontFamily="sans-serif"
                  letterSpacing="2" style={{ textTransform: 'uppercase' }}>
                  PUNE · INDIA
                </text>
              </svg>
            </div>

            {/* Bottom stats bar */}
            <div className="border-t border-luxury-gold/10 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-bold">Active Routes</span>
                  <span className="text-sm font-bold text-luxury-gold">5 Corridors</span>
                </div>
                <div className="w-px h-8 bg-luxury-gold/10" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-bold">Coverage</span>
                  <span className="text-sm font-bold text-luxury-gold">5 Continents</span>
                </div>
                <div className="w-px h-8 bg-luxury-gold/10" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-bold">Cargo Safety</span>
                  <span className="text-sm font-bold text-luxury-gold">99.8%</span>
                </div>
              </div>
              <Ship className="w-5 h-5 text-luxury-gold/30" />
            </div>
          </div>

          {/* ── INFO PANEL ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Region selector buttons */}
            <div className="flex flex-wrap gap-2">
              {shippingLanes.map((lane) => (
                <button
                  key={lane.id}
                  onClick={() => setActiveRegion(lane.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 border flex items-center gap-1.5 ${
                    activeRegion === lane.id
                      ? 'bg-luxury-gold/15 text-luxury-gold border-luxury-gold shadow-[0_0_12px_rgba(212,175,55,0.2)]'
                      : 'bg-transparent text-neutral-400 border-neutral-700 hover:border-luxury-gold/40 hover:text-luxury-white'
                  }`}
                >
                  <span className="text-base">{lane.flag}</span>
                  {lane.id.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Info card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRegion}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-luxury-gold/15 p-8 text-left relative overflow-hidden flex flex-col gap-6"
                style={{ background: 'linear-gradient(135deg, #111009 0%, #161310 100%)' }}
              >
                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-luxury-gold/5 blur-[50px] pointer-events-none" />

                {/* Header */}
                <div className="flex items-center gap-3.5">
                  <span className="text-4xl">{currentLane.flag}</span>
                  <div>
                    <h4 className="text-xl font-bold font-luxury text-luxury-white">{currentLane.name}</h4>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-luxury-gold font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{currentLane.transit}</span>
                    </div>
                    <div className="mt-1 text-[10px] text-neutral-500 italic">
                      ⚠ Tentative estimate — actual transit may vary based on port congestion, carrier schedule, and customs clearance.
                    </div>
                  </div>
                </div>

                <p className="text-xs md:text-sm font-light text-neutral-400 leading-relaxed">
                  {currentLane.desc}
                </p>

                {/* Ports */}
                <div className="flex items-start gap-3 bg-luxury-gold/5 border border-luxury-gold/10 rounded-2xl px-4 py-3">
                  <Anchor className="w-4 h-4 text-luxury-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold block mb-0.5">Destination Ports</span>
                    <span className="text-xs font-medium text-neutral-200">{currentLane.port}</span>
                  </div>
                </div>

                {/* Products */}
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold block mb-3">Primary Shipped Products</span>
                  <div className="flex flex-col gap-2.5">
                    {currentLane.products.map((prod) => (
                      <div key={prod} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-lg bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-luxury-gold" />
                        </div>
                        <span className="text-xs font-medium text-neutral-300">{prod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
