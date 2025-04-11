// components/Sidebar/Sidebar.js
"use client";
import React from "react";

const Sidebar = ({ isStep1Complete, isStep2Complete, isStep3Complete, isStep4Complete }) => {
  // Define steps array internally
  const steps = [
    { label: "Personal Information", complete: isStep1Complete },
    { label: "Social Preference", complete: isStep2Complete },
    { label: "Interests and Preferences", complete: isStep3Complete },
    { label: "Personality and Hobbies", complete: isStep4Complete },
  ];

  return (
    <div className="w-full md:w-1/4">
      {/* Steps Container */}
      <div className="flex flex-row md:flex-col lg:gap-4 md:gap-6 gap-3">
        {steps.map((step, index) => (
          <div key={index} className="flex sm:block items-center lg:gap-3 md:gap-3 gap-1">
            {/* Step Indicator */}
            <img
              src={step.complete ? "/images/tick.png" : "/images/untick.png"}
              alt={step.complete ? "Complete" : "Incomplete"}
              className="lg:w-6 md:w-6 w-3 lg:h-6 md:h-6 h-3"
            />
            <span className={`font-semibold text-[9px] lg:text-lg md:text-lg ${step.complete ? "text-white" : "text-white/70"}`}>
              {step.label}
            </span>
            {/* Vertical Line (for column layout) */}
            {index < steps.length - 1 && (
              <div className={`hidden md:block h-16 w-0.5 ml-3 ${step.complete ? "bg-white" : "bg-white/70"}`} />
            )}
            {/* Horizontal Line (for row layout) */}
            {index < steps.length - 1 && (
              <div className={`md:hidden h-0 w-0 ${step.complete ? "bg-white" : "bg-white/70"}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;