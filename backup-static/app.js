/* 
=========================================
  Nexorra Impex B2B Portal Logic
  Interactivity, Widgets & Analytics
=========================================
*/

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Sticky Header & Mobile Nav Toggle ---
  const header = document.querySelector('header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });

  // --- 2. Chart.js Dashboard Analytics ---
  // Mock Data representing premium international B2B export volume
  const exportCtx = document.getElementById('exportVolumeChart');
  const categoryCtx = document.getElementById('categoryShareChart');

  if (exportCtx && categoryCtx) {
    // 2a. Line Chart for Export Volume (Metric Tons)
    new Chart(exportCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Export Cargo (Metric Tons)',
          data: [280, 320, 310, 420, 480, 520, 490, 580, 640, 710, 680, 850],
          borderColor: '#2563EB',
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#10B981',
          pointBorderColor: '#FFFFFF',
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#94A3B8', font: { size: 10 } }
          },
          x: {
            grid: { display: false },
            ticks: { color: '#94A3B8', font: { size: 10 } }
          }
        }
      }
    });

    // 2b. Doughnut Chart for Category Share
    new Chart(categoryCtx, {
      type: 'doughnut',
      data: {
        labels: ['Dehydrated Products', 'Indian Spices', 'Cotton & Textiles', 'Industrial/Chemicals'],
        datasets: [{
          data: [40, 25, 20, 15],
          backgroundColor: ['#2563EB', '#10B981', '#F59E0B', '#EF4444'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#94A3B8',
              font: { size: 10, family: 'Inter' },
              padding: 15
            }
          }
        },
        cutout: '70%'
      }
    });
  }

  // --- 3. Live B2B Shipment Tracker ---
  const trackerToggleBtn = document.querySelector('.tracker-btn-trigger');
  const trackerPanel = document.querySelector('.tracker-panel');
  const trackBtn = document.getElementById('btn-track-shipment');
  const trackInput = document.getElementById('shipment-id-input');
  const trackerStatus = document.querySelector('.tracker-status-display');
  const trackerSteps = document.getElementById('tracker-steps-list');

  // Toggle Tracking Panel
  trackerToggleBtn.addEventListener('click', () => {
    trackerPanel.classList.toggle('active');
  });

  // Close tracker when clicking outside
  document.addEventListener('click', (e) => {
    if (!trackerPanel.contains(e.target) && !trackerToggleBtn.contains(e.target)) {
      trackerPanel.classList.remove('active');
    }
  });

  // Mock shipments database
  const mockShipments = {
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

  trackBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const trackingId = trackInput.value.trim().toUpperCase();
    
    if (!trackingId) {
      alert('Please enter a B2B Shipment ID');
      return;
    }

    trackerStatus.classList.add('active');
    trackerSteps.innerHTML = '';

    // If ID is found in mock database, load its custom timeline, otherwise simulate a newly initiated tracker
    const stages = mockShipments[trackingId] || [
      { title: 'Initiating Customs Clearance', date: 'In Progress', status: 'current' },
      { title: 'Container Loaded at Pune Hub', date: 'May 22, 2026', status: 'completed' },
      { title: 'Procurement & Packaging Completed', date: 'May 20, 2026', status: 'completed' },
      { title: 'B2B Invoice & LC Verified', date: 'May 19, 2026', status: 'completed' }
    ];

    stages.forEach(stage => {
      const stepEl = document.createElement('div');
      stepEl.className = `tracker-step ${stage.status}`;
      stepEl.innerHTML = `
        <div class="tracker-dot"></div>
        <div class="tracker-step-info">
          <div class="tracker-step-title">${stage.title}</div>
          <div class="tracker-step-date">${stage.date}</div>
        </div>
      `;
      trackerSteps.appendChild(stepEl);
    });
  });

  // --- 4. Interactive Currency Converter ---
  const currencyAmount = document.getElementById('currency-amount');
  const baseCurrency = document.getElementById('base-currency');
  const targetCurrency = document.getElementById('target-currency');
  const convertBtn = document.getElementById('btn-convert-currency');
  const conversionResult = document.getElementById('currency-result-val');

  // Hardcoded rates representing current B2B trade metrics (Relative to 1 USD)
  const exchangeRates = {
    USD: 1.0,
    INR: 83.50,
    EUR: 0.92,
    AED: 3.67,
    GBP: 0.79,
    SGD: 1.35
  };

  convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = parseFloat(currencyAmount.value);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid B2B order value');
      return;
    }

    const base = baseCurrency.value;
    const target = targetCurrency.value;

    // Convert base currency to USD first, then to target currency
    const amountInUSD = amount / exchangeRates[base];
    const convertedAmount = amountInUSD * exchangeRates[target];

    // Format output based on currency standard
    let formattedResult = convertedAmount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    conversionResult.textContent = `${target} ${formattedResult}`;
  });

  // --- 5. Interactive World Map Shipping Routes ---
  const regionButtons = document.querySelectorAll('.region-btn');
  const regionInfoCards = document.querySelectorAll('.region-info-card');
  const mapPins = document.querySelectorAll('.map-pin');

  regionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetRegion = btn.getAttribute('data-region');

      // Update button highlights
      regionButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update info cards
      regionInfoCards.forEach(card => card.classList.remove('active'));
      document.getElementById(`region-${targetRegion}`).classList.add('active');

      // Highlight map pin matching the region
      mapPins.forEach(pin => {
        if (pin.getAttribute('data-region') === targetRegion) {
          pin.querySelector('circle').style.fill = '#10B981';
          pin.querySelector('circle').setAttribute('r', '8');
        } else if (!pin.classList.contains('india-hub')) {
          pin.querySelector('circle').style.fill = '#2563EB';
          pin.querySelector('circle').setAttribute('r', '5');
        }
      });
    });
  });

  // Sync clicking map pins directly to update info panels
  mapPins.forEach(pin => {
    pin.addEventListener('click', () => {
      const region = pin.getAttribute('data-region');
      if (region) {
        const correspondingBtn = document.querySelector(`.region-btn[data-region="${region}"]`);
        if (correspondingBtn) correspondingBtn.click();
      }
    });
  });

  // --- 6. B2B AI Chatbot Simulator ---
  const chatbotTrigger = document.querySelector('.chatbot-btn-trigger');
  const chatbotPanel = document.querySelector('.chatbot-panel');
  const chatMessages = document.querySelector('.chatbot-messages');
  const chatInput = document.getElementById('chatbot-input-text');
  const sendChatBtn = document.getElementById('btn-send-chat');

  chatbotTrigger.addEventListener('click', () => {
    chatbotPanel.classList.toggle('active');
    
    // Add introductory message if empty
    if (chatMessages.children.length === 0) {
      addBotMessage("Welcome to Nexorra Impex global trade desk. I am your B2B trade consultant. Ask me about product MOQs, shipping parameters, or standard packaging options!");
    }
  });

  // Close chatbot when clicking outside
  document.addEventListener('click', (e) => {
    if (!chatbotPanel.contains(e.target) && !chatbotTrigger.contains(e.target)) {
      chatbotPanel.classList.remove('active');
    }
  });

  // Preset chatbot scripts for specific queries
  const chatbotResponses = {
    moq: "Our standard Minimum Order Quantities (MOQs) depend on the category:\n- Onion Powder/Flakes & Garlic: 5 Metric Tons (MT)\n- Coffee & Tea Blends: 2 MT\n- Textiles/Cotton: 1 FCL (Full Container Load)\nWe also support mixed-product containers for trial B2B shipments.",
    shipping: "We ship worldwide using premium carriers like Maersk, CMA CGM, and MSC. Port of Loading is Nhava Sheva (JNPT) or Mundra, India. We deliver under FOB, CIF, CFR, and DDP terms.",
    packaging: "We offer Vacuum Packaging, Moisture-Resistant multi-layer bags, Heavy-Duty PP Bags (25kg/50kg), and Bulk Jumbo Bags (1 MT). Custom private label branding is supported for premium bulk buyers.",
    contact: "You can reach our founder, Hrushabh Manoj Gadiya, directly via email at info@nexorraimpex.com or by WhatsApp at +91 95034 50920. Our main global trade office is based in Pune, Maharashtra, India."
  };

  function addBotMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'chat-msg bot';
    msg.innerHTML = text.replace(/\n/g, '<br>');
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function addUserMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'chat-msg user';
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleChatSubmit() {
    const query = chatInput.value.trim().toLowerCase();
    if (!query) return;

    addUserMessage(chatInput.value.trim());
    chatInput.value = '';

    // Show mock typing status
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'chat-msg bot typing-indicator';
    typingIndicator.textContent = 'Nexorra Trade Desk is preparing reply...';
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
      // Remove typing indicator
      typingIndicator.remove();

      // Simple keywords lookup
      if (query.includes('moq') || query.includes('minimum order') || query.includes('quantity')) {
        addBotMessage(chatbotResponses.moq);
      } else if (query.includes('ship') || query.includes('delivery') || query.includes('logistic') || query.includes('port')) {
        addBotMessage(chatbotResponses.shipping);
      } else if (query.includes('package') || query.includes('box') || query.includes('label')) {
        addBotMessage(chatbotResponses.packaging);
      } else if (query.includes('contact') || query.includes('founder') || query.includes('phone') || query.includes('hrushabh')) {
        addBotMessage(chatbotResponses.contact);
      } else {
        addBotMessage("Thank you for your B2B query. For specific product configurations or customized commercial quotes, please use our main 'Request Quote' form on the page or email info@nexorraimpex.com. We typically respond within 2 hours.");
      }
    }, 1200);
  }

  sendChatBtn.addEventListener('click', handleChatSubmit);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleChatSubmit();
  });

  // Handle clicking quick chips in chat if present
  document.querySelectorAll('.chat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chatInput.value = chip.textContent;
      handleChatSubmit();
    });
  });

  // --- 7. Live B2B Inquiry Toast Ticker ---
  const inquiryToast = document.querySelector('.inquiry-toast');
  const toastTitle = document.querySelector('.inquiry-toast-title');
  const toastBody = document.querySelector('.inquiry-toast-body');

  const simulatedInquiries = [
    { title: "New Quotation Requested", body: "Buyer from Hamburg, Germany requested a quote for 10 MT Red Onion Powder." },
    { title: "Container Dispatch Logged", body: "Shipment NEX-9872-IN left Nhava Sheva Port, heading to Jeddah, Saudi Arabia." },
    { title: "Private Label Agreement Signed", body: "Procurement chain in Dubai, UAE finalized bulk packaging contract for Coffee Dust." },
    { title: "Product Quality Certified", body: "Batch #4102 Garlic Granules cleared 100% SGS lab inspection for export to USA." },
    { title: "Bulk Inquiry Filed", body: "Cotton importer from Osaka, Japan requested specifications for 40ft FCL raw yarn." }
  ];

  let toastIndex = 0;

  function showNextToast() {
    if (!inquiryToast) return;
    const inquiry = simulatedInquiries[toastIndex];
    toastTitle.textContent = inquiry.title;
    toastBody.textContent = inquiry.body;

    inquiryToast.classList.add('active');

    // Slide out after 5 seconds
    setTimeout(() => {
      inquiryToast.classList.remove('active');
    }, 5500);

    toastIndex = (toastIndex + 1) % simulatedInquiries.length;
  }

  // Initial trigger after 8s, then repeats every 18s
  setTimeout(() => {
    showNextToast();
    setInterval(showNextToast, 18000);
  }, 8000);

  // --- 8. Contact Form B2B Validation ---
  const contactForm = document.getElementById('b2b-inquiry-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const quantity = document.getElementById('form-quantity').value;
      
      if (!name || !email || !quantity) {
        alert('Please fill out all required fields marked with *');
        return;
      }

      alert(`Thank you, ${name}! Your B2B quotation request has been filed. Nexorra Impex founder Hrushabh Manoj Gadiya or our account managers will contact you at ${email} shortly.`);
      contactForm.reset();
    });
  }

  // --- 9. Animated Stats Counters ---
  const counters = document.querySelectorAll('.hero-stat-num, .mini-stat-val');
  const countSpeed = 200; // The lower, the faster

  const startCounting = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText.replace('+', '').replace('%', '').replace('+', '');
    
    // Check if target is float or integer
    const isFloat = counter.getAttribute('data-target').includes('.');
    const isPercent = counter.getAttribute('data-target').includes('%');
    const isPlus = counter.getAttribute('data-target').includes('+');

    const updateCount = () => {
      const current = +counter.innerText.replace('+', '').replace('%', '');
      const increment = target / countSpeed;

      if (current < target) {
        let nextVal = current + increment;
        if (nextVal > target) nextVal = target;
        
        let displayVal = isFloat ? nextVal.toFixed(1) : Math.ceil(nextVal);
        counter.innerText = (isPlus ? '+' : '') + displayVal + (isPercent ? '%' : '');
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = counter.getAttribute('data-target');
      }
    };

    updateCount();
  };

  // Run counters when they enter viewport
  const observerOptions = {
    root: null,
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    observer.observe(counter);
  });
});
