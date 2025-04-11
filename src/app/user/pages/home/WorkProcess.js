"use client";
import React from 'react';

const WorkProcess = () => {
  const steps = [
    {
      number: 1,
      title: 'CREATE YOUR PROFILE',
      description: 'Answer questions about your interests, hobbies, and budget for the night out.',
      bgColor: 'bg-[#CD9C8F]',
      imageSrc: '/images/icon _settings profiles_.png'
    },
    {
      number: 2,
      title: 'SELECT TIME & AREA',
      description: 'Choose when and where to meet. Eg. (marina/8PM)',
      bgColor: 'bg-[#64667B]',
      imageSrc: '/images/icon _select window_.png'
    },
    {
      number: 3,
      title: 'GET MATCHED & PLANNED',
      description: 'Our algorithm matches you with a crew of like-minded people at your preferred time.',
      bgColor: 'bg-[#7FB9C9]',
      imageSrc: '/images/icon _service plan_.png'
    },
    {
      number: 4,
      title: 'SHOW UP & DIVE IN',
      description: 'Head to your Planit table and dive into a night of great conversation and connection.',
      bgColor: 'bg-[#82BCBB]',
      imageSrc: '/images/icon _media track show active_.png'
    }
  ];

  return (
    <div className="lg:px-20 md:px-10 px-12 lg:py-10 md:py-6 py-4 bg-white">
      <div className="flex items-center justify-center lg:mb-12 md:mb-8 mb-4">
        <div className="h-[2px] lg:w-16 md:w-16 w-12 bg-text_col mr-1 lg:mb-[36px] md:mb-[36px] mb-[22px]"></div>
        <h2 className="lg:text-3xl md:text-3xl text-[16px] font-semibold text-center text-text_col">
          HOW DOES IT
          <span className="block font-extrabold">WORK?</span>
        </h2>
        <div className="h-[2px] lg:w-16 md:w-16 w-12 bg-text_col ml-1 lg:mb-[36px] md:mb-[20px] mb-[22px]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 md:gap-12 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative">
         <div className={`${step.bgColor} rounded-2xl w-full flex flex-col items-center justify-start text-center transition-transform 
         hover:scale-105 lg:h-[15rem] md:h-[14rem] h-[14rem] aspect-square relative`}>
    <div className="mb-4 absolute top-0 left-0 right-0 p-2 lg:text-xl md:text-lg text-lg font-extrabold text-footertext">
      STEP {step.number}
    </div>
    <div className="mt-10 mb-2">
      <img
        src={step.imageSrc}
        alt={`Step ${step.number}`}
        className="w-full h-full object-contain"
      />
    </div>
    <h3 className="font-extrabold lg:text-lg md:text-lg text-[14px] mb-2 text-footertext">{step.title}</h3>
    <p className="font-medium lg:text-lg md:text-[17px] text-[14px] leading-[18px] text-footertext px-2">{step.description}</p>
  </div>
  {/* Border line below each step, matching the card color */}
  <div className="flex justify-start mt-2 space-x-2 w-full">
    <div className={`h-[3px] w-6 ${step.bgColor} drop-shadow-md`}></div>
    <div className={`h-[3px] w-16 ${step.bgColor} drop-shadow-md`}></div>
  </div>
</div>
  ))}
      </div>
    </div>
  );
};

export default WorkProcess;
