"use client"
import React from 'react';
import { CheckCircle, LockKeyhole, Video, FileCheck } from 'lucide-react';

const SafetySection = () => {
  const safetyFeatures = [
    {
      title: "Verified profiles",
      description: "Planit verifies al users to reduce fake profiles and foster a trusted, safe community.",
      Icon: CheckCircle,
      iconClassName: "text-gray-500"
    },
    {
      title: "Privacy settings",
      description: "Planit lets users control who can view their profiles, events and block for a more protected experience.",
      Icon: LockKeyhole,
      iconClassName: "text-orange-500"
    },
    {
      title: "Reporting system",
      description: "Planit's reporting system lets users flag inappropriate behavior, ensuring quick action to maintain a safe community.",
      Icon: Video,
      iconClassName: "text-blue-400"
    },
    {
      title: "Robust reporting system",
      description: "Planit's robust reporting system lets users report issues quickly, ensuring swift action to maintain a safe community.",
      Icon: FileCheck,
      iconClassName: "text-gray-500"
    }
  ];

  return (
    <div className="relative bg-zinc-900 text-white lg:py-16 md:py-16 py-4">
      <div className="lg:mx-20 md:mx-8 mx-4">
        <div className="grid md:grid-cols-2 lg:gap-12 md:gap-12 gap-4">
          {/* Left Column - Text Content */}
          <div className="flex-col justify-center">
            <h2 className="text-[#FFFFFF] lg:text-4xl md:text-2xl text-xl font-bold lg:mb-8 md:mb-6 mb-2">
              Your Safety is Our Priority
            </h2>
            <p className="text-[#FFFFFF] lg:text-lg md:text-lg text-[12px]">
              Lorem ipsum dolor sit amet consectetur. Adipiscing nisi id at 
              arcu enim id gravida pulvinar. Tristique consectetur mi 
              curabitur congue enim dignissim amet justo. Porta morbi nulla 
              aliquet adipiscing. Sed diam mauris erat faucibus eu posuere 
              ultricies quisque amet. Quam pellentesque in tristique
            </p>
          </div>

          {/* Right Column - Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {safetyFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg lg:p-4 md:p-4 p-2 flex flex-col"
              >
                <feature.Icon 
                  className={`lg:w-8 md:w-8 w-4 lg:h-8 md:h-8 h-4 lg:mb-4 md:mb-4 mb-2 ${feature.iconClassName}`}
                />
                <h3 className="font-semibold text-black mb-2 lg:text-lg md:text-lg text-[12px]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 lg:text-sm md:text-sm text-[10px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Orange Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg 
          viewBox="0 0 1440 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full"
        >
          <path 
            d="M0 48H1440V0L720 24L0 0V48Z" 
            fill="#FF5722"
          />
        </svg>
      </div>
    </div>
  );
};

export default SafetySection;