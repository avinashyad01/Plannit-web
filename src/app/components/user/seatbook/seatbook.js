"use client";
import React, { useState, useEffect } from "react";
import Info_1 from "@/app/components/user/Modal_1/Info_1";
import Info_2 from "@/app/components/user/Modal_2/Info_2";
import Info_3 from "@/app/components/user/Modal_3/Info_3";
import Info_4 from "@/app/components/user/Modal_4/Info_4";
import Content from "./Content";
import SignupPage from "@/app/user/auth/signup/page";
import LoginPage from "@/app/user/auth/login/page";

const page = ({ ContentState }) => {
  const [currentStep, setCurrentStep] = useState(0);
  console.log(ContentState, "##################");

  useEffect(() => {
    if (currentStep !== 0) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [currentStep]);

  const handleNextStep = () => {
    if (currentStep < 4) {
      // console.log("you clicked me ");
      setCurrentStep((prev) => prev + 1);
    }
  };
  // console.log("new");

  const handlePreviousStep = () => {
    // console.log("you clicked me preves");
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const renderModal = () => {
    switch (currentStep) {
      case 1:
        return <Info_1 onNext={handleNextStep} />;
      case 2:
        return <Info_2 onNext={handleNextStep} onBack={handlePreviousStep} />;
      case 3:
        return <Info_3 onNext={handleNextStep} onBack={handlePreviousStep} />;
      case 4:
        return <Info_4 onNext={handleNextStep} onBack={handlePreviousStep} />;
      default:
        return null;
    }
  };
  return (
    <div className="relative lg:h-[100%] md:h-[100%] h-[100%] py-1 flex flex-col justify-between bg-white">
      {/* Background */}
      <div
        className="absolute w-full h-full inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/30" />
      </div>

      {/* Content */}
      {ContentState == 0 ? (
        <Content setCurrentStep={setCurrentStep} />
      ) : ContentState == 1 ? (
        <LoginPage />
      ) : (
        <SignupPage />
      )}

      {/* Modal Overlay */}
      {currentStep !== 0 && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
          {renderModal()}
        </div>
      )}
    </div>
  );
};

export default page;
