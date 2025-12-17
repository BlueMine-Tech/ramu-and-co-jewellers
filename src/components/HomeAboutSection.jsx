import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import feedbackimg from '../assets/feedbackimg.png'

function AboutIntroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const imageRef = useRef(null);

  // Cloudinary video URL
  const feedbackvideo = 'https://res.cloudinary.com/dwjtrhmio/video/upload/v1765205685/feedback_ytb4ls.mp4';

  useEffect(() => {
    console.log('Thumbnail image source:', feedbackimg);
    if (imageRef.current) {
      console.log('Image element:', imageRef.current);
      console.log('Image complete:', imageRef.current.complete);
      console.log('Image naturalWidth:', imageRef.current.naturalWidth);
    }
  }, []);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleImageError = () => {
    console.error('Failed to load thumbnail image');
  };

  const handleImageLoad = () => {
    console.log('Thumbnail image loaded successfully');
  };

  return (
    <section 
      className="py-20 bg-white" 
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm tracking-widest text-gray-500 uppercase mb-2">Welcome to</p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-2">
                Ramu & Co <span className="font-normal">Jewellers</span>
              </h2>
              <div className="w-20 h-0.5 bg-gray-300 mt-4"></div>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-base">
                Trusted Goldsmith in Trichy and Reputed Trademarked Jewellery Showroom for more than 50 years. Showroom offers a vast range of Exclusive & Traditional Gold & silverwares, ranging from <span className="italic font-medium text-gray-900">RINGS, CHAIN, HARAM, NECKLACE in GOLD & SILVER CUTLERY to FOOD PLATE & TEMPLE SILVER KAVASAM</span> are Available.
              </p>
              
              <p className="text-base">
                We Have Exclusive Gold & silver items which are Designed Customize to meet one individual dreams. Our products reflect unbelievable Clarity and extraordinary quality with good Finishing where quality meets value.
              </p>
            </div>

            <div className="pt-4">
              <button className="px-8 py-3 bg-gray-900 text-white text-sm font-normal tracking-wider hover:bg-gray-800 transition-colors duration-300 uppercase">
                About Us
              </button>
            </div>
          </div>

          {/* Right Content - Video/Image */}
          <div className="relative w-full">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
              
              {/* Thumbnail Image */}
              <img 
                ref={imageRef}
                src={feedbackimg} 
                alt="Video Thumbnail"
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{ 
                  display: isPlaying ? 'none' : 'block',
                  zIndex: 1
                }}
                onError={handleImageError}
                onLoad={handleImageLoad}
              />

              {/* Video Element */}
              <video 
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{ 
                  display: isPlaying ? 'block' : 'none',
                  zIndex: 1
                }}
                onClick={handlePauseVideo}
                onEnded={() => setIsPlaying(false)}
                preload="metadata"
              >
                <source src={feedbackvideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 2
                  }}
                  onClick={handlePlayVideo}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'}
                >
                  <div className="w-20 h-20 bg-white bg-opacity-95 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 hover:scale-110 shadow-xl">
                    <Play className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" />
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutIntroSection;