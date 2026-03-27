import React from 'react';
import { Link } from 'react-router-dom';
import { usePageSEO } from '../pages/hooks/usePageSEO';

const TermsOfService: React.FC = () => {
  usePageSEO(
    'Terms of Service | Cherupushpam Agency',
    'Terms of service for Cherupushpam Agency — an RBI authorized forex dealer and electronics showroom in Pala, Kottayam, Kerala.',
    '/terms'
  );

  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40 max-w-4xl">

        <div className="mb-10">
          <Link to="/" className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-black text-[#111814] mb-4">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#111814] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Cherupushpam Agency website
              (tomcherupushpamagency.com), you agree to be bound by these Terms of Service.
              If you do not agree, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111814] mb-3">2. Services</h2>
            <p>
              Cherupushpam Agency is an RBI authorized foreign currency exchange dealer and
              home appliances showroom located in Pala, Kerala. The rates displayed on this website
              are indicative only. Final rates are confirmed at the time of the transaction at our
              physical showroom.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111814] mb-3">3. Regulatory Compliance</h2>
            <p>
              All foreign exchange transactions are conducted in compliance with the Reserve Bank of
              India (RBI) guidelines and the Foreign Exchange Management Act (FEMA), 1999.
              Customers are required to submit valid KYC documents as mandated by RBI regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111814] mb-3">4. Limitation of Liability</h2>
            <p>
              Cherupushpam Agency is not liable for any direct or indirect losses arising from the
              use of exchange rate information displayed on this website. Exchange rates fluctuate
              continuously and the information on this site may not reflect real-time market rates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111814] mb-3">5. Contact</h2>
            <p>
              For any questions regarding these terms, contact us at{' '}
              <a href="mailto:tomcherupushpam@gmail.com" className="text-primary hover:underline">
                tomcherupushpam@gmail.com
              </a>{' '}
              or visit our showroom at Cherupushpam Building, Old Market Road, Opp. Civil Station,
              Pala, Kerala 686575.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
