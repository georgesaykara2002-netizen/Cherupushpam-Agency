import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForexSection: React.FC = () => {
  const navigate = useNavigate();

  const forexServices = [
    { 
      title: "Currency Exchange in Pala", 
      description: "Buy and sell USD, EUR, GBP and other foreign currencies at competitive live rates.", 
      icon: "currency_exchange" 
    },
    { 
      title: "Student Forex Services", 
      description: "Overseas education payments, tuition fee transfers and study abroad forex support.", 
      icon: "school" 
    },
    { 
      title: "Western Union Pala", 
      description: "Authorized Western Union agent for secure international money transfers.", 
      icon: "payments" 
    },
    { 
      title: "Travel Cards", 
      description: "International travel cards for tourists and business travelers.", 
      icon: "flight_takeoff" 
    },
    { 
      title: "Business Forex", 
      description: "Reliable forex solutions for corporate and business travel requirements.", 
      icon: "business_center" 
    },
    { 
      title: "International Remittance", 
      description: "Fast and compliant overseas money transfers at transparent exchange rates.", 
      icon: "send_money" 
    }
  ];

  return (
    <section className="py-16 bg-[#002b4d] overflow-hidden relative">

      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT SIDE */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">

            {/* ✅ RBI Badge White */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-xs text-white">
                verified_user
              </span>
              RBI Authorized Forex Dealer
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Forex & Currency Exchange in Pala
            </h2>

            <p className="text-blue-100/80 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Cherupushpam Agency is a trusted RBI authorized foreign currency exchange center 
              near Civil Station, Pala. We provide Western Union services, travel cards, 
              student forex assistance and international money transfer across Kottayam district.
            </p>

            <div className="pt-4">
              <button 
                onClick={() => navigate('/forex')}
                className="w-full lg:w-auto px-8 py-4 bg-white/10 text-white text-sm font-bold border border-white/20 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2 mx-auto lg:mx-0"
              >
                Check Today’s Live Exchange Rate
                <span className="material-symbols-outlined text-sm text-white">
                  trending_up
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE SERVICES */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4">
              {forexServices.map((service, idx) => (
                <div 
                  key={idx}
                  className="p-2 flex flex-col items-center text-center cursor-default"
                >
                  {/* ✅ Icon White */}
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-3xl text-white">
                      {service.icon}
                    </span>
                  </div>

                  <h4 className="text-white font-bold text-base mb-1.5">
                    {service.title}
                  </h4>

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