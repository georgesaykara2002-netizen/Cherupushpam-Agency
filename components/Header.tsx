import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './img/logofile.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Forex Services', path: '/forex' },
    { label: 'Electronics', path: '/electronics' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Blog', path: '/blog' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-gray-200 h-16 shadow-sm'
          : 'bg-white/60 backdrop-blur-sm border-transparent h-20'
      }`}
    >
      <div className="mx-auto px-4 md:px-6 h-full w-full max-w-7xl">
        <div className="flex items-center justify-between h-full">

          {/* LOGO */}
          <Link to="/" className="flex-shrink-0 py-2">
            <img
              src={logo}
              alt="Cherupushpam Agency Logo"
              className="h-[25px] md:h-[28px] lg:h-[45px] w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold px-4 py-2 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? 'border-2 border-blue-600 text-blue-600 bg-blue-50/50'
                    : 'text-gray-800 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* BUTTON + MOBILE MENU */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:block px-8 py-3 bg-[#00c4ff] text-white text-sm font-bold rounded-full hover:bg-[#00b4eb] transition-all shadow-lg shadow-cyan-200/50 active:scale-95"
            >
              Visit Showroom
            </Link>

            <button
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined text-[28px]">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 overflow-hidden lg:hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col p-4 gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-left p-3 rounded-lg text-sm font-bold transition-colors ${
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;