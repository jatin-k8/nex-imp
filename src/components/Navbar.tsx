import React, { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';

interface NavbarProps {
  onInquiryClick: () => void;
}

export default function Navbar({ onInquiryClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Global Presence', href: '#presence' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Packaging Standards', href: '#packaging' },
    { name: 'Trade Desk', href: '#trade-desk' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-luxury-cream/80 backdrop-blur-md py-4 shadow-premium border-b border-luxury-gold/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-luxury-gold via-luxury-gold-dark to-luxury-gold-light p-[1.5px] flex items-center justify-center shadow-md transform group-hover:rotate-12 transition-transform duration-300">
            <div className="w-full h-full bg-luxury-cream rounded-md flex items-center justify-center">
              <Compass className="w-5 h-5 text-luxury-gold-dark" />
            </div>
          </div>
          <span className="font-luxury tracking-widest text-lg md:text-xl font-bold uppercase text-luxury-charcoal group-hover:text-luxury-gold-dark transition-colors duration-300">
            Nexorra <span className="text-luxury-gold-dark font-sans font-light">Impex</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-xs md:text-sm font-medium tracking-wider uppercase text-luxury-slate hover:text-luxury-charcoal transition-colors duration-300 py-1.5 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button 
            onClick={onInquiryClick}
            className="px-6 py-2.5 text-xs font-semibold tracking-widest uppercase text-luxury-white bg-gradient-to-r from-luxury-gold-dark to-luxury-gold hover:from-luxury-gold hover:to-luxury-gold-light rounded shadow-premium hover:shadow-premium-hover transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Export Inquiry
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-luxury-charcoal focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`lg:hidden fixed inset-0 top-[72px] bg-luxury-cream/98 z-40 flex flex-col items-center justify-center gap-6 px-8 transition-all duration-500 ease-in-out border-t border-luxury-gold/5 ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-luxury tracking-widest uppercase text-luxury-charcoal hover:text-luxury-gold-dark transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={() => {
            setIsMobileMenuOpen(false);
            onInquiryClick();
          }}
          className="w-full mt-4 px-8 py-3.5 text-sm font-semibold tracking-widest uppercase text-luxury-white bg-gradient-to-r from-luxury-gold-dark to-luxury-gold rounded shadow-premium text-center"
        >
          Get Export Inquiry
        </button>
      </div>
    </header>
  );
}
