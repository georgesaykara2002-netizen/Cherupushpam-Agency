import React, { useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import ForexSection from './components/ForexSection';
import Collection from './components/Collection';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Electronics from './components/Electronics';
import ForexPage from './components/ForexPage';
import AboutUs from './components/AboutUs';
import BlogPage from './components/BlogPage';
import ForexExchangePala from './components/ForexExchangePala'; // NEW PAGE

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const googleMapsUrl =
    "https://www.google.com/maps/dir//Cherupushpam+Agency,+Cherupushpam+Buildings+,Opp.Civil+Station,+Dist,+Market+Rd,+Pala,+Kerala+686575,+India/@9.7165928,76.6759214,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3b07cdd4e6dce9a1:0xa2f36b5b62f91e8f!2m2!1d76.6833866!2d9.7142998?entry=ttu";

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUs />;

      case 'contact':
        return <ContactUs />;

      case 'electronics':
        return <Electronics />;

      case 'forex':
        return <ForexPage />;

      case 'forex-exchange-pala':
        return <ForexExchangePala />;

      case 'blog':
        return <BlogPage />;

      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={navigateTo} />

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-10 bg-white px-4">
              <button
                onClick={() => navigateTo('contact')}
                className="w-full sm:w-auto group px-10 py-4 bg-primary text-white font-black rounded-full shadow-2xl shadow-primary/30 hover:bg-[#00a0db] transition-all transform hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">
                  call
                </span>
                GET IN TOUCH
              </button>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group px-10 py-4 bg-accent-blue text-white font-black rounded-full shadow-2xl shadow-accent-blue/30 hover:bg-[#004a80] transition-all transform hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span className="material-symbols-outlined group-hover:translate-y-[-2px] transition-transform">
                  directions
                </span>
                GOOGLE DIRECTION
              </a>
            </div>

            <BrandMarquee />
            <ForexSection onNavigate={navigateTo} />
            <Collection onNavigate={navigateTo} />
            <WhyChooseUs />
            <Reviews />
          </>
        );
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;