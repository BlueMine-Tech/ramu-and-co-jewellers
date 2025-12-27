import React from 'react';
import { Check } from 'lucide-react';
import silver from '../assets/silver-1.jpg';

function SilverContentSection() {
  const collections = [
    'Silver Coins',
    'Luxury Jewelry',
    'Silver Imported Ornaments Diamond Jewelry',
    'Ornaments',
    'Fashion Jewelry',
    'Earrings',
    'Jewellery Set',
    'Necklace and Chains',
    'Bracelet',
    'Ring'
  ];

  return (
    <section 
      className="py-12 sm:py-16 bg-white" 
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Heading */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mb-4" style={{ letterSpacing: '-0.01em' }}>
                Silver
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-gray-400 via-gray-300 to-transparent"></div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light" style={{ lineHeight: '1.8' }}>
              At Ramu and Co. Jewellery Shop, our silver collection is a celebration of{' '}
              <span className="italic font-medium text-gray-900">timeless elegance</span> and understated luxury. Crafted with precision and care, each piece showcases the beauty of sterling silver, offering a versatile range that complements both everyday wear and special occasions. From minimalist designs to more elaborate creations, our silver jewellery embodies sophistication and charm, making it the perfect choice for those who appreciate refined style with a touch of brilliance.
            </p>

            {/* Collection List */}
            <div>
              <h3 className="text-base sm:text-lg font-normal text-gray-900 mb-4 uppercase tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Our Fashion Jewelry Collection
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {collections.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700 font-light" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Full Image */}
          <div className="relative order-1 lg:order-2">
            <div className="w-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={silver}
                alt="Silver Jewelry Collection"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SilverContentSection;