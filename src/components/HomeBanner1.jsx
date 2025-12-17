import React from 'react';
import homebanner1 from '../assets/homebanner1.png';

function HomeBanner1() {
  return (
    <section 
      className="w-full bg-white py-8" 
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Container */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          <img 
            src={homebanner1} 
            alt="Promotional Banner" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeBanner1;