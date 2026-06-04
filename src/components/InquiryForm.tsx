import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, CheckCircle2, AlertTriangle } from 'lucide-react';

interface InquiryFormProps {
  prefilledProduct?: string;
}

export default function InquiryForm({ prefilledProduct = '' }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    product: prefilledProduct,
    message: ''
  });

  // Track submission details
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  React.useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({ ...prev, product: prefilledProduct }));
    }
  }, [prefilledProduct]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const getWhatsAppLink = (data: typeof formData) => {
    const baseText = `Hello Hrushabh Gadiya (Nexorra Impex),\n\nI would like to request a commercial quote for:\n\n*Product:* ${data.product || 'General Enquiry'}\n*Company:* ${data.company}\n*Contact Person:* ${data.name}\n*Destination Country:* ${data.country}\n*Email:* ${data.email}\n*Specifications:* ${data.message || 'N/A'}\n\nPlease share export terms and container pricing.`;
    return `https://wa.me/917744096751?text=${encodeURIComponent(baseText)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company || !formData.country) {
      alert("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "aa19596b-df0a-4523-965e-7a25539978d0",
          subject: `New B2B Export Inquiry from ${formData.company} (${formData.name})`,
          from_name: "Nexorra Impex B2B Portal",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          country: formData.country,
          product: formData.product || "General Inquiry",
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setSubmittedData({ ...formData });
        setFormData({
          name: '',
          company: '',
          country: '',
          email: '',
          product: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-luxury-cream relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">B2B Procurement</span>
          <h2 className="text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">
            Get Export Inquiry Quote
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-luxury-slate font-light leading-relaxed">
            Send us your volumetric requirements, and our sourcing desk will prepare custom commercial terms.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 text-left">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-luxury font-bold text-luxury-charcoal">
                Direct Communication Channels
              </h3>
              <p className="text-xs md:text-sm font-light text-luxury-slate leading-relaxed">
                Connect directly with our managing director, Hrushabh Manoj Gadiya, for immediate pricing or custom contract formulations.
              </p>

              {/* Direct Info list */}
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-luxury-white border border-luxury-gold/15 flex items-center justify-center text-luxury-gold-dark shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">WhatsApp & Calls</span>
                    <a href="https://wa.me/917744096751" className="text-sm font-bold text-luxury-charcoal hover:text-luxury-gold-dark transition-colors">+91 77440 96751</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-luxury-white border border-luxury-gold/15 flex items-center justify-center text-luxury-gold-dark shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Official Email</span>
                    <a href="mailto:nexorra.impex95@gmail.com" className="text-sm font-bold text-luxury-charcoal hover:text-luxury-gold-dark transition-colors">nexorra.impex95@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-luxury-white border border-luxury-gold/15 flex items-center justify-center text-luxury-gold-dark shadow-sm mt-1 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Main Sourcing Office</span>
                    <span className="text-xs font-medium text-luxury-charcoal uppercase leading-normal">
                      SURVEY NO. 228 PLOT NO. 4,5,<br/>
                      VARDHAMAN APARTMENT,<br/>
                      KHANDOBA MAL, BHOSARIGAON, BHOSARI,<br/>
                      HAVELI, PUNE – 411039, MH, INDIA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Anchors */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-luxury-gold/15">
              <a 
                href="https://wa.me/917744096751" 
                target="_blank" 
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:opacity-90 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#0077B5] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:opacity-90 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Inquiry Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="bg-luxury-white border border-luxury-gold/15 rounded-3xl p-6 md:p-8 shadow-premium text-left">
              
              {submitStatus === 'success' && submittedData && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-2xl bg-luxury-gold/10 border border-luxury-gold/30 text-center flex flex-col items-center gap-4 mb-6"
                >
                  <CheckCircle2 className="w-12 h-12 text-luxury-gold-dark" />
                  <div className="text-left md:text-center">
                    <h4 className="text-base font-bold font-luxury text-luxury-charcoal">Inquiry Submitted Successfully</h4>
                    <p className="text-xs text-luxury-slate font-light mt-1.5 leading-relaxed">
                      Thank you! Your procurement requirements have been dispatched to our sourcing desk at <strong>nexorra.impex95@gmail.com</strong>. We will review and send your corporate pricing sheets shortly.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
                    <a
                      href={getWhatsAppLink(submittedData)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="flex-1 py-3 px-4 rounded-xl border border-luxury-gold/35 text-luxury-charcoal text-xs font-bold uppercase tracking-wider flex items-center justify-center hover:bg-luxury-cream transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-2xl bg-red-50 border border-red-200 text-center flex flex-col items-center gap-4 mb-6"
                >
                  <AlertTriangle className="w-12 h-12 text-red-500" />
                  <div className="text-left md:text-center">
                    <h4 className="text-base font-bold text-red-800">Email Submission Delayed</h4>
                    <p className="text-xs text-red-600 font-light mt-1.5 leading-relaxed">
                      Our email delivery service is currently busy. To prevent any trade delays, please submit your inquiry directly to our managing director on WhatsApp.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppLink(formData)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Submit to WhatsApp
                  </a>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. John Doe"
                      className="bg-luxury-cream border border-luxury-gold/15 rounded-xl px-4 py-3 text-xs md:text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="e.g. Global Foods Trading Ltd"
                      className="bg-luxury-cream border border-luxury-gold/15 rounded-xl px-4 py-3 text-xs md:text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Destination Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      placeholder="e.g. Germany"
                      className="bg-luxury-cream border border-luxury-gold/15 rounded-xl px-4 py-3 text-xs md:text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Professional Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. buyer@globalfoods.com"
                      className="bg-luxury-cream border border-luxury-gold/15 rounded-xl px-4 py-3 text-xs md:text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Product Requirement</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({...formData, product: e.target.value})}
                    className="bg-luxury-cream border border-luxury-gold/15 rounded-xl px-4 py-3 text-xs md:text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold"
                  >
                    <option value="">Select Category...</option>
                    <option value="Onion Powder">Onion Powder</option>
                    <option value="Onion Flakes">Onion Flakes</option>
                    <option value="Garlic Granules">Garlic Granules</option>
                    <option value="Fresh Premium Papaya">Fresh Premium Papaya</option>
                    <option value="Green Chillies">Green Chillies</option>
                    <option value="Indian Spices">Indian Spices</option>
                    <option value="Dehydrated Ingredients">Dehydrated Ingredients</option>
                    <option value="Premium Packaged Mineral Water">Premium Packaged Mineral Water</option>
                    <option value="Fruit Pulps & Concentrates">Fruit Pulps & Concentrates</option>
                    <option value="Tea & Coffee Blends">Tea & Coffee Blends</option>
                    <option value="Cotton & Textile Products">Cotton & Textile Products</option>
                    <option value="Traditional Handicrafts">Traditional Handicrafts</option>
                    <option value="Industrial Products">Industrial Products</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Message & Specifications</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Provide details on quantities (Metric Tons), target pricing, destination port, or customized OEM label specifications..."
                    className="bg-luxury-cream border border-luxury-gold/15 rounded-xl px-4 py-3 text-xs md:text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-luxury-gold-dark to-luxury-gold text-luxury-white hover:from-luxury-gold hover:to-luxury-gold-light text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-premium flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 animate-pulse" />
                  {isSubmitting ? "Submitting Inquiry..." : "Submit Export Inquiry"}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
