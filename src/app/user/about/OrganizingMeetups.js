"use client"
import React from 'react';

const OrganizingMeetups = () => {
  return (
    <div className="grid md:grid-cols-2 lg:gap-12 md:gap-10 gap-4 lg:mx-20 md:mx-8 mx-4 lg:py-12 md:py-8 py-4">
      <div className=" flex-col justify-center">
        <h2 className="lg:text-4xl md:text-2xl text-lg font-bold lg:mb-4 md:mb-4 mb-2">
          How PlanIt is <br />
          <span className="text-customorange">Organizing Meetups</span>
        </h2>
        <p className="text-[#262626] lg:mb-6 md:mb-6 mb-2 lg:text-2xl md:text-lg text-[13px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit et et aut unde atque perferendis.
        </p>
        <ul className="lg:space-y-4 md:space-y-4 space-y-2 font-medium lg:text-xl md:text-lg text-sm">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-customblack rounded-full mr-3"></span>
            Smart Event Planning
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-customblack rounded-full mr-3"></span>
            Seamless RSVP & Attendance Tracking
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-customblack rounded-full mr-3"></span>
            Interactive Event Management Dashboard
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-customblack rounded-full mr-3"></span>
            Secure & Private Group Chat
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/images/about.png"
          alt="Team meeting"
          className="rounded-lg w-full lg:h-full md:h-full h-60 object-cover"
        />
      </div>
    </div>
  );
};

export default OrganizingMeetups;
