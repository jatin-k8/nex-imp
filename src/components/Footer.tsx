import React, { useState } from 'react';
import { Mail, Send, Phone, MapPin, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thank you! ${email} has been registered for the Nexorra Impex monthly B2B Trade & Crop Report.`);
    setEmail('');
  };

  return (
    <footer className="bg-luxury-cream border-t-2 border-luxury-gold/30 relative overflow-hidden pt-10 sm:pt-12">
      <div className="absolute bottom-0 right-0 w-64 md:w-[400px] h-48 md:h-[300px] bg-luxury-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Legal Disclaimer */}
        <div className="bg-luxury-white/60 border border-luxury-gold/10 rounded-2xl p-4 sm:p-6 mb-10 sm:mb-16 text-left">
          <h5 className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark mb-2">Legal Disclaimer</h5>
          <p className="text-[10px] sm:text-xs text-luxury-slate font-light leading-relaxed">
            All product photography and visual layouts on this portal are for presentation purposes only. Actual cargo colors, mesh granularity, and specifications may vary depending on crop season, manufacturing batches, and customized client packaging requirements. Export availability of agricultural, textile, or chemical components remains subject to Indian trade policies and international phytosanitary import regulations. Nexorra Impex reserves the right to amend pricing, specifications, and availability sheets without prior notification.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-16 border-b border-luxury-gold/10 text-left">

          {/* Brand + Contact */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-4 sm:gap-6">
            <a href="#home">
              <img src="images/nexorra_logo.jpeg" alt="Nexorra Impex" className="h-12 w-auto object-contain" />
            </a>
            <p className="text-xs sm:text-sm font-light text-luxury-slate leading-relaxed">
              Nexorra Impex is an Indian manufacturer-cum-trader specializing in global logistics distribution of agricultural commodities, handcrafted artifacts, fabrics, and heavy industrial cast parts.
            </p>
            <span className="text-xs italic font-semibold text-luxury-gold-dark font-luxury tracking-wider">
              "Delivering Indian Excellence Worldwide."
            </span>
            <div className="flex flex-col gap-3 pt-4 border-t border-luxury-gold/10">
              <h5 className="text-[10px] uppercase font-bold tracking-widest text-luxury-charcoal">Contact Us</h5>
              <div>
                <span className="text-[9px] uppercase font-bold tracking-widest text-luxury-gold-dark">Founder</span>
                <p className="text-xs font-semibold text-luxury-charcoal mt-0.5">Hrushabh Manoj Gadiya</p>
              </div>
              <a href="tel:+917744096751" className="flex items-center gap-2 text-xs text-luxury-slate hover:text-luxury-gold-dark transition-colors">
                <Phone className="w-3.5 h-3.5 shrink-0 text-luxury-gold-dark" />+91 77440 96751
              </a>
              <a href="mailto:nexorra.impex95@gmail.com" className="flex items-center gap-2 text-xs text-luxury-slate hover:text-luxury-gold-dark transition-colors break-all">
                <Mail className="w-3.5 h-3.5 shrink-0 text-luxury-gold-dark" />nexorra.impex95@gmail.com
              </a>
              <div className="flex items-start gap-2 text-xs text-luxury-slate">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-luxury-gold-dark" />
                <span className="leading-relaxed">Survey No. 228, Plot No. 4 &amp; 5, Vardhaman Apartment, Bhosarigaon, Bhosari, Pune – 411039, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-widest text-luxury-charcoal mb-4 sm:mb-6 border-b border-luxury-gold/10 pb-2">Quick Navigation</h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              {['#home|Home','#about|About Us','#products|Products','#presence|Global Presence','#why-us|Why Choose Us','#packaging|Standards'].map(item => {
                const [href, name] = item.split('|');
                return <a key={href} href={href} className="text-xs font-medium text-luxury-slate hover:text-luxury-gold-dark transition-colors">{name}</a>;
              })}
            </div>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-luxury-charcoal mb-4 sm:mb-6 border-b border-luxury-gold/10 pb-2">Product Categories</h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              {['Onion Powder & Flakes','Dehydrated Garlic & Ingredients','Indian Plantations Spices','Organic Cotton & Textiles','Handicrafts & Heritage Artifacts','Heavy Machinery Fasteners'].map(p => (
                <span key={p} className="text-xs font-medium text-luxury-slate">{p}</span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-6">
            <h4 className="text-xs uppercase font-bold tracking-widest text-luxury-charcoal border-b border-luxury-gold/10 pb-2">Monthly Trade Report</h4>
            <p className="text-xs font-light text-luxury-slate leading-relaxed">
              Subscribe to receive crop forecast projections, B2B price indices, and maritime shipping logs.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="buyer@corporate.com"
                className="bg-luxury-white border border-luxury-gold/15 rounded-xl px-3 py-2.5 text-xs text-luxury-charcoal focus:outline-none focus:border-luxury-gold flex-grow min-w-0" />
              <button type="submit" className="w-10 h-10 rounded-xl bg-luxury-charcoal hover:bg-luxury-gold-dark flex items-center justify-center text-luxury-white transition-all shadow-md shrink-0">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="py-6 sm:py-8 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[10px] sm:text-xs font-light text-luxury-slate text-center sm:text-left">
              &copy; {new Date().getFullYear()} Nexorra Impex. All rights reserved. Sourced &amp; manufactured in India.
            </span>
            <div className="flex gap-3">
              <a href="https://wa.me/917744096751" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-slate hover:text-[#25D366] hover:border-[#25D366] transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-slate hover:text-[#0077B5] hover:border-[#0077B5] transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-1.5 border-t border-luxury-gold/10 pt-4">
            <span className="text-[10px] font-light text-luxury-slate">Developed &amp; Powered by</span>
            <span className="text-[10px] font-bold text-luxury-gold-dark tracking-wide">@Jatin Karnawat</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
