import React from "react";

const WhyChooseUs = () => {
  return (
    <section
      style={{
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          padding: "40px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          textAlign: "center",
          lineHeight: "1.8"
        }}
      >
        {/* SEO Heading */}
        <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
          RBI Authorized Forex & Currency Exchange in Pala
        </h2>

        {/* Strong Local Intro */}
        <p style={{ marginBottom: "16px" }}>
          Cherupushpam Agency is a trusted and RBI authorized foreign currency 
          exchange dealer located opposite Civil Station on Old Market Road, Pala, Kerala. 
          Since 1974, we have been serving customers across Kottayam district with reliable 
          forex exchange, Western Union money transfer, and international travel card services.
        </p>

        {/* Service Clarity */}
        <p style={{ marginBottom: "16px" }}>
          We specialize in buying and selling major foreign currencies including USD, EUR, 
          GBP and other international currencies at competitive rates. Students, travelers 
          and professionals rely on us for safe and compliant currency exchange services 
          in Pala.
        </p>

        {/* Location Authority */}
        <p style={{ marginBottom: "16px" }}>
          Customers visit our forex exchange center from Pala, Bharananganam, Arunapuram, 
          Ramapuram, Kuravilangad, Ettumanoor, Kottayam and Thodupuzha for fast and secure 
          foreign exchange transactions.
        </p>

        {/* Western Union + Travel Card Boost */}
        <p style={{ marginBottom: "16px" }}>
          We are an authorized Western Union agent in Pala offering international money 
          transfer services. We also provide international travel cards and student forex 
          assistance for overseas education payments.
        </p>

        {/* Secondary Business (Appliances) */}
        <p>
          In addition to forex services, we also supply branded home appliances including 
          LG, Samsung, Sony and IFB products such as televisions, refrigerators, washing 
          machines and other electronic appliances at competitive prices.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;