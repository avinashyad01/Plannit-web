"use client"
import React from "react";
import CustomDropdown from "./CustomDropdown";

const HobbiesInput = ({ formData, dropdownStates, handleSelection, toggleDropdown }) => {
  const hobbiesOptions = [
    "CARS & BIKES",
    "COOKING & BAKING",
    "CRICKET",
    "CYCLING",
    "FOOTBALL",
    "GARDENING",
    "MEDITATION",
    "TENNIS",
    "OUTDOOR SPORTS",
    "GIVING BACK",
    "PAINTING",
    "PHOTOGRAPHY",
    "DRAWING",
    "DANCING",
    "PODCASTING",
    "READING",
    "SWIMMING",
    "HIKING & TREKKING",
    "SINGING & INSTRUMENTS",
    "TRAVELING",
    "VIDEO GAMING",
    "YOGA",
  ];

  return (
    <div className="dropdown-container">
      <label className="flex items-center gap-2 text-white font-medium mb-2">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
        What are your top hobbies? (select up to 3)
      </label>
      <CustomDropdown
        options={hobbiesOptions}
        value={formData.hobbies}
        onChange={(option) => handleSelection("hobbies", option)}
        isOpen={dropdownStates.hobbies}
        setIsOpen={() => toggleDropdown("hobbies")}
      />
    </div>
  );
};

export default HobbiesInput;
