import React from 'react';
import mixie from './img/mixie.png';
import vaccumcleaner1 from './img/vaccumcleaner.png';
import smarttelevision from './img/smarttelevisions.png';
import refrigerator from './img/refrigerator.png';
import stabilizer from './img/stabilizer.png';
import airconditioners from './img/airconditioners.jpg';
import ironbox from './img/ironbox.png';
import electriccookers from './img/electriccookers.png';


import ac from './img/ac.jpg';


const categories = [
  {
    title: "Smart Televisions",
    description: "Experience cinema at home with 4K, QLED & OLED displays from top brands.",
    image: smarttelevision,
    icon: "tv"
  },
  {
    title: "Refrigerators",
    description: "Keep your food fresh with multi-door and energy-efficient cooling technology.",
    image: refrigerator,
    icon: "kitchen"
  },
  {
    title: "Washing Machines & Dryers",
    description: "Advanced front-load and top-load machines with dedicated cloth dryer options.",
    image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop",
    icon: "local_laundry_service"
  },
  {
    title: "Mixer Grinders & Blenders",
    description: "Powerful mixers and innovative food processors for a modern kitchen.",
    image: mixie,
    icon: "blender"
  },
  {
    title: "Vacuum Cleaners",
    description: "From stick 'walking' cleaners to robotic vacuums for effortless cleaning.",
    image: vaccumcleaner1,
    icon: "cleaning_services"
  },
  {
    title: "Iron Boxes & Garment Care",
    description: "Steam and dry irons to keep your clothes crisp and wrinkle-free.",
    image: ironbox,
    icon: "iron"
  },
  {
    title: "Speakers & Audio",
    description: "Immersive sound systems, portable speakers, and high-fidelity audio gear.",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=2070&auto=format&fit=crop",
    icon: "speaker"
  },
  {
    title: "Stabilizers & Power Solutions",
    description: "Reliable power solutions to protect your appliances and provide backup.",
    image: stabilizer,
    icon: "bolt"
  },
  {
    title: "Electric Cookers & Kettles",
    description: "Convenient electric cooking solutions for fast and efficient meals.",
    image: electriccookers,
    icon: "soup_kitchen"
  },
  {
    title: "Air Conditioners",
    description: "Beat the heat with rapid cooling and inverter technology from leading brands.",
    image: airconditioners,
    icon: "ac_unit"
  },
  {
    title: "Microwaves & Ovens",
    description: "Bake, grill, and reheat with precision using our premium range of ovens.",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=2076&auto=format&fit=crop",
    icon: "microwave"
  }
];

const Electronics: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pt-32 pb-16 font-display">
      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40 text-[#111814] dark:text-white">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary mb-4 border border-primary/20">
            <span className="material-symbols-outlined text-sm">shopping_basket</span>
            <span>Premium Showroom Catalog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Explore Our Categories
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Quality, durability, and innovation for your home. From large appliances to small essential electronics, we have everything you need.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-surface-dark rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                  <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                    <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 line-clamp-2 text-sm leading-relaxed">
                  {cat.description}
                </p>
                <div className="mt-auto">
                  <button className="w-full py-3 rounded-xl bg-gray-50 dark:bg-white/5 text-[#111814] dark:text-white font-bold text-sm hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 border border-transparent hover:border-primary">
                    View Models <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Electronics;