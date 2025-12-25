import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import feedbackimg from '../assets/feedbackimg.png';

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
      className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden" 
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-gray-100/40 via-gray-50/20 to-transparent rounded-full filter blur-3xl" style={{ transform: 'translate(40%, -40%)' }}></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-gray-100/30 to-transparent rounded-full filter blur-3xl" style={{ transform: 'translate(-30%, 30%)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div 
            className="space-y-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div>
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-4 font-normal" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Welcome to
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 mb-2 leading-none" style={{ letterSpacing: '-0.02em' }}>
                Ramu & Co
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-700 italic" style={{ letterSpacing: '0.01em' }}>
                Jewellers
              </h3>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-20 h-px bg-gradient-to-r from-gray-900 via-gray-500 to-transparent"></div>
                <div className="flex gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-gray-900"></div>
                  <div className="w-1 h-1 rounded-full bg-gray-500"></div>
                  <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>

            <div className="space-y-7 text-gray-700" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              <p className="text-base md:text-lg font-light leading-relaxed" style={{ lineHeight: '1.9' }}>
                Trusted Goldsmith in Trichy and Reputed Trademarked Jewellery Showroom for more than{' '}
                <span className="font-semibold text-gray-900">50 years</span>. Our showroom offers a vast range of Exclusive & Traditional Gold & Silverwares, ranging from{' '}
                <span className="italic font-medium text-gray-900" style={{ letterSpacing: '0.02em' }}>
                  Rings, Chains, Haram, Necklaces in Gold & Silver Cutlery to Food Plates & Temple Silver Kavasam
                </span>.
              </p>
              
              <p className="text-base md:text-lg font-light leading-relaxed" style={{ lineHeight: '1.9' }}>
                We specialize in Exclusive Gold & Silver items that are{' '}
                <span className="font-medium text-gray-900">Designed & Customized</span>{' '}
                to meet your individual dreams. Our products reflect unbelievable clarity and extraordinary quality with impeccable finishing—where{' '}
                <span className="italic font-medium text-gray-900">quality meets value</span>.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="/about"
                className="group inline-block relative px-12 py-4 bg-gray-900 text-white text-xs font-medium tracking-[0.2em] overflow-hidden uppercase transition-all duration-500 hover:px-14"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)',
                  letterSpacing: '0.15em'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 35px rgba(0, 0, 0, 0.2), 0 6px 15px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)';
                }}
              >
                <span className="relative z-10 inline-flex items-center gap-3">
                  Discover Our Story
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
              </a>
            </div>
          </div>

          {/* Right Content - Video/Image */}
          <div 
            className="relative w-full"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            <div 
              className="relative w-full rounded overflow-hidden"
              style={{ 
                paddingBottom: '56.25%',
                boxShadow: '0 25px 70px rgba(0, 0, 0, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                setIsHovering(true);
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 35px 90px rgba(0, 0, 0, 0.2), 0 15px 35px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                setIsHovering(false);
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 25px 70px rgba(0, 0, 0, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1)';
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

              {/* Enhanced Play Button Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%)',
                    backdropFilter: 'blur(1px)',
                    zIndex: 2,
                    transition: 'all 0.4s ease'
                  }}
                  onClick={handlePlayVideo}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 100%)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%)'}
                >
                  <div 
                    className="relative"
                    style={{
                      transform: isHovering ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <div 
                      className="w-24 h-24 bg-white rounded-full flex items-center justify-center relative"
                      style={{
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2), 0 6px 16px rgba(0, 0, 0, 0.15), 0 0 0 8px rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      <Play 
                        className="w-11 h-11 text-gray-900 ml-1.5" 
                        fill="currentColor"
                        strokeWidth={0}
                        style={{ 
                          filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.15))',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </div>
                    
                    {/* Animated pulse rings */}
                    <div 
                      className="absolute inset-0 rounded-full border-2 border-white"
                      style={{
                        opacity: isHovering ? 0.8 : 0,
                        transform: isHovering ? 'scale(1.4)' : 'scale(1)',
                        transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    ></div>
                    <div 
                      className="absolute inset-0 rounded-full border border-white"
                      style={{
                        opacity: isHovering ? 0.4 : 0,
                        transform: isHovering ? 'scale(1.7)' : 'scale(1)',
                        transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced decorative corner accents */}
            <div 
              className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-gray-200/60"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1s ease 0.6s'
              }}
            ></div>
            <div 
              className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gray-200/60"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1s ease 0.7s'
              }}
            ></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutIntroSection;