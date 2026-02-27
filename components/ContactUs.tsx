import React, { useState, FormEvent } from 'react';

const ContactUs: React.FC = () => {
  const WHATSAPP_NUMBER = "9778473009";
  const TOM_NUMBER = "9447113009";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const whatsappMessage = `
Hello Cherupushpam Agency 👋

I sent this message from your website.

Name: ${name}
Email: ${email}

Message:
${message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="pt-32 pb-16 min-h-screen bg-white text-gray-900">
      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary mb-4">
            <span className="material-symbols-outlined text-sm">support_agent</span>
            We are here to help
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-[#111814] mb-6">
            Contact Us
          </h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Have questions about our products or forex rates? Visit our showroom in Pala or reach out to us directly.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* Phone */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center hover:-translate-y-1 transition">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl">call</span>
            </div>

            <h3 className="text-xl font-bold text-[#111814] mb-2">
              Phone
            </h3>

            <p className="text-gray-600 mb-4 text-sm">
              Mon-Sat from 9am to 8:30pm
            </p>

            {/* Direct Call */}
            <a
              href={`tel:+91${WHATSAPP_NUMBER}`}
              className="text-lg font-bold text-primary hover:underline"
            >
              +91 {WHATSAPP_NUMBER}
            </a>

            {/* WhatsApp */}
            <div className="mt-4">
              <a
                href={`https://wa.me/91${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-green-600 font-semibold hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center hover:-translate-y-1 transition">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl">mail</span>
            </div>

            <h3 className="text-xl font-bold text-[#111814] mb-2">
              Email Us
            </h3>

            <p className="text-gray-600 mb-4 text-sm">
              For general inquiries
            </p>

            <a
              href="mailto:tomcherupushpam@gmail.com"
              className="text-lg font-bold text-primary hover:underline"
            >
              tomcherupushpam@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center hover:-translate-y-1 transition">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl">location_on</span>
            </div>

            <h3 className="text-xl font-bold text-[#111814] mb-2">
              Visit Showroom
            </h3>

            <p className="text-gray-700 text-sm mb-3">
              Cherupushpam Building, Old Market Rd
            </p>

            <p className="font-semibold">
              opp. Civil Station, Pala, Kerala 686575
            </p>
          </div>
        </div>

        {/* Tom Banner */}
        <div className="flex justify-center mb-16">
          <div className="bg-blue-50 border border-blue-200 px-6 py-4 rounded-xl shadow-md flex items-center gap-4 max-w-md w-full">
            <span className="material-symbols-outlined text-2xl text-primary">
              person
            </span>

            <div className="flex-1">
              <p className="font-bold text-gray-900">
                Tom Cherupushpam
              </p>

              {/* Direct Call */}
              <a
                href={`tel:+91${TOM_NUMBER}`}
                className="text-sm text-gray-700 font-semibold hover:underline"
              >
                +91 {TOM_NUMBER}
              </a>
            </div>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/91${TOM_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-black px-4 py-2 rounded-lg font-bold hover:opacity-90 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Form */}
          <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-2xl">
            <h2 className="text-3xl font-black text-[#111814] mb-6">
              Send us a Message
            </h2>

            <p className="text-gray-700 mb-8">
              Fill out the form to start a conversation directly on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />

              <button
                type="submit"
                className="w-full bg-primary py-3 rounded-lg font-bold text-black hover:opacity-90 transition"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=Pala%2C%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              loading="lazy"
              title="Cherupushpam Agency"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;