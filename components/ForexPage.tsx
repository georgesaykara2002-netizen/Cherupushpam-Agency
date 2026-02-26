import React from 'react';
import ForexCalculator from './ForexCalculator';

const services = [
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
    description: "Fast remittance at the best exchange rate.",
    icon: "send_money"
  }
];

const ForexPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pt-32 pb-16">
      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary mb-4">
            <span className="material-symbols-outlined text-sm">public</span>
            <span>Global Financial Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#111814] dark:text-white mb-6">
            Foreign Exchange Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for all international financial needs. RBI authorized dealer providing secure and fast transactions.
          </p>
        </div>

        {/* Two Column Layout: Calculator & Features */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
           {/* Left: Calculator */}
           <div className="w-full lg:w-1/3 flex justify-center lg:sticky lg:top-32">
              <ForexCalculator />
           </div>

           {/* Right: Service List */}
           <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
             {services.map((service, index) => (
               <div key={index} className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-white/5 shadow-md hover:border-primary/30 transition-colors group">
                 <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-accent-blue dark:text-primary mb-6 group-hover:scale-110 transition-transform">
                   <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                 </div>
                 <h3 className="text-xl font-bold text-[#111814] dark:text-white mb-3">{service.title}</h3>
                 <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                   {service.description}
                 </p>
               </div>
             ))}
             
             {/* Documents Required Section */}
             <div className="md:col-span-2 bg-accent-blue/5 border border-accent-blue/10 rounded-2xl p-8 mt-4">
                <h3 className="text-xl font-bold text-[#111814] dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent-blue">description</span>
                  Documents Required
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Valid Passport</li>
                    <li>Confirmed Air Ticket</li>
                    <li>PAN Card</li>
                  </ul>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Valid Visa</li>
                    <li>Aadhar Card (for some transactions)</li>
                  </ul>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ForexPage;