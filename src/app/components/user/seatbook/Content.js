"use client";
import React from "react";

const Content = ({ setCurrentStep }) => {
  return (
    <>
      <div className="relative z-10 flex flex-col items-center justify-center text-center lg:mt-[8rem] md:mt-[3rem] mt-[2rem] px-4">
        {/* Header Text */}
        <h1 className="text-orange_text lg:text-6xl md:text-4xl text-md font-bold">
          Seeing Beyond the Obvious, <br /> Breaking Barriers, Building Bonds
        </h1>
        <p className="text-orange_text font-normal lg:text-2xl md:text-xl text-[9px]">
          Planning Made Simple, Your Gateway to Meaningful Meetups
        </p>

        {/* Book Your Seat Button */}
        <button
          onClick={() => setCurrentStep(1)}
          className="lg:mt-6 md:mt-6 mt-4 bg-bgcolor text-white lg:px-6 md:px-4 px-3 lg:py-2 md:py-2 py-1 rounded-md flex items-center gap-2 hover:bg-[#0a2242]/80 
        transition-colors font-extrabold lg:text-xl md:text-xl text-sm border-l-4 border-b-4 border-[#ffffff]"
        >
          Book Your Seat
          <img
            src="/images/arrow.png"
            alt="arrow"
            className="h-6 lg:h-8 md:h-6 ml-2"
          />
        </button>

        <div className="relative text-center text-white lg:pb-6 md:pb-2 pb-2">
          <p className="text-sm md:text-lg font-bold text-textcol lg:mt-12 md:mt-10 mt-8">
            Your Next Meetup will be
          </p>
          <p className="text-[#FF4D00] text-sm md:text-lg font-medium italic">
            TimeIt for every Wednesday at 5pm
          </p>
          <div className="mt-2 flex gap-4 justify-center items-center text-textcol">
            <div className="text-center">
              <div className="lg:py-2 md:py-1 py-0 lg:px-6 md:px-6 px-6 flex justify-center space-x-4 md:space-x-4 border-2 border-textcol rounded-full lg:text-2xl md:text-2xl text-lg font-bold">
                <span>12 :</span>
                <span>25 :</span>
                <span>41</span>
              </div>
              <div className="text-xs lg:text-lg md:text-sm flex justify-center space-x-3 mt-1 font-medium">
                <p>HOURS</p>
                <p>MINUTES</p>
                <p>SECONDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
