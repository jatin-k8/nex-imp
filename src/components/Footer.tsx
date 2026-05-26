import React, { useState } from 'react';
import { Mail, Compass, Send, Phone, MapPin, Globe, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thank you! ${email} has been registered for the Nexorra Impex monthly B2B Trade & Crop Report.`);
    setEmail('');
  };

  return (
    <footer className="bg-luxury-cream border-t-2 border-luxury-gold/30 relative overflow-hidden pt-12">
      {/* Decorative soft glow background */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-luxury-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* 1. Legal Trade Disclaimer Section */}
        <div className="bg-luxury-white/60 border border-luxury-gold/10 rounded-2xl p-6 mb-16 text-left max-w-5xl mx-auto">
          <h5 className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark mb-2">Legal Disclaimer</h5>
          <p className="text-[10px] md:text-xs text-luxury-slate font-light leading-relaxed">
            All product photography and visual layouts on this portal are for presentation purposes only. Actual cargo colors, mesh granularity, and specifications may vary depending on crop season, manufacturing batches, and customized client packaging requirements. Export availability of agricultural, textile, or chemical components remains subject to Indian trade policies and international phytosanitary import regulations. Nexorra Impex reserves the right to amend pricing, specifications, and availability sheets without prior notification.
          </p>
        </div>

        {/* 2. Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-luxury-gold/10 text-left">
          
          {/* Slogan & About (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-2.5 group">
              <span className="font-luxury tracking-widest text-xl font-bold uppercase text-luxury-charcoal">
                Nexorra <span className="text-luxury-gold-dark font-sans font-light">Impex</span>
              </span>
            </a>
            <p className="text-xs md:text-sm font-light text-luxury-slate leading-relaxed">
              Nexorra Impex is an Indian manufacturer-cum-trader specializing in global logistics distribution of agricultural commodities, handcrafted artifacts, fabrics, and heavy industrial cast parts.
            </p>
            <span className="text-xs italic font-semibold text-luxury-gold-dark font-luxury tracking-wider">
              “Delivering Indian Excellence Worldwide.”
            </span>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-widest text-luxury-charcoal mb-6 border-b border-luxury-gold/10 pb-2">Quick Navigation</h4>
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-xs font-medium text-luxury-slate hover:text-luxury-gold-dark transition-colors">Home</a>
              <a href="#about" className="text-xs font-medium text-luxury-slate hover:text-luxury-gold-dark transition-colors">About Us</a>
              <a href="#products" className="text-xs font-medium text-luxury-slate hover:text-luxury-gold-dark transition-colors">Products</a>
              <a href="#presence" className="text-xs font-medium text-luxury-slate hover:text-luxury-gold-dark transition-colors">Global Presence</a>
              <a href="#why-us" className="text-xs font-medium text-luxury-slate hover:text-luxury-gold-dark transition-colors">Why Choose Us</a>
              <a href="#packaging" className="text-xs font-medium text-luxury-slate hover:text-luxury-gold-dark transition-colors">Standards</a>
            </div>
          </div>

          {/* Product Categories (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-luxury-charcoal mb-6 border-b border-luxury-gold/10 pb-2">Product Categories</h4>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium text-luxury-slate">Onion Powder & Flakes</span>
              <span className="text-xs font-medium text-luxury-slate">Dehydrated Garlic & Ingredients</span>
              <span className="text-xs font-medium text-luxury-slate">Indian Plantations Spices</span>
              <span className="text-xs font-medium text-luxury-slate">Organic Cotton & Textiles</span>
              <span className="text-xs font-medium text-luxury-slate">Handicrafts & Heritage Artifacts</span>
              <span className="text-xs font-medium text-luxury-slate">Heavy Machinery Fasteners</span>
            </div>
          </div>

          {/* Newsletter (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-xs uppercase font-bold tracking-widest text-luxury-charcoal mb-2 border-b border-luxury-gold/10 pb-2">Monthly Trade Report</h4>
            <p className="text-xs font-light text-luxury-slate leading-relaxed">
              Subscribe to receive crop forecast projections, B2B price indices, and maritime shipping logs.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="buyer@corporate.com"
                className="bg-luxury-white border border-luxury-gold/15 rounded-xl px-4 py-2.5 text-xs text-luxury-charcoal focus:outline-none focus:border-luxury-gold flex-grow"
              />
              <button 
                type="submit"
                className="w-10 h-10 rounded-xl bg-luxury-charcoal hover:bg-luxury-gold-dark flex items-center justify-center text-luxury-white transition-all shadow-md shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* 3. Sub-footer Credits */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[10px] md:text-xs font-light text-luxury-slate">
            &copy; {new Date().getFullYear()} Nexorra Impex. All rights reserved. Sourced & manufactured in India.
          </span>
          
          <div className="flex gap-4">
            <a href="https://wa.me/917744096751" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-slate hover:text-[#25D366] hover:border-[#25D366] transition-all">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-slate hover:text-[#0077B5] hover:border-[#0077B5] transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
