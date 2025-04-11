"use client"
import React from "react";
import CustomDropdown from "./CustomDropdown";

const GirlsGroup = ({ selections, setSelections, dropdownStates, toggleDropdown }) => {
  const girlsGroupOptions = ["Yes", "No", "No Preference"];

  return (
    <div className="dropdown-container">
      <label className="flex items-center gap-2 text-white mb-2">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
        Would you like an all-girls group? (for women)
      </label>
      <CustomDropdown
        options={girlsGroupOptions}
        value={selections.girlsGroup}
        onChange={(option) => setSelections({ ...selections, girlsGroup: option })}
        isOpen={dropdownStates.girlsGroup}
        setIsOpen={() => toggleDropdown("girlsGroup")}
      />
    </div>
  );
};

export default GirlsGroup;
