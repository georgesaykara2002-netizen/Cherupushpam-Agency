import React from 'react';
import smarttelevisions from './img/smarttelevisions.png';
import refrigerator from './img/refrigerator.png';
import washingmachine from './img/washingmachine.png';
import mixie from './img/mixie.png';

const categories = [
  {
    title: "Smart TVs",
    image: smarttelevisions,
    alt: "Modern smart TV displaying vibrant colors"
  },
  {
    title: "Refrigerators",
    image: refrigerator,
    alt: "Silver refrigerator in a modern kitchen setting"
  },
  {
    title: "Washing Machines",
    image: washingmachine,
    alt: "Modern front load washing machine"
  },
  {
    title: "Mixer Grinders",
    image: mixie,
    alt: "Kitchen mixer grinder"
  }
];

interface CollectionProps {
  onNavigate?: (page: string) => void;
}

const Collection: React.FC<CollectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40">
        
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-[#111814] text-3xl font-bold leading-tight">
              Our Collection
            </h2>

            {/* ✅ Darkened text */}
            <p className="text-gray-700 mt-2">
              Discover premium appliances for your home
            </p>
          </div>

          <button
            onClick={() => onNavigate?.('electronics')}
            className="flex items-center gap-1 text-primary font-medium hover:text-[#005a9c] transition-colors cursor-pointer"
          >
            View All Categories
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-white overflow-hidden border border-gray-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-md"
            >
              <div
                className="aspect-square w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url("${item.image}")` }}
                aria-label={item.alt}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-white text-lg font-bold">
                  {item.title}
                </h3>

                <button 
                  onClick={() => onNavigate?.('electronics')}
                  className="mt-3 text-sm text-primary font-bold flex items-center gap-2 group-hover:text-white transition-colors"
                >
                  View Models
                  <span className="material-symbols-outlined text-sm">
                    arrow_outward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Collection;