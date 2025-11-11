'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { Testimonial } from '@/types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      ></i>
    ));
  };

  // Prevent hydration mismatch by only rendering on client
  if (!isClient) {
    return (
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-8">
            <h2 className="heading-2 mb-3 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience 
              working with Smartwebrowse India Private Limited.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="animate-pulse bg-white h-48 rounded-xl shadow-md"></div>
            <div className="animate-pulse bg-white h-48 rounded-xl shadow-md"></div>
            <div className="animate-pulse bg-white h-48 rounded-xl shadow-md"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="heading-2 mb-3 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience 
            working with Smartwebrowse India Private Limited.
          </p>
        </div>

        {/* Testimonials Grid - Compact Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials && testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <div
                key={`testimonial-card-${testimonial.id || index}`}
                className="group relative"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full flex flex-col group-hover:-translate-y-1">
                  {/* Quote Icon & Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white">
                      <i className="fas fa-quote-left text-sm"></i>
                    </div>
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial.rating || 5)}
                    </div>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="mb-4 flex-grow">
                    <p className="text-gray-700 leading-relaxed text-sm italic line-clamp-4">
                      "{testimonial.content}"
                    </p>
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center space-x-3 pt-3 border-t border-gray-100">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                        <Image
                          src={testimonial.image || '/images/testimonials/default.jpg'}
                          alt={`${testimonial.name || 'Client'} profile`}
                          width={40}
                          height={40}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name || 'Client Name'}
                      </div>
                      <div className="text-xs text-gray-600 truncate">
                        {testimonial.role || 'Role'} at {testimonial.company || 'Company'}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-3 right-3 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <i className="fas fa-quote-right text-2xl text-primary-600"></i>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-comments text-xl text-gray-400"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Testimonials Yet</h3>
                <p className="text-gray-600 text-sm">We're working on gathering client feedback. Check back soon!</p>
              </div>
            </div>
          )}
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-16 left-8 text-primary-100 text-4xl opacity-20">
          <i className="fas fa-quote-left"></i>
        </div>
        <div className="absolute bottom-16 right-8 text-primary-100 text-4xl opacity-20">
          <i className="fas fa-quote-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;