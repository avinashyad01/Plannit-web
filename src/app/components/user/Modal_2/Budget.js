"use client"
import React from "react";
import CustomDropdown from "./CustomDropdown";

const Budget = ({ selections, setSelections, dropdownStates, toggleDropdown }) => {
  const budgetOptions = ["Below INR 500", "INR 500-1200", "Above INR 1200"];

  return (
    <div className="dropdown-container">
      <label className="flex items-center gap-2 text-white mb-2">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
        What is your budget for the night out?
      </label>
      <CustomDropdown
        options={budgetOptions}
        value={selections.budget}
        onChange={(option) => setSelections({ ...selections, budget: option })}
        isOpen={dropdownStates.budget}
        setIsOpen={() => toggleDropdown("budget")}
      />
    </div>
  );
};

export default Budget;
