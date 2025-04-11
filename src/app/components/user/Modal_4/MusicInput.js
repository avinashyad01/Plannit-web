"use client"
import React from "react";
import CustomDropdown from "./CustomDropdown";

const MusicInput = ({ formData, dropdownStates, handleSelection, toggleDropdown }) => {
  const musicOptions = ["Pop", "Rock", "Hip-Hop", "Classical", "Jazz", "Electronic", "Country", "R&B"];

  return (
    <div className="dropdown-container">
      <label className="flex items-center gap-2 text-white font-medium mb-2">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
        What type of music do you enjoy the most? (select up to 3)
      </label>
      <CustomDropdown
        options={musicOptions}
        value={formData.music}
        onChange={(option) => handleSelection("music", option)}
        isOpen={dropdownStates.music}
        setIsOpen={() => toggleDropdown("music")}
      />
    </div>
  );
};

export default MusicInput;
