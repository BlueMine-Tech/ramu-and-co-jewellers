import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Top Header with Logo and Contact */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div>
                <h1 className="text-3xl font-normal tracking-tight text-gray-900" style={{ letterSpacing: '0.15em' }}>
                  RAMU & CO
                </h1>
                <p className="text-xs text-gray-500 tracking-widest mt-1">JEWELLERS</p>
              </div>
            </Link>

            {/* Contact Info - Desktop */}
            <div className="hidden md:flex flex-col items-end space-y-1 text-sm">
              <div className="flex items-center space-x-4">
                <a href="tel:+919944954450" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                  <Phone className="w-3.5 h-3.5 mr-1.5" />
                  +91 99449 54450
                </a>
                <span className="text-gray-300">|</span>
                <a href="tel:+919948534450" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                  <Phone className="w-3.5 h-3.5 mr-1.5" />
                  +91 94885 34450
                </a>
              </div>
              <a href="mailto:manojramesh@ramuandcojewellers.com" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <Mail className="w-3.5 h-3.5 mr-1.5" />
                manojramesh@ramuandcojewellers.com
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex justify-center items-center h-14 space-x-8">
            <Link to="/" className="text-sm text-gray-900 hover:text-gray-600 font-normal tracking-wide transition-colors">
              HOME
            </Link>
            <Link to="/about" className="text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide transition-colors">
              ABOUT US
            </Link>
            <Link to="/gold" className="text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide transition-colors">
              GOLD
            </Link>
            <Link to="/silver" className="text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide transition-colors">
              SILVER
            </Link>
            <Link to="/customized" className="text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide transition-colors">
              CUSTOMIZED JEWELLERY
            </Link>
            <Link to="/awards" className="text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide transition-colors">
              AWARDS & ACHIEVEMENTS
            </Link>
            <Link to="/contact" className="text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide transition-colors">
              CONTACT US
            </Link>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-3">
                <Link to="/" className="text-sm text-gray-900 hover:text-gray-600 font-normal tracking-wide py-2" onClick={() => setIsMenuOpen(false)}>
                  HOME
                </Link>
                <Link to="/about" className="text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide py-2" onClick={() => setIsMenuOpen(false)}>
                  ABOUT US
                </Link>
                <Link to="/gold" className="text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide py-2" onClick={() => setIsMenuOpen(false)}>
                  GOLD
                </Link>
                <Link to="/silver" className="text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide py-2" onClick={() => setIsMenuOpen(false)}>
                  SILVER
                </Link>
                <Link to="/customized" className="text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide py-2" onClick={() => setIsMenuOpen(false)}>
                  CUSTOMIZED JEWELLERY
                </Link>
                <Link to="/awards" className="text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide py-2" onClick={() => setIsMenuOpen(false)}>
                  AWARDS & ACHIEVEMENTS
                </Link>
                <Link to="/contact" className="text-sm text-gray-700 hover:text-gray-900 font-normal tracking-wide py-2" onClick={() => setIsMenuOpen(false)}>
                  CONTACT US
                </Link>
                
                {/* Mobile Contact Info */}
                <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                  <a href="tel:+919944954450" className="flex items-center text-sm text-gray-600">
                    <Phone className="w-3.5 h-3.5 mr-2" />
                    +91 99449 54450
                  </a>
                  <a href="tel:+919948534450" className="flex items-center text-sm text-gray-600">
                    <Phone className="w-3.5 h-3.5 mr-2" />
                    +91 94885 34450
                  </a>
                  <a href="mailto:manojramesh@ramuandcojewellers.com" className="flex items-center text-sm text-gray-600">
                    <Mail className="w-3.5 h-3.5 mr-2" />
                    manojramesh@ramuandcojewellers.com
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