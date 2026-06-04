import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, Upload, Send, CheckCircle2, Loader2, ChevronDown, ChevronUp, Users, Globe, TrendingUp } from 'lucide-react';

const EMAILJS_SERVICE_ID  = 'service_c6v1m0e3';
const EMAILJS_TEMPLATE_ID = 'template_rfkos8b';
const EMAILJS_PUBLIC_KEY  = '9oY4USiOiqaT9XDrn';

const openings = [
  {
    id: 1,
    title: "Export Sales Executive",
    type: "Full-time",
    location: "Pune, Maharashtra",
    dept: "Sales & Business Development",
    desc: "Drive B2B export sales across Middle East, Europe, and Asian markets. Build relationships with international buyers and distributors for agricultural and food products.",
    requirements: ["1-3 years B2B sales experience", "Strong communication skills", "Knowledge of export documentation", "Fluency in English required"],
    perks: ["Performance incentives", "International travel opportunities", "Competitive salary", "Growth-oriented environment"]
  },
  {
    id: 2,
    title: "Logistics & Documentation Coordinator",
    type: "Full-time",
    location: "Pune, Maharashtra",
    dept: "Operations & Logistics",
    desc: "Manage end-to-end export documentation, coordinate with freight forwarders, handle phytosanitary certifications, and ensure timely cargo dispatch from Indian ports.",
    requirements: ["Knowledge of export documentation (BL, COO, Phyto)", "Experience with APEDA/FSSAI procedures", "Proficiency in MS Office", "Attention to detail"],
    perks: ["Stable work environment", "Career growth path", "Training provided", "Friendly team culture"]
  },
  {
    id: 3,
    title: "Agricultural Sourcing Manager",
    type: "Full-time",
    location: "Maharashtra (Field + Office)",
    dept: "Procurement & Quality",
    desc: "Build and manage direct relationships with farmers and processing units across Maharashtra. Ensure quality standards, negotiate bulk procurement contracts, and oversee quality control.",
    requirements: ["Experience in agri-commodity sourcing", "Understanding of dehydration/processing", "Field visit capability", "Negotiation skills"],
    perks: ["Field + office hybrid role", "Vehicle allowance", "Incentive on cost savings", "Direct impact on business"]
  },
  {
    id: 4,
    title: "Digital Marketing Executive",
    type: "Part-time / Freelance",
    location: "Remote",
    dept: "Marketing & Brand",
    desc: "Manage Nexorra Impex's digital presence including LinkedIn, website content, product catalogues, and B2B outreach campaigns targeting international buyers.",
    requirements: ["Experience in B2B digital marketing", "Content creation skills", "LinkedIn and SEO knowledge", "Export/trade domain interest"],
    perks: ["Flexible remote work", "Creative freedom", "Brand-building exposure", "Performance-linked pay"]
  }
];

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [applyingFor, setApplyingFor] = useState<string>('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '', experience: '', message: '' });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleApply = (jobTitle: string) => {
    setApplyingFor(jobTitle);
    setFormData(prev => ({ ...prev, position: jobTitle }));
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('careers-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.position) {
      alert('Please fill all required fields.');
      return;
    }
    setStatus('sending');
    try {
      if (!(window as any).emailjs) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
          script.onload = () => resolve();
          script.onerror = () => reject();
          document.head.appendChild(script);
        });
        (window as any).emailjs.init(EMAILJS_PUBLIC_KEY);
      }
      await (window as any).emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `JOB APPLICATION — ${formData.name}`,
          company:   `Applying for: ${formData.position}`,
          country:   `Experience: ${formData.experience || 'Not specified'}`,
          reply_to:  formData.email,
          product:   `Phone: ${formData.phone || 'Not provided'} | Resume: ${resumeFile ? resumeFile.name : 'Not attached'}`,
          message:   formData.message || 'No cover note provided.',
          to_email:  'nexorra.impex95@gmail.com',
        }
      );
      setStatus('success');
      setFormData({ name:'', email:'', phone:'', position:'', experience:'', message:'' });
      setResumeFile(null);
      setTimeout(() => { setStatus('idle'); setShowForm(false); }, 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputCls = "bg-luxury-cream border border-luxury-gold/15 rounded-xl px-4 py-3 text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold w-full";

  return (
    <section id="careers" className="py-16 md:py-24 bg-luxury-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-luxury-gold/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-luxury-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">Join Our Team</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">
            Careers at Nexorra Impex
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-sm md:text-base text-luxury-slate font-light leading-relaxed">
            Be part of India's growing global trade story. We are building a team of passionate professionals dedicated to connecting Indian excellence with world markets.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12 md:mb-16">
          {[
            { icon: Globe, title: "Global Exposure", desc: "Work directly with international buyers across 5 continents and build a global trade career." },
            { icon: TrendingUp, title: "Fast Growth", desc: "Early-stage company means your work directly impacts business growth and you grow with us." },
            { icon: Users, title: "Collaborative Culture", desc: "Small, driven team with direct access to leadership, transparent goals and open communication." }
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-luxury-cream border border-luxury-gold/10 p-6 text-left flex gap-4 items-start shadow-premium">
              <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-luxury-gold-dark" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-luxury text-luxury-charcoal mb-1">{title}</h4>
                <p className="text-xs font-light text-luxury-slate leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Job Openings */}
        <h3 className="text-xl sm:text-2xl font-luxury font-bold text-luxury-charcoal mb-6">Current Openings</h3>
        <div className="flex flex-col gap-4 mb-12">
          {openings.map((job) => (
            <div key={job.id} className="rounded-2xl border border-luxury-gold/15 bg-luxury-cream overflow-hidden shadow-premium">
              {/* Job header */}
              <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Briefcase className="w-5 h-5 text-luxury-gold-dark" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold font-luxury text-luxury-charcoal">{job.title}</h4>
                    <div className="flex flex-wrap gap-3 mt-1.5">
                      <span className="flex items-center gap-1 text-[10px] text-luxury-slate font-medium">
                        <MapPin className="w-3 h-3 text-luxury-gold-dark" />{job.location}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-luxury-slate font-medium">
                        <Clock className="w-3 h-3 text-luxury-gold-dark" />{job.type}
                      </span>
                      <span className="text-[10px] font-bold text-luxury-gold-dark uppercase tracking-wider">{job.dept}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button onClick={(e) => { e.stopPropagation(); handleApply(job.title); }}
                    className="px-4 py-2 bg-luxury-charcoal hover:bg-luxury-gold-dark text-luxury-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all">
                    Apply Now
                  </button>
                  {expandedJob === job.id ? <ChevronUp className="w-5 h-5 text-luxury-slate" /> : <ChevronDown className="w-5 h-5 text-luxury-slate" />}
                </div>
              </div>

              {/* Expanded details */}
              <AnimatePresence>
                {expandedJob === job.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <div className="px-5 sm:px-6 pb-6 border-t border-luxury-gold/10 pt-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="sm:col-span-3">
                        <p className="text-xs sm:text-sm text-luxury-slate font-light leading-relaxed">{job.desc}</p>
                      </div>
                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-widest text-luxury-gold-dark mb-3">Requirements</h5>
                        <ul className="flex flex-col gap-2">
                          {job.requirements.map(r => (
                            <li key={r} className="flex items-start gap-2 text-xs text-luxury-slate">
                              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold-dark shrink-0 mt-1.5" />{r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-widest text-luxury-gold-dark mb-3">What We Offer</h5>
                        <ul className="flex flex-col gap-2">
                          {job.perks.map(p => (
                            <li key={p} className="flex items-start gap-2 text-xs text-luxury-slate">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5" />{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="sm:flex sm:items-end">
                        <button onClick={() => handleApply(job.title)}
                          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-luxury-gold-dark to-luxury-gold text-luxury-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-premium flex items-center justify-center gap-2">
                          <Send className="w-3.5 h-3.5" /> Apply for This Role
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div id="careers-form"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }}
              className="rounded-2xl sm:rounded-3xl border border-luxury-gold/20 bg-luxury-cream p-6 sm:p-8 md:p-10 shadow-premium-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 blur-[60px] pointer-events-none" />

              {/* Success overlay */}
              {status === 'success' && (
                <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}
                  className="absolute inset-0 bg-luxury-cream rounded-3xl flex flex-col items-center justify-center gap-4 z-20 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-luxury font-bold text-luxury-charcoal">Application Submitted!</h4>
                  <p className="text-sm font-light text-luxury-slate max-w-sm leading-relaxed">
                    Thank you <strong>{formData.name}</strong>! Your application for <strong>{applyingFor}</strong> has been sent to our HR team at nexorra.impex95@gmail.com. We'll be in touch within 5 business days.
                  </p>
                </motion.div>
              )}

              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-luxury font-bold text-luxury-charcoal">Apply Now</h3>
                  {applyingFor && <p className="text-xs text-luxury-gold-dark font-semibold mt-1 uppercase tracking-widest">Position: {applyingFor}</p>}
                </div>
                <button onClick={() => setShowForm(false)} className="text-luxury-slate hover:text-luxury-charcoal text-xs font-medium underline">Cancel</button>
              </div>

              {status === 'error' && (
                <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                  ⚠ Failed to send. Please email your CV directly to nexorra.impex95@gmail.com with the subject "Job Application — {applyingFor}".
                </div>
              )}

              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Full Name *</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Your full name" className={inputCls} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Email Address *</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="your@email.com" className={inputCls} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Phone Number</label>
                  <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91 XXXXX XXXXX" className={inputCls} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Position Applying For *</label>
                  <select required value={formData.position} onChange={e => setFormData({...formData, position: e.target.value})} className={inputCls}>
                    <option value="">Select Position...</option>
                    {openings.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
                    <option value="Other / Open Application">Other / Open Application</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Years of Experience</label>
                  <select value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} className={inputCls}>
                    <option value="">Select...</option>
                    <option value="Fresher (0 years)">Fresher (0 years)</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Attach Resume (PDF/DOC)</label>
                  <label className="cursor-pointer flex items-center gap-3 bg-luxury-white border border-luxury-gold/15 rounded-xl px-4 py-3 hover:border-luxury-gold transition-all">
                    <Upload className="w-4 h-4 text-luxury-gold-dark shrink-0" />
                    <span className="text-xs text-luxury-slate truncate">{resumeFile ? resumeFile.name : 'Click to upload resume...'}</span>
                    <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={e => setResumeFile(e.target.files?.[0] || null)} />
                  </label>
                  <span className="text-[10px] text-luxury-slate">Note: Resume will be mentioned in the email. Please also email CV directly to nexorra.impex95@gmail.com</span>
                </div>
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Cover Note / Why Nexorra?</label>
                  <textarea rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about yourself, your relevant experience, and why you want to join Nexorra Impex..."
                    className={`${inputCls} resize-none`} />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" disabled={status === 'sending'}
                    className="w-full py-4 bg-gradient-to-r from-luxury-gold-dark to-luxury-gold text-luxury-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-premium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all">
                    {status === 'sending' ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting Application...</> : <><Send className="w-4 h-4" /> Submit Application</>}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Open application note */}
        {!showForm && (
          <div className="mt-8 rounded-2xl bg-luxury-cream border border-luxury-gold/10 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold font-luxury text-luxury-charcoal">Don't see your role?</h4>
              <p className="text-xs text-luxury-slate font-light mt-1">Send us an open application — we're always looking for talented people who share our passion for global trade.</p>
            </div>
            <button onClick={() => handleApply('Open Application')}
              className="px-5 py-2.5 border border-luxury-gold text-luxury-gold-dark text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-luxury-gold/5 transition-all shrink-0">
              Open Application
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
