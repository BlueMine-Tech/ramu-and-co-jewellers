import React from 'react';
import { Check } from 'lucide-react';

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
      className="py-16 bg-white" 
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Silver
              </h2>
              <div className="w-16 h-0.5 bg-gray-300"></div>
            </div>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed">
              At Ramu and Co. Jewellery Shop, our silver collection is a celebration of timeless elegance and understated luxury. Crafted with precision and care, each piece showcases the beauty of sterling silver, offering a versatile range that complements both everyday wear and special occasions. From minimalist designs to more elaborate creations, our silver jewellery embodies sophistication and charm, making it the perfect choice for those who appreciate refined style with a touch of brilliance.
            </p>

            {/* Collection List */}
            <div>
              <h3 className="text-lg font-normal text-gray-900 mb-4 uppercase tracking-wide">
                Our Fashion Jewelry Collection
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {collections.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="your-silver-image.jpg" 
                alt="Silver Jewelry Collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SilverContentSection;