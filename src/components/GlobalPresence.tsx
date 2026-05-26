import React, { useState } from 'react';
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

export default function GlobalPresence() {
  const [activeRegion, setActiveRegion] = useState<string>('me');

  const shippingLanes: ShippingLane[] = [
    {
      id: "me",
      name: "Middle East Corridor",
      flag: "🇦🇪",
      transit: "4 - 7 Days (FCL)",
      port: "Jebel Ali, Jeddah, Dammam",
      desc: "Direct sailing from Nhava Sheva (JNPT) or Mundra Port. We handle full customs clearance for food-grade cargo, dry ingredients, and industrial commodities.",
      products: ["Onion Powder & Dehydrated Garlic", "Premium CTC Tea & Coffee Blends", "Organic Cotton Yarns & Textiles"],
      pinX: 580,
      pinY: 240,
      routeD: "M 640 250 Q 610 245 580 240"
    },
    {
      id: "europe",
      name: "European Corridor",
      flag: "🇳🇱",
      transit: "18 - 22 Days (FCL)",
      port: "Rotterdam, Hamburg, Antwerp",
      desc: "Serving Western Europe corridors. All consignments are accompanied by accredited phytosanitary clearance certificates conforming to EFSA standards.",
      products: ["Dehydrated Onion Flakes (Hygienic)", "Absorbent Cotton & Finished Fabrics", "Artisanal Handicrafts & Ceramics"],
      pinX: 520,
      pinY: 180,
      routeD: "M 640 250 Q 580 200 520 180"
    },
    {
      id: "usa",
      name: "North American Corridor",
      flag: "🇺🇸",
      transit: "25 - 28 Days (FCL)",
      port: "New York, Savannah, Los Angeles",
      desc: "Regular ocean freight logs. Export documentation complies with US FDA registration guidelines for agricultural and chemical cargo products.",
      products: ["Organic Ground Spices (Turmeric, Chilli)", "Engineering Fasteners & Alloys", "UN Standard Industrial Chemicals"],
      pinX: 300,
      pinY: 200,
      routeD: "M 640 250 Q 470 180 300 200"
    },
    {
      id: "asia",
      name: "East Asian Corridor",
      flag: "🇯🇵",
      transit: "12 - 15 Days (FCL)",
      port: "Osaka, Tokyo, Shanghai, Singapore",
      desc: "Fast sailing routes booking under premium cargo liners. Strong coverage for textile raw items and industrial components.",
      products: ["Organic Cotton Bales & Yarn", "Industrial Fasteners & Casting Spares", "Dehydrated Onion & Garlic Blends"],
      pinX: 740,
      pinY: 210,
      routeD: "M 640 250 Q 690 230 740 210"
    },
    {
      id: "africa",
      name: "East & South African Corridor",
      flag: "🇰🇪",
      transit: "8 - 11 Days (FCL)",
      port: "Mombasa, Dar es Salaam, Durban",
      desc: "Direct shipping lanes. Providing flexible payment arrangements (CAD, L/C) for emerging B2B agricultural and textile markets.",
      products: ["Bulk Dehydrated Spices", "Woven Canvas & Apparel Textiles", "Heavy Casting Spares & Equipment Parts"],
      pinX: 540,
      pinY: 310,
      routeD: "M 640 250 Q 590 280 540 310"
    }
  ];

  const currentLane = shippingLanes.find(l => l.id === activeRegion) || shippingLanes[0];

  return (
    <section id="presence" className="py-24 bg-luxury-white relative overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-luxury-gold/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">Worldwide Supply Chain</span>
          <h2 className="text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">
            Global Trade & Export Capabilities
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-luxury-slate font-light leading-relaxed">
            From our strategic headquarters in Pune, India, we coordinate shipping corridors to key ports across five continents.
          </p>
        </div>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Map Column */}
          <div className="lg:col-span-7 bg-luxury-cream border border-luxury-gold/15 rounded-3xl p-6 md:p-8 shadow-premium relative">
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-luxury-gold animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-slate">India Export Hub: Pune</span>
            </div>

            {/* Custom stylized world map SVG */}
            <svg viewBox="0 0 1000 500" className="w-full h-auto fill-none stroke-luxury-gold/10" strokeWidth="1.5">
              {/* Abstract continent vectors (rough luxury silhouettes) */}
              {/* North America */}
              <path d="M50 120 C 120 100, 200 130, 240 220 C 220 280, 180 300, 150 250 Z" fill="rgba(212,175,55,0.02)" stroke="rgba(212,175,55,0.06)" />
              {/* South America */}
              <path d="M220 300 C 260 380, 240 450, 200 480 C 180 430, 160 350, 180 320 Z" fill="rgba(212,175,55,0.02)" stroke="rgba(212,175,55,0.06)" />
              {/* Europe & North Asia */}
              <path d="M420 150 C 480 80, 680 80, 800 120 C 750 200, 600 180, 520 200 Z" fill="rgba(212,175,55,0.02)" stroke="rgba(212,175,55,0.06)" />
              {/* Africa */}
              <path d="M460 250 C 520 230, 560 300, 540 420 C 480 450, 440 380, 440 300 Z" fill="rgba(212,175,55,0.02)" stroke="rgba(212,175,55,0.06)" />
              {/* Southern Asia & Australia */}
              <path d="M600 240 C 680 200, 780 220, 830 320 C 760 380, 680 350, 640 280 Z" fill="rgba(212,175,55,0.02)" stroke="rgba(212,175,55,0.06)" />

              {/* India Export Hub Node */}
              <g className="cursor-pointer">
                <circle cx="640" cy="250" r="10" className="fill-luxury-gold/20 stroke-luxury-gold-dark/40" />
                <circle cx="640" cy="250" r="4" className="fill-luxury-gold-dark" />
              </g>

              {/* Shipping Routes */}
              {shippingLanes.map((lane) => {
                const isActive = lane.id === activeRegion;
                return (
                  <g key={lane.id}>
                    {/* Dashed background route */}
                    <path
                      d={lane.routeD}
                      stroke={isActive ? '#D4AF37' : '#D4AF37'}
                      strokeOpacity={isActive ? '0.6' : '0.15'}
                      strokeWidth={isActive ? '2.5' : '1.5'}
                      strokeDasharray={isActive ? 'none' : '4 6'}
                      className="transition-all duration-300"
                    />

                    {/* Node Dot */}
                    <circle
                      cx={lane.pinX}
                      cy={lane.pinY}
                      r={isActive ? '7' : '4.5'}
                      onClick={() => setActiveRegion(lane.id)}
                      className={`cursor-pointer transition-all duration-300 ${
                        isActive 
                          ? 'fill-luxury-gold stroke-luxury-white' 
                          : 'fill-luxury-charcoal/40 hover:fill-luxury-gold'
                      }`}
                      strokeWidth={isActive ? 2 : 0}
                    />

                    {/* Glow Ring for active node */}
                    {isActive && (
                      <circle
                        cx={lane.pinX}
                        cy={lane.pinY}
                        r="14"
                        className="stroke-luxury-gold/50 fill-none animate-pulse"
                        strokeWidth="1.5"
                      />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Interactive Panel Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full gap-8">
            <div className="flex flex-wrap gap-2">
              {shippingLanes.map((lane) => (
                <button
                  key={lane.id}
                  onClick={() => setActiveRegion(lane.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 border flex items-center gap-1.5 ${
                    activeRegion === lane.id
                      ? 'bg-luxury-gold/10 text-luxury-gold-dark border-luxury-gold'
                      : 'bg-transparent text-luxury-slate border-luxury-gold/10 hover:border-luxury-gold/30 hover:text-luxury-charcoal'
                  }`}
                >
                  <span className="text-base">{lane.flag}</span>
                  {lane.id.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Info display container */}
            <div className="bg-gradient-to-br from-luxury-cream to-luxury-white border border-luxury-gold/15 rounded-3xl p-8 shadow-premium text-left relative min-h-[300px] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="text-3xl">{currentLane.flag}</span>
                  <div>
                    <h4 className="text-xl font-bold font-luxury text-luxury-charcoal">{currentLane.name}</h4>
                    <div className="flex items-center gap-1.5 mt-0.5 text-xs text-luxury-gold-dark font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Transit Log: {currentLane.transit}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-xs md:text-sm font-light text-luxury-slate leading-relaxed mb-6">
                  {currentLane.desc}
                </p>

                <div className="flex items-start gap-2 mb-6">
                  <Anchor className="w-4 h-4 text-luxury-gold-dark mt-0.5 shrink-0" />
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark block">Destination Ports</span>
                    <span className="text-xs md:text-sm font-medium text-luxury-charcoal mt-0.5 block">{currentLane.port}</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark block mb-3">Primary Shipped Products</span>
                <div className="flex flex-col gap-2">
                  {currentLane.products.map((prod) => (
                    <div key={prod} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-luxury-gold/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-luxury-gold-dark" />
                      </div>
                      <span className="text-xs md:text-sm font-medium text-luxury-slate">{prod}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
