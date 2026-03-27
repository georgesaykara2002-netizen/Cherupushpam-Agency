import React from 'react';
import { Link } from 'react-router-dom';
import { usePageSEO } from '../pages/hooks/usePageSEO';

const PrivacyPolicy: React.FC = () => {
  usePageSEO(
    'Privacy Policy | Cherupushpam Agency',
    'Privacy policy for Cherupushpam Agency — a forex dealer and electronics showroom in Pala, Kerala. Learn how we handle your personal data.',
    '/privacy'
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

        <h1 className="text-4xl font-black text-[#111814] mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#111814] mb-3">1. Information We Collect</h2>
            <p>
              When you use our contact form or WhatsApp link, we may collect your name, email address,
              and message content. This information is used solely to respond to your enquiry.
              We do not store form data on our servers beyond what is required to process your request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111814] mb-3">2. How We Use Your Information</h2>
            <p>
              Information you provide is used only to respond to your enquiry about forex rates,
              electronics, or our services. We do not sell, trade, or share your personal data with
              third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111814] mb-3">3. Cookies</h2>
            <p>
              This website does not use tracking or advertising cookies. We may use
              session-level cookies to ensure the website functions correctly in your browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111814] mb-3">4. Third-Party Services</h2>
            <p>
              Our website uses Google Maps (embedded iframe) and WhatsApp links for contact purposes.
              These services are governed by their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111814] mb-3">5. Contact Us</h2>
            <p>
              For any privacy-related questions, contact us at{' '}
              <a href="mailto:tomcherupushpam@gmail.com" className="text-primary hover:underline">
                tomcherupushpam@gmail.com
              </a>{' '}
              or call{' '}
              <a href="tel:+919447113009" className="text-primary hover:underline">+91 9447113009</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
