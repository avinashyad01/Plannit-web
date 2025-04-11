"use client";
import React, { useEffect, useState } from 'react';

const Sponsorship = () => {
  const sponsorImages = ['/images/sponser1.png','/images/sponser.png','/images/sponser3.png','/images/sponser4.png',
    '/images/sponser5.png','/images/sponser6.png','/images/sponser7.png','/images/sponser8.png' ];

  // Double the array to create a seamless loop
  const duplicatedImages = [...sponsorImages, ...sponsorImages];
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const scrollSpeed = 50; // Lower number = faster scroll
    const step = 1;

    const animate = () => {
      setPosition((prevPosition) => {
        // Reset position when all images have scrolled
        if (prevPosition <= -50 * sponsorImages.length) {
          return 0;
        }
        return prevPosition - step;
      });
    };
    const intervalId = setInterval(animate, scrollSpeed);
    return () => clearInterval(intervalId);
  }, [sponsorImages.length]);

  return (
    <div className="bg-white">
      <div className="border-2 shadow-xl shadow-gray-500"></div>
      {/* Partner Logos Section */}
      <div className="py-2 bg-gradient-to-b from-[#FFFAFA] to-[#D9D9D900] px-2 overflow-hidden">
        <div className="relative">
          <div className="flex gap-8 whitespace-nowrap"
            style={{ transform: `translateX(${position}px)`,
              transition: 'transform 0.1s linear'
            }}
          >
            {duplicatedImages.map((imageSrc, index) => (
              <img key={index}
                src={imageSrc}
                alt={`Partner ${index + 1}`}
                className="w-8 h-8 md:w-14 md:h-14 lg:w-22 lg:h-22 xl:w-24 xl:h-24 inline-block" />
            ))}
          </div>
        </div>
      </div>
      <div className="border border-text_col"></div>
    </div>
  );
};

export default Sponsorship;