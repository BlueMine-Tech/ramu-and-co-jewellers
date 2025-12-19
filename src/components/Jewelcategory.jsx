import React, { useState, useEffect, useRef } from 'react';
import necklace from '../assets/necklace2.png';
import rings from '../assets/rings2.png';
import earings from '../assets/earings.png';
import bangles from '../assets/bangles.png';
import traditional from '../assets/traditional.png';
import chains from '../assets/chains.png';

function JewelleryCategoriesSection() {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const categories = [
    {
      id: 1,
      title: 'NECKLACES',
      image: necklace,
      link: '#necklaces'
    },
    {
      id: 2,
      title: 'RINGS',
      image: rings,
      link: '#rings'
    },
    {
      id: 3,
      title: 'EARRINGS',
      image: earings,
      link: '#earrings'
    },
    {
      id: 4,
      title: 'BANGLES',
      image: bangles,
      link: '#bangles'
    },
    {
      id: 5,
      title: 'CHAINS',
      image: chains,
      link: '#chains'
    },
    {
      id: 6,
      title: 'TRADITIONAL',
      image: traditional,
      link: '#traditional'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 100);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const CategoryCard = ({ category, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isVisible = visibleCards.includes(index);

    return (
      <div
        ref={el => cardsRef.current[index] = el}
        className="group relative"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="relative overflow-hidden rounded-sm cursor-pointer"
          style={{
            boxShadow: isHovered 
              ? '0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1)' 
              : '0 10px 30px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
            transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            <img 
              src={category.image} 
              alt={category.title}
              className="w-full h-full object-cover"
              style={{
                transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                filter: isHovered ? 'brightness(1.05)' : 'brightness(1)'
              }}
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23374151"/><text x="50%" y="50%" font-size="16" fill="%23ffffff" text-anchor="middle" dy=".3em">No Image</text></svg>';
              }}
            />
            
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
              style={{
                opacity: isHovered ? 0.4 : 0.2,
                transition: 'opacity 0.5s ease'
              }}
            ></div>

            {/* Decorative border effect */}
            <div 
              className="absolute inset-0 border-2 border-white"
              style={{
                opacity: isHovered ? 0.15 : 0,
                transform: isHovered ? 'scale(0.95)' : 'scale(1)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            ></div>
          </div>

          {/* Category Title */}
          <div 
            className="relative bg-white overflow-hidden"
            style={{
              background: isHovered 
                ? 'linear-gradient(to bottom, #ffffff, #f9fafb)' 
                : '#ffffff',
              transition: 'background 0.5s ease'
            }}
          >
            <div className="py-5 px-4">
              <h3 
                className="text-center text-xs font-light tracking-[0.2em] text-gray-900 uppercase"
                style={{
                  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {category.title}
              </h3>
              
              {/* Underline accent */}
              <div 
                className="mx-auto mt-3 bg-gray-900"
                style={{
                  width: isHovered ? '40px' : '0px',
                  height: '1px',
                  transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              ></div>
            </div>

            {/* Bottom gradient accent */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
              style={{
                opacity: isHovered ? 1 : 0.5,
                transition: 'opacity 0.4s ease'
              }}
            ></div>
          </div>

          {/* Corner accent */}
          <div 
            className="absolute top-3 right-3 w-6 h-6 border-t border-r border-white"
            style={{
              opacity: isHovered ? 0.3 : 0,
              transform: isHovered ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden" 
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-gray-50 rounded-full filter blur-3xl opacity-40" style={{ transform: 'translate(-50%, -50%)' }}></div>

      <div className="relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-3 font-light">
            Discover Our
          </p>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900 uppercase mb-4" style={{ letterSpacing: '0.05em' }}>
            Exquisite Jewellery
            <span className="block mt-1 font-light">Collections</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
            <div className="w-20 h-px bg-gray-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <CategoryCard 
                key={category.id} 
                category={category} 
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

export default JewelleryCategoriesSection;