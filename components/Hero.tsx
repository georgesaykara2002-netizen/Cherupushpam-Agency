import React, { useState, useEffect } from 'react';

// 1. Import your local images
import slide1 from './img/slide1.png';
import slide2 from './img/slide2.png';

interface Slide {
  id: number;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: slide1, // 2. Use the imported variable
  },
  {
    id: 2,
    image: slide2, // 2. Use the imported variable
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-[400px] md:h-[500px] bg-white pt-20">
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
              alt={`Slide ${s.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
            {slides.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentSlide 
                    ? 'w-10 bg-blue-600 shadow-lg' // Changed 'primary' to 'blue-600' for standard Tailwind
                    : 'w-2 bg-black/20 hover:bg-black/40'
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