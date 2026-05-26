import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import GlobalPresence from './components/GlobalPresence';
import PackagingStandards from './components/PackagingStandards';
import SupportAndWidgets from './components/SupportAndWidgets';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteRequest = (productName: string) => {
    setSelectedProduct(productName);
    scrollToSection('contact');
  };

  return (
    <div className="relative min-h-screen bg-luxury-cream text-luxury-charcoal selection:bg-luxury-gold/30">
      {/* Premium top decorative gradient bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gradient-to-r from-luxury-gold-dark via-luxury-gold to-luxury-gold-light z-50 shadow-sm" />

      {/* Sticky Premium Navbar */}
      <Navbar onInquiryClick={() => scrollToSection('contact')} />

      {/* Hero Section */}
      <Hero 
        onExploreProducts={() => scrollToSection('products')}
        onContactUs={() => scrollToSection('contact')}
      />

      {/* About Us Section */}
      <AboutUs />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Products Catalog Grid */}
      <Products onQuoteRequest={handleQuoteRequest} />

      {/* Interactive Global Shipping Corridor Map */}
      <GlobalPresence />

      {/* Packaging Specifications Panel */}
      <PackagingStandards />

      {/* Interactive B2B Trade Console (Chat, Track, Convert) */}
      <SupportAndWidgets />

      {/* International B2B Client Reviews */}
      <Testimonials />

      {/* Masonry Operations Gallery */}
      <Gallery />

      {/* B2B Inquiry Form Panel */}
      <InquiryForm prefilledProduct={selectedProduct} />

      {/* World-class Corporate Disclaimer & Footer */}
      <Footer />
    </div>
  );
}
