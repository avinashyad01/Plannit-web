"use client"
import React from "react";
import CustomDropdown from "./CustomDropdown";

const Venue = ({ selections, setSelections, dropdownStates, toggleDropdown }) => {
  const venueOptions = ["Food only", "Alcohol only", "Both"];

  return (
    <div className="dropdown-container">
      <label className="flex items-center gap-2 text-white mb-2">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
        What type of venues do you prefer?
      </label>
      <CustomDropdown
        options={venueOptions}
        value={selections.venues}
        onChange={(option) => setSelections({ ...selections, venues: option })}
        isOpen={dropdownStates.venues}
        setIsOpen={() => toggleDropdown("venues")}
      />
    </div>
  );
};

export default Venue;
