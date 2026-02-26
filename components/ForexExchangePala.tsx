import React from "react";

const ForexExchangePala = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      
      {/* MAIN HEADING */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#002b4d] mb-6">
          RBI Authorized Forex & Currency Exchange in Pala
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Cherupushpam Agency is a trusted RBI authorized foreign currency 
          exchange dealer located near Civil Station, Pala. We provide secure 
          and compliant currency exchange services, Western Union money transfers, 
          international travel cards, and student forex assistance across 
          Kottayam district.
        </p>
      </div>

      {/* SERVICES SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-16">
        
        <div className="p-6 border rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-[#002b4d]">
            Foreign Currency Exchange
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Buy and sell major currencies including USD, EUR, GBP and other 
            international currencies at competitive live exchange rates in Pala.
          </p>
        </div>

        <div className="p-6 border rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-[#002b4d]">
            Western Union Money Transfer
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Authorized Western Union agent in Pala for secure international 
            money transfers and remittance services.
          </p>
        </div>

        <div className="p-6 border rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-[#002b4d]">
            Travel Cards & Student Forex
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            International travel cards and overseas education payment assistance 
            for students and travelers.
          </p>
        </div>

      </div>

      {/* LOCATION SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-[#002b4d] mb-4">
          Forex Services Near Civil Station, Pala
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Customers visit our forex exchange center from Pala, Bharananganam, 
          Arunapuram, Ramapuram, Kuravilangad, Ettumanoor, Kottayam and 
          Thodupuzha for reliable and transparent foreign exchange services.
        </p>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-4xl mx-auto text-center bg-[#002b4d] text-white p-10 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">
          Need Today’s Live Exchange Rate?
        </h3>
        <p className="mb-6 text-blue-100">
          Contact Cherupushpam Agency now for updated forex rates and secure 
          international transactions.
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