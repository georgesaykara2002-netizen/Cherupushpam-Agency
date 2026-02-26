import React from 'react';
import logo from './img/logofile.png';

const Footer: React.FC = () => {
  const logoSrc = logo;

  return (
    <footer className="bg-[#0b0f0d] pt-16 pb-8 border-t border-white/5">
      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            {/* FIX: Using a negative margin-bottom (mb-[-40px]) to pull text up
              and removing gap-2 to keep the vertical stack tight.
            */}
            <div className="flex items-center mb-[20px]">
              <img 
                src={logoSrc}
                alt="Cherupushpam Agency" 
                className="h-10 w-auto object-contain block"
              />
            </div>

            <p className="text-gray-400 max-w-md mb-8 relative z-10">
              Your trusted partner for home appliances and foreign exchange services in Pala since 1974.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                <div>
                  <h4 className="text-white font-medium">Visit our Showroom</h4>
                  <p className="text-gray-400 text-sm">
                    Main Road, Opposite civil station Pala, Kottayam
                    <br />
                    Kerala, India - 686575
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">call</span>
                <div>
                  <h4 className="text-white font-medium">Call Us</h4>
                  <p className="text-gray-400 text-sm">+91 9447113009</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">mail</span>
                <div>
                  <h4 className="text-white font-medium">Email Us</h4>
                  <p className="text-gray-400 text-sm">tomcherupushpam@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-64 w-full rounded-2xl overflow-hidden bg-surface-dark relative shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpapb8hraTkZ6D_aMFitk5MQDmh23UMp-Sbd3oWji_5IWKbBJHVPANMB6UZWVJnioZOI6uugHm3S-JL6MW-aggkYYxq0EjAmSugrFEd0dzvJu3FFgHRuDYxGvmjWnvfl4R9BEGEEx_jEEvW0_w3nVjkWC8FTcsx4cY47N0MrcYOuvNIaqoaY5lsyrudQSOPNapGh-_a2mHqq-nPebIccxaojzusye-z_m5vdyfFzNCyCsNoubMydgrTaBGoaeSbHOMM-7IrUotpyrq")',
              }}
              data-alt="Map showing the location of Cherupushpam Agency in Pala"
            ></div>
            <div className="absolute bottom-4 left-4 bg-white text-black text-xs font-bold px-3 py-1.5 rounded shadow-lg flex items-center gap-1 cursor-pointer">
              <span className="material-symbols-outlined text-sm">map</span> View on Google Maps
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Cherupushpam Agency,Pala. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a className="text-gray-500 hover:text-primary transition-colors text-sm cursor-pointer" href="#">
              Privacy Policy
            </a>
            <a className="text-gray-500 hover:text-primary transition-colors text-sm cursor-pointer" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;