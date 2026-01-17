import React, { useState } from 'react';
import { Play } from 'lucide-react';

// Import your thumbnail image
import thumbnailUrl from '../assets/store.jpg';

function GoogleDriveVideoSection() {
  const videoId = "1hIF4pECP0iaRO_MiThmagMyi7mvqdjdO";
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-gray-900 uppercase">
            Watch Our Collection
          </h2>
          <div className="w-20 sm:w-24 h-0.5 bg-gray-300 mx-auto mt-3 sm:mt-4"></div>
        </div>

        {/* Video Container */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            
            {!isPlaying ? (
              // Thumbnail with Play Button
              <div 
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src={thumbnailUrl}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all rounded-lg">
                  <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                    <Play className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            ) : (
              // Video iframe
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src={`https://drive.google.com/file/d/${videoId}/preview?autoplay=1`}
                title="Ramu & Co Jewellers"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
            
          </div>
        </div>

      </div>
    </section>
  );
}

export default GoogleDriveVideoSection;