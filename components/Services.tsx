import React from 'react';

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section className="py-10">
      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Home Electronics Card */}
          <div className="flex-1 group rounded-2xl bg-white border border-gray-100 p-8 relative overflow-hidden transition-transform hover:-translate-y-1 shadow-md">
            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#111814] mb-2">Home Electronics</h3>
                <p className="text-accent-blue font-medium">
                  Smart living solutions with the latest refrigerators, washing machines, and
                  entertainment systems.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => onNavigate?.('electronics')}
                  className="text-accent-blue font-bold hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                >
                  View Products <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Forex Services Card */}
          <div className="flex-1 group rounded-2xl bg-white border border-gray-100 p-8 relative overflow-hidden transition-transform hover:-translate-y-1 shadow-md">
            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#111814] mb-2">Forex Services</h3>
                <p className="text-accent-blue font-medium">
                  Trusted currency exchange and fast money transfer services. Licensed and secure.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => onNavigate?.('forex')}
                  className="text-accent-blue font-bold hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Check Rates <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;