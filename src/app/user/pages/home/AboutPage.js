"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "John Williams",
      role: "Lead designer",
      text: "OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects. Love ya",
      avatar: "/images/profile.png",
      rating: 5
    },
    {
      id: 2,
      name: "John Williams",
      role: "Lead designer",
      text: "OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects. Love ya",
      avatar: "/images/profile1.png",
      rating: 5
    },
    {
      id: 3,
      name: "John Williams",
      role: "Lead designer",
      text: "OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects. Love ya",
      avatar: "/images/profile2.png",
      rating: 5
    }
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative lg:px-24 md:px-6 px-6 bg-gradient-to-b from-[#f6ead3] to-[#f3e9d9] py-4">
      {/* Header with navigation buttons */}
      <div className="flex justify-center items-center space-x-4 lg:mb-0 md:mb-0 mb-4">
        {/* Left Navigation Button */}
        <button onClick={prevSlide}
          className="bg-[#1a365d] text-white hover:bg-blue-900" aria-label="Previous testimonial">
          <ChevronLeft className="lg:w-6 md:w-6 w-5 lg:h-6 md:h-6 h-5 text-[#FCDDBA]" />
        </button>
        {/* Title */}
        <h2 className="lg:text-3xl md:text-3xl text-[16px] font-bold text-[#1a365d] text-center">
          What Our Client Says About You
        </h2>
        {/* Right Navigation Button */}
        <button onClick={nextSlide}
          className="bg-[#1a365d] text-white hover:bg-blue-900"
          aria-label="Next testimonial">
          <ChevronRight className="lg:w-6 md:w-6 w-5 lg:h-6 md:h-6 h-5 text-[#FCDDBA]" />
        </button>
      </div>
      {/* Underline below title */}
      <div className="hidden lg:flex md:flex justify-center lg:mr-[22rem] md:mr-[22rem] mr-0 mb-4">
        <div className="lg:w-24 md:w-38 w-20 h-[6px] rounded-md bg-[#1a365d] mb-2"></div>
      </div>
      {/* Testimonials Container */}
      <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-3 lg:gap-2 md:gap-8 gap-4 mb-2">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id}
            className={`bg-gradient-to-t from-[#b3afafdb] to-[#7d7979db] backdrop-blur-[60.55px] rounded-3xl shadow-2xl 
            lg:max-w-[380px] md:max-w-[300px] max-w-[260px] lg:h-[280px] md:h-[200px] h-[170px] lg:p-8 md:p-4 p-4 
            transition-all duration-300 ${index === currentSlide ? 'opacity-90 scale-100' : 'opacity-90 scale-95'}
            transform hover:shadow-xl shadow-[4px_4px_20px_0px_rgba(169,169,169,0.7)]`}>
            {/* Quote mark */}
            <div className="flex mb-4">
              <img src="/images/Quote.png" 
                alt="Quote Mark"
                className="lg:w-10 md:w-6 w-4 lg:h-8 md:h-6 h-4" />
            </div>
            {/* Testimonial text */}
            <p className="text-white lg:mb-6 md:mb-4 mb-2 lg:text-lg md:text-[12px] text-[10px]">{testimonial.text}</p>
            {/* Author info */}
            <div className="flex items-center gap-4">
              <img src={testimonial.avatar}
                alt={testimonial.name}
                className="lg:w-12 md:w-9 w-6 lg:h-12 md:h-9 h-6 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-[#FFFFFF] lg:text-[16px] md:text-[14px] text-[10px]">{testimonial.name}</h4>
                <p className="text-[#FFFFFF90] font-normal lg:text-[14px] md:text-[12px] text-[10px]">{testimonial.role}</p>
              </div>
            </div>

            {/* Rating stars */}
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400"
                fill="currentColor" viewBox="0 0 20 20" >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
