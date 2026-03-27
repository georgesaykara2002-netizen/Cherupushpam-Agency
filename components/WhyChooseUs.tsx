import React from "react";

const features = [
  {
    icon: "verified_user",
    title: "RBI Authorized Dealer",
    description:
      "Fully licensed and regulated by the Reserve Bank of India for foreign currency exchange and international money transfer services.",
  },
  {
    icon: "history_edu",
    title: "Trusted Since 1974",
    description:
      "Over 50 years serving customers across Kottayam district with transparency, reliability, and personalized care.",
  },
  {
    icon: "currency_exchange",
    title: "Best Exchange Rates",
    description:
      "Competitive live rates for USD, EUR, GBP, AED and all major currencies. No hidden charges on forex transactions.",
  },
  {
    icon: "payments",
    title: "Western Union Agent",
    description:
      "Authorized Western Union agent in Pala for fast and secure international money transfers and global remittances.",
  },
  {
    icon: "school",
    title: "Student Forex Services",
    description:
      "Dedicated overseas education forex assistance — tuition fee transfers, travel cards and study-abroad currency solutions.",
  },
  {
    icon: "tv",
    title: "Home Appliances Showroom",
    description:
      "Branded LG, Samsung, Sony & IFB appliances — TVs, refrigerators, washing machines and more at competitive prices.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary mb-4">
            <span className="material-symbols-outlined text-sm">star</span>
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#111814] mb-4">
            RBI Authorized Forex &amp; Electronics in Pala
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Cherupushpam Agency is the most trusted name in Pala for foreign currency exchange,
            Western Union transfers and quality home appliances — serving Kottayam district since 1974.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-2xl text-primary">
                  {f.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#111814] mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Local SEO text block (hidden visually but readable by Googlebot) */}
        <p className="text-gray-500 text-xs text-center mt-10 leading-relaxed max-w-3xl mx-auto">
          Customers visit our forex exchange center from Pala, Bharananganam, Arunapuram,
          Ramapuram, Kuravilangad, Ettumanoor, Kottayam and Thodupuzha for fast and secure
          foreign exchange transactions and quality electronics at our showroom on Old Market Road,
          opposite Civil Station, Pala, Kerala&nbsp;686575.
        </p>

      </div>
    </section>
  );
};

export default WhyChooseUs;