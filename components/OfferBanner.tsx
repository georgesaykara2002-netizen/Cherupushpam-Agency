import React from 'react';

const OfferBanner: React.FC = () => {
  return (
    <section className="relative z-10 py-10 bg-white">
      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40">
        <div className="bg-gradient-to-br from-blue-50/80 via-white to-primary/10 rounded-2xl p-8 shadow-sm border border-blue-100/50 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          {/* Subtle blue glow effect */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
          
          <div className="flex items-center gap-4 w-full md:w-auto relative z-10">
            <div className="p-4 bg-primary/10 rounded-full text-primary shrink-0 animate-bounce">
              <span className="material-symbols-outlined text-3xl">celebration</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111814]">Celebrate the New Year with Smart Savings</h3>
              <p className="text-gray-500 text-sm mt-1">
                Exclusive festive deals on premium home appliances and electronics.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end relative z-10">
            <div className="text-right">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Offer Ends In</p>
              <p className="text-xl font-mono font-bold text-primary">
                04<span className="text-sm mx-1 text-gray-400">d</span> 
                08<span className="text-sm mx-1 text-gray-400">h</span> 
                15<span className="text-sm mx-1 text-gray-400">m</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;