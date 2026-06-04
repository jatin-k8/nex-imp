import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowUpRight, Star, ChevronRight, X, ChevronLeft, ChevronRight as ChevronRightIcon, ZoomIn } from 'lucide-react';

interface ProductsProps {
  onQuoteRequest: (productName: string) => void;
}

interface ProductItem {
  id: string;
  title: string;
  category: 'agri' | 'food' | 'textile' | 'industrial' | 'fruits';
  desc: string;
  moq: string;
  image: string;
  grade: string;
  featured?: boolean;
  gallery: string[];
}

export default function Products({ onQuoteRequest }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'agri' | 'food' | 'textile' | 'industrial' | 'fruits'>('all');
  const [lightboxProduct, setLightboxProduct] = useState<ProductItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    { id: 'all',       name: 'All Categories' },
    { id: 'agri',      name: 'Agricultural' },
    { id: 'fruits',    name: 'Fresh Fruits' },
    { id: 'food',      name: 'Spices & Ingredients' },
    { id: 'textile',   name: 'Textiles & Handicrafts' },
    { id: 'industrial',name: 'Industrial & Chemicals' }
  ];

  const products: ProductItem[] = [
    {
      id: "onion-powder",
      title: "Onion Powder",
      category: "agri",
      desc: "Export-grade dehydrated onion powder. Ground to fine mesh size, free-flowing, and preserved under controlled humidity. Moisture below 6%, pungency retained.",
      moq: "5 Metric Tons",
      image: "images/onion_powder.jpeg",
      grade: "Grade A Premium",
      featured: true,
      gallery: ["images/onion_powder.jpeg","images/onion_raw.jpeg","images/onion_processing.jpeg","images/onion_flakes.jpeg"]
    },
    {
      id: "onion-flakes",
      title: "Onion Flakes",
      category: "agri",
      desc: "Dehydrated white & red onion flakes. High rehydration ratio with natural sweet flavor profile. Zero additives. Packed in vacuum-sealed moisture-barrier bags.",
      moq: "5 Metric Tons",
      image: "images/onion_flakes.jpeg",
      grade: "Export Ready",
      featured: true,
      gallery: ["images/onion_flakes.jpeg","images/onion_raw.jpeg","images/onion_processing.jpeg","images/onion_powder.jpeg"]
    },
    {
      id: "garlic-granules",
      title: "Garlic Granules",
      category: "agri",
      desc: "Fine dehydrated garlic flakes and granules. Strongly aromatic and moisture-sealed for maximum shelf stability.",
      moq: "5 Metric Tons",
      image: "images/gg.jpg",
      grade: "Premium Standard",
      gallery: ["images/gg.jpg","images/gc_1.webp","images/gc_2.webp"]
    },
    {
      id: "green-chillies",
      title: "Green Chillies",
      category: "agri",
      desc: "Fresh and dehydrated hot green chillies, sorted for length, color uniformity, and heat units (SHU value).",
      moq: "3 Metric Tons",
      image: "images/gc_1.webp",
      grade: "Direct Sourced",
      gallery: ["images/gc_1.webp","images/gc_2.webp"]
    },
    {
      id: "banana",
      title: "Premium Banana (G9 Cavendish)",
      category: "fruits",
      desc: "Export-grade G9 Cavendish bananas directly sourced from Maharashtra farms. Packed in premium export cartons with phytosanitary certification.",
      moq: "10 Metric Tons",
      image: "images/banana_export.jpeg",
      grade: "Export Grade A",
      gallery: ["images/banana_export.jpeg","images/banana_plantation.jpeg"]
    },
    {
      id: "papaya",
      title: "Fresh Papaya",
      category: "fruits",
      desc: "Premium export-quality papayas individually foam-net wrapped in export cartons. Inspected for size, weight, and Brix sugar levels.",
      moq: "5 Metric Tons",
      image: "images/papaya.jpeg",
      grade: "Premium Export",
      gallery: ["images/papaya.jpeg"]
    },
    {
      id: "indian-spices",
      title: "Indian Spices",
      category: "food",
      desc: "Whole spices and blended ground powders (Turmeric, Chilli, Cardamom, Cumin) direct from certified plantations.",
      moq: "2 Metric Tons",
      image: "images/is_1.webp",
      grade: "SGS Certified",
      gallery: ["images/is_1.webp","images/is_2.jpg","images/spices.png"]
    },
    {
      id: "dehydrated-ingredients",
      title: "Dehydrated Ingredients",
      category: "food",
      desc: "Dehydrated ginger, tomato flakes, mint leaves, and herb formulations for global food processing lines.",
      moq: "3 Metric Tons",
      image: "images/di_1.webp",
      grade: "Pure Grade",
      gallery: ["images/di_1.webp"]
    },
    {
      id: "tea-powder",
      title: "Tea Powder",
      category: "food",
      desc: "High-grade Assam CTC tea blends and Darjeeling Orthodox leaves, customized for bulk packers and brands.",
      moq: "2 Metric Tons",
      image: "images/tea_1.jpg",
      grade: "Estate Premium",
      gallery: ["images/tea_1.jpg","images/tea_2.webp"]
    },
    {
      id: "coffee-powder",
      title: "Coffee Powder",
      category: "food",
      desc: "Roasted Robusta and Arabica blends and instant spray-dried powder sourced from Southern Indian estates.",
      moq: "2 Metric Tons",
      image: "images/coffe_2.jpg",
      grade: "Premium Selection",
      gallery: ["images/coffe_2.jpg"]
    },
    {
      id: "cotton-products",
      title: "Cotton & Textiles",
      category: "textile",
      desc: "100% organic cotton bales, combed carded yarns, industrial canvas rolls, and finished home textiles.",
      moq: "1 x 20ft Container",
      image: "images/industrial_textiles.png",
      grade: "ISO 9001:2015",
      gallery: ["images/industrial_textiles.png"]
    },
    {
      id: "handicrafts",
      title: "Traditional Handicrafts",
      category: "textile",
      desc: "Artisanal wooden carving plaques, premium brassware containers, and decorative pottery reflecting rich Indian heritage.",
      moq: "Mixed Pallet Load",
      image: "images/th_1.jpg",
      grade: "Handcrafted Unique",
      gallery: ["images/th_1.jpg","images/th_2.jpg","images/th_3.jpg"]
    },
    {
      id: "industrial-products",
      title: "Industrial & Chemicals",
      category: "industrial",
      desc: "Precision fasteners, automotive castings, industrial dyes, organic chemical additives, and dry packaging materials.",
      moq: "10 Metric Tons",
      image: "images/ic_1.jpg",
      grade: "Heavy Duty UN",
      gallery: ["images/ic_1.jpg","images/ic_2.jpg"]
    }
  ];

  const filteredProducts = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

  const openLightbox = (prod: ProductItem, idx = 0) => {
    setLightboxProduct(prod);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxProduct(null);

  const prevImage = () => {
    if (!lightboxProduct) return;
    setLightboxIndex(i => (i - 1 + lightboxProduct.gallery.length) % lightboxProduct.gallery.length);
  };

  const nextImage = () => {
    if (!lightboxProduct) return;
    setLightboxIndex(i => (i + 1) % lightboxProduct.gallery.length);
  };

  const onionSpecs = [
    { label: "Moisture",      value: "≤ 6%" },
    { label: "Mesh Size",     value: "20–80 Mesh" },
    { label: "Pungency",      value: "≥ 30 μmol/g" },
    { label: "Shelf Life",    value: "24 Months" },
    { label: "Packaging",     value: "25kg / 50kg PP Bags" },
    { label: "Certifications",value: "APEDA / FSSAI / SGS" },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-luxury-white relative overflow-hidden">
      <div className="absolute top-[10%] right-0 w-64 md:w-[450px] h-64 md:h-[450px] bg-luxury-gold/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[10%] left-0 w-64 md:w-[450px] h-64 md:h-[450px] bg-luxury-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">B2B Trade Catalog</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">Export-Ready Product Categories</h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-sm md:text-base text-luxury-slate font-light leading-relaxed">
            We supply bulk commodities and finished merchandise meeting strict phytosanitary logs and food-grade packaging rules.
          </p>
        </div>

        {/* Onion Spotlight */}
        <div className="mb-16 md:mb-20 rounded-2xl sm:rounded-3xl overflow-hidden border border-luxury-gold/20 shadow-premium-hover relative">
          <div className="absolute inset-0">
            <img src="images/onion_raw.jpeg" alt="Onion Sourcing" className="w-full h-full object-cover opacity-20" onError={(e) => { e.currentTarget.style.display='none'; }} />
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal via-luxury-charcoal/95 to-luxury-charcoal/60" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center gap-5">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-luxury-gold fill-luxury-gold" />
                <span className="text-xs font-bold tracking-widest uppercase text-luxury-gold">Featured Export Product</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-luxury font-bold text-luxury-white leading-tight">
                Dehydrated Onion Products
                <span className="block text-luxury-gold text-lg sm:text-xl md:text-2xl mt-2 font-light">Powder · Flakes · Minced · Granules</span>
              </h3>
              <p className="text-xs sm:text-sm font-light text-neutral-300 leading-relaxed max-w-md">
                Nexorra Impex is a leading exporter of dehydrated onion products sourced directly from Maharashtra's prime onion belt. APEDA-compliant packaging for global markets.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-1">
                {onionSpecs.map((spec) => (
                  <div key={spec.label} className="bg-luxury-white/5 border border-luxury-gold/15 rounded-xl px-3 py-2 text-left">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-luxury-gold block">{spec.label}</span>
                    <span className="text-xs font-semibold text-luxury-white mt-0.5 block">{spec.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-1">
                <button onClick={() => onQuoteRequest('Onion Powder')}
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-luxury-gold text-luxury-charcoal text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-luxury-gold-light transition-all shadow-md">
                  Request Onion Quote <ChevronRight className="w-4 h-4" />
                </button>
                <button onClick={() => setActiveCategory('agri')}
                  className="flex items-center justify-center gap-2 px-5 py-3 border border-luxury-gold/30 text-luxury-gold text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-luxury-gold/10 transition-all">
                  View All Agri Products
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-0 min-h-[220px] sm:min-h-[320px]">
              {["images/onion_powder.jpeg","images/onion_flakes.jpeg"].map((img, i) => (
                <div key={i} className={`relative overflow-hidden group cursor-pointer ${i > 0 ? 'border-l border-luxury-gold/10' : ''}`}
                  onClick={() => openLightbox(products[i], 0)}>
                  <img src={img} alt={i === 0 ? "Onion Powder" : "Onion Flakes"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400"; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-luxury-gold block">{i === 0 ? 'Grade A' : 'Export Ready'}</span>
                    <span className="text-xs sm:text-sm font-bold text-luxury-white font-luxury">{i === 0 ? 'Onion Powder' : 'Onion Flakes'}</span>
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-luxury-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ZoomIn className="w-3.5 h-3.5 text-luxury-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 md:mb-16">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-luxury-charcoal text-luxury-white border-luxury-charcoal shadow-md'
                  : 'bg-transparent text-luxury-slate border-luxury-gold/20 hover:border-luxury-gold hover:text-luxury-charcoal'
              }`}>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => (
              <motion.div layout key={prod.id}
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }}
                className={`group flex flex-col bg-gradient-to-br from-luxury-cream to-luxury-white rounded-2xl sm:rounded-3xl border overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 text-left shine-hover ${prod.featured ? 'border-luxury-gold/30' : 'border-luxury-gold/15'}`}>

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-luxury-beige cursor-pointer" onClick={() => openLightbox(prod, 0)}>
                  {prod.featured && (
                    <div className="absolute top-0 right-0 z-20 bg-luxury-gold text-luxury-charcoal text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-bl-xl flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-luxury-charcoal" /> Featured
                    </div>
                  )}
                  {prod.gallery.length > 1 && (
                    <div className="absolute top-3 left-3 z-20 bg-luxury-charcoal/70 text-luxury-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-lg flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" /> {prod.gallery.length} Photos
                    </div>
                  )}
                  <div className="absolute top-4 left-4 z-20 glass-panel border border-luxury-gold/20 rounded-md px-3 py-1 flex items-center gap-1.5 shadow-sm" style={{top: prod.gallery.length > 1 ? '2.2rem' : '1rem'}}>
                    <Award className="w-3.5 h-3.5 text-luxury-gold-dark" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-gold-dark">{prod.grade}</span>
                  </div>
                  <img src={prod.image} alt={prod.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600"; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Hover: view gallery */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-luxury-white/20 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 border border-luxury-white/30">
                      <ZoomIn className="w-4 h-4 text-luxury-white" />
                      <span className="text-xs font-bold text-luxury-white">View Gallery</span>
                    </div>
                  </div>

                  {/* Thumbnail strip if multiple images */}
                  {prod.gallery.length > 1 && (
                    <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-2 bg-gradient-to-t from-luxury-charcoal/60 to-transparent">
                      {prod.gallery.slice(0, 4).map((img, idx) => (
                        <div key={idx} className="w-8 h-8 rounded-md overflow-hidden border border-luxury-white/30 shrink-0 cursor-pointer hover:border-luxury-gold transition-all"
                          onClick={(e) => { e.stopPropagation(); openLightbox(prod, idx); }}>
                          <img src={img} alt="" className="w-full h-full object-cover"
                            onError={(e) => { e.currentTarget.src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=100"; }} />
                        </div>
                      ))}
                      {prod.gallery.length > 4 && (
                        <div className="w-8 h-8 rounded-md bg-luxury-charcoal/70 border border-luxury-white/30 flex items-center justify-center shrink-0">
                          <span className="text-[9px] font-bold text-luxury-white">+{prod.gallery.length - 4}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-luxury text-luxury-charcoal mb-2 sm:mb-3 group-hover:text-luxury-gold-dark transition-colors duration-300">{prod.title}</h3>
                    <p className="text-xs sm:text-sm font-light text-luxury-slate leading-relaxed mb-4 sm:mb-6">{prod.desc}</p>
                  </div>
                  <div className="pt-4 sm:pt-6 border-t border-luxury-gold/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Min. Order</span>
                      <p className="text-sm font-semibold text-luxury-charcoal mt-0.5">{prod.moq}</p>
                    </div>
                    <button onClick={() => onQuoteRequest(prod.title)}
                      className="w-10 h-10 rounded-full bg-luxury-gold/5 border border-luxury-gold/20 hover:bg-luxury-gold hover:border-luxury-gold flex items-center justify-center text-luxury-gold-dark hover:text-luxury-white transform group-hover:rotate-45 group-hover:scale-105 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxProduct && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-luxury-charcoal/95 backdrop-blur-md flex flex-col"
            onClick={closeLightbox}>

            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-luxury-gold/15 shrink-0" onClick={e => e.stopPropagation()}>
              <div>
                <h3 className="text-base sm:text-lg font-bold font-luxury text-luxury-white">{lightboxProduct.title}</h3>
                <span className="text-xs text-luxury-gold">{lightboxIndex + 1} / {lightboxProduct.gallery.length}</span>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => onQuoteRequest(lightboxProduct.title)}
                  className="px-4 py-2 bg-luxury-gold text-luxury-charcoal text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-luxury-gold-light transition-all hidden sm:flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5" /> Request Quote
                </button>
                <button onClick={closeLightbox} className="w-9 h-9 rounded-full bg-luxury-white/10 flex items-center justify-center text-luxury-white hover:bg-luxury-white/20 transition-all">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main image */}
            <div className="flex-1 flex items-center justify-center relative px-4 py-4 min-h-0" onClick={e => e.stopPropagation()}>
              {lightboxProduct.gallery.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-2 sm:left-6 z-10 w-10 h-10 rounded-full bg-luxury-white/10 hover:bg-luxury-white/20 flex items-center justify-center text-luxury-white transition-all">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 sm:right-6 z-10 w-10 h-10 rounded-full bg-luxury-white/10 hover:bg-luxury-white/20 flex items-center justify-center text-luxury-white transition-all">
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </>
              )}
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  src={lightboxProduct.gallery[lightboxIndex]}
                  alt={lightboxProduct.title}
                  className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl"
                  onError={(e) => { e.currentTarget.src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800"; }}
                />
              </AnimatePresence>
            </div>

            {/* Thumbnail strip */}
            {lightboxProduct.gallery.length > 1 && (
              <div className="shrink-0 flex gap-2 px-4 py-3 border-t border-luxury-gold/10 overflow-x-auto" onClick={e => e.stopPropagation()}>
                {lightboxProduct.gallery.map((img, idx) => (
                  <div key={idx} onClick={() => setLightboxIndex(idx)}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 cursor-pointer shrink-0 transition-all ${idx === lightboxIndex ? 'border-luxury-gold scale-110' : 'border-luxury-white/20 hover:border-luxury-gold/50'}`}>
                    <img src={img} alt="" className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=100"; }} />
                  </div>
                ))}
              </div>
            )}

            {/* Mobile quote button */}
            <div className="sm:hidden px-4 pb-4 shrink-0" onClick={e => e.stopPropagation()}>
              <button onClick={() => { closeLightbox(); onQuoteRequest(lightboxProduct.title); }}
                className="w-full py-3 bg-luxury-gold text-luxury-charcoal text-xs font-bold uppercase tracking-widest rounded-xl">
                Request Quote for {lightboxProduct.title}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
