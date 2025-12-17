import React from 'react';
import { Target, Eye, Award } from 'lucide-react';
import AboutUsBanner from '../components/AboutBanner';
import store from '../assets/store.jpg'
import director from '../assets/director.jpg'
import FeaturesSection from '../components/Features';
// Hero Section with Image
function AboutHeroSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-3 sm:mb-4">
                About Ramu & Co Jewellers
              </h1>
              <div className="w-20 h-0.5 bg-gray-300"></div>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Trusted Goldsmith in Trichy and Reputed Trademarked Jewellery Showroom for more than 50 years. Showroom offers a vast range of Exclusive & Traditional Gold & silverwares, ranging from RINGS, CHAIN, HARAM, NECKLACE in GOLD & SILVER CUTLERY to FOOD PLATE & TEMPLE SILVER KAVASAM are Available. We Have Exclusive Gold & silver items which are Designed Customize to meet one individual dreams. Our products reflect unbelievable Clarity and extraordinary quality with good Finishing where quality meets value.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={store}
                alt="Ramu & Co Jewellers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Mission Section
function MissionSection() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Icon and Title */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md mb-3">
            <Target className="w-6 h-6 text-gray-700" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-3">
            Mission
          </h2>
          <div className="w-12 h-0.5 bg-gray-300 mx-auto"></div>
        </div>

        {/* Mission Content */}
        <div className="text-center">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            To give every customer much more than what he/she asks for in terms of quality, selection, value for money and customer service, by understanding local tastes and preferences and innovating constantly to eventually provide an unmatched experience in Indian jewellery shopping.
          </p>
        </div>
      </div>
    </section>
  );
}

// Vision Section
function VisionSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vision Icon and Title */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full shadow-md mb-3">
            <Eye className="w-6 h-6 text-gray-700" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-3">
            Vision
          </h2>
          <div className="w-12 h-0.5 bg-gray-300 mx-auto"></div>
        </div>

        {/* Vision Content */}
        <div className="text-center">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            To understand and delight the world, translating everyone's dream and personality into fine Indian jewellery, and delivering with care.
          </p>
        </div>
      </div>
    </section>
  );
}

// Managing Director Section
function ManagingDirectorSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-2">
                Manoj Ramesh
              </h2>
              <p className="text-base text-gray-600 font-medium mb-4">Managing Director</p>
              <div className="w-16 h-0.5 bg-gray-300"></div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                Gold has a cultural, emotional, and financial value for people around the world. Consumers purchasing gold are often influenced by a number of socio-cultural factors, local market conditions, and traditional practices.
              </p>
              
              <p>
                The jewelry market is categorized into four segments: <span className="font-medium text-gray-900">Product (Necklace, Ring, Earring, Bracelet)</span>, <span className="font-medium text-gray-900">Material (Platinum, Gold, Diamond)</span>, <span className="font-medium text-gray-900">Distribution (Offline Retail Stores, Online Retail Stores)</span>, and <span className="font-medium text-gray-900">End-user (Men, Women, Children)</span>.
              </p>

              <p className="text-gray-900 font-medium">
                We have customers in UK, Ireland, US, Canada, Singapore & all over India.
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={director}
                  alt="Manoj Ramesh - Managing Director"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Legacy Section
function LegacySection() {
  const milestones = [
    { year: '1965', title: 'Foundation', description: 'Established in Trichy with a vision to serve quality' },
    { year: '1980', title: 'Expansion', description: 'Became the trusted name in traditional jewelry' },
    { year: '2000', title: 'Innovation', description: 'Introduced customized jewelry designs' },
    { year: '2025', title: 'Legacy', description: '50+ years of excellence and trust' }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-4">
            <Award className="w-8 h-8 text-gray-700" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Our Legacy
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-sm">
            Six decades of trust, tradition, and excellence
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-3xl sm:text-4xl font-light text-gray-900 mb-3">
                  {milestone.year}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main About Page Component
export default function AboutPage() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <AboutUsBanner/>
      <AboutHeroSection />
      <MissionSection />
      <VisionSection />
      <ManagingDirectorSection />
      <LegacySection />
      <FeaturesSection/>
    </div>
  );
}