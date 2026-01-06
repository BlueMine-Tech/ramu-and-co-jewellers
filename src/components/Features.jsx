import React from 'react';
import { Award, Medal, Clock, TrendingDown, Gem } from 'lucide-react';

function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: Award,
      title: 'BIS HUID Hallmarked',
      description: 'Certified & Authentic',
      color: 'from-amber-500 to-yellow-600'
    },
    {
      id: 2,
      icon: Medal,
      title: 'Best Quality',
      description: 'Premium Craftsmanship',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 3,
      icon: Clock,
      title: 'Life Time Exchange',
      description: 'Forever Promise',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 4,
      icon: TrendingDown,
      title: 'Lowest V.A.Charges',
      description: 'Best Value Guarantee',
      color: 'from-rose-500 to-pink-600'
    },
    {
      id: 5,
      icon: Gem,
      title: 'Customized Jewellery',
      description: 'Made Just for You',
      color: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <section 
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden" 
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-light tracking-wider text-gray-900 uppercase mb-4 relative">
              Why Choose Ramu & Co
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            </h2>
          </div>
          <p className="text-gray-600 mt-6 text-base tracking-wide font-light">
            Experience excellence in every piece
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 h-full flex flex-col items-center justify-center relative overflow-hidden transform hover:-translate-y-2">
                  
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Top Decoration */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-gray-100/50 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl relative`}>
                      {/* Icon Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                      <Icon className="w-10 h-10 text-white relative z-10" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Feature Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Feature Description */}
                  <p className="text-sm text-gray-600 tracking-wide leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                  
                  {/* Corner Decoration */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gray-100 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm tracking-widest uppercase font-light">
            Crafting Excellence Since Decades
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;