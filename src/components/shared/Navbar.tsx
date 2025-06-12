import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../constants';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
    // Re-enable scrolling when menu closes after navigation
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMenuVisible(true);
      setTimeout(() => setFadeIn(true), 10);
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      setFadeIn(false);
      const timeout = setTimeout(() => setIsMenuVisible(false), 300);
      // Re-enable scrolling when menu closes
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timeout);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Cleanup: ensure scrolling is re-enabled when component unmounts
      document.body.style.overflow = 'unset';
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <nav className={`fixed top-0 w-full z-20 py-6 transition-colors duration-300 ${isScrolled ? '' : 'bg-light'}`}>
      <div className="container-margins flex justify-center items-center relative">
        {/* Desktop Links - Centered */}
        <div className="hidden md:flex items-center">
          <div
            className={`flex space-x-6 text-xs sm:text-sm transition-all duration-300 px-4 py-2 rounded-full ${
              !isScrolled ? 'bg-white/10 backdrop-blur-md' : 'bg-black/10 backdrop-blur-lg'
            }`}
          >
            {NAV_LINKS.map(({ to, label, isCTA }) => (
              <button
                key={to}
                onClick={() => scrollToSection(to)}
                className={`transition-colors duration-300 ${
                  isCTA
                    ? 'bg-accent-primary bg-accent-hover px-4 py-2 rounded-full'
                    : `${isScrolled ? 'text-primary hover:text-accent-hover' : 'text-white/80 hover:text-white'}`
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button - Positioned Right */}
        <button
          onClick={toggleMobileMenu}
          className={`md:hidden right-6 absolute z-50 group transition-colors duration-300 ${
            isScrolled ? 'text-primary' : 'text-light'
          }`}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuVisible && (
        <div
          className={`md:hidden fixed inset-0 z-40 bg-primary/90 backdrop-blur-xl transition-opacity duration-300 ${
            fadeIn ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="container-margins flex flex-col items-center justify-center h-full space-y-4">
            {NAV_LINKS.map(({ to, label, isCTA }) => (
              <button
                key={to}
                onClick={() => scrollToSection(to)}
                className={`transition-colors duration-200 text-center ${
                  isCTA
                    ? 'bg-accent-primary hover:bg-accent-hover text-primary px-6 py-2 rounded-full text-sm sm:text-base cursor-pointer'
                    : `text-lg sm:text-xl py-1 cursor-pointer ${
                        isScrolled 
                          ? 'text-primary hover:text-accent-hover' 
                          : 'text-light hover:text-accent-hover'
                      }`
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;