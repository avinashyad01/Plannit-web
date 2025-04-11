"use client"
import React from 'react';
import Link from "next/link";

const MeetupPlanning = () => {
  return (
    <div className="grid md:grid-cols-2 lg:gap-8 md:gap-6 gap-2 lg:mx-20 md:mx-8 mx-4 lg:mb-8 md:mb-6 mb-2">
      {/* Left Column - Text Content */}
      <div className="flex flex-col justify-center">
        <h2 className="lg:text-3xl md:text-2xl text-lg font-bold lg:mb-4 md:mb-4 mb-2">
          Effortless <span className="text-customorange">Meetup Planning</span>
          <br />with Plannit
        </h2>
        <p className="text-[#262626] font-normal lg:mb-4 md:mb-4 mb-2 lg:text-gl md:text-lg text-sm">
          Lorem ipsum dolor sit amet consectetur. Adipiscing nisi id at arcu 
          enim id gravida pulvinar. Tristique consectetur mi curabitur congue 
          enim dignissim amet justo. Porta morbi nulla aliquet adipiscing. Sed 
          diam mauris erat faucibus eu posuere ultricies quis que amet. Quam 
          pellentesque in tristique
        </p>
        <p className="text-[#262626] font-normal lg:mb-6 md:mb-6 mb-4 lg:text-gl md:text-lg text-sm">
          sed neque scelerisque quam pulvinar. Risus dictum elementum 
          lacus arcu. Neque eget sagittis vulputate nam id morbi id. Aliquam 
          molestie posuere pulvinar arcu
        </p>
        <Link href="/user/about/subabout">
        <button className="bg-customorange text-white lg:px-6 md:px-6 px-4 lg:py-2 md:py-2 py-1 rounded w-fit hover:bg-orange-600 transition-colors">
          Read more
          </button>
          </Link>
      </div>
      {/* Right Column - Overlapping Images */}
      <div className="relative h-full">
  <div className="relative h-full">
    {/* First (top) image */}
    <img 
      src="/images/meetup.png" 
      alt="Group of people at a meetup"
      className="absolute top-0 right-0 lg:w-full md:w-[90%] w-[60%] lg:h-[70%] md:h-[60%] h-[40%] rounded-lg object-cover z-10"
    />
    {/* Second (bottom) image with negative top to overlap */}
    <img 
      src="/images/meetup1.png" 
      alt="People discussing at a meetup"
      className="absolute lg:top-[50%] md:top-[50%] top-[20%] lg:right-[22rem] md:right-[6rem] right-[4rem] lg:w-[50%] md:w-4/5 
      lg:h-[60%] md:h-[50%] h-[40%] object-cover z-20"
    />
  </div>
</div>
</div>
  );
};

export default MeetupPlanning;