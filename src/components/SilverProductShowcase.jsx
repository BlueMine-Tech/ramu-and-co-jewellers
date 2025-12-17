import React from 'react';
import silver1 from '../assets/silver1.png'
import silver2 from '../assets/silver2.png'
import silver3 from '../assets/silver3.png'
import silver4 from '../assets/silver4.png'
import silver5 from '../assets/silver5.png'
import silver6 from '../assets/silver6.png'
import silver7 from '../assets/silver7.png'
import silver8 from '../assets/silver8.png'

function SilverProductsShowcase() {
  const products = [
    {
      id: 1,
      title: 'Silver Chain Necklace',
      category: 'NECKLACES',
      image: silver1,
    },
    {
      id: 2,
      title: 'Sterling Silver Ring',
      category: 'RINGS',
      image: silver2,
    },
    {
      id: 3,
      title: 'Silver Hoop Earrings',
      category: 'EARRINGS',
      image: silver3,
    },
    {
      id: 4,
      title: 'Silver Bracelet',
      category: 'BRACELETS',
      image: silver4,
    },
    {
      id: 5,
      title: 'Silver Pendant Set',
      category: 'JEWELLERY SET',
      image: silver5,
    },
    {
      id: 6,
      title: 'Silver Bangle',
      category: 'BRACELETS',
      image: silver6,
    },
    {
      id: 7,
      title: 'Silver Stud Earrings',
      category: 'EARRINGS',
      image: silver7,
    },
    {
      id: 8,
      title: 'Silver Chain Bracelet',
      category: 'BRACELETS',
      image: silver8,
    },
  ];

  return (
    <section 
      className="py-16 bg-gray-50" 
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 uppercase">
            Our Silver Collection
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto mt-4"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden bg-white p-4 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Elegant hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-300 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-10 py-3.5 bg-white border-2 border-gray-900 text-gray-900 text-sm font-normal tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300 uppercase">
            View More Products
          </button>
        </div>

      </div>
    </section>
  );
}

export default SilverProductsShowcase;