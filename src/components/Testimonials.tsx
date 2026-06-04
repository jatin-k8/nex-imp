import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    { name: "Marcus Keller", role: "Procurement Director", company: "Hamburg Food Distribution Group", country: "Germany 🇩🇪", text: "Nexorra Impex has been exporting dehydrated onion powder and flakes to our warehouses in Germany. The mesh quality is completely consistent, and the vacuum packaging prevents clumping. They are our go-to partner in India.", rating: 5 },
    { name: "Kenji Tanaka", role: "Logistics Manager", company: "Osaka Textile Trading Corp", country: "Japan 🇯🇵", text: "Sourcing raw cotton bales and organic combed yarns from India was complex due to shipping line coordination, but Nexorra handles all clearances seamlessly. Excellent communication and 100% on-time container deliveries.", rating: 5 },
    { name: "Faisal Al-Mansoori", role: "Managing Partner", company: "Al-Mansoor Foodstuffs LLC", country: "Dubai, UAE 🇦🇪", text: "Our B2B contract for bulk coffee dust and spices with Nexorra Impex has been running for a year. The pricing is highly competitive, and the team handles all phytosanitary certifications with absolute professionalism.", rating: 5 }
  ];

  return (
    <section className="py-16 md:py-24 bg-luxury-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">International Relations</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">B2B Client Testimonials</h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-sm md:text-base text-luxury-slate font-light leading-relaxed">
            Discover how global procurement officers and commodity buyers evaluate our sourcing capabilities and logistics performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-gradient-to-br from-luxury-cream to-luxury-white border border-luxury-gold/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-premium flex flex-col justify-between text-left relative overflow-hidden">
              <div className="absolute top-6 right-6 opacity-[0.03]">
                <Quote className="w-20 h-20 sm:w-24 sm:h-24 text-luxury-gold" />
              </div>
              <div>
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm font-light text-luxury-slate leading-relaxed mb-6 italic">"{rev.text}"</p>
              </div>
              <div className="pt-4 sm:pt-6 border-t border-luxury-gold/10 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-luxury-charcoal truncate">{rev.name}</h4>
                  <span className="text-[10px] text-neutral-400 font-medium block truncate">{rev.role}</span>
                  <span className="text-[10px] text-luxury-gold-dark font-semibold block truncate">{rev.company}</span>
                </div>
                <span className="text-xs font-bold text-luxury-charcoal shrink-0 bg-luxury-gold/5 px-2 py-1 rounded-md border border-luxury-gold/10 whitespace-nowrap">
                  {rev.country}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
