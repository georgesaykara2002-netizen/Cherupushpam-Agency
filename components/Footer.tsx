import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logofile.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0f0d] pt-16 pb-8 border-t border-white/5 text-gray-300">
      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

          {/* LEFT SIDE */}
          <div>

            <div className="mb-6">
              <img
                src={logo}
                alt="Cherupushpam Agency - RBI Authorized Forex Dealer in Pala"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* 🔥 SEO Optimized Description */}
            <p className="text-gray-400 max-w-md mb-6">
              Cherupushpam Agency is an <strong>RBI Authorized Forex Dealer in Pala, Kerala</strong> and a trusted 
              <strong> home appliance showroom near Civil Station, Pala</strong> serving customers since 1974. 
              We provide foreign currency exchange, Western Union money transfer, travel cards, 
              student forex services, and branded electronics at competitive prices.
            </p>

            {/* 🔥 Extra Local SEO Signal */}
            <p className="text-gray-500 text-xs mb-8">
              Serving customers across Pala, Kottayam District, and Kerala.
            </p>

            <div className="space-y-6">

              {/* Location */}
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">
                  location_on
                </span>
                <div>
                  <h4 className="text-white font-semibold">
                    Visit our Showroom
                  </h4>
                  <a
                    href="https://maps.google.com/?q=Cherupushpam+Agency+Pala"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 text-sm hover:text-primary transition"
                  >
                    Main Road, Opposite Civil Station, Pala, Kottayam District,
                    <br />
                    Kerala, India - 686575
                  </a>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">
                  call
                </span>
                <div>
                  <h4 className="text-white font-semibold">
                    Call Us
                  </h4>
                  <a
                    href="tel:+919447113009"
                    className="text-gray-400 text-sm hover:text-primary transition"
                  >
                    +91 9447113009
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
                <div>
                  <h4 className="text-white font-semibold">
                    Email Us
                  </h4>
                  <a
                    href="mailto:tomcherupushpam@gmail.com"
                    className="text-gray-400 text-sm hover:text-primary transition"
                  >
                    tomcherupushpam@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - REAL MAP */}
          <div className="h-64 w-full rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <iframe
              src="https://maps.google.com/maps?q=Cherupushpam%20Agency%20Pala&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              loading="lazy"
              title="Cherupushpam Agency Location - Forex & Electronics Showroom in Pala"
            />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Cherupushpam Agency, Pala, Kerala. RBI Authorized Money Changer. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-primary transition text-sm"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-gray-500 hover:text-primary transition text-sm"
            >
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;