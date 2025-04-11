import React from "react";
import { ChevronRight } from "lucide-react";
import Navbar from "@/app/components/user/navbar/navbar";
import Footer from "@/app/components/user/footer/footer";
import VisionMission from "@/app/user/about/VisionMission";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:py-8 md:py-6 py-2 lg:mx-20 md:mx-8 mx-4">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center text-lg text-[#484848] lg:mb-8 md:mb-6 mb-4">
          <Link href="/">
            <span className="text-lg text-[#484848]">Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lg font-bold text-[#121416]">About us Page</span>
          <ChevronRight className="w-4 h-4" />
        </div>
        {/* Hero Image */}
        <div className="lg:mb-8 md:mb-6 mb-4">
          <img
            src="/images/meetup.png"
            alt="Team members with coffee cups"
            className="w-full lg:h-100 md:h-60 h-40 rounded-lg object-cover"
          />
        </div>
        {/* Title Section */}
        <div className="lg:mb-8 md:mb-6 mb-4">
          <h1 className="lg:text-3xl md:text-2xl text-sm font-bold mb-2">
            Effortless <span className="text-orange-500">Meetup Planning</span>{" "}
            with Plannit
          </h1>
        </div>
        {/* Content */}
        <div>
          <p className="text-[#262626] font-medium lg:mb-6 md:mb-6 mb-2 lg:text-xl md:text-lg text-sm">
            Organizing meetups has never been easier! Plannit is your ultimate
            event planning companion, designed to simplify scheduling,
            coordination, and communication. Whether you're planning a small
            get-together, a professional meeting, or a large-scale event,
            Plannit ensures seamless organization with smart scheduling,
            automated reminders, and real-time collaboration.
          </p>
          <p className="text-[#262626] font-medium lg:mb-4 md:mb-4 mb-2 lg:text-xl md:text-lg text-sm">
            Our intuitive interface helps you track RSVPs, manage expenses,
            share event highlights, send auto-generated reminders and event
            details, and even suggest ideal venues based on preferences. Say
            goodbye to the hassle of endless back-and-forth messages - Plannit
            streamlines the process so you can focus on what truly matters:
            connecting with people.
          </p>
        </div>
      </div>
      <VisionMission />
      <Footer />
    </div>
  );
};

export default page;
