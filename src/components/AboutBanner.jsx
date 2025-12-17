import React from 'react';
import aboutusbanner from '../assets/aboutbanner.jpg';

function AboutUsBanner() {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full overflow-hidden">
        <img 
          src={aboutusbanner}
          alt="About Us Banner" 
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default AboutUsBanner;