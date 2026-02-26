import React from 'react';

interface ForexSectionProps {
  onNavigate?: (page: string) => void;
}

const ForexSection: React.FC<ForexSectionProps> = ({ onNavigate }) => {
  const forexServices = [
    { 
      title: "Currency Exchange", 
      description: "Buy and sell major currencies at live rates.", 
      icon: "currency_exchange" 
    },
    { 
      title: "Study Abroad", 
      description: "Forex solutions for overseas education.", 
      icon: "school" 
    },
    { 
      title: "Western Union", 
      description: "Secure global money transfers.", 
      icon: "payments" 
    },
    { 
      title: "Leisure Travel", 
      description: "Best rates for international vacations.", 
      icon: "flight_takeoff" 
    },
    { 
      title: "Business Travel", 
      description: "Reliable solutions for corporate travelers.", 
      icon: "business_center" 
    },
    { 
      title: "International Transfer", 
      description: "Fast remittance at the best exchange rates.", 
      icon: "send_money" 
    }
  ];

  return (
    <section className="py-16 bg-[#002b4d] overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-xs">verified_user</span>
              RBI Authorized
            </div>
            {/* Increased Heading Size */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Our Forex Services
            </h2>
            {/* Increased Subheading Size */}
            <p className="text-blue-100/80 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Trusted partner in Pala for secure, fast, and transparent international financial transactions.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => onNavigate?.('forex')}
                className="w-full lg:w-auto px-8 py-4 bg-white/10 text-white text-sm font-bold border border-white/20 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2 mx-auto lg:mx-0"
              >
                Check Live Rates
                <span className="material-symbols-outlined text-sm">trending_up</span>
              </button>
            </div>
          </div>

          {/* Right Side: Compact Service List - Backgrounds removed previously */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4">
              {forexServices.map((service, idx) => (
                <div 
                  key={idx}
                  className="p-2 flex flex-col items-center text-center cursor-default"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-5">
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>
                  <h4 className="text-white font-bold text-base mb-1.5">{service.title}</h4>
                  <p className="text-blue-100/60 text-xs leading-snug">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ForexSection;