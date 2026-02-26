import React, { useState, useEffect } from 'react';

// Import your local images
import slide1 from './img/slide1.png';
import slide2 from './img/slide2.png';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

interface Slide {
  id: number;
  image: string;
}

const slides: Slide[] = [
  { id: 1, image: slide1 },
  { id: 2, image: slide2 }
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-[450px] md:h-[550px] bg-white pt-20">

      <div className="w-full h-full relative">

        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={s.image}
              alt="RBI Authorized Forex & Currency Exchange in Pala"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-20"></div>

        {/* SEO Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-30 text-white">

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            RBI Authorized Forex & Currency Exchange in Pala
          </h1>

          <p className="max-w-3xl text-base md:text-lg mb-6">
            Western Union Money Transfer • Travel Cards • Student Forex Services • 
            Live Exchange Rates Near Civil Station, Pala – Serving Kottayam District Since 1974.
          </p>

          {/* UPDATED BUTTON */}
          <button
            onClick={() => onNavigate?.('forex-exchange-pala')}
            className="bg-primary text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            Get Today’s Exchange Rate
          </button>

        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-40">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'w-10 bg-blue-600 shadow-lg'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;