import React, { useEffect } from "react";

const ForexExchangePala = () => {

  // ✅ Dynamic SEO (React 19 safe method)
  useEffect(() => {
    document.title =
      "Best Forex Exchange in Pala, Kerala | RBI Authorized Currency Exchange | Cherupushpam Agency";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Looking for trusted forex exchange in Pala? Cherupushpam Agency is an RBI authorized currency exchange dealer offering foreign currency, Western Union money transfer, travel cards and student forex services in Kottayam district."
      );
    }
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      
      {/* MAIN HEADING */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#002b4d] mb-6">
          Best Forex Exchange in Pala – RBI Authorized Currency Dealer
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Cherupushpam Agency is a leading RBI authorized forex exchange in Pala,
          Kerala providing secure and compliant foreign currency exchange
          services. Located near Civil Station, Pala, we offer competitive live
          exchange rates for USD, EUR, GBP and other major currencies. Customers
          from across Kottayam district trust us for transparent and reliable
          international money services since 1974.
        </p>
      </div>

      {/* SERVICES SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-16">
        
        <div className="p-6 border rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-[#002b4d]">
            Foreign Currency Exchange in Pala
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Buy and sell foreign currency at competitive rates in Pala.
            We deal in US Dollar (USD), Euro (EUR), British Pound (GBP),
            UAE Dirham (AED) and other global currencies for travel,
            business and overseas education purposes.
          </p>
        </div>

        <div className="p-6 border rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-[#002b4d]">
            Western Union Money Transfer Pala
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Authorized Western Union agent in Pala offering fast and secure
            international money transfer and remittance services. Send and
            receive funds globally with confidence and compliance.
          </p>
        </div>

        <div className="p-6 border rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-[#002b4d]">
            Travel Cards & Student Forex Services
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Get international travel cards and complete student forex
            assistance for overseas education payments. We help students
            across Kerala manage tuition fees and living expenses abroad.
          </p>
        </div>

      </div>

      {/* LOCATION SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-[#002b4d] mb-4">
          Currency Exchange Near Civil Station, Pala
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Our forex exchange center in Pala serves customers from
          Bharananganam, Arunapuram, Ramapuram, Kuravilangad,
          Ettumanoor, Kottayam, Thodupuzha and nearby towns.
          If you are searching for “currency exchange near me” in Pala,
          Cherupushpam Agency is your trusted local forex partner.
        </p>
      </div>

      {/* FAQ SECTION – VERY IMPORTANT FOR SEO */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-[#002b4d] mb-6 text-center">
          Frequently Asked Questions – Forex Exchange in Pala
        </h2>

        <div className="space-y-6 text-gray-600">
          <div>
            <h3 className="font-semibold text-[#002b4d]">
              Is Cherupushpam Agency RBI authorized?
            </h3>
            <p>
              Yes, Cherupushpam Agency is an RBI authorized foreign currency
              exchange dealer operating in Pala, Kerala with full regulatory compliance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#002b4d]">
              What documents are required for currency exchange?
            </h3>
            <p>
              Valid passport, visa and travel documents are required as per RBI
              guidelines for foreign exchange transactions in India.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#002b4d]">
              Do you provide Western Union services in Pala?
            </h3>
            <p>
              Yes, we are an authorized Western Union agent providing secure
              international money transfer services in Pala.
            </p>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-4xl mx-auto text-center bg-[#002b4d] text-white p-10 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">
          Need Today’s Live Forex Rate in Pala?
        </h3>
        <p className="mb-6 text-blue-100">
          Contact Cherupushpam Agency now for updated exchange rates,
          student forex guidance and secure international transactions.
        </p>
        <a
          href="/contact"
          className="bg-white text-[#002b4d] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Contact Now
        </a>
      </div>

    </section>
  );
};

export default ForexExchangePala;