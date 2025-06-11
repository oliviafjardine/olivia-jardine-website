import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMenuVisible(true);
      setTimeout(() => setFadeIn(true), 10);
    } else {
      setFadeIn(false);
      const timeout = setTimeout(() => setIsMenuVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <nav className={`fixed top-0 w-full z-20 py-6 transition-colors duration-300 ${isScrolled ? 'bg-primary' : 'bg-light'}`}>
      <div className="container-margins flex justify-center items-center relative">
        {/* Desktop Links - Centered */}
        <div className="hidden lg:flex items-center">
          <div
            className={`flex space-x-6 text-xs sm:text-sm transition-all duration-300 px-4 py-2 ${
              !isScrolled ? 'bg-white/10 backdrop-blur-md rounded-full' : ''
            }`}
          >
            {NAV_LINKS.map(({ to, label, isCTA }) => (
              <Link
                key={to}
                to={to}
                className={`transition-colors duration-300 ${
                  isCTA
                    ? 'bg-accent-primary bg-accent-hover px-4 py-2 rounded-full'
                    : `${isScrolled ? 'text-primary hover:text-accent-hover' : 'text-light hover:text-zinc-300'}`
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button - Positioned Right */}
        <button
          onClick={toggleMobileMenu}
          className={`lg:hidden right-6 absolute z-50 group transition-colors duration-300 ${
            isMobileMenuOpen || isScrolled ? 'text-primary' : 'text-light'
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
          className={`lg:hidden fixed inset-0 z-40 bg-primary transition-opacity duration-300 ${
            fadeIn ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="container-margins flex flex-col items-center justify-center h-full space-y-4">
            {NAV_LINKS.map(({ to, label, isCTA }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-colors duration-200 ${
                  isCTA
                    ? 'bg-accent-primary bg-accent-hover text-primary px-6 py-2 rounded-full text-sm sm:text-base'
                    : 'text-lg sm:text-xl text-accent-hover py-1'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
