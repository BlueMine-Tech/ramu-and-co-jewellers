import React from 'react';
import necklace from '../assets/necklace2.png';
import rings from '../assets/rings2.png'
import earings from '../assets/earings.png'
import bangles from '../assets/bangles.png'
import traditional from '../assets/traditional.png'
import chains from '../assets/chains.png'
function JewelleryCategoriesSection() {
  const categories = [
    {
      id: 1,
      title: 'NECKLACES',
      image: necklace,
      link: '#necklaces'
    },
    {
      id: 2,
      title: 'RINGS',
      image: rings, // Using necklace as placeholder for now
      link: '#rings'
    },
    {
      id: 3,
      title: 'EARRINGS',
      image: earings, // Using necklace as placeholder for now
      link: '#earrings'
    },
    {
      id: 4,
      title: 'BANGLES',
      image: bangles, // Using necklace as placeholder for now
      link: '#bangles'
    },
    {
      id: 5,
      title: 'CHAINS',
      image: chains, // Using necklace as placeholder for now
      link: '#chains'
    },
    {
      id: 6,
      title: 'TRADITIONAL',
      image: traditional, // Using necklace as placeholder for now
      link: '#traditional'
    }
  ];

  return (
    <section 
      className="py-16 bg-white" 
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 uppercase">
          EXQUISITE JEWELLERY COLLECTIONS
        </h2>
        <div className="w-24 h-0.5 bg-gray-300 mx-auto mt-4"></div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-50 hover:shadow-2xl transition-all duration-300 cursor-pointer rounded-lg"
            >
              {/* Image Container with Dark Background */}
              <div className="aspect-square overflow-hidden flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    console.log('Image failed to load:', category.title);
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23374151"/><text x="50%" y="50%" font-size="16" fill="%23ffffff" text-anchor="middle" dy=".3em">No Image</text></svg>';
                  }}
                />
              </div>

              {/* Category Title */}
              <div className="bg-white py-4 px-3">
                <h3 className="text-center text-xs md:text-sm font-medium tracking-wider text-gray-900 uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-gray-300 transition-all duration-300 rounded-lg pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JewelleryCategoriesSection;