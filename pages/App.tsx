import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// ✅ Corrected component paths (one level up)
import Header from '../components/Header';
import Hero from '../components/Hero';
import BrandMarquee from '../components/BrandMarquee';
import ForexSection from '../components/ForexSection';
import Collection from '../components/Collection';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import Electronics from '../components/Electronics';
import ForexPage from '../components/ForexPage';
import AboutUs from '../components/AboutUs';
import BlogPage from '../components/BlogPage';
import ForexExchangePala from '../components/ForexExchangePala';

// Scroll to top on route change (Good for SEO + UX)
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Homepage Layout
const Home = () => (
  <main className="flex-grow">
    <Hero />

    <div className="bg-white">
      <ForexSection />
      <BrandMarquee />
      <Collection title="Our Appliance Collection" />
      <WhyChooseUs />
      <Reviews />
    </div>
  </main>
);

// Main App
const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white selection:bg-[#08bcff] selection:text-white">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/forex" element={<ForexPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/forex-exchange-pala" element={<ForexExchangePala />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;