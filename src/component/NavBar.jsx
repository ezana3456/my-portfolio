import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const links = [
    { id: 1, name: 'Home', href: '#home' },
    { id: 2, name: 'About', href: '#about' },
    { id: 3, name: 'Skills', href: '#skills' },
    { id: 4, name: 'Projects', href: '#projects' },
    { id: 5, name: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setNavOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed w-full transition-all duration-300 z-50 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm' 
        : 'bg-white dark:bg-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              className="text-2xl font-bold text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors"
              onClick={handleLinkClick}
            >
              EzedinPortfolio
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {links.map(link => (
                <a 
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${
                      link.href === window.location.hash
                        ? 'text-red-500 dark:text-red-400 font-semibold'
                        : 'text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400'
                    }
                    relative group
                  `}
                  onClick={handleLinkClick}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 dark:bg-red-400 transition-all duration-300 ${
                    link.href === window.location.hash ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setNavOpen(!navOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Toggle menu"
              aria-expanded={navOpen}
            >
              {navOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        navOpen 
          ? 'max-h-screen bg-white dark:bg-gray-800 shadow-xl' 
          : 'max-h-0'
      }`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {links.map(link => (
            <a 
              key={link.id}
              href={link.href}
              onClick={handleLinkClick}
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors
                ${
                  link.href === window.location.hash
                    ? 'bg-red-50 dark:bg-gray-700 text-red-600 dark:text-red-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;