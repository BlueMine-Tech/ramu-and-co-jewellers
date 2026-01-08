import React from 'react';
import Herosection from '../components/Herosection.jsx';
import JewelleryCategoriesSection from '../components/Jewelcategory.jsx';
import HomeBanner1 from '../components/HomeBanner1.jsx';
import FeaturedCollections from '../components/FeaturedCollections.jsx';
import AboutIntroSection from '../components/HomeAboutSection.jsx';
import YouTubeVideoSection from '../components/YoutubeVideoSection.jsx';
import GoogleReviewsSection from '../components/Googlereviewsection.jsx';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Herosection />
      <AboutIntroSection />
      
      {/* Enhanced Welcome Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <div className="text-center relative">
          {/* Decorative top element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-gray-300"></div>
            <div className="flex gap-1.5">
              <div className="w-1 h-1 rounded-full bg-gray-900"></div>
              <div className="w-1 h-1 rounded-full bg-gray-500"></div>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
            </div>
            <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-gray-400 to-gray-300"></div>
          </div>

          {/* Main Heading */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 leading-tight"
            style={{ 
              fontFamily: 'Georgia, "Times New Roman", serif',
              letterSpacing: '-0.01em'
            }}
          >
            Welcome to{' '}
            <span className="block mt-2 font-light italic text-gray-800">
              Ramu & Co Jewellers
            </span>
          </h2>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto space-y-5">
            <p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed font-light"
              style={{ 
                fontFamily: 'Georgia, "Times New Roman", serif',
                lineHeight: '1.8'
              }}
            >
              Since <span className="font-semibold text-gray-900">1965</span>, we have been crafting exquisite jewelry that celebrates your most{' '}
              <span className="italic font-medium text-gray-900">precious moments</span>.
            </p>
            
            <p 
              className="text-base md:text-lg text-gray-500 leading-relaxed font-light max-w-2xl mx-auto"
              style={{ 
                fontFamily: 'Georgia, "Times New Roman", serif',
                lineHeight: '1.8'
              }}
            >
              Each piece is a testament to timeless elegance, masterful craftsmanship, and the enduring beauty of tradition meeting contemporary design.
            </p>
          </div>

          {/* Decorative bottom element */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="w-8 h-8 border border-gray-200 rotate-45"></div>
            <div className="w-20 h-px bg-gradient-to-r from-gray-300 to-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-20 h-px bg-gradient-to-l from-gray-300 to-gray-200"></div>
            <div className="w-8 h-8 border border-gray-200 rotate-45"></div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-gray-100 rounded-full opacity-30 -z-10"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border border-gray-100 rounded-full opacity-30 -z-10"></div>
      </div>
     <YouTubeVideoSection/>
     <GoogleReviewsSection/>
      <JewelleryCategoriesSection />
      <HomeBanner1 />
      <FeaturedCollections />
    </div>
  );
};

export default Homepage;