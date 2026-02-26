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
      <h1>Ramu & Co Jewellers – Trusted Gold Jewellery Shop in Trichy</h1>

<p className="text-center max-w-3xl mx-auto mt-4 text-gray-700">
  Ramu & Co Jewellers is a leading gold jewellery store in Trichy offering bridal jewellery, traditional gold collections, and modern designs crafted with trust and quality. Visit our showroom in Tiruchirappalli for premium jewellery collections.
</p>

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
          <div>
      <h1>Trusted Gold Jewellery Shop in Trichy</h1>

      {/* rest of your content */}
   <div className="max-w-4xl mx-auto px-4 py-12 text-gray-700">
  <h2 className="text-2xl font-bold mb-4">
    Best Gold Jewellery Shop in Trichy
  </h2>
<p>We are serving customers...</p>
    <h2>About Our Jewellery Store</h2> 
     <h2>Our Gold Jewellery Collections</h2>
     <h2>Visit Our Showroom in Trichy</h2>
  <p className="mb-4">
    Ramu & Co Jewellers is one of the most trusted gold jewellery shops in Trichy, offering a wide range of bridal jewellery, traditional gold ornaments, daily wear collections, and custom designs. Our commitment to purity, quality craftsmanship, and customer satisfaction makes us a preferred jewellery store in Tiruchirappalli.
  </p>

  <p className="mb-4">
    Whether you are looking for elegant gold necklaces, traditional bangles, bridal sets, or modern lightweight designs, our showroom in Trichy features premium collections for every occasion. We ensure BIS hallmarked gold and transparent pricing for complete peace of mind.
  </p>

  <p>
    Visit Ramu & Co Jewellers in Trichy to explore exclusive jewellery collections crafted with precision and tradition. Experience trusted service and timeless designs under one roof.
  </p>
</div>
  );
}

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
