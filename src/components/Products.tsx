import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductsProps {
  onQuoteRequest: (productName: string) => void;
}

interface ProductItem {
  id: string;
  title: string;
  category: 'agri' | 'food' | 'textile' | 'industrial' | 'liquid';
  desc: string;
  moq: string;
  image: string;
  images?: string[];
  grade: string;
}

function ProductCard({ prod, onQuoteRequest }: { prod: ProductItem; onQuoteRequest: (productName: string) => void }) {
  const [imgIndex, setImgIndex] = useState(0);
  const images = prod.images && prod.images.length > 0 ? [prod.image, ...prod.images] : [prod.image];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col bg-gradient-to-br from-luxury-cream to-luxury-white rounded-3xl border border-luxury-gold/15 overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 text-left shine-hover"
    >
      {/* Image Showcase */}
      <div className="relative aspect-[4/3] overflow-hidden bg-luxury-beige flex items-center justify-center">
        {/* Badge */}
        <div className="absolute top-4 left-4 z-20 glass-panel border border-luxury-gold/20 rounded-md px-3 py-1 flex items-center gap-1.5 shadow-sm">
          <Award className="w-3.5 h-3.5 text-luxury-gold-dark" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-gold-dark">{prod.grade}</span>
        </div>

        {/* Slider Controls if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-luxury-white/90 border border-luxury-gold/20 flex items-center justify-center text-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-white transition-all opacity-0 group-hover:opacity-100 shadow-sm"
              title="Previous Image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-luxury-white/90 border border-luxury-gold/20 flex items-center justify-center text-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-white transition-all opacity-0 group-hover:opacity-100 shadow-sm"
              title="Next Image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-luxury-charcoal/20 backdrop-blur-md py-1 px-2.5 rounded-full">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    imgIndex === i ? 'bg-luxury-gold w-3' : 'bg-luxury-white/70'
                  }`}
                  title={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <img
          src={images[imgIndex]}
          alt={prod.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600";
          }}
        />
        
        {/* Gold radial overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Card Info */}
      <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold font-luxury text-luxury-charcoal mb-3 group-hover:text-luxury-gold-dark transition-colors duration-300">
            {prod.title}
          </h3>
          <p className="text-xs md:text-sm font-light text-luxury-slate leading-relaxed mb-6">
            {prod.desc}
          </p>
        </div>

        <div className="pt-6 border-t border-luxury-gold/10 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Min. Order</span>
            <span className="text-sm font-semibold text-luxury-charcoal mt-0.5">{prod.moq}</span>
          </div>
          
          <button
            onClick={() => onQuoteRequest(prod.title)}
            className="w-10 h-10 rounded-full bg-luxury-gold/5 border border-luxury-gold/20 hover:bg-luxury-gold hover:border-luxury-gold flex items-center justify-center text-luxury-gold-dark hover:text-luxury-white transform group-hover:rotate-45 group-hover:scale-105 transition-all duration-300"
            title="Request Quote"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products({ onQuoteRequest }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'agri' | 'food' | 'textile' | 'industrial' | 'liquid'>('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'agri', name: 'Agricultural' },
    { id: 'food', name: 'Spices & Ingredients' },
    { id: 'liquid', name: 'Liquid & Beverages' },
    { id: 'textile', name: 'Textiles & Handicrafts' },
    { id: 'industrial', name: 'Industrial & Chemicals' }
  ];

  const products: ProductItem[] = [
    {
      id: "onion-powder",
      title: "Onion Powder",
      category: "agri",
      desc: "Export-grade dehydrated onion powder. Ground to fine mesh size, free-flowing, and preserved under controlled humidity.",
      moq: "5 Metric Tons",
      image: "images/onion_powder.png",
      grade: "Grade A Premium"
    },
    {
      id: "onion-flakes",
      title: "Onion Flakes",
      category: "agri",
      desc: "Dehydrated white & red onion flakes. High rehydration ratio with natural sweet flavor profile. Zero additives.",
      moq: "5 Metric Tons",
      image: "images/onion_flakes.png",
      grade: "Export Ready"
    },
    {
      id: "garlic-granules",
      title: "Garlic Granules",
      category: "agri",
      desc: "Fine dehydrated garlic flakes and granules. Strongly aromatic and moisture-sealed for maximum shelf stability.",
      moq: "5 Metric Tons",
      image: "images/garlic_granules.png",
      grade: "Premium Standard"
    },
    {
      id: "fresh-papaya",
      title: "Fresh Premium Papaya",
      category: "agri",
      desc: "Export-quality fresh Indian papayas, carefully sorted, sanitarily treated, and packed in protective foam netting and heavy-duty ventilated cartons for optimal transit shelf-life.",
      moq: "2 Metric Tons",
      image: "images/papaya_box.jpg",
      images: [
        "https://images.unsplash.com/photo-1517431359124-7679d06869b6?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1613143721345-0d8591ef52fa?auto=format&fit=crop&q=80&w=600"
      ],
      grade: "APEDA Certified"
    },
    {
      id: "green-chillies",
      title: "Green Chillies",
      category: "agri",
      desc: "Fresh and dehydrated hot green chillies, sorted for length, color uniformity, and heat units (SHU value).",
      moq: "3 Metric Tons",
      image: "images/green_chillies.png",
      grade: "Direct Sourced"
    },
    {
      id: "indian-spices",
      title: "Indian Spices",
      category: "food",
      desc: "Whole spices and blended ground powders (Turmeric, Chilli, Cardamom, Cumin) direct from certified plantations.",
      moq: "2 Metric Tons",
      image: "images/spices.png",
      grade: "SGS Certified"
    },
    {
      id: "dehydrated-ingredients",
      title: "Dehydrated Ingredients",
      category: "food",
      desc: "Dehydrated ginger, tomato flakes, mint leaves, and herb formulations for global food processing lines.",
      moq: "3 Metric Tons",
      image: "images/dehydrated_ingredients.png",
      grade: "Pure Grade"
    },
    {
      id: "packaged-water",
      title: "Premium Packaged Mineral Water",
      category: "liquid",
      desc: "High-purity premium packaged mineral water. Multi-stage filtration (RO, UV sterilizers, Ozonation) with precise electrolyte balance for international luxury standards.",
      moq: "1 x 20ft Container",
      image: "images/beverage_bottling.jpg",
      images: [
        "images/beverage_warehouse_blue.jpg",
        "images/beverage_warehouse_green.jpg",
        "images/beverage_processing.jpg"
      ],
      grade: "BIS & ISI Certified"
    },
    {
      id: "fruit-pulp",
      title: "Fruit Pulps & Concentrates",
      category: "liquid",
      desc: "Aseptic processed tropical fruit pulps (Mango, Guava, Papaya) and beverage concentrates. Rich Brix profile, zero artificial preservatives, packaged in sterilised aseptic bag-in-drum containers.",
      moq: "5 Metric Tons",
      image: "images/beverage_processing.jpg",
      grade: "FSSAI & HACCP Approved"
    },
    {
      id: "tea-powder",
      title: "Tea Powder",
      category: "food",
      desc: "High-grade Assam CTC tea blends and Darjeeling Orthodox leaves, customized for bulk packers and brands.",
      moq: "2 Metric Tons",
      image: "images/tea_powder.png",
      grade: "Estate Premium"
    },
    {
      id: "coffee-powder",
      title: "Coffee Powder",
      category: "food",
      desc: "Roasted Robusta and Arabica blends and instant spray-dried powder sourced from Southern Indian estates.",
      moq: "2 Metric Tons",
      image: "images/coffee_powder.png",
      grade: "Premium Selection"
    },
    {
      id: "cotton-products",
      title: "Cotton & Textiles",
      category: "textile",
      desc: "100% organic cotton bales, combed carded yarns, industrial canvas rolls, and finished home textiles.",
      moq: "1 x 20ft Container",
      image: "images/industrial_textiles.png",
      grade: "ISO 9001:2015"
    },
    {
      id: "handicrafts",
      title: "Traditional Handicrafts",
      category: "textile",
      desc: "Artisanal wooden carving plaques, premium brassware containers, and decorative pottery reflecting rich Indian heritage.",
      moq: "Mixed Pallet Load",
      image: "images/handicrafts.png",
      grade: "Handcrafted Unique"
    },
    {
      id: "industrial-products",
      title: "Industrial & Chemicals",
      category: "industrial",
      desc: "Precision fasteners, automotive castings, industrial dyes, organic chemical additives, and dry packaging materials.",
      moq: "10 Metric Tons",
      image: "images/industrial_products.png",
      grade: "Heavy Duty UN"
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-luxury-white relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-[10%] right-0 w-[450px] h-[450px] bg-luxury-gold/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[10%] left-0 w-[450px] h-[450px] bg-luxury-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">B2B Trade Catalog</span>
          <h2 className="text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">
            Export-Ready Product Categories
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-luxury-slate font-light leading-relaxed">
            We supply bulk commodities and finished merchandise meeting strict phytosanitary standards and food-grade packaging rules.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-luxury-charcoal text-luxury-white border-luxury-charcoal shadow-md'
                  : 'bg-transparent text-luxury-slate border-luxury-gold/20 hover:border-luxury-gold hover:text-luxury-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} prod={prod} onQuoteRequest={onQuoteRequest} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
