import React, { useState } from 'react';
import { Star } from 'lucide-react';

// Import images from src/assets
import review1 from '../assets/review1.png';
import review2 from '../assets/review2.png';
import review3 from '../assets/review3.png';
import review4 from '../assets/review4.png';
import review5 from '../assets/review5.png';
import review6 from '../assets/review6.png';

function GoogleReviewsSection() {
  const [imageErrors, setImageErrors] = useState({});

  const reviews = [
    {
      id: 1,
      image: review1,
      alt: 'Customer Review 1'
    },
    {
      id: 2,
      image: review2,
      alt: 'Customer Review 2'
    },
    {
      id: 3,
      image: review3,
      alt: 'Customer Review 3'
    },
    {
      id: 4,
      image: review4,
      alt: 'Customer Review 4'
    },
    {
      id: 5,
      image: review5,
      alt: 'Customer Review 5'
    },
    {
      id: 6,
      image: review6,
      alt: 'Customer Review 6'
    }
  ];

  const handleImageError = (reviewId) => {
    console.error(`Failed to load image for review ${reviewId}`);
    setImageErrors(prev => ({ ...prev, [reviewId]: true }));
  };

  const handleImageLoad = (reviewId) => {
    console.log(`Successfully loaded image for review ${reviewId}`);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wider text-gray-900 uppercase mb-4">
            Customer Reviews
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg font-light">
            What our customers say about us
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Review Screenshot Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-white">
                {imageErrors[review.id] ? (
                  // Fallback UI if image fails to load
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm font-medium">Review {review.id}</span>
                    <span className="text-gray-300 text-xs mt-2">Image not available</span>
                  </div>
                ) : (
                  <>
                    <img 
                      src={review.image} 
                      alt={review.alt}
                      className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-700 ease-out p-4"
                      onError={() => handleImageError(review.id)}
                      onLoad={() => handleImageLoad(review.id)}
                      loading="lazy"
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </>
                )}
              </div>
              
              {/* Border glow effect on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-400/30 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

   
      </div>
    </section>
  );
}

export default GoogleReviewsSection;