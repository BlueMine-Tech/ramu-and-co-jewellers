import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import feedbackimg from '../assets/feedbackimg.png'

function AboutIntroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const feedbackvideo = 'https://res.cloudinary.com/dwjtrhmio/video/upload/v1765205685/feedback_ytb4ls.mp4';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
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

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden" 
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      {/* Subtle decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full filter blur-3xl opacity-30" style={{ transform: 'translate(30%, -30%)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div 
            className="space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-3 font-light">
                Welcome to
              </p>
              <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-3 tracking-tight leading-tight">
                Ramu & Co{' '}
                <span className="font-light block mt-1" style={{ letterSpacing: '-0.02em' }}>
                  Jewellers
                </span>
              </h2>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-16 h-px bg-gradient-to-r from-gray-900 to-gray-300"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
              </div>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-base font-light" style={{ lineHeight: '1.8' }}>
                Trusted Goldsmith in Trichy and Reputed Trademarked Jewellery Showroom for more than 50 years. Showroom offers a vast range of Exclusive & Traditional Gold & silverwares, ranging from{' '}
                <span className="italic font-normal text-gray-900 tracking-wide">
                  RINGS, CHAIN, HARAM, NECKLACE in GOLD & SILVER CUTLERY to FOOD PLATE & TEMPLE SILVER KAVASAM
                </span>
                {' '}are Available.
              </p>
              
              <p className="text-base font-light" style={{ lineHeight: '1.8' }}>
                We Have Exclusive Gold & silver items which are Designed Customize to meet one individual dreams. Our products reflect unbelievable Clarity and extraordinary quality with good Finishing where quality meets value.
              </p>
            </div>

            <div className="pt-6">
              <button 
                className="group relative px-10 py-4 bg-gray-900 text-white text-xs font-light tracking-[0.15em] overflow-hidden uppercase"
                style={{ 
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                }}
              >
                <span className="relative z-10">About Us</span>
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100"
                  style={{ transition: 'opacity 0.4s ease' }}
                ></div>
              </button>
            </div>
          </div>

          {/* Right Content - Video/Image */}
          <div 
            className="relative w-full"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            <div 
              className="relative w-full rounded-sm overflow-hidden"
              style={{ 
                paddingBottom: '56.25%',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                setIsHovering(true);
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.15), 0 12px 30px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                setIsHovering(false);
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              
              {/* Thumbnail Image */}
              <img 
                src={feedbackimg} 
                alt="Video Thumbnail"
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{ 
                  display: isPlaying ? 'none' : 'block',
                  zIndex: 1,
                  transition: 'opacity 0.5s ease'
                }}
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
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    zIndex: 2,
                    transition: 'background-color 0.4s ease'
                  }}
                  onClick={handlePlayVideo}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.35)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.25)'}
                >
                  <div 
                    className="relative"
                    style={{
                      transform: isHovering ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <div 
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center"
                      style={{
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      <Play 
                        className="w-10 h-10 text-gray-900 ml-1" 
                        fill="currentColor"
                        style={{ 
                          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </div>
                    {/* Decorative ring */}
                    <div 
                      className="absolute inset-0 rounded-full border border-white"
                      style={{
                        opacity: isHovering ? 0.6 : 0,
                        transform: isHovering ? 'scale(1.3)' : 'scale(1)',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative corner accent */}
            <div 
              className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-gray-200"
              style={{
                opacity: isVisible ? 0.5 : 0,
                transition: 'opacity 1s ease 0.5s'
              }}
            ></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutIntroSection;