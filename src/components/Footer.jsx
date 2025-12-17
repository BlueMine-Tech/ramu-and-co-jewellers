import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-light tracking-wider mb-2">RAMU & CO</h2>
              <p className="text-xs text-gray-500 tracking-widest">JEWELLERS</p>
              <p className="text-xs text-gray-500 mt-1">SINCE 1965™</p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Trusted Goldsmith in Trichy and Reputed Trademarked Jewellery Showroom for more than 50 years. Showroom offers a vast range of Exclusive & Traditional Gold & silverwares
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-normal mb-6 pb-2 border-b border-gray-200">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gold" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Gold
                </a>
              </li>
              <li>
                <a href="#silver" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Silver
                </a>
              </li>
              <li>
                <a href="#customized" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Customized Jewellery
                </a>
              </li>
              <li>
                <a href="#awards" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Awards & Achievements
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-base font-normal mb-6 pb-2 border-b border-gray-200">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-gray-500" />
                <div className="text-sm text-gray-600">
                  <p>160, Big Bazaar St,</p>
                  <p>Singarathope, Devathanam,</p>
                  <p>Tiruchirappalli - 620 008,</p>
                  <p>Tamil Nadu, India.</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0 text-gray-500" />
                <a href="tel:+919944954450" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  +91 9944954450
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-gray-500" />
                <a href="mailto:manojramesh@ramuandcojewellers.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors break-words">
                  manojramesh@ramuandcojewellers.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location with QR Code Placeholder */}
          <div>
            <h3 className="text-base font-normal mb-6 pb-2 border-b border-gray-200">Location</h3>
            <div className="bg-gray-100 p-4 rounded-lg inline-block border border-gray-200">
              <div className="w-40 h-40 bg-white flex items-center justify-center border border-gray-300">
                <p className="text-xs text-gray-400 text-center px-2">QR Code<br/>Placeholder</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">Scan for location</p>
          </div>
        </div>
      </div>

      {/* Bottom Section with Social Media and Copyright */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-4 border-t border-gray-200">
            <p>Copyrights © 2025. Ramu & Co Jewellers. All Rights Reserved.</p>
            <p className="mt-2 md:mt-0">Designed By Techcmantix Technologies Pvt. Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;