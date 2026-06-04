import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface InquiryFormProps {
  prefilledProduct?: string;
}

const EMAILJS_SERVICE_ID  = 'service_c6v1m0e3';
const EMAILJS_TEMPLATE_ID = 'template_rfkos8b';
const EMAILJS_PUBLIC_KEY  = '9oY4USiOiqaT9XDrn';

export default function InquiryForm({ prefilledProduct = '' }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    product: prefilledProduct,
    message: ''
  });

  React.useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({ ...prev, product: prefilledProduct }));
    }
  }, [prefilledProduct]);

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company || !formData.country) {
      alert('Please fill out all required fields.');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          company:   formData.company,
          country:   formData.country,
          reply_to:  formData.email,
          product:   formData.product || 'Not specified',
          message:   formData.message || 'No additional message provided.',
          to_email:  'nexorra.impex95@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', company: '', country: '', email: '', product: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);

    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-luxury-cream relative overflow-hidden">
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">B2B Procurement</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">
            Get Export Inquiry Quote
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-luxury-slate font-light leading-relaxed">
            Send us your volumetric requirements, and our sourcing desk will prepare custom commercial terms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 text-left">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-luxury font-bold text-luxury-charcoal">
                Direct Communication Channels
              </h3>
              <p className="text-xs md:text-sm font-light text-luxury-slate leading-relaxed">
                Connect directly with our managing director, Hrushabh Manoj Gadiya, for immediate pricing or custom contract formulations.
              </p>

              <div className="flex flex-col gap-6 mt-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-luxury-white border border-luxury-gold/15 flex items-center justify-center text-luxury-gold-dark shadow-sm shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">WhatsApp & Calls</span>
                    <a href="https://wa.me/917744096751" className="text-sm font-bold text-luxury-charcoal hover:text-luxury-gold-dark transition-colors">+91 77440 96751</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-luxury-white border border-luxury-gold/15 flex items-center justify-center text-luxury-gold-dark shadow-sm shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Official Email</span>
                    <a href="mailto:nexorra.impex95@gmail.com" className="text-sm font-bold text-luxury-charcoal hover:text-luxury-gold-dark transition-colors">nexorra.impex95@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-luxury-white border border-luxury-gold/15 flex items-center justify-center text-luxury-gold-dark shadow-sm shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Main Sourcing Office</span>
                    <span className="text-sm font-medium text-luxury-charcoal leading-relaxed">Survey No. 228, Plot No. 4 &amp; 5, Vardhaman Apartment, Khandoba Mal, Bhosarigaon, Bhosari, Haveli, Pune – 411039, Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-6 border-t border-luxury-gold/15">
              <a href="https://wa.me/917744096751" target="_blank" rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:opacity-90 transition-all">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#0077B5] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:opacity-90 transition-all">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="bg-luxury-white border border-luxury-gold/15 rounded-3xl p-6 md:p-8 shadow-premium text-left relative overflow-hidden">

              {/* SUCCESS OVERLAY */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-luxury-white rounded-3xl flex flex-col items-center justify-center gap-4 z-20 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-luxury font-bold text-luxury-charcoal">Inquiry Sent Successfully!</h4>
                  <p className="text-sm font-light text-luxury-slate leading-relaxed max-w-sm">
                    Thank you! Your export inquiry has been sent to <strong>nexorra.impex95@gmail.com</strong>. Our team will respond within 24 hours.
                  </p>
                  <a href="https://wa.me/917744096751" target="_blank" rel="noreferrer"
                    className="mt-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:opacity-90 transition-all">
                    <MessageCircle className="w-4 h-4" />
                    Also ping us on WhatsApp
                  </a>
                </motion.div>
              )}

              {/* ERROR BANNER */}
              {status === 'error' && (
                <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                  ⚠️ Failed to send. Please email us at nexorra.impex95@gmail.com or WhatsApp +91 77440 96751.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Your Name *</label>
                    <input type="text" required value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. John Doe"
                      className="bg-luxury-cream border border-luxury-gold/15 rounded-xl px-4 py-3 text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Company Name *</label>
                    <input type="text" required value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="e.g. Global Foods Trading Ltd"
                      className="bg-luxury-cream border border-luxury-gold/15 rounded-xl px-4 py-3 text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Destination Country *</label>
                    <input type="text" required value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      placeholder="e.g. Germany"
                      className="bg-luxury-cream border border-luxury-gold/15 rounded-xl px-4 py-3 text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Professional Email *</label>
                    <input type="email" required value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. buyer@globalfoods.com"
                      className="bg-luxury-cream border border-luxury-gold/15 rounded-xl px-4 py-3 text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Product Requirement</label>
                  <select value={formData.product}
                    onChange={(e) => setFormData({...formData, product: e.target.value})}
                    className="bg-luxury-cream border border-luxury-gold/15 rounded-xl px-4 py-3 text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold">
                    <option value="">Select Category...</option>
                    <option value="Onion Powder">Onion Powder</option>
                    <option value="Onion Flakes">Onion Flakes</option>
                    <option value="Garlic Granules">Garlic Granules</option>
                    <option value="Green Chillies">Green Chillies</option>
                    <option value="Fresh Banana (G9 Cavendish)">Fresh Banana (G9 Cavendish)</option>
                    <option value="Fresh Papaya">Fresh Papaya</option>
                    <option value="Indian Spices">Indian Spices</option>
                    <option value="Dehydrated Ingredients">Dehydrated Ingredients</option>
                    <option value="Tea & Coffee Blends">Tea &amp; Coffee Blends</option>
                    <option value="Cotton & Textile Products">Cotton &amp; Textile Products</option>
                    <option value="Traditional Handicrafts">Traditional Handicrafts</option>
                    <option value="Industrial Products">Industrial Products</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Message & Specifications</label>
                  <textarea rows={4} value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Provide details on quantities (Metric Tons), target pricing, destination port, or OEM label specifications..."
                    className="bg-luxury-cream border border-luxury-gold/15 rounded-xl px-4 py-3 text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold resize-none" />
                </div>

                <button type="submit" disabled={status === 'sending'}
                  className="w-full py-4 bg-gradient-to-r from-luxury-gold-dark to-luxury-gold text-luxury-white hover:from-luxury-gold hover:to-luxury-gold-light text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-premium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  {status === 'sending' ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending Inquiry...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Submit Export Inquiry</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
