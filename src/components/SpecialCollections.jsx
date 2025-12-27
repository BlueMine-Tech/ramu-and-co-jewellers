import React from 'react';
import { Sparkles } from 'lucide-react';

// Import collection images
import collection01 from '../assets/01.png';
import collection02 from '../assets/02.png';
import collection03 from '../assets/03.png';
import collection04 from '../assets/04.png';
import collection05 from '../assets/05.png';
import collection06 from '../assets/06.png';
import collection07 from '../assets/07.png';
import collection08 from '../assets/08.png';
import collection09 from '../assets/09.png';
import collection10 from '../assets/10.png';
import collection11 from '../assets/11.png';
import collection12 from '../assets/12.png';

function SpecialCollectionSection() {
  const collections = [
    { id: 1, image: collection01 },
    { id: 2, image: collection02 },
    { id: 3, image: collection03 },
    { id: 4, image: collection04 },
    { id: 5, image: collection05 },
    { id: 6, image: collection06 },
    { id: 7, image: collection07 },
    { id: 8, image: collection08 },
    { id: 9, image: collection09 },
    { id: 10, image: collection10 },
    { id: 11, image: collection11 },
    { id: 12, image: collection12 }
  ];

  return (
    <section 
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden" 
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-40 left-10 w-80 h-80 border border-gray-100 rounded-full opacity-20 -z-10"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 border border-gray-100 rounded-full opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          {/* Decorative top element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-gray-400 to-gray-300"></div>
            <Sparkles className="w-6 h-6 text-gray-400" />
            <div className="w-16 md:w-20 h-px bg-gradient-to-l from-transparent via-gray-400 to-gray-300"></div>
          </div>

          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-5 font-normal" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Curated For You
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
            Our<span className="font-light italic">Collections</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed" style={{ lineHeight: '1.9' }}>
            Explore our most sought-after pieces, where{' '}
            <span className="italic font-medium text-gray-900">exceptional craftsmanship</span> meets timeless design
          </p>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-24 h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white overflow-hidden cursor-pointer"
              style={{
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 30px 70px rgba(0, 0, 0, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                <img 
                  src={item.image} 
                  alt={`Collection ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Outer Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-300 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 md:mt-24">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-200"></div>
          </div>

          <p className="text-gray-600 text-base md:text-lg font-light mb-8 italic" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
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

export default SpecialCollectionSection;