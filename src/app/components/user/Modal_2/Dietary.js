"use client"
import React from "react";
import CustomDropdown from "./CustomDropdown";

const Dietary = ({ selections, setSelections, dropdownStates, toggleDropdown }) => {
  const dietaryOptions = ["Veg Only", "Non-Veg only", "No Restrictions"];

  return (
    <div className="dropdown-container">
      <label className="flex items-center gap-2 text-white mb-2">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
        What are your dietary preferences?
      </label>
      <CustomDropdown
        options={dietaryOptions}
        value={selections.dietary}
        onChange={(option) => setSelections({ ...selections, dietary: option })}
        isOpen={dropdownStates.dietary}
        setIsOpen={() => toggleDropdown("dietary")}
      />
    </div>
  );
};

export default Dietary;
