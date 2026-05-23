import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, TrendingUp } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Services', target: 'services' },
    { name: 'Case Studies', target: 'portfolio' },
    { name: 'Process', target: 'process' },
    { name: 'Testimonials', target: 'testimonials' },
    { name: 'Blog', target: 'blog' },
    { name: 'Contact', target: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background glass opacity toggle
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Intersection observer-like check for active navigation link
      const scrollPos = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.target);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.target);
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/60 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <button
            id="nav-logo-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 text-white font-sans font-bold text-xl tracking-tight hover:opacity-90 group text-left cursor-pointer"
          >
            <div className="p-1.5 rounded-lg bg-blue-600 group-hover:bg-cyan-500 transition-colors duration-300">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Md Mukter Ahmed
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.target}
                id={`nav-link-${link.target}`}
                onClick={() => scrollToSection(link.target)}
                className={`px-3 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === link.target
                    ? 'text-cyan-400 bg-slate-800/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/45'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button
              id="desktop-navbar-cta-btn"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center px-5 py-2 rounded-full font-sans text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-royal-600 to-cyan-500 hover:opacity-90 transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-cyan-500/20 active:scale-95 cursor-pointer group"
            >
              Consult Now
              <ArrowUpRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggler */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggler"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-155"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-out */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1.5 sm:px-6">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  id={`mobile-nav-link-${link.target}`}
                  onClick={() => scrollToSection(link.target)}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-sans text-base font-medium transition-colors cursor-pointer ${
                    activeSection === link.target
                      ? 'text-cyan-400 bg-slate-900 border-l-4 border-cyan-400'
                      : 'text-slate-300 hover:bg-slate-900/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-900">
                <button
                  id="mobile-nav-cta-btn"
                  onClick={() => scrollToSection('contact')}
                  className="w-full flex items-center justify-center px-6 py-3.5 rounded-xl font-sans text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/10 cursor-pointer"
                >
                  <span>Free Growth Consultation</span>
                  <ArrowUpRight className="ml-1.5 w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
