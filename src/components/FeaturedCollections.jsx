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
      image: bracelet1
    },
    {
      id: 2,
      title: 'Classic Gold Bangle',
      category: 'BRACELETS',
      image: bangle2,
    },
    {
      id: 3,
      title: 'Hoop Earrings',
      category: 'EARRINGS',
      image: earings2,
    },
    {
      id: 4,
      title: 'Traditional Necklace',
      category: 'TRADITIONAL',
      image: traditional2,
    },
    {
      id: 5,
      title: 'Couple Ring',
      category: 'RINGS',
      image: couplering,
    },
    {
      id: 6,
      title: 'Pearl Chain',
      category: 'CHAINS',
      image: pearl,
    },
    {
      id: 7,
      title: 'Designer Earrings',
      category: 'EARRINGS',
      image: earings3,
    },
    {
      id: 8,
      title: 'Gold Necklace Set',
      category: 'NECKLACES',
      image: necklace3,
    },
  ];

  return (
    <section 
      className="py-16 bg-white" 
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 uppercase">
            Featured Collections
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto mt-4"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-white p-6 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Product Info */}
              <div className="p-5 text-center bg-white border-t border-gray-100">
                <h3 className="text-sm font-normal text-gray-900 tracking-wide uppercase mb-1">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-500 tracking-wider uppercase">
                  {product.category}
                </p>
              </div>

              {/* Elegant hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-300 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-10 py-3.5 bg-white border-2 border-gray-900 text-gray-900 text-sm font-normal tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300 uppercase">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollections;