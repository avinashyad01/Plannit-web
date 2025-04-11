"use client"; 
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CapturedMoment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = ['/images/moment1.png','/images/moment2.jpg','/images/moment3.jpeg'];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
      <div className="w-full lg:px-[6rem] md:px-[4rem] px-4 py-2 bg-gradient-to-b from-[#fff] to-[#f6ead3] lg:mt-8 md:mt-6 mt-4">
        {/* Header Section with enhanced styling */}
        <div className="text-center mb-2">
          <div className="flex items-center justify-center lg:space-x-4 md:space-x-4 space-x-2 mb-4">
            <div className="h-[3px] w-12 bg-textcol"></div>
            <h2 className="lg:text-5xl md:text-3xl text-[16px] font-bold text-bgcolor mb-1">
              CAPTURED MOMENTS
            </h2>
            <div className="h-[3px] w-12 bg-textcol"></div>
          </div>
          <p className="lg:text-xl md:text-sm text-[12px] text-textcol italic font-medium mt-[-20px]">
            Meet the Professional faces behind Tomorrows India
          </p>
        </div>

        {/* Carousel Section with enhanced styling */}
        <div className="">
          <div className="relative lg:px-28 md:px-28 px-14 flex items-center justify-center lg:min-h-[400px] md:min-h-[300px] min-h-[100px]">
            {/* Previous Button */}
            <button onClick={prevSlide}
              className="absolute left-0 z-20 p-1 rounded-full bg-white shadow-lg hover:bg-gray-100 focus:outline-none border-2 border-text_black"
              aria-label="Previous slide">
              <ChevronLeft className="lg:w-8 md:w-6 w-4 lg:h-8 md:h-6 h-4 text-text_black" />
            </button>

            {/* Images Container */}
          <div className="flex lg:gap-8 md:gap-4 gap-2 items-center justify-center overflow-hidden">
          {[-1, 0, 1].map((offset) => {
            const index = (currentIndex + offset + images.length) % images.length;
            return (
        <div
        key={index}
        className={`transition-all duration-500 ease-in-out transform
          ${offset === 0 
            ? 'lg:w-[450px] md:w-[400px] w-[400px] lg:h-[300px] md:h-[250px] h-[120px] z-10 scale-100' // Increased width, reduced height
            : 'lg:w-[380px] md:w-[350px] w-[300px] lg:h-[280px] md:h-[220px] h-[80px] blur-sm scale-90'} // Smaller images for off-screen elements
          ${offset === -1 ? '-translate-x-4' : ''}
          ${offset === 1 ? 'translate-x-4' : ''}
        `}
      >
        <div className="w-full h-full overflow-hidden shadow-xl">
          <img
            src={images[index]}
            alt={`Captured Moment ${index + 1}`}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    );
  })}
</div>
        {/* Next Button */}
            <button 
              onClick={nextSlide}
              className="absolute right-0 z-20 p-1 rounded-full bg-white shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 
              focus:ring-blue-500 transition-all duration-300 border-2 border-text_black"
              aria-label="Next slide"
            >
              <ChevronRight className="lg:w-8 md:w-6 w-4 lg:h-8 md:h-6 h-4 text-text_black" />
            </button>
          </div>
        </div>
      </div>
  );
};

export default CapturedMoment;