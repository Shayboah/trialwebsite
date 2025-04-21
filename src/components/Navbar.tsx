import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white shadow-md' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 
              className="text-2xl font-bold tracking-tighter mr-2 clickable"
              onClick={() => handleNavClick('hero')}
            >
              <span className="text-black">NØT</span>
              <span className="text-red-600">404</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['About', 'Services', 'Work', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className="relative text-black hover:text-red-600 font-medium transition-colors duration-300 clickable"
              >
                {item}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-600 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"></span>
              </button>
            ))}
          </nav>

          <button 
            className="md:hidden text-black focus:outline-none clickable" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        style={{ top: '61px' }}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          {['About', 'Services', 'Work', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className="text-2xl text-black hover:text-red-600 font-medium transition-colors duration-300 clickable"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;