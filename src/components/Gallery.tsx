import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const galleryItems = [
    { id: 1, title: "Container Port Operations", category: "Logistics", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600" },
    { id: 2, title: "Premium Spice Sorting", category: "Agriculture", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600" },
    { id: 3, title: "B2B Bulk Warehouse", category: "Storage", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" },
    { id: 4, title: "Artisanal Brass Crafting", category: "Handicrafts", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=600" },
    { id: 5, title: "Industrial Cargo Loading", category: "Export Operations", image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=600" },
    { id: 6, title: "Phytosanitary Inspections", category: "Quality Control", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" },
    { id: 7, title: "Ocean Freight Transit", category: "Global Routes", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <section className="py-16 md:py-24 bg-luxury-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">Operational Showcase</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">Nexorra Export Operations</h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-sm md:text-base text-luxury-slate font-light leading-relaxed">
            A visual overview of our warehouse workflows, phytosanitary test labs, shipping lines container loading, and industrial hubs.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid relative rounded-2xl sm:rounded-3xl overflow-hidden border border-luxury-gold/10 shadow-premium group cursor-default">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-luxury-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 text-left transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-gold">{item.category}</span>
                <h4 className="text-sm sm:text-base font-bold font-luxury text-luxury-white mt-1">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
