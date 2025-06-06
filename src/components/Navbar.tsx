import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact', isCTA: true },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
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

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <nav className="bg-white py-3 fixed top-0 left-0 w-full z-20 shadow-sm border-b border-gray-200">
      <div className="container-margins flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-1 text-sm font-semibold tracking-wide text-hero"
        >
          Olivia Jardine
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          {navLinks.map(({ to, label, isCTA }) => (
            <Link
              key={to}
              to={to}
              className={`transition-colors duration-300 ${
                isCTA
                  ? 'btn bg-box-bg text-heading-1 hover:bg-heading-3'
                  : 'underlink px-2 py-2 rounded-full text-hero hover:text-heading-1'
              }`}
            >
              {isCTA ? <span className="btn__content">{label}</span> : label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-full transition-colors z-50 transform transition-transform duration-300 ease-in-out text-hero"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuVisible && (
        <div
          className={`md:hidden fixed inset-0 z-40 bg-primary/10 backdrop-blur-2xl transition-opacity duration-300 ${
            fadeIn ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="container-margins flex flex-col items-center justify-center h-full space-y-6">
            {navLinks.map(({ to, label, isCTA }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-colors duration-300 ${
                  isCTA
                    ? 'btn text-lg bg-box-bg text-heading-1 hover:bg-heading-3'
                    : 'underlink text-lg px-6 py-2 rounded-full text-hero hover:text-heading-1'
                }`}
              >
                {isCTA ? <span className="btn__content">{label}</span> : label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
