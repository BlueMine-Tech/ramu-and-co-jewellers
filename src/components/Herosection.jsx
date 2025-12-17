import React from 'react'
import heroimg from '../assets/herosection.png'

const Herosection = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full">
        {/* Hero Image Container */}
        <div className="relative w-full overflow-hidden">
          <img 
            src={heroimg} 
            alt="Ramu & Co Jewellers" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection