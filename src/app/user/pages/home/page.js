"use client";
import React from "react";
import Sponsorship from "./Sponsorship";
import CapturedMoment from "./CapturedMoment";
import MapBanner from "./MapBanner";
import QuestionPage from "./Question_Page";
import WorkProcess from "./WorkProcess";
import AboutPage from "./AboutPage";

const UserHome = () => {
  return (
    <div>
      <Sponsorship />
      <WorkProcess />
      <MapBanner />
      <CapturedMoment />
      <AboutPage />
      <QuestionPage />
    </div>
  );
};
export default UserHome;
