import React from 'react';

function YouTubeVideoSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title (Optional) */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-gray-900 uppercase">
            Watch Our Collection
          </h2>
          <div className="w-20 sm:w-24 h-0.5 bg-gray-300 mx-auto mt-3 sm:mt-4"></div>
        </div>

        {/* Video Container */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/VfFW2hsyjoY"
              title="Ramu & Co Jewellers"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}

export default YouTubeVideoSection;