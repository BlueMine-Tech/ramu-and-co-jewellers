import React from 'react';
import silver1 from '../assets/silver1.png';
import silver2 from '../assets/silver2.png';
import silver3 from '../assets/silver3.png';
import silver4 from '../assets/silver4.png';
import silver5 from '../assets/silver5.png';
import silver6 from '../assets/silver6.png';
import silver7 from '../assets/silver7.png';
import silver8 from '../assets/silver8.png';
import silver9 from '../assets/silver9.png';
import silver10 from '../assets/silver10.png';
import silver11 from '../assets/silver11.png';
import silver12 from '../assets/silver12.png';
import silver13 from '../assets/silver13.png';
import silver14 from '../assets/silver14.png';
import silver15 from '../assets/silver15.png';
import silver16 from '../assets/silver16.png';
import silver17 from '../assets/silver17.png';
import silver18 from '../assets/silver18.png';
import silver19 from '../assets/silver19.png';
import silver20 from '../assets/silver20.png';
import silver21 from '../assets/silver21.png';
import silver22 from '../assets/silver22.png';
import silver23 from '../assets/silver23.png';
import silver24 from '../assets/silver24.png';
import silver25 from '../assets/silver25.png';
import silver26 from '../assets/silver26.png';
import silver27 from '../assets/silver27.png';
import silver28 from '../assets/silver28.png';

function SilverProductsShowcase() {
  const products = [
    { id: 1, title: 'Silver Chain Necklace', category: 'NECKLACES', image: silver1 },
    { id: 2, title: 'Sterling Silver Ring', category: 'RINGS', image: silver2 },
    { id: 3, title: 'Silver Hoop Earrings', category: 'EARRINGS', image: silver3 },
    { id: 4, title: 'Silver Bracelet', category: 'BRACELETS', image: silver4 },
    { id: 5, title: 'Silver Pendant Set', category: 'JEWELLERY SET', image: silver5 },
    { id: 6, title: 'Silver Bangle', category: 'BRACELETS', image: silver6 },
    { id: 7, title: 'Silver Stud Earrings', category: 'EARRINGS', image: silver7 },
    { id: 8, title: 'Silver Chain Bracelet', category: 'BRACELETS', image: silver8 },
    { id: 9, title: 'Silver Designer Ring', category: 'RINGS', image: silver9 },
    { id: 10, title: 'Silver Necklace Set', category: 'NECKLACES', image: silver10 },
    { id: 11, title: 'Silver Drop Earrings', category: 'EARRINGS', image: silver11 },
    { id: 12, title: 'Silver Ornament Set', category: 'JEWELLERY SET', image: silver12 },
    { id: 13, title: 'Silver Elegant Piece', category: 'RINGS', image: silver13 },
    { id: 14, title: 'Silver Statement Necklace', category: 'NECKLACES', image: silver14 },
    { id: 15, title: 'Silver Charm Bracelet', category: 'BRACELETS', image: silver15 },
    { id: 16, title: 'Silver Dangle Earrings', category: 'EARRINGS', image: silver16 },
    { id: 17, title: 'Silver Wedding Band', category: 'RINGS', image: silver17 },
    { id: 18, title: 'Silver Choker Necklace', category: 'NECKLACES', image: silver18 },
    { id: 19, title: 'Silver Cuff Bracelet', category: 'BRACELETS', image: silver19 },
    { id: 20, title: 'Silver Pearl Earrings', category: 'EARRINGS', image: silver20 },
    { id: 21, title: 'Silver Cocktail Ring', category: 'RINGS', image: silver21 },
    { id: 22, title: 'Silver Layered Necklace', category: 'NECKLACES', image: silver22 },
    { id: 23, title: 'Silver Anklet', category: 'BRACELETS', image: silver23 },
    { id: 24, title: 'Silver Crystal Earrings', category: 'EARRINGS', image: silver24 },
    { id: 25, title: 'Silver Bridal Set', category: 'JEWELLERY SET', image: silver25 },
    { id: 26, title: 'Silver Collection Piece', category: 'JEWELLERY SET', image: silver26 },
    { id: 26, title: 'Silver Collection Piece', category: 'JEWELLERY SET', image: silver27 },
    { id: 26, title: 'Silver Collection Piece', category: 'JEWELLERY SET', image: silver28 },
  ];

  return (
    <section 
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden" 
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-32 left-20 w-56 h-56 border border-gray-100 rounded-full opacity-30 -z-10"></div>
      <div className="absolute bottom-32 right-20 w-72 h-72 border border-gray-100 rounded-full opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
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

          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-4 font-normal" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Discover Our
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-gray-900 mb-4" style={{ letterSpacing: '-0.01em' }}>
            Silver Collection
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed" style={{ lineHeight: '1.8' }}>
            Explore our exquisite range of silver jewelry, where{' '}
            <span className="italic font-medium text-gray-900">timeless elegance</span> meets contemporary design
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 mx-auto mt-6"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white overflow-hidden cursor-pointer"
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
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 p-6 md:p-8 flex items-center justify-center relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-transparent group-hover:border-gray-300 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-transparent group-hover:border-gray-300 transition-all duration-500"></div>

              {/* Border effect on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Enhanced View More Button */}
        <div className="text-center mt-16 md:mt-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-200"></div>
          </div>
          
          
        </div>

      </div>
    </section>
  );
}

export default SilverProductsShowcase;