import React from 'react';
import necklace from '../assets/necklace2.png';
import rings from '../assets/rings2.png';
import earings from '../assets/earings.png';
import bangles from '../assets/bangles.png';
import traditional from '../assets/traditional.png';
import chains from '../assets/chains.png';

function JewelleryCategoriesSection() {
  const categories = [
    {
      id: 1,
      title: 'NECKLACES',
      subtitle: 'Elegant Statement Pieces',
      image: necklace,
      link: '#necklaces'
    },
    {
      id: 2,
      title: 'RINGS',
      subtitle: 'Timeless Elegance',
      image: rings,
      link: '#rings'
    },
    {
      id: 3,
      title: 'EARRINGS',
      subtitle: 'Graceful Adornments',
      image: earings,
      link: '#earrings'
    },
    {
      id: 4,
      title: 'BANGLES',
      subtitle: 'Classic Beauty',
      image: bangles,
      link: '#bangles'
    },
    {
      id: 5,
      title: 'CHAINS',
      subtitle: 'Refined Sophistication',
      image: chains,
      link: '#chains'
    },
    {
      id: 6,
      title: 'TRADITIONAL',
      subtitle: 'Heritage Collection',
      image: traditional,
      link: '#traditional'
    }
  ];

  return (
    <section 
      className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/20 to-white relative overflow-hidden" 
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 border border-gray-100 rounded-full opacity-40 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-gray-100 rounded-full opacity-40 -z-10"></div>

      {/* Section Heading */}
      <div className="text-center mb-16 md:mb-20 px-4">
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
          Explore Our
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-gray-900 mb-4" style={{ letterSpacing: '-0.01em' }}>
          Exquisite Collections
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed" style={{ lineHeight: '1.8' }}>
          Discover our carefully curated selection of fine jewelry, where{' '}
          <span className="italic font-medium text-gray-900">timeless elegance</span> meets contemporary design
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 mx-auto mt-6"></div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6 lg:gap-7">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black relative">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    console.log('Image failed to load:', category.title);
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23374151"/><text x="50%" y="50%" font-size="16" fill="%23ffffff" text-anchor="middle" dy=".3em">No Image</text></svg>';
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Category Title */}
              <div className="bg-white py-5 px-4 relative">
                <h3 
                  className="text-center text-xs md:text-sm font-medium tracking-wider text-gray-900 uppercase mb-1.5 transition-colors duration-300 group-hover:text-gray-700" 
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.15em' }}
                >
                  {category.title}
                </h3>
                <p 
                  className="text-center text-xs text-gray-500 font-light italic opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  {category.subtitle}
                </p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-gray-300 via-gray-900 to-gray-300 group-hover:w-3/4 transition-all duration-500"></div>
              </div>

              {/* Border effect on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 transition-all duration-500 pointer-events-none"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-transparent group-hover:border-gray-300 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-transparent group-hover:border-gray-300 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Call-to-Action */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-gray-600 text-base md:text-lg font-light mb-6" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Can't find what you're looking for?
          </p>
          <a 
            href="/customized"
            className="group inline-block relative px-10 md:px-12 py-4 bg-gray-900 text-white text-xs font-medium tracking-[0.2em] overflow-hidden uppercase transition-all duration-500 hover:px-14"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)',
              letterSpacing: '0.15em'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 35px rgba(0, 0, 0, 0.2), 0 6px 15px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            <span className="relative z-10 inline-flex items-center gap-3">
              Create Custom Design
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default JewelleryCategoriesSection;