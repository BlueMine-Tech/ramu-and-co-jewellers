import React from 'react';
import { Sparkles } from 'lucide-react';

// Import all collection images
import img001 from '../assets/001.png';
import img002 from '../assets/002.png';
import img003 from '../assets/003.png';
import img004 from '../assets/004.png';
import img005 from '../assets/005.png';
import img006 from '../assets/006.png';
import img007 from '../assets/007.png';
import img008 from '../assets/008.png';
import img009 from '../assets/009.png';
import img0010 from '../assets/0010.png';
import img0011 from '../assets/0011.png';
import img0012 from '../assets/0012.png';
import img13 from '../assets/13.png';
import img14 from '../assets/14.png';
import img15 from '../assets/15.png';
import img16 from '../assets/16.png';
import img17 from '../assets/17.png';
import img18 from '../assets/18.png';
import img19 from '../assets/19.png';
import img20 from '../assets/20.png';
import img21 from '../assets/21.png';
import img22 from '../assets/22.png';
import img23 from '../assets/23.png';
import img24 from '../assets/24.png';
import img25 from '../assets/25.png';
import img26 from '../assets/26.png';
import img27 from '../assets/27.png';
import img28 from '../assets/28.png';
import img29 from '../assets/29.png';
import img30 from '../assets/30.png';
import img31 from '../assets/31.png';
import img32 from '../assets/32.png';
import img33 from '../assets/33.png';
import img34 from '../assets/34.png';
import img35 from '../assets/35.png';
import img36 from '../assets/36.png';
import img38 from '../assets/38.png';
import img39 from '../assets/39.png';
import img40 from '../assets/40.png';
import img41 from '../assets/41.png';
import img42 from '../assets/42.png';
import img43 from '../assets/43.png';
import img44 from '../assets/44.png';
import img45 from '../assets/45.png';
import img46 from '../assets/46.png';
import img47 from '../assets/47.png';
import img48 from '../assets/48.png';
import img49 from '../assets/49.png';
import img50 from '../assets/50.png';
import img51 from '../assets/51.png';
import img52 from '../assets/52.png';
import img53 from '../assets/53.png';

// Collections Banner
function CollectionsBanner() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 border border-white/10 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 border border-white/10 rounded-full opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Decorative top element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-white/20"></div>
            <Sparkles className="w-8 h-8 text-white/60" />
            <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-white/40 to-white/20"></div>
          </div>

          <p className="text-xs tracking-[0.3em] text-white/60 uppercase mb-6 font-normal" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Explore Our
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.01em' }}>
            Complete <span className="font-light italic">Collections</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-8" style={{ fontFamily: 'Georgia, "Times New Roman", serif', lineHeight: '1.8' }}>
            Discover our entire range of exquisite jewelry pieces, each crafted with{' '}
            <span className="italic font-medium">exceptional artistry</span> and timeless beauty
          </p>

          {/* Decorative bottom element */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <div className="w-20 h-px bg-gradient-to-r from-white/20 via-white/40 to-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/60"></div>
            <div className="w-20 h-px bg-gradient-to-l from-white/20 via-white/40 to-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Collections Gallery
function CollectionsGallery() {
  // Mix and match all images in a single array
  const collections = [
    { id: 1, image: img001 },
    { id: 2, image: img15 },
    { id: 3, image: img30 },
    { id: 4, image: img002 },
    { id: 5, image: img25 },
    { id: 6, image: img40 },
    { id: 7, image: img003 },
    { id: 8, image: img20 },
    { id: 9, image: img35 },
    { id: 10, image: img004 },
    { id: 11, image: img45 },
    { id: 12, image: img13 },
    { id: 13, image: img005 },
    { id: 14, image: img50 },
    { id: 15, image: img28 },
    { id: 16, image: img006 },
    { id: 17, image: img18 },
    { id: 18, image: img42 },
    { id: 19, image: img007 },
    { id: 20, image: img33 },
    { id: 21, image: img52 },
    { id: 22, image: img008 },
    { id: 23, image: img22 },
    { id: 24, image: img38 },
    { id: 25, image: img009 },
    { id: 26, image: img48 },
    { id: 27, image: img16 },
    { id: 28, image: img0010 },
    { id: 29, image: img26 },
    { id: 30, image: img44 },
    { id: 31, image: img0011 },
    { id: 32, image: img32 },
    { id: 33, image: img53 },
    { id: 34, image: img0012 },
    { id: 35, image: img24 },
    { id: 36, image: img46 },
    { id: 37, image: img14 },
    { id: 38, image: img36 },
    { id: 39, image: img49 },
    { id: 40, image: img17 },
    { id: 41, image: img29 },
    { id: 42, image: img41 },
    { id: 43, image: img19 },
    { id: 44, image: img34 },
    { id: 45, image: img51 },
    { id: 46, image: img21 },
    { id: 48, image: img43 },
    { id: 49, image: img23 },
    { id: 50, image: img31 },
    { id: 51, image: img47 },
    { id: 52, image: img27 },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/20 to-white relative overflow-hidden" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
      {/* Background decorative elements */}
      <div className="absolute top-40 left-20 w-64 h-64 border border-gray-100 rounded-full opacity-20 -z-10"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 border border-gray-100 rounded-full opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Subheading */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-gray-300"></div>
            <div className="flex gap-1.5">
              <div className="w-1 h-1 rounded-full bg-gray-900"></div>
              <div className="w-1 h-1 rounded-full bg-gray-500"></div>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
            </div>
            <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-gray-400 to-gray-300"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-gray-900 mb-4" style={{ letterSpacing: '-0.01em' }}>
            Our<span className="font-light italic">Gallery</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed" style={{ lineHeight: '1.8' }}>
             Handpicked pieces showcasing our finest craftsmanship
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 mx-auto mt-6"></div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white overflow-hidden cursor-pointer"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 p-4 md:p-6 relative">
                <img 
                  src={item.image} 
                  alt={`Collection ${item.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Border effect on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-300 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 md:mt-24">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-200"></div>
          </div>

          <p className="text-gray-600 text-base md:text-lg font-light mb-8 italic">
            Looking for something unique?
          </p>
          
          <a 
            href="/customized"
            className="group inline-block relative px-14 md:px-16 py-4 bg-gray-900 text-white text-xs font-medium tracking-[0.2em] overflow-hidden uppercase transition-all duration-500 hover:px-18"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif',
              boxShadow: '0 6px 25px rgba(0, 0, 0, 0.18), 0 3px 10px rgba(0, 0, 0, 0.12)',
              letterSpacing: '0.18em'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.25), 0 8px 18px rgba(0, 0, 0, 0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.18), 0 3px 10px rgba(0, 0, 0, 0.12)';
            }}
          >
            <span className="relative z-10 inline-flex items-center gap-4">
              Create Custom Design
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

// Main Collections Page Component
const CollectionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <CollectionsBanner />
      <CollectionsGallery />
    </div>
  );
};

export default CollectionsPage;