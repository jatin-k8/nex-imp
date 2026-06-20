import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare, Compass, Send, CheckCircle2,
  MapPin, DollarSign, Calculator, ChevronRight,
  HelpCircle, RefreshCw, Wifi, WifiOff
} from 'lucide-react';

interface TrackerStep {
  title: string;
  date: string;
  status: 'current' | 'completed';
}

const CURRENCIES = ['USD', 'INR', 'EUR', 'AED', 'GBP', 'SGD', 'JPY', 'SAR'];
const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$', INR: '₹', EUR: '€', AED: 'د.إ', GBP: '£', SGD: 'S$', JPY: '¥', SAR: '﷼'
};

export default function SupportAndWidgets() {
  const [activeWidget, setActiveWidget] = useState<'chat' | 'tracker' | 'currency'>('chat');

  // ── CHATBOT ──────────────────────────────────────────────────────
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    { sender: 'bot', text: "Welcome to the Nexorra Impex trade desk. I am your B2B trade consultant. Ask me about product MOQs, shipping parameters, or custom packaging options!" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatbotResponses: Record<string, string> = {
    moq: "Our standard Minimum Order Quantities (MOQs):\n- Onion Powder/Flakes & Garlic: 5 Metric Tons\n- Coffee & Tea Blends: 2 MT\n- Textiles/Cotton: 1 FCL\nWe support mixed-product containers for trial B2B shipments.",
    shipping: "We ship globally from Nhava Sheva (JNPT) or Mundra Port. We accommodate FOB, CIF, CFR, and DDP shipping terms.",
    packaging: "We offer Vacuum Packaging, Moisture-Resistant multi-layer bags, PP Bags (25kg/50kg), and Bulk Kraft Drums. Private labeling supported.",
    contact: "Reach our founder Hrushabh Manoj Gadiya via WhatsApp +91 77440 96751 or email nexorra.impex95@gmail.com. Office: Bhosari, Pune – 411039, Maharashtra, India."
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    setChatMessages(prev => [...prev, { sender: 'user', text }]);
    setChatInput('');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const q = text.toLowerCase();
      let reply = "Thank you for your inquiry. For custom quotes please use our 'Request Quote' form below or email nexorra.impex95@gmail.com. We respond within 2 hours.";
      if (q.includes('moq') || q.includes('minimum') || q.includes('quantity')) reply = chatbotResponses.moq;
      else if (q.includes('ship') || q.includes('delivery') || q.includes('port')) reply = chatbotResponses.shipping;
      else if (q.includes('packag') || q.includes('box') || q.includes('label')) reply = chatbotResponses.packaging;
      else if (q.includes('contact') || q.includes('founder') || q.includes('phone') || q.includes('hrushabh')) reply = chatbotResponses.contact;
      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 1200);
  };

  useEffect(() => {
    if (chatMessages.length > 1 || isTyping) {
      messagesEndRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [chatMessages, isTyping]);

  // ── CARGO TRACKER ────────────────────────────────────────────────
  const [trackerInput, setTrackerInput] = useState('');
  const [trackingResult, setTrackingResult] = useState<TrackerStep[] | null>(null);
  const [trackedId, setTrackedId] = useState('');

  const mockShipments: Record<string, TrackerStep[]> = {
    'NEX-9872-IN': [
      { title: 'In Transit — Arabian Sea', date: 'May 23, 2026', status: 'current' },
      { title: 'Customs Cleared — Nhava Sheva Port', date: 'May 20, 2026', status: 'completed' },
      { title: 'Quality Assurance Approved', date: 'May 18, 2026', status: 'completed' },
      { title: 'Cargo Loaded & Sealed', date: 'May 17, 2026', status: 'completed' }
    ],
    'NEX-4510-US': [
      { title: 'Out for Delivery — Rotterdam Terminal', date: 'May 22, 2026', status: 'current' },
      { title: 'Port of Hamburg Customs Clearance', date: 'May 19, 2026', status: 'completed' },
      { title: 'Atlantic Ocean Crossing', date: 'May 10, 2026', status: 'completed' },
      { title: 'Sourced from Manufacturer (Pune Hub)', date: 'May 04, 2026', status: 'completed' }
    ]
  };

  const handleTrackShipment = (e: React.FormEvent) => {
    e.preventDefault();
    const id = trackerInput.trim().toUpperCase();
    if (!id) return;
    setTrackedId(id);
    setTrackingResult(mockShipments[id] ?? [
      { title: 'Initiating Customs Clearance', date: 'In Progress', status: 'current' },
      { title: 'Container Loaded at Pune Hub', date: 'May 22, 2026', status: 'completed' },
      { title: 'Procurement & Packaging Completed', date: 'May 20, 2026', status: 'completed' },
      { title: 'B2B Invoice & LC Verified', date: 'May 19, 2026', status: 'completed' }
    ]);
  };

  // ── LIVE CURRENCY ────────────────────────────────────────────────
  const [amount, setAmount] = useState('1000');
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('INR');
  const [rates, setRates] = useState<Record<string, number>>({});
  const [ratesLoading, setRatesLoading] = useState(false);
  const [ratesError, setRatesError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');
  const [conversionResult, setConversionResult] = useState('');

  // Fetch live rates from free public API (no key required)
  const fetchRates = async () => {
    setRatesLoading(true);
    setRatesError(false);
    try {
      // Using exchangerate-api free tier — returns USD base rates
      const res = await fetch('https://open.er-api.com/v6/latest/USD');
      const data = await res.json();
      if (data.result === 'success') {
        setRates(data.rates);
        const now = new Date();
        setLastUpdated(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) + ' IST');
      } else {
        throw new Error('API error');
      }
    } catch {
      setRatesError(true);
      // Fallback to approximate current rates (May 2026)
      setRates({
        USD: 1, INR: 84.92, EUR: 0.923, AED: 3.6725,
        GBP: 0.792, SGD: 1.348, JPY: 155.4, SAR: 3.75
      });
      setLastUpdated('Offline (cached)');
    }
    setRatesLoading(false);
  };

  useEffect(() => { fetchRates(); }, []);

  // Recalculate whenever inputs change
  useEffect(() => {
    if (Object.keys(rates).length === 0) return;
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) { setConversionResult(''); return; }
    const inUSD = val / (rates[baseCurrency] ?? 1);
    const converted = inUSD * (rates[targetCurrency] ?? 1);
    const sym = CURRENCY_SYMBOLS[targetCurrency] ?? '';
    setConversionResult(`${sym} ${converted.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  }, [rates, amount, baseCurrency, targetCurrency]);

  // Reference rate display (1 base = X target)
  const refRate = Object.keys(rates).length > 0
    ? ((rates[targetCurrency] ?? 1) / (rates[baseCurrency] ?? 1)).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 4 })
    : '—';

  // ── TOAST ────────────────────────────────────────────────────────
  const [toast, setToast] = useState<{ title: string; body: string } | null>(null);
  const simulatedInquiries = [
    { title: "New Quotation Filed", body: "Buyer in Hamburg requested quote for 10 MT Red Onion Powder." },
    { title: "Cargo Loading Initiated", body: "Shipment NEX-9872-IN loading at Nhava Sheva, heading to Jeddah." },
    { title: "Contract Finalized", body: "Distributor in Dubai closed bulk packaging contract for Coffee." },
    { title: "Batch Certified", body: "Batch #4102 Garlic Granules cleared 100% SGS lab inspection." },
    { title: "Specs Requested", body: "Tokyo buyer requested specs for 40ft FCL cotton yarn." }
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setToast(simulatedInquiries[index]);
      index = (index + 1) % simulatedInquiries.length;
      setTimeout(() => setToast(null), 5000);
    }, 18000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="trade-desk" className="py-16 md:py-24 bg-luxury-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">Interactive B2B Tools</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">
            B2B Global Trade Console
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-luxury-slate font-light leading-relaxed">
            Query export parameters, track container clearances, or convert order values using live exchange rates.
          </p>
        </div>

        {/* Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">

          {/* Tab buttons */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 sm:gap-3 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0">
            {[
              { id: 'chat',     icon: MessageSquare, label: 'AI Trade Consultant' },
              { id: 'tracker',  icon: Compass,       label: 'Cargo Tracker' },
              { id: 'currency', icon: Calculator,    label: 'Currency Desk' },
            ].map(({ id, icon: Icon, label }) => (
              <button key={id} onClick={() => setActiveWidget(id as any)}
                className={`flex-1 lg:flex-initial px-4 sm:px-6 py-4 rounded-2xl text-left border text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 ${
                  activeWidget === id
                    ? 'bg-luxury-charcoal text-luxury-white border-luxury-charcoal shadow-md'
                    : 'bg-luxury-cream text-luxury-slate border-luxury-gold/10 hover:border-luxury-gold hover:text-luxury-charcoal'
                }`}>
                <Icon className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>

          {/* Console Panel */}
          <div className="lg:col-span-8 bg-gradient-to-br from-luxury-cream to-luxury-white border border-luxury-gold/20 rounded-3xl p-5 sm:p-8 shadow-premium min-h-[420px] flex flex-col">
            <AnimatePresence mode="wait">

              {/* ── CHATBOT ── */}
              {activeWidget === 'chat' && (
                <motion.div key="chat" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.3 }} className="flex flex-col h-full">
                  <div className="border-b border-luxury-gold/10 pb-4 mb-4">
                    <h4 className="text-lg font-bold font-luxury text-luxury-charcoal">Nexorra AI Assistant</h4>
                    <span className="text-[10px] text-luxury-gold-dark font-semibold tracking-wider uppercase">Online B2B Sourcing Support</span>
                  </div>
                  <div className="flex-grow overflow-y-auto max-h-[220px] sm:max-h-[250px] pr-1 flex flex-col gap-3 mb-4">
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-xs md:text-sm leading-relaxed ${
                        msg.sender === 'bot'
                          ? 'bg-luxury-white border border-luxury-gold/10 text-luxury-slate self-start'
                          : 'bg-luxury-charcoal text-luxury-white self-end'
                      }`} style={{ whiteSpace: 'pre-line' }}>{msg.text}</div>
                    ))}
                    {isTyping && (
                      <div className="bg-luxury-white border border-luxury-gold/5 text-luxury-gold-dark max-w-[60%] rounded-2xl px-4 py-2.5 text-xs self-start italic">
                        Preparing answer...
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["MOQs", "Ports & Shipping", "Packaging", "Direct Contact"].map((chip) => (
                      <button key={chip} onClick={() => handleSendMessage(chip)}
                        className="px-3 py-1.5 rounded-lg bg-luxury-white border border-luxury-gold/15 text-[10px] font-medium text-luxury-slate hover:border-luxury-gold hover:text-luxury-charcoal transition-all">
                        {chip}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input type="text" value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(chatInput)}
                      placeholder="Type your B2B sourcing question..."
                      className="flex-grow bg-luxury-white border border-luxury-gold/15 rounded-xl px-4 py-2.5 text-xs md:text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold" />
                    <button onClick={() => handleSendMessage(chatInput)}
                      className="w-10 h-10 rounded-xl bg-luxury-charcoal hover:bg-luxury-gold-dark flex items-center justify-center text-luxury-white transition-all shadow-md shrink-0">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── TRACKER ── */}
              {activeWidget === 'tracker' && (
                <motion.div key="tracker" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.3 }} className="flex flex-col h-full">
                  <div className="border-b border-luxury-gold/10 pb-4 mb-4">
                    <h4 className="text-lg font-bold font-luxury text-luxury-charcoal">Port Tracker</h4>
                    <span className="text-[10px] text-luxury-gold-dark font-semibold tracking-wider uppercase">B2B Cargo Clearance Status</span>
                  </div>
                  <form onSubmit={handleTrackShipment} className="flex gap-2 mb-6">
                    <input type="text" value={trackerInput}
                      onChange={(e) => setTrackerInput(e.target.value)}
                      placeholder="e.g. NEX-9872-IN"
                      className="flex-grow bg-luxury-white border border-luxury-gold/15 rounded-xl px-4 py-2.5 text-xs md:text-sm text-luxury-charcoal uppercase focus:outline-none focus:border-luxury-gold" />
                    <button type="submit" className="px-5 py-2.5 rounded-xl bg-luxury-charcoal hover:bg-luxury-gold-dark text-xs font-semibold uppercase tracking-wider text-luxury-white transition-all shadow-md whitespace-nowrap">
                      Track
                    </button>
                  </form>
                  <div className="flex-grow flex flex-col justify-center">
                    {trackingResult ? (
                      <div className="text-left">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-gold-dark mb-4 block">Log: {trackedId}</span>
                        <div className="relative pl-6 border-l border-luxury-gold/30 flex flex-col gap-4">
                          {trackingResult.map((step, idx) => (
                            <div key={idx} className="relative">
                              <div className={`absolute -left-[30px] top-1.5 w-3 h-3 rounded-full border-2 ${
                                step.status === 'current' ? 'bg-luxury-gold border-luxury-gold-dark' : 'bg-luxury-gold-dark border-luxury-white shadow-sm'
                              }`} />
                              <span className={`text-xs md:text-sm font-bold block ${step.status === 'current' ? 'text-luxury-gold-dark' : 'text-luxury-charcoal'}`}>{step.title}</span>
                              <span className="text-[10px] text-luxury-slate font-light mt-0.5 block">{step.date}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center text-luxury-slate gap-3 py-6">
                        <HelpCircle className="w-10 h-10 text-luxury-gold/40" />
                        <p className="text-xs font-light max-w-xs leading-relaxed">
                          Try test IDs: <strong>NEX-9872-IN</strong> or <strong>NEX-4510-US</strong>
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* ── CURRENCY DESK (LIVE) ── */}
              {activeWidget === 'currency' && (
                <motion.div key="currency" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.3 }} className="flex flex-col h-full">
                  
                  {/* Header with live status */}
                  <div className="border-b border-luxury-gold/10 pb-4 mb-5 flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold font-luxury text-luxury-charcoal">Live Exchange Calculator</h4>
                      <span className="text-[10px] text-luxury-gold-dark font-semibold tracking-wider uppercase">Real-Time B2B Currency Conversion</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {ratesLoading ? (
                        <RefreshCw className="w-3.5 h-3.5 text-luxury-gold-dark animate-spin" />
                      ) : ratesError ? (
                        <WifiOff className="w-3.5 h-3.5 text-red-400" />
                      ) : (
                        <Wifi className="w-3.5 h-3.5 text-green-500" />
                      )}
                      <span className="text-[9px] font-bold uppercase tracking-widest text-luxury-slate">
                        {ratesLoading ? 'Fetching...' : ratesError ? 'Cached' : 'Live'}
                      </span>
                      <button onClick={fetchRates} title="Refresh rates"
                        className="w-6 h-6 rounded-lg bg-luxury-gold/10 flex items-center justify-center hover:bg-luxury-gold/20 transition-all">
                        <RefreshCw className="w-3 h-3 text-luxury-gold-dark" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 flex-grow justify-center">

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Order Value</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                          className="bg-luxury-white border border-luxury-gold/15 rounded-xl px-4 py-2.5 text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold w-full" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">From</label>
                        <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}
                          className="bg-luxury-white border border-luxury-gold/15 rounded-xl px-4 py-2.5 text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold w-full">
                          {CURRENCIES.map(c => <option key={c} value={c}>{c} {CURRENCY_SYMBOLS[c]}</option>)}
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">To</label>
                        <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}
                          className="bg-luxury-white border border-luxury-gold/15 rounded-xl px-4 py-2.5 text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold w-full">
                          {CURRENCIES.map(c => <option key={c} value={c}>{c} {CURRENCY_SYMBOLS[c]}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Result card */}
                    <div className="bg-luxury-white border border-luxury-gold/15 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-inner">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-slate">Converted Amount</span>
                        <span className="text-2xl sm:text-3xl font-bold text-luxury-gold-dark font-sans">
                          {ratesLoading ? '...' : (conversionResult || '—')}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-light mt-0.5">
                          1 {baseCurrency} = {refRate} {targetCurrency}
                        </span>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <span className="text-[9px] uppercase font-bold tracking-widest text-luxury-slate">Last Updated</span>
                        <span className="text-xs font-semibold text-luxury-charcoal">{lastUpdated || '—'}</span>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${ratesError ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600'}`}>
                          {ratesError ? '⚠ Offline rates' : '✓ Live market rates'}
                        </span>
                      </div>
                    </div>

                    {/* Quick reference rates */}
                    {Object.keys(rates).length > 0 && (
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-slate block mb-2">Quick Reference · 1 USD =</span>
                        <div className="grid grid-cols-4 gap-2">
                          {['INR','EUR','AED','GBP'].map(c => (
                            <div key={c} className="bg-luxury-cream rounded-xl px-3 py-2 text-center border border-luxury-gold/8">
                              <span className="text-[9px] font-bold uppercase text-luxury-gold-dark block">{c}</span>
                              <span className="text-xs font-bold text-luxury-charcoal">
                                {(rates[c] ?? 0).toFixed(2)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[calc(100vw-2rem)] sm:max-w-sm w-full bg-luxury-charcoal/95 text-luxury-white border border-luxury-gold/30 rounded-2xl p-4 shadow-lg text-left backdrop-blur-md">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-luxury-gold/20 flex items-center justify-center shrink-0 border border-luxury-gold/40">
                <Compass className="w-4 h-4 text-luxury-gold" />
              </div>
              <div>
                <span className="text-xs font-bold text-luxury-gold block">{toast.title}</span>
                <span className="text-[10px] text-neutral-300 font-light leading-relaxed mt-0.5 block">{toast.body}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
