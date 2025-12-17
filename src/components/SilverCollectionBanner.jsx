import React from 'react';
import silverbanner from '../assets/silverbanner.png'

function CollectionBanner() {
  return (
    <section 
      className="w-full bg-white" 
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      {/* Banner Container */}
      <div className="relative w-full overflow-hidden">
        
        {/* Background Image */}
        <img 
          src={silverbanner}
          alt="Collection Banner" 
          className="w-full h-auto object-contain"
        />
        
      </div>
    </section>
  );
}

export default CollectionBanner;