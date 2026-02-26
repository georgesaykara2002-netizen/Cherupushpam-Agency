import React, { useState, useEffect } from 'react';
import logo from './img/logofile.png';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Forex Services', id: 'forex' },
    { label: 'Electronics', id: 'electronics' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' },
    { label: 'Blog', id: 'blog' },
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
      <div className="mx-auto px-4 md:px-6 h-full w-full">
        {/* Standard Flex layout ensures nothing 'covers' the screen */}
        <div className="flex items-center justify-between h-full">
          
          {/* LOGO: Set to exactly 30px on desktop as requested */}
          <div 
            className="flex items-center cursor-pointer py-2"
            onClick={() => onNavigate('home')}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="h-[25px] md:h-[28px] lg:h-[50px] w-auto object-contain" 
            />
          </div>

          {/* RIGHT SIDE: Navigation and Actions */}
          <div className="flex items-center gap-8">
            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-semibold transition-all hover:text-primary whitespace-nowrap ${
                    currentPage === item.id ? 'text-primary' : 'text-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* ACTION BUTTON & MOBILE TOGGLE */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="hidden sm:block px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-all shadow-md active:scale-95"
              >
                Visit Showroom
              </button>

              <button
                className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="material-symbols-outlined flex items-center justify-center text-[28px]">
                  {isMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 overflow-hidden lg:hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col p-4 gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setIsMenuOpen(false); }}
              className={`text-left p-3 rounded-lg text-sm font-medium transition-colors ${
                currentPage === item.id ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;