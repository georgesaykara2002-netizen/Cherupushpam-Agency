import React from 'react';
import picture from './img/tom.png';
import jose from './img/jose.png';
import { usePageSEO } from '../pages/hooks/usePageSEO';

const AboutUs: React.FC = () => {
  usePageSEO(
    'About Us | Cherupushpam Agency | RBI Forex Dealer Since 1974 | Pala, Kerala',
    'Learn about Cherupushpam Agency — an RBI authorized forex dealer and home electronics showroom in Pala, Kerala founded in 1974 by Jose Cherupushpam and led by Tom Cherupushpam.',
    '/about'
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-16">
      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary mb-4">
            <span className="material-symbols-outlined text-sm">history_edu</span>
            Est. 1974
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-[#111814] mb-6">
            About Cherupushpam Agency
          </h1>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            For over five decades, we have been Pala's most trusted name in home electronics and foreign exchange services. Bridging technology and financial solutions with integrity.
          </p>
        </div>

        {/* Image & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl group border border-gray-200 bg-white">
            <img
              src={picture}
              alt="Mr.Tom Cherupushpam"
              loading="lazy"
              decoding="async"
              className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#002b4d]/90 via-transparent to-transparent flex items-end p-8">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 w-full shadow-lg">
                <p className="text-white font-black text-xl tracking-wide">
                  Mr. Tom Cherupushpam
                </p>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mt-1">
                  Managing Director
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#111814] flex items-center gap-3">
              Our Journey
              <span className="w-12 h-1 bg-primary rounded-full"></span>
            </h2>

            <p className="text-gray-800 leading-relaxed text-lg">
              Founded by visionary entrepreneur Jose Cherupushpam in Pala, Kottayam, Cherupushpam Agency was established with a clear mission to deliver trusted electronics, home appliances, and financial services from leading global brands to the local community with reliability and excellence.
            </p>

            <p className="text-gray-800 leading-relaxed">
              In 1974, recognizing the growing needs of the expatriate and NRI community in Kottayam, Cherupushpam Agency expanded its services by launching the Foreign Exchange (Forex) division and Home Appliances segment. Under the leadership of Tom Cherupushpam, the agency has modernized its operations while preserving its core values of trust, transparency, and personalized service.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <p className="text-4xl font-black text-primary">50+</p>
                <p className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Years of Trust
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <p className="text-4xl font-black text-primary">100k+</p>
                <p className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Clients Served
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <span className="material-symbols-outlined text-2xl">flag</span>
            </div>

            <h3 className="text-2xl font-bold text-[#111814] mb-4">
              Our Mission
            </h3>

            <p className="text-gray-800 leading-relaxed">
              To provide high-quality electronic appliances and secure financial services to our community at competitive prices, backed by exceptional after-sales support and expert guidance.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
              <span className="material-symbols-outlined text-2xl">visibility</span>
            </div>

            <h3 className="text-2xl font-bold text-[#111814] mb-4">
              Our Vision
            </h3>

            <p className="text-gray-800 leading-relaxed">
              To be the gold standard for retail and forex services in Kerala, recognized for our transparency, technological edge, and unwavering commitment to customer satisfaction.
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-[#002b4d] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-10">Leadership Team</h2>

          <div className="flex justify-center gap-16 flex-wrap">

            <div className="flex flex-col items-center gap-4">
              <div className="w-28 h-28 rounded-full bg-white/10 border-2 border-primary/30 shadow-xl overflow-hidden">
                <img
                  src={jose}
                  alt="Jose Cherupushpam"
                  className="w-full h-full rounded-full object-cover object-[50%_25%]"
                />
              </div>
              <p className="font-bold text-lg">Josekutty Cherupushpam</p>
              <p className="text-primary text-xs font-bold tracking-widest uppercase">
                Founder
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-28 h-28 rounded-full bg-white/10 border-2 border-primary/30 shadow-xl overflow-hidden">
                <img
                  src={picture}
                  alt="Tom Cherupushpam"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <p className="font-bold text-lg">Tom Cherupushpam</p>
              <p className="text-primary text-xs font-bold tracking-widest uppercase">
                Managing Director
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;