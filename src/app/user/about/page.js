"use client";
import React from "react";
import MeetupPlanning from "@/app/user/about/MeetupPlanning";
import OrganizingMeetups from "@/app/user/about/OrganizingMeetups";
import SafetySection from "@/app/user/about/SafetySection";
import VisionMission from "@/app/user/about/VisionMission";
import Breadcrumb from "@/app/user/about/Breadcrumb";
import Navbar from "@/app/components/user/navbar/navbar";
import Footer from "@/app/components/user/footer/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:py-8 md:py-6 py-2">
        <Breadcrumb />
        <MeetupPlanning />
        <OrganizingMeetups />
        <SafetySection />
        <VisionMission />
      </div>
      <Footer />
    </div>
  );
};

export default page;
