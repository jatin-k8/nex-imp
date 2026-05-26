import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, Compass, Send, CheckCircle2, 
  MapPin, DollarSign, Calculator, ChevronRight, HelpCircle
} from 'lucide-react';

interface TrackerStep {
  title: string;
  date: string;
  status: 'current' | 'completed';
}

export default function SupportAndWidgets() {
  const [activeWidget, setActiveWidget] = useState<'chat' | 'tracker' | 'currency'>('chat');

  // --- Chatbot Simulator State ---
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    { sender: 'bot', text: "Welcome to the Nexorra Impex trade desk. I am your B2B trade consultant. Ask me about product MOQs, shipping parameters, or custom packaging options!" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatbotResponses = {
    moq: "Our standard Minimum Order Quantities (MOQs) depend on the category:\n- Onion Powder/Flakes & Garlic: 5 Metric Tons (MT)\n- Coffee & Tea Blends: 2 MT\n- Textiles/Cotton: 1 FCL (Full Container Load)\nWe also support mixed-product containers for trial B2B shipments.",
    shipping: "We ship globally from Nhava Sheva (JNPT) or Mundra Port, India. We accommodate FOB, CIF, CFR, and DDP shipping terms to standard international ports.",
    packaging: "We offer Vacuum Packaging, Moisture-Resistant multi-layer bags, Heavy-Duty PP Bags (25kg/50kg), and Bulk Kraft Drums. Private labeling is supported.",
    contact: "You can reach our founder, Hrushabh Manoj Gadiya, directly via email at nexorra.impex95@gmail.com or by WhatsApp at +91 77440 96751. Our registered office is located at Bhosari, Pune, India."
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    setChatMessages(prev => [...prev, { sender: 'user', text }]);
    setChatInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const query = text.toLowerCase();
      let reply = "Thank you for your inquiry. For specific product configurations or customized commercial quotes, please use our main 'Request Quote' form below or email nexorra.impex95@gmail.com. We typically respond within 2 hours.";

      if (query.includes('moq') || query.includes('minimum order') || query.includes('quantity')) {
        reply = chatbotResponses.moq;
      } else if (query.includes('ship') || query.includes('delivery') || query.includes('logistic') || query.includes('port')) {
        reply = chatbotResponses.shipping;
      } else if (query.includes('package') || query.includes('box') || query.includes('label')) {
        reply = chatbotResponses.packaging;
      } else if (query.includes('contact') || query.includes('founder') || query.includes('phone') || query.includes('hrushabh')) {
        reply = chatbotResponses.contact;
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 1200);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);

  // --- Tracker State ---
  const [trackerInput, setTrackerInput] = useState('');
  const [trackingResult, setTrackingResult] = useState<TrackerStep[] | null>(null);
  const [trackedId, setTrackedId] = useState('');

  const mockShipments: Record<string, TrackerStep[]> = {
    'NEX-9872-IN': [
      { title: 'In Transit - Arabian Sea', date: 'May 23, 2026', status: 'current' },
      { title: 'Customs Cleared - Nhava Sheva Port', date: 'May 20, 2026', status: 'completed' },
      { title: 'Quality Assurance Approved', date: 'May 18, 2026', status: 'completed' },
      { title: 'Cargo Loaded & Sealed', date: 'May 17, 2026', status: 'completed' }
    ],
    'NEX-4510-US': [
      { title: 'Out for Delivery - Rotterdam Terminal', date: 'May 22, 2026', status: 'current' },
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
    if (mockShipments[id]) {
      setTrackingResult(mockShipments[id]);
    } else {
      // Simulate a generic tracker flow for other IDs
      setTrackingResult([
        { title: 'Initiating Customs Clearance', date: 'In Progress', status: 'current' },
        { title: 'Container Loaded at Pune Hub', date: 'May 22, 2026', status: 'completed' },
        { title: 'Procurement & Packaging Completed', date: 'May 20, 2026', status: 'completed' },
        { title: 'B2B Invoice & LC Verified', date: 'May 19, 2026', status: 'completed' }
      ]);
    }
  };

  // --- Currency Converter State ---
  const [amount, setAmount] = useState('10000');
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('INR');
  const [conversionResult, setConversionResult] = useState('');

  const exchangeRates: Record<string, number> = {
    USD: 1.0,
    INR: 83.50,
    EUR: 0.92,
    AED: 3.67,
    GBP: 0.79,
    SGD: 1.35
  };

  const handleConvert = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) return;

    const baseRate = exchangeRates[baseCurrency];
    const targetRate = exchangeRates[targetCurrency];
    
    const amountInUSD = val / baseRate;
    const converted = amountInUSD * targetRate;

    setConversionResult(`${targetCurrency} ${converted.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`);
  };

  // Trigger conversion initially and on currency change
  useEffect(() => {
    const val = parseFloat(amount);
    if (!isNaN(val) && val > 0) {
      const baseRate = exchangeRates[baseCurrency];
      const targetRate = exchangeRates[targetCurrency];
      const amountInUSD = val / baseRate;
      const converted = amountInUSD * targetRate;
      setConversionResult(`${targetCurrency} ${converted.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`);
    }
  }, [baseCurrency, targetCurrency, amount]);

  // --- B2B Live Toast Notifications State ---
  const [toast, setToast] = useState<{ title: string; body: string } | null>(null);
  const simulatedInquiries = [
    { title: "New Quotation Filed", body: "Buyer in Hamburg, Germany requested a quote for 10 MT Red Onion Powder." },
    { title: "Cargo Loading Initiated", body: "Shipment NEX-9872-IN loading Nhava Sheva Port, heading to Jeddah, KSA." },
    { title: "Contract Finalized", body: "Distributor in Dubai, UAE closed bulk packaging contract for Coffee Dust." },
    { title: "Product Batch Certified", body: "Batch #4102 Garlic Granules cleared 100% SGS lab inspection for export." },
    { title: "Specs Requested", body: "Textile buyer in Tokyo, Japan requested specifications for 40ft FCL cotton yarn." }
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setToast(simulatedInquiries[index]);
      index = (index + 1) % simulatedInquiries.length;
      
      // Clear toast after 5 seconds
      setTimeout(() => {
        setToast(null);
      }, 5000);
      
    }, 18000); // Trigger every 18 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="trade-desk" className="py-24 bg-luxury-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-luxury-gold-dark">Interactive B2B Tools</span>
          <h2 className="text-3xl md:text-5xl font-bold font-luxury text-luxury-charcoal mt-3 mb-6">
            B2B Global Trade Console
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-luxury-slate font-light leading-relaxed">
            Utilize our digital trade desk to query export parameters, track container clearances, or estimate order values.
          </p>
        </div>

        {/* Console Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Navigation Tabs (Left/Top) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 justify-center lg:justify-start">
            <button
              onClick={() => setActiveWidget('chat')}
              className={`flex-1 lg:flex-initial px-6 py-4 rounded-2xl text-left border text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 ${
                activeWidget === 'chat'
                  ? 'bg-luxury-charcoal text-luxury-white border-luxury-charcoal shadow-md'
                  : 'bg-luxury-cream text-luxury-slate border-luxury-gold/10 hover:border-luxury-gold hover:text-luxury-charcoal'
              }`}
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>AI Trade Consultant</span>
            </button>
            
            <button
              onClick={() => setActiveWidget('tracker')}
              className={`flex-1 lg:flex-initial px-6 py-4 rounded-2xl text-left border text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 ${
                activeWidget === 'tracker'
                  ? 'bg-luxury-charcoal text-luxury-white border-luxury-charcoal shadow-md'
                  : 'bg-luxury-cream text-luxury-slate border-luxury-gold/10 hover:border-luxury-gold hover:text-luxury-charcoal'
              }`}
            >
              <Compass className="w-4 h-4 shrink-0" />
              <span>Cargo Tracker</span>
            </button>

            <button
              onClick={() => setActiveWidget('currency')}
              className={`flex-1 lg:flex-initial px-6 py-4 rounded-2xl text-left border text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 ${
                activeWidget === 'currency'
                  ? 'bg-luxury-charcoal text-luxury-white border-luxury-charcoal shadow-md'
                  : 'bg-luxury-cream text-luxury-slate border-luxury-gold/10 hover:border-luxury-gold hover:text-luxury-charcoal'
              }`}
            >
              <Calculator className="w-4 h-4 shrink-0" />
              <span>Currency Desk</span>
            </button>
          </div>

          {/* Console Display Screen (Right/Bottom) */}
          <div className="lg:col-span-8 bg-gradient-to-br from-luxury-cream to-luxury-white border border-luxury-gold/20 rounded-3xl p-6 md:p-8 shadow-premium min-h-[420px] flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              {/* 1. AI Chatbot Widget */}
              {activeWidget === 'chat' && (
                <motion.div
                  key="chat-panel"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div className="text-left border-b border-luxury-gold/10 pb-4 mb-4">
                    <h4 className="text-lg font-bold font-luxury text-luxury-charcoal">Nexorra AI Assistant</h4>
                    <span className="text-[10px] text-luxury-gold-dark font-semibold tracking-wider uppercase">Online B2B Sourcing Support</span>
                  </div>

                  {/* Message Log */}
                  <div className="flex-grow overflow-y-auto max-h-[250px] pr-2 flex flex-col gap-3 mb-4">
                    {chatMessages.map((msg, i) => (
                      <div 
                        key={i} 
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs md:text-sm text-left leading-relaxed ${
                          msg.sender === 'bot' 
                            ? 'bg-luxury-white border border-luxury-gold/10 text-luxury-slate self-start' 
                            : 'bg-luxury-charcoal text-luxury-white self-end'
                        }`}
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        {msg.text}
                      </div>
                    ))}
                    {isTyping && (
                      <div className="bg-luxury-white border border-luxury-gold/5 text-luxury-gold-dark max-w-[50%] rounded-2xl px-4 py-2.5 text-xs self-start italic">
                        Nexorra consultant is preparing answer...
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Preset chips */}
                  <div className="flex flex-wrap gap-2 mb-4 justify-start">
                    <button onClick={() => handleSendMessage("Minimum Order Quantity (MOQ)?")} className="px-3 py-1.5 rounded-lg bg-luxury-white border border-luxury-gold/15 text-[10px] font-medium text-luxury-slate hover:border-luxury-gold hover:text-luxury-charcoal transition-all">MOQs</button>
                    <button onClick={() => handleSendMessage("From which port do you ship?")} className="px-3 py-1.5 rounded-lg bg-luxury-white border border-luxury-gold/15 text-[10px] font-medium text-luxury-slate hover:border-luxury-gold hover:text-luxury-charcoal transition-all">Ports & Shipping</button>
                    <button onClick={() => handleSendMessage("Custom private packaging options?")} className="px-3 py-1.5 rounded-lg bg-luxury-white border border-luxury-gold/15 text-[10px] font-medium text-luxury-slate hover:border-luxury-gold hover:text-luxury-charcoal transition-all">Packaging Specs</button>
                    <button onClick={() => handleSendMessage("How can I contact the founder?")} className="px-3 py-1.5 rounded-lg bg-luxury-white border border-luxury-gold/15 text-[10px] font-medium text-luxury-slate hover:border-luxury-gold hover:text-luxury-charcoal transition-all">Direct Contact</button>
                  </div>

                  {/* Form input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(chatInput)}
                      placeholder="Type your B2B sourcing question..."
                      className="flex-grow bg-luxury-white border border-luxury-gold/15 rounded-xl px-4 py-2.5 text-xs md:text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold"
                    />
                    <button 
                      onClick={() => handleSendMessage(chatInput)}
                      className="w-10 h-10 rounded-xl bg-luxury-charcoal hover:bg-luxury-gold-dark flex items-center justify-center text-luxury-white transition-all shadow-md shrink-0"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* 2. Cargo Tracker Widget */}
              {activeWidget === 'tracker' && (
                <motion.div
                  key="tracker-panel"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div className="text-left border-b border-luxury-gold/10 pb-4 mb-4">
                    <h4 className="text-lg font-bold font-luxury text-luxury-charcoal">Real-time Port Tracker</h4>
                    <span className="text-[10px] text-luxury-gold-dark font-semibold tracking-wider uppercase">B2B Cargo Clearance Status</span>
                  </div>

                  <form onSubmit={handleTrackShipment} className="flex gap-2 mb-6">
                    <input
                      type="text"
                      value={trackerInput}
                      onChange={(e) => setTrackerInput(e.target.value)}
                      placeholder="Enter B2B Shipment ID (e.g. NEX-9872-IN, NEX-4510-US)"
                      className="flex-grow bg-luxury-white border border-luxury-gold/15 rounded-xl px-4 py-2.5 text-xs md:text-sm text-luxury-charcoal uppercase focus:outline-none focus:border-luxury-gold"
                    />
                    <button 
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-luxury-charcoal hover:bg-luxury-gold-dark text-xs font-semibold uppercase tracking-wider text-luxury-white transition-all shadow-md"
                    >
                      Track
                    </button>
                  </form>

                  {/* Tracker display */}
                  <div className="flex-grow flex flex-col justify-center">
                    {trackingResult ? (
                      <div className="text-left">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-gold-dark mb-4 block">
                          Cargo Logistics Log for {trackedId}
                        </span>
                        
                        <div className="relative pl-6 border-l border-luxury-gold/30 flex flex-col gap-4">
                          {trackingResult.map((step, idx) => (
                            <div key={idx} className="relative">
                              {/* Connector dot */}
                              <div className={`absolute -left-[30px] top-1.5 w-3 h-3 rounded-full border-2 ${
                                step.status === 'current' 
                                  ? 'bg-luxury-gold border-luxury-gold-dark animate-ping-once' 
                                  : 'bg-luxury-gold-dark border-luxury-white shadow-sm'
                              }`} />
                              <div className="flex flex-col">
                                <span className={`text-xs md:text-sm font-bold ${step.status === 'current' ? 'text-luxury-gold-dark' : 'text-luxury-charcoal'}`}>{step.title}</span>
                                <span className="text-[10px] text-luxury-slate font-light mt-0.5">{step.date}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center text-luxury-slate gap-3 py-6">
                        <HelpCircle className="w-10 h-10 text-luxury-gold/40" />
                        <p className="text-xs font-light max-w-xs leading-relaxed">
                          Enter your container billing number or use test tracking IDs: <strong>NEX-9872-IN</strong> or <strong>NEX-4510-US</strong>.
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* 3. Currency Desk Widget */}
              {activeWidget === 'currency' && (
                <motion.div
                  key="currency-panel"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div className="text-left border-b border-luxury-gold/10 pb-4 mb-4">
                    <h4 className="text-lg font-bold font-luxury text-luxury-charcoal">Exchange Calculator</h4>
                    <span className="text-[10px] text-luxury-gold-dark font-semibold tracking-wider uppercase">B2B Commercial Value Conversion</span>
                  </div>

                  <form onSubmit={handleConvert} className="flex flex-col gap-6 text-left flex-grow justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Order Value</label>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="bg-luxury-white border border-luxury-gold/15 rounded-xl px-4 py-2.5 text-xs md:text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Base Currency</label>
                        <select
                          value={baseCurrency}
                          onChange={(e) => setBaseCurrency(e.target.value)}
                          className="bg-luxury-white border border-luxury-gold/15 rounded-xl px-4 py-2.5 text-xs md:text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold"
                        >
                          <option value="USD">USD ($)</option>
                          <option value="INR">INR (₹)</option>
                          <option value="EUR">EUR (€)</option>
                          <option value="AED">AED (د.إ)</option>
                          <option value="GBP">GBP (£)</option>
                          <option value="SGD">SGD ($)</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark">Target Currency</label>
                        <select
                          value={targetCurrency}
                          onChange={(e) => setTargetCurrency(e.target.value)}
                          className="bg-luxury-white border border-luxury-gold/15 rounded-xl px-4 py-2.5 text-xs md:text-sm text-luxury-charcoal focus:outline-none focus:border-luxury-gold"
                        >
                          <option value="INR">INR (₹)</option>
                          <option value="USD">USD ($)</option>
                          <option value="EUR">EUR (€)</option>
                          <option value="AED">AED (د.إ)</option>
                          <option value="GBP">GBP (£)</option>
                          <option value="SGD">SGD ($)</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-luxury-white border border-luxury-gold/10 rounded-2xl p-6 flex flex-col items-start gap-1 justify-center shadow-inner">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-slate">Estimated Conversion Value</span>
                      <span className="text-xl md:text-2xl font-bold text-luxury-gold-dark font-sans">{conversionResult || "Enter Amount..."}</span>
                      <span className="text-[9px] text-neutral-400 font-light mt-1">Rates are indicative of daily B2B clearing metrics.</span>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>

      {/* Dynamic Toast Notifications (Corner Ticker) */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-luxury-charcoal/95 text-luxury-white border border-luxury-gold/30 rounded-2xl p-4 shadow-lg text-left backdrop-blur-md"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-luxury-gold/20 flex items-center justify-center shrink-0 border border-luxury-gold/40">
                <Compass className="w-4 h-4 text-luxury-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-luxury-gold">{toast.title}</span>
                <span className="text-[10px] text-neutral-300 font-light leading-relaxed mt-0.5">{toast.body}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
