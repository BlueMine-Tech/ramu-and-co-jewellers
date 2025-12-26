import React, { useState } from 'react';
import { Award, Star, Trophy, Medal } from 'lucide-react';

// Import award images
import awards1 from '../assets/awards1.png';
import awards2 from '../assets/awards2.png';
import awards3 from '../assets/awards3.png';
import awards4 from '../assets/awards4.png';
import awards5 from '../assets/awards5.png';
import awards6 from '../assets/awards6.png';

// Awards Banner Component
function AwardsBanner() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 border border-white/10 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 border border-white/10 rounded-full opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Decorative top element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-white/20"></div>
            <Trophy className="w-8 h-8 text-white/60" />
            <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-white/40 to-white/20"></div>
          </div>

          <p className="text-xs tracking-[0.3em] text-white/60 uppercase mb-6 font-normal" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Celebrating Excellence
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.01em' }}>
            Awards & <span className="font-light italic">Achievements</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-8" style={{ fontFamily: 'Georgia, "Times New Roman", serif', lineHeight: '1.8' }}>
            Five decades of excellence, trust, and recognition in the jewelry industry
          </p>

          {/* Decorative bottom element */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <div className="w-20 h-px bg-gradient-to-r from-white/20 via-white/40 to-white/20"></div>
            <Star className="w-5 h-5 text-white/60" fill="currentColor" />
            <div className="w-20 h-px bg-gradient-to-l from-white/20 via-white/40 to-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Recognition Stats Component
function RecognitionStats() {
  const stats = [
    { icon: Trophy, value: '50+', label: 'Years of Excellence' },
    { icon: Award, value: '25+', label: 'Awards Received' },
    { icon: Star, value: '1000+', label: 'Happy Customers' },
    { icon: Medal, value: '#1', label: 'Trusted in Trichy' }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-200 mb-4 group-hover:border-gray-900 transition-all duration-500 group-hover:scale-110">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
                </div>
                <h3 className="text-3xl md:text-4xl font-normal text-gray-900 mb-2" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-600 font-light" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Awards Gallery Component
function AwardsGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const awards = [
    { id: 1, image: awards1, title: 'BNI Fortune - Trichy Awards Night 2024', description: 'Highest Visitors & Traffic Light Award' },
    { id: 2, image: awards2, title: 'BNI Fortune - Trichy Awards Night 2023', description: 'Multiple Excellence Awards' },
    { id: 3, image: awards3, title: 'Customer Testimonials', description: 'Recognition for Outstanding Service' },
    { id: 4, image: awards4, title: 'Industry Recognition', description: 'Excellence in Jewelry Craftsmanship' },
    { id: 5, image: awards5, title: 'Business Excellence Award', description: 'Best Gold & Silver Jewellers in Trichy' },
    { id: 6, image: awards6, title: 'Customer Appreciation', description: 'Quality & Service Excellence' }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
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
            Our Journey of Excellence
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-gray-900 mb-4" style={{ letterSpacing: '-0.01em' }}>
            Recognition Gallery
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed" style={{ lineHeight: '1.8' }}>
            A showcase of our achievements and the trust our customers place in us
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 mx-auto mt-6"></div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {awards.map((award) => (
            <div
              key={award.id}
              className="group relative bg-white overflow-hidden cursor-pointer"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
              onClick={() => setSelectedImage(award)}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 relative">
                <img 
                  src={award.image} 
                  alt={award.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* View text on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-sm font-medium tracking-wider uppercase bg-gray-900/80 px-6 py-2 backdrop-blur-sm" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    View Details
                  </span>
                </div>
              </div>

              {/* Award Info */}
              <div className="p-6 bg-white border-t border-gray-100 relative">
                <h3 className="text-base font-normal text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {award.description}
                </p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-gray-300 via-gray-900 to-gray-300 group-hover:w-3/4 transition-all duration-500"></div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-transparent group-hover:border-gray-300 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-transparent group-hover:border-gray-300 transition-all duration-500"></div>

              {/* Border effect on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button 
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="text-center mt-6">
              <h3 className="text-2xl text-white font-normal mb-2" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                {selectedImage.title}
              </h3>
              <p className="text-white/80 font-light" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Legacy Section Component
function LegacySection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.01em' }}>
            A Legacy of <span className="font-light italic">Trust & Excellence</span>
          </h2>
          
          <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed font-light" style={{ fontFamily: 'Georgia, "Times New Roman", serif', lineHeight: '1.9' }}>
            <p>
              Since <span className="font-semibold text-gray-900">1965</span>, Ramu & Co Jewellers has been at the forefront of excellence in the jewelry industry. Our commitment to quality, craftsmanship, and customer satisfaction has earned us numerous accolades and the unwavering trust of generations of customers.
            </p>
            
            <p>
              These awards are not just recognitions—they are a testament to our dedication to preserving traditional artistry while embracing contemporary design. Each honor reflects the trust our customers place in us and motivates us to continue our journey of excellence.
            </p>
            
            <p>
              From being recognized by <span className="italic font-medium text-gray-900">BNI Fortune</span> for highest customer engagement to receiving testimonials that speak of our commitment to quality and service, every achievement drives us to set higher standards in the jewelry industry.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <a 
              href="/contact"
              className="group inline-block relative px-12 md:px-14 py-4 bg-gray-900 text-white text-xs font-medium tracking-[0.2em] overflow-hidden uppercase transition-all duration-500 hover:px-16"
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)',
                letterSpacing: '0.15em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 35px rgba(0, 0, 0, 0.2), 0 6px 15px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)';
              }}
            >
              <span className="relative z-10 inline-flex items-center gap-3">
                Visit Our Showroom
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Awards Page Component
const AwardsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AwardsBanner />
      <RecognitionStats />
      <AwardsGallery />
      <LegacySection />
    </div>
  );
};

export default AwardsPage;