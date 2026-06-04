import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Package, Network, DollarSign, Clock, Layers, HeartHandshake, FileCheck, PhoneCall, Globe } from 'lucide-react';

export default function WhyChooseUs() {
  const advantages = [
    { title: "Premium Quality Products", desc: "Every product batch undergoes third-party lab inspection (SGS/APEDA) to verify moisture levels and global sanitary compliance.", icon: ShieldCheck },
    { title: "International Packaging Standards", desc: "Moisture-barrier vacuum bags and fiber-kraft drums prevent mold or clumping during long ocean cargo journeys.", icon: Package },
    { title: "Reliable Manufacturer Network", desc: "Direct tie-ups with organic farmers and ISO-certified dehydration lines ensure consistent product volumes year-round.", icon: Network },
    { title: "Competitive Global Pricing", desc: "Direct procurement bypasses middlemen and brokers, offering highly competitive rates for international buying houses.", icon: DollarSign },
    { title: "Timely Delivery Commitment", desc: "Streamlined customs documentation and carrier agreements allow us to minimize delays at Indian loading ports.", icon: Clock },
    { title: "Flexible Bulk Orders", desc: "Adaptable contract sizes and mixed container loads (LCL/FCL) allow buyers to test formulations and consumer response.", icon: Layers },
    { title: "Trusted Business Relationships", desc: "We focus on transparency, offering clear communication, video inspections, and consistent quality batch-after-batch.", icon: HeartHandshake },
    { title: "Professional Export Solutions", desc: "End-to-end management of phytosanitary certificates, Certificates of Origin, custom clearances, and Bill of Ladings.", icon: FileCheck },
    { title: "Customer-Centric Support", desc: "Direct communication channels to the management desk ensure quick responses, contract updates, and technical document supply.", icon: PhoneCall },
    { title: "Global Logistics Assistance", desc: "Partnerships with major lines (Maersk, CMA CGM, MSC) enable us to offer flexible CIF, CFR, FOB, or DDU delivery terms.", icon: Globe }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-luxury-cream relative overflow-hidden">
      <div className="absolute top-[20%] left-[5%] w-64 md:w-[400px] h-64 md:h-[400px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-64 md:w-[400px] h-64 md:h-[400px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">Why Nexorra Impex</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">The Premium Trade Advantage</h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-sm md:text-base text-luxury-slate font-light leading-relaxed">
            International buyers select Nexorra Impex as their partner of choice in India because of our compliance-first methodology, quality checks, and structured supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="group relative rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-6 md:p-8 border border-luxury-gold/10 hover:border-luxury-gold/30 hover:bg-luxury-white transition-all duration-500 shadow-premium flex flex-col items-start text-left overflow-hidden cursor-default">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-luxury-gold/5 border border-luxury-gold/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-luxury-gold/15 transition-colors duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-gold-dark" />
                </div>
                <h3 className="text-base sm:text-lg font-bold font-luxury text-luxury-charcoal mb-2 sm:mb-3">{adv.title}</h3>
                <p className="text-xs sm:text-sm font-light text-luxury-slate leading-relaxed">{adv.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
