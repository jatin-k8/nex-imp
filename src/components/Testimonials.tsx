import React from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  country: string;
  text: string;
  rating: number;
}

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      name: "Marcus Keller",
      role: "Procurement Director",
      company: "Hamburg Food Distribution Group",
      country: "Germany 🇩🇪",
      text: "Nexorra Impex has been exporting dehydrated onion powder and flakes to our warehouses in Germany. The mesh quality is completely consistent, and the vacuum packaging prevents clumping. They are our go-to partner in India.",
      rating: 5
    },
    {
      name: "Kenji Tanaka",
      role: "Logistics Manager",
      company: "Osaka Textile Trading Corp",
      country: "Japan 🇯🇵",
      text: "Sourcing raw cotton bales and organic combed yarns from India was complex due to shipping line coordination, but Nexorra handles all clearances seamlessly. Excellent communication and 100% on-time container deliveries.",
      rating: 5
    },
    {
      name: "Faisal Al-Mansoori",
      role: "Managing Partner",
      company: "Al-Mansoor Foodstuffs LLC",
      country: "Dubai, UAE 🇦🇪",
      text: "Our B2B contract for bulk coffee dust and spices with Nexorra Impex has been running for a year. The pricing is highly competitive, and the team handles all phytosanitary certifications with absolute professionalism.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-luxury-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">International Relations</span>
          <h2 className="text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">
            B2B Client Testimonials
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-luxury-slate font-light leading-relaxed">
            Discover how global procurement officers and commodity buyers evaluate our sourcing capabilities and logistics performance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-luxury-cream to-luxury-white border border-luxury-gold/15 rounded-3xl p-8 shadow-premium flex flex-col justify-between text-left relative overflow-hidden"
            >
              {/* Quote icon accent */}
              <div className="absolute top-6 right-6 opacity-[0.03]">
                <Quote className="w-24 h-24 text-luxury-gold" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>

                <p className="text-xs md:text-sm font-light text-luxury-slate leading-relaxed mb-8 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-luxury-gold/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-luxury-charcoal font-sans">{rev.name}</h4>
                  <span className="text-[10px] text-neutral-400 font-medium block">{rev.role}</span>
                  <span className="text-[10px] text-luxury-gold-dark font-semibold block">{rev.company}</span>
                </div>
                <span className="text-xs font-bold text-luxury-charcoal shrink-0 bg-luxury-gold/5 px-2.5 py-1 rounded-md border border-luxury-gold/10">
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
