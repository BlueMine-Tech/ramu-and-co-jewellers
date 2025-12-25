import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
      {/* Top Header with Logo and Contact */}
      <div className="bg-gradient-to-b from-white to-gray-50/30 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5 md:py-6">
            {/* Logo */}
            <a href="/" className="group flex items-center space-x-3 transition-all duration-300">
              <div className="relative">
                <h1 className="text-3xl md:text-4xl font-normal tracking-tight text-gray-900 transition-all duration-300 group-hover:text-gray-700" 
                    style={{ letterSpacing: '0.12em', fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  RAMU & CO
                </h1>
                <p className="text-xs text-gray-500 tracking-widest mt-1.5 font-light" 
                   style={{ letterSpacing: '0.25em', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  JEWELLERS
                </p>
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-gray-900 to-gray-400 group-hover:w-full transition-all duration-500"></div>
              </div>
            </a>

            {/* Contact Info - Desktop */}
            <div className="hidden lg:flex flex-col items-end space-y-2 text-sm" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <div className="flex items-center space-x-5">
                <a href="tel:+919944954450" className="group flex items-center text-gray-600 hover:text-gray-900 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gray-900 flex items-center justify-center mr-2.5 transition-all duration-300">
                    <Phone className="w-3.5 h-3.5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-light">+91 99449 54450</span>
                </a>
                <span className="text-gray-300">•</span>
                <a href="tel:+919948534450" className="group flex items-center text-gray-600 hover:text-gray-900 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gray-900 flex items-center justify-center mr-2.5 transition-all duration-300">
                    <Phone className="w-3.5 h-3.5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-light">+91 94885 34450</span>
                </a>
              </div>
              <a href="mailto:manojramesh@ramuandcojewellers.com" className="group flex items-center text-gray-600 hover:text-gray-900 transition-all duration-300 pl-1">
                <Mail className="w-3.5 h-3.5 mr-2 text-gray-500 group-hover:text-gray-900 transition-colors duration-300" />
                <span className="font-light text-sm">manojramesh@ramuandcojewellers.com</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav 
        className={`bg-white border-b sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-gray-300 shadow-lg' : 'border-gray-200/60'
        }`}
        style={{ backdropFilter: scrolled ? 'blur(10px)' : 'none', backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex justify-center items-center h-16 space-x-10" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <a href="/" className="group relative text-sm text-gray-900 hover:text-gray-600 font-normal tracking-wide transition-all duration-300 py-2">
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/about" className="group relative text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide transition-all duration-300 py-2">
              ABOUT US
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/gold" className="group relative text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide transition-all duration-300 py-2">
              GOLD
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/silver" className="group relative text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide transition-all duration-300 py-2">
              SILVER
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/customized" className="group relative text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide transition-all duration-300 py-2">
              CUSTOMIZED JEWELLERY
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/awards" className="group relative text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide transition-all duration-300 py-2">
              AWARDS & ACHIEVEMENTS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/contact" className="group relative text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide transition-all duration-300 py-2">
              CONTACT US
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <div className="flex flex-col space-y-1">
                <a 
                  href="/" 
                  className="text-sm text-gray-900 hover:text-gray-600 hover:bg-gray-50 font-normal tracking-wide py-3 px-4 rounded-lg transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </a>
                <a 
                  href="/about" 
                  className="text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-normal tracking-wide py-3 px-4 rounded-lg transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT US
                </a>
                <a 
                  href="/gold" 
                  className="text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-normal tracking-wide py-3 px-4 rounded-lg transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  GOLD
                </a>
                <a 
                  href="/silver" 
                  className="text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-normal tracking-wide py-3 px-4 rounded-lg transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  SILVER
                </a>
                <a 
                  href="/customized" 
                  className="text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-normal tracking-wide py-3 px-4 rounded-lg transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  CUSTOMIZED JEWELLERY
                </a>
                <a 
                  href="/awards" 
                  className="text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-normal tracking-wide py-3 px-4 rounded-lg transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  AWARDS & ACHIEVEMENTS
                </a>
                <a 
                  href="/contact" 
                  className="text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-normal tracking-wide py-3 px-4 rounded-lg transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT US
                </a>
                
                {/* Mobile Contact Info */}
                <div className="pt-5 mt-5 border-t border-gray-200 space-y-3">
                  <a href="tel:+919944954450" className="flex items-center text-sm text-gray-600 hover:text-gray-900 py-2 px-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <Phone className="w-3.5 h-3.5 text-gray-600" />
                    </div>
                    <span className="font-light">+91 99449 54450</span>
                  </a>
                  <a href="tel:+919948534450" className="flex items-center text-sm text-gray-600 hover:text-gray-900 py-2 px-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <Phone className="w-3.5 h-3.5 text-gray-600" />
                    </div>
                    <span className="font-light">+91 94885 34450</span>
                  </a>
                  <a href="mailto:manojramesh@ramuandcojewellers.com" className="flex items-center text-sm text-gray-600 hover:text-gray-900 py-2 px-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <Mail className="w-3.5 h-3.5 text-gray-600" />
                    </div>
                    <span className="font-light text-xs">manojramesh@ramuandcojewellers.com</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}