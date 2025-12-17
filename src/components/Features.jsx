import React from 'react';
import { Award, RefreshCw, Medal, Clock, TrendingDown } from 'lucide-react';

function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: Award,
      title: 'BIS HUID Hallmarked',
      description: 'Certified & Authentic'
    },
    {
      id: 2,
      icon: RefreshCw,
      title: 'Easy Exchange',
      description: 'Hassle-Free Returns'
    },
    {
      id: 3,
      icon: Medal,
      title: 'Best Quality',
      description: 'Premium Craftsmanship'
    },
    {
      id: 4,
      icon: Clock,
      title: 'Life Time Exchange',
      description: 'Forever Promise'
    },
    {
      id: 5,
      icon: TrendingDown,
      title: 'Lowest V.A.Charges',
      description: 'Best Value Guarantee'
    },
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-b from-white to-gray-50" 
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 uppercase mb-3">
            Why Choose Ramu & Co
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-sm tracking-wide">
            Experience excellence in every piece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative"
              >
                {/* Card */}
                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col items-center justify-center relative overflow-hidden">
                  
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-full opacity-50"></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm">
                      <Icon className="w-8 h-8 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    {/* Pulse effect on hover */}
                    <div className="absolute inset-0 w-16 h-16 bg-gray-200 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
                  </div>
                  
                  {/* Feature Title */}
                  <h3 className="text-base font-medium text-gray-900 mb-2 tracking-wide">
                    {feature.title}
                  </h3>
                  
                  {/* Feature Description */}
                  <p className="text-xs text-gray-500 tracking-wide">
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;