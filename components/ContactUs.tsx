import React, { useState, FormEvent } from 'react';

const ContactUs: React.FC = () => {
  const WHATSAPP_NUMBER = "9778473009"; // Main WhatsApp
  const TOM_NUMBER = "9447113009"; // Tom Cherupushpam

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
    <section className="pt-32 pb-16 min-h-screen bg-background-light dark:bg-background-dark">
      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40">

        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary mb-4">
            <span className="material-symbols-outlined text-sm">support_agent</span>
            <span>We are here to help</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#111814] dark:text-white mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about our products or forex rates? Visit our showroom in Pala or reach out to us directly.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Phone & WhatsApp */}
          <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-white/5 shadow-lg flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
              <span className="material-symbols-outlined text-3xl">call</span>
            </div>
            <h3 className="text-xl font-bold text-[#111814] dark:text-white mb-2">Phone & WhatsApp</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">Mon-Sat from 9am to 8:30pm</p>
            <a
              href={`https://wa.me/91${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="text-lg font-bold text-primary hover:text-accent-blue transition-colors"
            >
              +91 {WHATSAPP_NUMBER}
            </a>
          </div>

          {/* Email */}
          <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-white/5 shadow-lg flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
              <span className="material-symbols-outlined text-3xl">mail</span>
            </div>
            <h3 className="text-xl font-bold text-[#111814] dark:text-white mb-2">Email Us</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">For general inquiries</p>
            <a href="mailto:tomcherupushpam@gmail.com" className="text-lg font-bold text-primary hover:text-accent-blue transition-colors">
              tomcherupushpam@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-white/5 shadow-lg flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
              <span className="material-symbols-outlined text-3xl">location_on</span>
            </div>
            <h3 className="text-xl font-bold text-[#111814] dark:text-white mb-2">Visit Showroom</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">Cherupushpam Building, Old Market Rd</p>
            <p className="text-lg font-bold text-[#111814] dark:text-white">
              opp. Civil Station, Pala, Kerala 686575
            </p>
          </div>
        </div>

        {/* Tom Cherupushpam Banner */}
        <div className="flex justify-center mb-16">
          <div className="bg-sky-100 border border-sky-300 text-sky-900 px-6 py-3 rounded-xl shadow-md flex items-center gap-4 max-w-md w-full">
            <span className="material-symbols-outlined text-2xl">person</span>
            <div className="flex-1">
              <p className="font-bold">Tom Cherupushpam</p>
              <p className="text-sm opacity-80">+91 {TOM_NUMBER}</p>
            </div>
            <a
              href={`https://wa.me/91${TOM_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="bg-sky-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-sky-600 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-surface-dark p-8 md:p-12 rounded-2xl border border-gray-100 dark:border-white/5 shadow-2xl">
            <h2 className="text-3xl font-black text-[#111814] dark:text-white mb-6">Send us a Message</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Fill out the form to start a conversation directly on WhatsApp.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <textarea name="message" rows={4} placeholder="Your Message" required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg"></textarea>
              <button type="submit" className="w-full bg-primary py-3 rounded-lg font-bold text-black">Send via WhatsApp</button>
            </form>
          </div>

          <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://maps.google.com/maps?q=Pala%2C%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              loading="lazy"
              title="Cherupushpam Agency"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
