import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] bg-[#001f3f] flex items-center justify-center text-center px-6">
      
      <div className="relative z-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Forex & Currency Exchange in Pala
        </h1>

        <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
          RBI Authorized Dealer Since 1974. Best rates for Western Union,
          Student Forex, and Travel Cards.
        </p>

        <Link
          to="/forex"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all duration-300"
        >
          Check Today's Rates
        </Link>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-black opacity-50"></div>

    </section>
  );
};

export default Hero;