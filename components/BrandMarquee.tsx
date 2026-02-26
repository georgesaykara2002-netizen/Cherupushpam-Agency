import React from 'react';

const brands = [
  "Samsung", "LG", "Sony", "Panasonic", "Whirlpool", 
  "Godrej", "Haier", "Voltas", "Blue Star", "Luminous", 
  "Microtek", "Exide", "TCL", "Hisense", "Hitachi", 
  "Bosch", "IFB", "V-Guard", "Carrier", "Sharp"
];

const BrandMarquee: React.FC = () => {
  // We duplicate the list to create a seamless infinite loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="w-full bg-background-light dark:bg-background-dark py-6 overflow-hidden">
      <div className="relative flex">
        {/* The scrolling container */}
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {duplicatedBrands.map((brand, index) => (
            <div 
              key={index} 
              className="mx-8 flex items-center gap-2 group cursor-default"
            >
              <span className="text-xl md:text-2xl font-black text-gray-300 dark:text-gray-700 group-hover:text-primary transition-colors duration-300 uppercase tracking-tighter">
                {brand}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          /* Duration increased to slow down the speed as requested */
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BrandMarquee;