"use client"
import React from "react";
import CustomDropdown from "./CustomDropdown";

const CuisineInput = ({ formData, dropdownStates, handleSelection, toggleDropdown }) => {
  const cuisineOptions = [
    "Italian",
    "Chinese",
    "Indian",
    "Mexican",
    "Japanese",
    "Thai",
    "Korean",
    "Mediterranean",
    "French",
    "Spanish",
    "Middle Eastern",
    "Vietnamese",
    "Greek",
    "Lebanese",
  ];

  return (
    <div className="dropdown-container">
      <label className="flex items-center gap-2 text-white font-medium mb-2">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
        What is your favourite type of cuisine?
      </label>
      <CustomDropdown
        options={cuisineOptions}
        value={formData.cuisine}
        onChange={(option) => handleSelection("cuisine", option)}
        isOpen={dropdownStates.cuisine}
        setIsOpen={() => toggleDropdown("cuisine")}
      />
    </div>
  );
};

export default CuisineInput;
