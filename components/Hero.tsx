import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[580px] flex items-center justify-center text-center px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #001a38 0%, #002b4d 40%, #003d6b 70%, #00508a 100%)',
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #08bcff 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #0080cc 0%, transparent 70%)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto">

        {/* RBI badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
          <span className="material-symbols-outlined text-sm text-primary">verified_user</span>
          RBI Authorized Forex Dealer · Est. 1974
        </div>

        {/* SEO-optimised H1 */}
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
          Currency Exchange in Pala,{' '}
          <span className="text-primary">Kottayam</span>
        </h1>

        {/* Supporting paragraph */}
        <p className="text-lg md:text-xl text-blue-200/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Cherupushpam Agency — trusted forex services, Western Union money transfer,
          student forex, travel cards &amp; branded home appliances since 1974.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/forex"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-[#00aadf] transition-all duration-300 shadow-lg shadow-primary/30 active:scale-95"
          >
            <span className="material-symbols-outlined text-sm">trending_up</span>
            Check Today's Rates
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-sm">location_on</span>
            Visit Showroom
          </Link>
        </div>

        {/* Trust stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-14 pt-10 border-t border-white/10">
          {[
            { value: '50+', label: 'Years of Trust' },
            { value: 'RBI', label: 'Authorized Dealer' },
            { value: '100k+', label: 'Clients Served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-primary">{stat.value}</p>
              <p className="text-blue-200/70 text-xs font-semibold uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;