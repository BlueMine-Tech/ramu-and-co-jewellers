import React from 'react';
import { Check, Sparkles, Gem, Palette, Clock, Star } from 'lucide-react';
import CustomizedBanner from '../components/CustomizedBanner';
import FeaturesSection from '../components/Features';

import customizedhero from '../assets/customizedhero.png'

// Import customized images
import customized1 from '../assets/customized1.png';
import customized2 from '../assets/customized2.png';
import customized3 from '../assets/customized3.png';
import customized4 from '../assets/customized4.png';
import customized5 from '../assets/customized5.png';
import customized6 from '../assets/customized6.png';
import customized7 from '../assets/customized7.png';
import customized8 from '../assets/customized8.png';

// Customized Content Section
function CustomizedContentSection() {
  const features = [
    'Personalized Design Consultation',
    'Choose Your Metal & Stones',
    'Traditional & Contemporary Styles',
    'Expert Craftsmen',
    'CAD Design Preview',
    'Lifetime Craftsmanship Warranty',
    'Flexible Budget Options',
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
  const images = [customized1, customized2, customized3, customized4, customized5, customized6, customized7, customized8];
  
  const galleryImages = images.map((img, i) => ({
    id: i + 1,
    image: img,
    title: `Custom Design ${i + 1}`
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