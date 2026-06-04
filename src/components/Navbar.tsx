import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onInquiryClick: () => void;
}

export default function Navbar({ onInquiryClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home',               href: '#home' },
    { name: 'About Us',           href: '#about' },
    { name: 'Products',           href: '#products' },
    { name: 'Global Presence',    href: '#presence' },
    { name: 'Why Choose Us',      href: '#why-us' },
    { name: 'Packaging',          href: '#packaging' },
    { name: 'Trade Desk',         href: '#trade-desk' },
    { name: 'Contact',            href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-luxury-cream/95 backdrop-blur-md py-2 shadow-premium border-b border-luxury-gold/10'
        : 'bg-transparent py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between gap-4">

        {/* ── LOGO (bigger + always visible) ── */}
        <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
          <img
            src="images/nexorra_logo.jpeg"
            alt="Nexorra Impex"
            className="h-14 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}
              className="relative text-[11px] xl:text-xs font-medium tracking-wider uppercase text-luxury-slate hover:text-luxury-charcoal transition-colors duration-300 py-1 group whitespace-nowrap">
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <button onClick={onInquiryClick}
          className="hidden lg:block flex-shrink-0 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-luxury-white bg-gradient-to-r from-luxury-gold-dark to-luxury-gold hover:from-luxury-gold hover:to-luxury-gold-light rounded shadow-premium transition-all duration-300 whitespace-nowrap">
          Get Inquiry
        </button>

        {/* ── Mobile: small CTA + hamburger ── */}
        <div className="lg:hidden flex items-center gap-2 flex-shrink-0">
          <button onClick={onInquiryClick}
            className="px-3 py-2 text-[10px] font-bold tracking-widest uppercase text-luxury-white bg-luxury-gold-dark rounded-lg whitespace-nowrap">
            Inquiry
          </button>
          <button onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-luxury-charcoal" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* ── Mobile Full-Screen Menu ── */}
      <div className={`lg:hidden fixed inset-0 z-50 flex flex-col bg-luxury-cream transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        {/* Header row */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-luxury-gold/10">
          <img src="images/nexorra_logo.jpeg" alt="Nexorra Impex"
            className="h-14 w-auto object-contain" />
          <button onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-luxury-charcoal" aria-label="Close menu">
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-luxury font-semibold tracking-widest uppercase text-luxury-charcoal hover:text-luxury-gold-dark border-b border-luxury-gold/8 py-5 transition-colors duration-200">
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="px-6 pb-10 pt-4 border-t border-luxury-gold/10">
          <button onClick={() => { setIsMobileMenuOpen(false); onInquiryClick(); }}
            className="w-full py-4 text-sm font-bold tracking-widest uppercase text-luxury-white bg-gradient-to-r from-luxury-gold-dark to-luxury-gold rounded-2xl shadow-premium">
            Get Export Inquiry
          </button>
          <p className="text-center text-xs text-luxury-slate mt-4">
            📞 <a href="tel:+917744096751" className="hover:text-luxury-gold-dark">+91 77440 96751</a>
          </p>
        </div>
      </div>
    </header>
  );
}
