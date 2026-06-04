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
import Careers from './components/Careers';
import Footer from './components/Footer';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({
       behavior: 'smooth',
      block: 'start'
   });

  const handleQuoteRequest = (productName: string) => {
    setSelectedProduct(productName);
     setTimeout(() => {
      scrollToSection('contact');
    }, 100);
  };

  return (
    <div className="relative min-h-screen bg-luxury-cream text-luxury-charcoal selection:bg-luxury-gold/30">
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gradient-to-r from-luxury-gold-dark via-luxury-gold to-luxury-gold-light z-50 shadow-sm" />
      <Navbar onInquiryClick={() => scrollToSection('contact')} />
      <Hero onExploreProducts={() => scrollToSection('products')} onContactUs={() => scrollToSection('contact')} />
      <AboutUs />
      <WhyChooseUs />
      <Products onQuoteRequest={handleQuoteRequest} />
      <GlobalPresence />
      <PackagingStandards />
      <SupportAndWidgets />
      <Testimonials />
      <Gallery />
      <InquiryForm prefilledProduct={selectedProduct} />
      <Careers />
      <Footer />
    </div>
  );
}
