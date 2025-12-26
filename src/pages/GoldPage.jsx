import React from 'react';
import { Check } from 'lucide-react';
import FeaturesSection from '../components/Features';
import goldpagebanner from '../assets/goldpagebanner.png';
import goldpage1 from '../assets/goldpage1.png';
import goldpage2 from '../assets/goldpage2.png';
import goldpage3 from '../assets/goldpage3.png';
import goldpage4 from '../assets/goldpage4.png';
import goldpage5 from '../assets/goldpage5.png';
import goldpage6 from '../assets/goldpage6.png';
import goldpage7 from '../assets/goldpage7.png';
import goldpage8 from '../assets/goldpage8.png';
import goldpage9 from '../assets/goldpage9.png';
import goldpage10 from '../assets/goldpage10.png';
import goldpage11 from '../assets/goldpage11.png';
import goldpage12 from '../assets/goldpage12.png';
import goldpage13 from '../assets/goldpage13.png';
import goldpage14 from '../assets/goldpage14.png';
import goldpage15 from '../assets/goldpage15.png';
import goldpage16 from '../assets/goldpage16.png';
import goldpage17 from '../assets/goldpage17.png';
import goldpage18 from '../assets/goldpage18.png';
import goldpage19 from '../assets/golpage19.png';
import goldpage20 from '../assets/goldpage20.png';
import goldpage21 from '../assets/goldpage21.jpg';
import goldpage22 from '../assets/goldpage22.jpg';
import goldpage23 from '../assets/goldpage23.jpg';
import goldpage24 from '../assets/goldpage24.jpg';
import goldpage25 from '../assets/goldpage25.jpg';
import goldpage26 from '../assets/goldpage26.png';
import goldpage27 from '../assets/goldpage27.png';
import goldpage28 from '../assets/goldpage28.png';

function GoldBanner() {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full overflow-hidden">
        <img 
          src={goldpagebanner}
          alt="Gold Collection Banner" 
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}

// Gold Content Section with Image
function GoldContentSection() {
  const collections = [
    'Gold Necklaces',
    'Designer Gold Chains',
    'Gold Bridal Sets',
    'Temple Jewelry',
    'Antique Gold Collection',
    'Gold Bangles & Bracelets',
    'Gold Earrings',
    'Gold Rings',
    'Gold Pendants',
    'Gold Mangalsutra'
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4">
                Gold
              </h2>
              <div className="w-16 h-0.5 bg-gray-300"></div>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              At Ramu & Co Jewellers, our gold collection represents the pinnacle of luxury and craftsmanship. Each piece is meticulously crafted from 22K and 18K pure gold, combining traditional artistry with contemporary designs. From intricate bridal sets to elegant everyday wear, our gold jewellery embodies timeless beauty and unmatched quality, making every moment precious.
            </p>

            <div>
              <h3 className="text-base sm:text-lg font-normal text-gray-900 mb-3 sm:mb-4 uppercase tracking-wide">
                Our Gold Jewelry Collection
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {collections.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={goldpage1}
                alt="Gold Jewelry Collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Gold Products Showcase
function GoldProductsShowcase() {
  const products = [
    { id: 1, image: goldpage2 },
    { id: 2, image: goldpage3 },
    { id: 3, image: goldpage4 },
    { id: 4, image: goldpage1 },
    { id: 5, image: goldpage6 },
    { id: 6, image: goldpage7 },
    { id: 7, image: goldpage8 },
    { id: 8, image: goldpage5 },
    { id: 9, image: goldpage10 },
    { id: 10, image: goldpage11 },
    { id: 11, image: goldpage12 },
    { id: 12, image: goldpage9 },
    { id: 13, image: goldpage13 },
    { id: 14, image: goldpage14 },
    { id: 15, image: goldpage15 },
    { id: 16, image: goldpage16 },
    { id: 17, image: goldpage17 },
    { id: 18, image: goldpage18 },
    { id: 19, image: goldpage19 },
    { id: 20, image: goldpage20 },
    { id: 21, image: goldpage21 },
    { id: 22, image: goldpage22 },
    { id: 23, image: goldpage23 },
    { id: 24, image: goldpage24 },
    { id: 25, image: goldpage25 },
    { id: 26, image: goldpage26 },
    { id: 27, image: goldpage27 },
    { id: 28, image: goldpage28 },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-gray-900 uppercase">
            Our Gold Collection
          </h2>
          <div className="w-20 sm:w-24 h-0.5 bg-gray-300 mx-auto mt-3 sm:mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img 
                  src={product.image} 
                  alt={`Gold Product ${product.id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-300 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Main Gold Page Component
export default function GoldPage() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <GoldBanner />
      <GoldContentSection />
      <GoldProductsShowcase />
      <FeaturesSection />
    </div>
  );
}