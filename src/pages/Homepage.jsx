import React from 'react'
import Herosection from '../components/Herosection.jsx'
import JewelleryCategoriesSection from '../components/Jewelcategory.jsx';
import HomeBanner1 from '../components/HomeBanner1.jsx';
import FeaturedCollections from '../components/FeaturedCollections.jsx';
import AboutIntroSection from '../components/HomeAboutSection.jsx';
const Homepage = () => {
  return (
     <div className="min-h-screen bg-white">
      <Herosection />
      <AboutIntroSection/>
      {/* Additional content sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-normal text-gray-900 mb-4">Welcome to Ramu & Co Jewellers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Since 1965, crafting exquisite jewelry that celebrates your precious moments.
          </p>
        </div>
      </div>
      <JewelleryCategoriesSection/>
      <HomeBanner1/>
      <FeaturedCollections/>
    </div>
  );
};

export default Homepage;
