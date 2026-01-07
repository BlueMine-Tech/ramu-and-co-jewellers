import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import facebookQR from '../assets/facebook.jpeg';
import instagramQR from '../assets/instagram.jpeg';
import youtubeQR from '../assets/youtube.jpeg';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 text-gray-900 border-t-2 border-gray-200" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Company Info */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-normal tracking-tight mb-2" style={{ letterSpacing: '0.12em' }}>
                RAMU & CO
              </h2>
              <p className="text-xs text-gray-500 tracking-widest font-light mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.25em' }}>
                JEWELLERS
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-8 h-px bg-gray-400"></div>
                <p className="text-xs text-gray-500 font-light" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  SINCE 1965™
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed font-light" style={{ lineHeight: '1.8' }}>
              Trusted Goldsmith in Trichy and Reputed Trademarked Jewellery Showroom for more than{' '}
              <span className="font-semibold text-gray-900">50 years</span>. Our showroom offers a vast range of{' '}
              <span className="italic font-medium">Exclusive & Traditional Gold & Silverwares</span>.
            </p>
            
            {/* Decorative element */}
            <div className="flex items-center gap-2 mt-6">
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
              <div className="w-1 h-1 rounded-full bg-gray-200"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-normal mb-6 pb-3 border-b border-gray-300 relative" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-px bg-gray-900"></div>
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a 
                  href="/" 
                  className="group text-sm text-gray-600 hover:text-gray-900 transition-all duration-300 inline-flex items-center font-light"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  <span className="w-0 h-px bg-gray-900 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="group text-sm text-gray-600 hover:text-gray-900 transition-all duration-300 inline-flex items-center font-light"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  <span className="w-0 h-px bg-gray-900 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/gold" 
                  className="group text-sm text-gray-600 hover:text-gray-900 transition-all duration-300 inline-flex items-center font-light"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  <span className="w-0 h-px bg-gray-900 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Gold
                </a>
              </li>
              <li>
                <a 
                  href="/silver" 
                  className="group text-sm text-gray-600 hover:text-gray-900 transition-all duration-300 inline-flex items-center font-light"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  <span className="w-0 h-px bg-gray-900 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Silver
                </a>
              </li>
              <li>
                <a 
                  href="/customized" 
                  className="group text-sm text-gray-600 hover:text-gray-900 transition-all duration-300 inline-flex items-center font-light"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  <span className="w-0 h-px bg-gray-900 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Customized Jewellery
                </a>
              </li>
              <li>
                <a 
                  href="/awards" 
                  className="group text-sm text-gray-600 hover:text-gray-900 transition-all duration-300 inline-flex items-center font-light"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  <span className="w-0 h-px bg-gray-900 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Awards & Achievements
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="group text-sm text-gray-600 hover:text-gray-900 transition-all duration-300 inline-flex items-center font-light"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  <span className="w-0 h-px bg-gray-900 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-normal mb-6 pb-3 border-b border-gray-300 relative" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Contact Us
              <div className="absolute bottom-0 left-0 w-12 h-px bg-gray-900"></div>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-gray-900 flex items-center justify-center mr-3.5 flex-shrink-0 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-sm text-gray-600 font-light leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.7' }}>
                  <p>160, Big Bazaar St,</p>
                  <p>Singarathope, Devathanam,</p>
                  <p>Tiruchirappalli - 620 008,</p>
                  <p>Tamil Nadu, India.</p>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-gray-900 flex items-center justify-center mr-3.5 flex-shrink-0 transition-all duration-300">
                  <Phone className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <a 
                  href="tel:+919944954450" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  +91 9944954450
                </a>
              </li>
              <li className="flex items-start group">
                <div className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-gray-900 flex items-center justify-center mr-3.5 flex-shrink-0 transition-all duration-300">
                  <Mail className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <a 
                  href="mailto:manojramesh@ramuandcojewellers.com" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 break-words font-light"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  manojramesh@ramuandcojewellers.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media QR Codes */}
          <div>
            <h3 className="text-lg font-normal mb-6 pb-3 border-b border-gray-300 relative" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Connect With Us
              <div className="absolute bottom-0 left-0 w-12 h-px bg-gray-900"></div>
            </h3>
            <div className="flex flex-col gap-6">
              {/* Facebook QR */}
              <div className="flex items-center gap-4">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:border-gray-300 flex-shrink-0">
                  <img 
                    src={facebookQR} 
                    alt="Facebook QR Code"
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600 font-light" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Facebook
                </p>
              </div>
              
              {/* Instagram QR */}
              <div className="flex items-center gap-4">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:border-gray-300 flex-shrink-0">
                  <img 
                    src={instagramQR} 
                    alt="Instagram QR Code"
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600 font-light" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Instagram
                </p>
              </div>
              
              {/* YouTube QR */}
              <div className="flex items-center gap-4">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:border-gray-300 flex-shrink-0">
                  <img 
                    src={youtubeQR} 
                    alt="YouTube QR Code"
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600 font-light" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  YouTube
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-6 font-light italic text-center" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Scan to follow us
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section with Social Media and Copyright */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
     <div className="flex justify-center space-x-8 mb-6">
  <a
    href="https://www.facebook.com/p/RAMU-CO-Jewellers-Since-1965-61557649941811/"
    target="_blank"
    rel="noopener noreferrer"
    className="group w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-gray-900 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
    aria-label="Facebook"
  >
    <Facebook className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
  </a>

  <a
    href="https://www.instagram.com/ramuandcojewellerstrichy/"
    target="_blank"
    rel="noopener noreferrer"
    className="group w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-gray-900 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
    aria-label="Instagram"
  >
    <Instagram className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
  </a>

  <a
    href="https://www.youtube.com/@ramuandcojewellerstrichy"
    target="_blank"
    rel="noopener noreferrer"
    className="group w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-gray-900 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
    aria-label="YouTube"
  >
    <Youtube className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
  </a>
</div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-200"></div>
          </div>
          
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-6 border-t border-gray-200 font-light" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <p>Copyrights © 2025. <span className="font-normal">Ramu & Co Jewellers</span>. All Rights Reserved.</p>
            <p className="mt-3 md:mt-0">
              Designed By <span className="font-normal text-gray-700">Bluemine Technologies.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;