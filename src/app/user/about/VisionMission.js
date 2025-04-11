"use client"
import React from 'react';

const VisionMission = () => {
  return (
    <div className="lg:mx-20 md:mx-8 mx-4 lg:py-6 md:py-4 py-2 lg:mb-8 md:mb-6 mb-4">
      {/* Header */}
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center lg:mb-12 md:mb-10 mb-2">Our Vision & Mission</h1>
      {/* Vision Section */}
      <div className="grid md:grid-cols-2 lg:gap-12 md:gap-8 gap-2 lg:mb-16 md:mb-12 mb-4">
        <div>
          <h3 className="lg:text-2xl md:text-xl text-lg text-customorange font-semibold lg:mb-2 md:mb-2 mb-0">Vision</h3>
          <h2 className="lg:text-2xl md:text-2xl text-lg font-bold mb-2">The Power And Purpose Of</h2>
          <p className="text-[rgba(0,0,0,0.6)] lg:mb-8 lg md:mb-6 mb-4 lg:text-xl md:text-lg text-sm">
            To create a platform that fosters safe, meaningful connections through seamless event organization and smart matchmaking
          </p>
        </div>
        <div className="relative">
          <img 
            src="/images/vision.png" 
            alt="Target with dart"
            className="rounded-lg w-full lg:h-60 md:h-60 h-40 object-cover"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 lg:gap-12 md:gap-10 gap-2">
        <div className="md:order-2">
          <h3 className="lg:text-2xl md:text-xl text-lg text-customorange font-semibold lg:mb-2 md:mb-2 mb-0">Mission</h3>
          <h2 className="lg:text-2xl md:text-2xl text-lg font-bold mb-2">Success Of Our</h2>
          <p className="text-[rgba(0,0,0,0.6)] lg:mb-8 lg md:mb-6 mb-4 lg:text-xl md:text-lg text-sm">
            Our mission is to empower individuals and businesses to connect effortlessly through smart tools and secure, personalized meetups
          </p>
        </div>
        <div className="md:order-1">
          <img 
            src="/images/mission.png" 
            alt="Target with dart closeup"
            className="rounded-lg w-full lg:h-60 md:h-60 h-40 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionMission;