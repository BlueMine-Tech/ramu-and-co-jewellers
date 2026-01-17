import React from 'react';
import { Check, Sparkles, Gem, Palette, Clock, Star } from 'lucide-react';
import CustomizedBanner from '../components/CustomizedBanner';
import FeaturesSection from '../components/Features';

import customizedhero from '../assets/customizedhero.png'

// Import all customized images (03 to 61)
import img03 from '../assets/customized/03.jpg';
import img04 from '../assets/customized/04.jpg';
import img05 from '../assets/customized/05.jpg';
import img06 from '../assets/customized/06.jpg';
import img07 from '../assets/customized/07.jpg';
import img08 from '../assets/customized/08.jpg';
import img09 from '../assets/customized/09.jpg';
import img10 from '../assets/customized/10.jpg';
import img11 from '../assets/customized/11.jpg';
import img12 from '../assets/customized/12.jpg';
import img13 from '../assets/customized/13.jpg';
import img14 from '../assets/customized/14.jpg';
import img15 from '../assets/customized/15.jpg';
import img16 from '../assets/customized/16.jpg';
import img17 from '../assets/customized/17.jpg';
import img18 from '../assets/customized/18.jpg';
import img19 from '../assets/customized/19.jpg';
import img20 from '../assets/customized/20.jpg';
import img21 from '../assets/customized/21.jpg';
import img22 from '../assets/customized/22.jpg';
import img23 from '../assets/customized/23.jpg';
import img24 from '../assets/customized/24.jpg';
import img25 from '../assets/customized/25.jpg';
import img26 from '../assets/customized/26.jpg';
import img27 from '../assets/customized/27.jpg';
import img28 from '../assets/customized/28.jpg';
import img29 from '../assets/customized/29.jpg';
import img30 from '../assets/customized/30.jpg';
import img31 from '../assets/customized/31.jpg';
import img32 from '../assets/customized/32.jpg';
import img33 from '../assets/customized/33.jpg';
import img34 from '../assets/customized/34.jpg';
import img35 from '../assets/customized/35.jpg';
import img36 from '../assets/customized/36.jpg';
import img37 from '../assets/customized/37.jpg';
import img38 from '../assets/customized/38.jpg';
import img39 from '../assets/customized/39.jpg';
import img40 from '../assets/customized/40.jpg';
import img41 from '../assets/customized/41.jpg';
import img42 from '../assets/customized/42.jpg';
import img43 from '../assets/customized/43.jpg';
import img44 from '../assets/customized/44.jpg';
import img45 from '../assets/customized/45.jpg';
import img46 from '../assets/customized/46.jpg';
import img47 from '../assets/customized/47.jpg';
import img48 from '../assets/customized/48.jpg';
import img49 from '../assets/customized/49.jpg';
import img50 from '../assets/customized/50.jpg';
import img51 from '../assets/customized/51.jpg';
import img52 from '../assets/customized/52.jpg';
import img53 from '../assets/customized/53.jpg';
import img54 from '../assets/customized/54.jpg';
import img55 from '../assets/customized/55.jpg';
import img56 from '../assets/customized/56.jpg';
import img57 from '../assets/customized/57.jpg';
import img58 from '../assets/customized/58.jpg';
import img59 from '../assets/customized/59.jpg';
import img60 from '../assets/customized/60.jpg';
import img61 from '../assets/customized/61.jpg';

// Customized Content Section
function CustomizedContentSection() {
  const features = [
    'Personalized Design Consultation',
    'Choose Your Metal & Stones',
    'Traditional & Contemporary Styles',
    'Expert Craftsmen',
    'CAD Design Preview',
    'Complimentary Modifications'
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4">
                Customized Jewellery
              </h2>
              <div className="w-16 h-0.5 bg-gray-300"></div>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              At Ramu & Co Jewellers, we bring your dream jewellery to life. Our customized jewellery service allows you to create unique pieces that reflect your personal style and story. From engagement rings to special occasion pieces, our expert craftsmen work closely with you to design and create jewellery that's exclusively yours.
            </p>

            <div>
              <h3 className="text-base sm:text-lg font-normal text-gray-900 mb-3 sm:mb-4 uppercase tracking-wide">
                Our Customization Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {features.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={customizedhero}
                alt="Customized Jewellery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      icon: Palette,
      title: 'Consultation',
      description: 'Share your vision and ideas with our expert designers'
    },
    {
      id: 2,
      icon: Gem,
      title: 'Design Creation',
      description: 'We create detailed sketches and 3D CAD models'
    },
    {
      id: 3,
      icon: Sparkles,
      title: 'Approval',
      description: 'Review and approve the design before crafting'
    },
    {
      id: 4,
      icon: Clock,
      title: 'Crafting',
      description: 'Expert artisans bring your design to life'
    },
    {
      id: 5,
      icon: Star,
      title: 'Delivery',
      description: 'Receive your unique, handcrafted masterpiece'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-gray-900 uppercase mb-3">
            How It Works
          </h2>
          <div className="w-20 sm:w-24 h-0.5 bg-gray-300 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-sm tracking-wide">
            Your journey to unique jewellery in 5 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative">
                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col items-center">
                  
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500 shadow-sm">
                      <Icon className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-base font-medium text-gray-900 mb-2 tracking-wide">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-gray-500 tracking-wide leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2" style={{ width: 'calc(100% - 4rem)' }}></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function CustomizedGallerySection() {
  // Create array with all imported images - adding one more duplicate to complete the row
  const images = [
    img03, img04, img05, img06, img07, img08, img09, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
    img41, img42, img43, img44, img45, img46, img47, img48, img49, img50,
    img51, img52, img53, img54, img55, img56, img57, img58, img59, img60, img61,
    img03 // Adding one more image to complete the row
  ];
  
  const galleryImages = images.map((img, i) => ({
    id: i + 3,
    image: img,
    title: `Custom Design ${i + 3}`
  }));

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-gray-900 uppercase">
            Our Custom Creations
          </h2>
          <div className="w-20 sm:w-24 h-0.5 bg-gray-300 mx-auto mt-3 sm:mt-4"></div>
          <p className="text-gray-600 mt-4 text-sm tracking-wide">
            Inspiration from our bespoke collection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-300 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <button className="px-8 sm:px-10 py-3 sm:py-3.5 bg-gray-900 text-white text-xs sm:text-sm font-normal tracking-widest hover:bg-gray-800 transition-all duration-300 uppercase">
            Start Your Design
          </button>
        </div>

      </div>
    </section>
  );
}

// Main Customized Page Component
const CustomizePage = () => {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <CustomizedBanner/>
      <CustomizedContentSection />
      <HowItWorksSection />
      <CustomizedGallerySection />
      <FeaturesSection />
    </div>
  );
};

export default CustomizePage;