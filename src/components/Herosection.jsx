import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroimg1 from '../assets/herosection1.png';
import heroimg2 from '../assets/herosection2.png';
import heroimg3 from '../assets/herosection3.png';

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    { id: 1, image: heroimg1, alt: 'Ramu & Co Jewellers - Slide 1' },
    { id: 2, image: heroimg2, alt: 'Ramu & Co Jewellers - Slide 2' },
    { id: 3, image: heroimg3, alt: 'Ramu & Co Jewellers - Slide 3' }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  return (
    <section className="relative w-full">
      <div className="relative w-full">
        {/* Hero Carousel Container */}
        <div className="relative w-full overflow-hidden group">
          
          {/* Slides Container */}
          <div className="relative w-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`w-full transition-all duration-1000 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 relative' 
                    : 'opacity-0 absolute top-0 left-0'
                }`}
                style={{
                  transform: index === currentSlide 
                    ? 'translateX(0)' 
                    : index < currentSlide 
                    ? 'translateX(-100%)' 
                    : 'translateX(100%)'
                }}
              >
                <img 
                  src={slide.image} 
                  alt={slide.alt} 
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" strokeWidth={2.5} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-7 md:h-7" strokeWidth={2.5} />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'bg-white w-8 md:w-10 h-2.5 md:h-3 shadow-lg'
                    : 'bg-white/60 hover:bg-white/90 w-2.5 md:w-3 h-2.5 md:h-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;