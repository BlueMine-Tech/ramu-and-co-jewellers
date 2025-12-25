import React from 'react';
import bracelet1 from '../assets/bracelet1.png';
import bangle2 from '../assets/bangle2.png';
import earings2 from '../assets/earings2.png';
import traditional2 from '../assets/traditional2.png';
import couplering from '../assets/couple ring.png';
import pearl from '../assets/pearl.png';
import earings3 from '../assets/earings3.png';
import necklace3 from '../assets/necklace3.png';

function FeaturedCollections() {
  const products = [
    {
      id: 1,
      title: 'Gold Chain Bracelet',
      category: 'BRACELETS',
      description: 'Delicate & Refined',
      image: bracelet1
    },
    {
      id: 2,
      title: 'Classic Gold Bangle',
      category: 'BRACELETS',
      description: 'Timeless Design',
      image: bangle2,
    },
    {
      id: 3,
      title: 'Hoop Earrings',
      category: 'EARRINGS',
      description: 'Modern Elegance',
      image: earings2,
    },
    {
      id: 4,
      title: 'Traditional Necklace',
      category: 'TRADITIONAL',
      description: 'Heritage Artistry',
      image: traditional2,
    },
    {
      id: 5,
      title: 'Couple Ring',
      category: 'RINGS',
      description: 'Eternal Promise',
      image: couplering,
    },
    {
      id: 6,
      title: 'Pearl Chain',
      category: 'CHAINS',
      description: 'Classic Beauty',
      image: pearl,
    },
    {
      id: 7,
      title: 'Designer Earrings',
      category: 'EARRINGS',
      description: 'Contemporary Style',
      image: earings3,
    },
    {
      id: 8,
      title: 'Gold Necklace Set',
      category: 'NECKLACES',
      description: 'Exquisite Craftsmanship',
      image: necklace3,
    },
  ];

  return (
    <section 
      className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/20 to-white relative overflow-hidden" 
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-32 left-20 w-56 h-56 border border-gray-100 rounded-full opacity-30 -z-10"></div>
      <div className="absolute bottom-32 right-20 w-72 h-72 border border-gray-100 rounded-full opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          {/* Decorative top element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-gray-300"></div>
            <div className="flex gap-1.5">
              <div className="w-1 h-1 rounded-full bg-gray-900"></div>
              <div className="w-1 h-1 rounded-full bg-gray-500"></div>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
            </div>
            <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-gray-400 to-gray-300"></div>
          </div>

          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-4 font-normal" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Handpicked For You
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-gray-900 mb-4" style={{ letterSpacing: '-0.01em' }}>
            Featured Collections
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed" style={{ lineHeight: '1.8' }}>
            Explore our most sought-after pieces, where{' '}
            <span className="italic font-medium text-gray-900">exceptional craftsmanship</span> meets timeless design
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 mx-auto mt-6"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white overflow-hidden transition-all duration-500 cursor-pointer"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 p-8 flex items-center justify-center relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Product Info */}
              <div className="p-6 text-center bg-white border-t border-gray-100 relative">
                <p className="text-xs text-gray-400 tracking-wider uppercase mb-2 font-light" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.2em' }}>
                  {product.category}
                </p>
                <h3 className="text-sm md:text-base font-normal text-gray-900 tracking-wide mb-2 transition-colors duration-300 group-hover:text-gray-700">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-500 font-light italic opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {product.description}
                </p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-gray-300 via-gray-900 to-gray-300 group-hover:w-3/4 transition-all duration-500"></div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-transparent group-hover:border-gray-300 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-transparent group-hover:border-gray-300 transition-all duration-500"></div>

              {/* Border effect on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-16 md:mt-20">
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
          
          <a 
            href="/collections"
            className="group inline-block relative px-12 md:px-14 py-4 bg-white border-2 border-gray-900 text-gray-900 text-xs font-medium tracking-[0.2em] overflow-hidden uppercase transition-all duration-500 hover:border-gray-800"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              letterSpacing: '0.15em'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 35px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            }}
          >
            <span className="relative z-10 inline-flex items-center gap-3">
              View All Collections
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
            <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white z-10">
              <span className="inline-flex items-center gap-3">
                View All Collections
                <span className="inline-block">→</span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollections;