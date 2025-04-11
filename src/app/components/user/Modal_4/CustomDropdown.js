"use client";
import React from "react";

const CustomDropdown = ({ options, value, onChange, isOpen, setIsOpen }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value.join(", ")}
        onClick={() => setIsOpen(true)}
        readOnly
        className="w-full p-3 rounded-lg bg-transparent border border-white/80 text-white 
                focus:ring-2 focus:ring-[#F4A37B] focus:border-transparent outline-none cursor-pointer"
      />
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white rounded-lg shadow-lg z-10 overflow-y-auto max-h-40">
          {options.map((option, index) => (
            <label
              key={index}
              className="flex items-center gap-2 p-3 hover:bg-gray-200 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={value.includes(option)}
                onChange={() => onChange(option)}
                className="w-4 h-4"
              />
              <span className="text-gray-800">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
