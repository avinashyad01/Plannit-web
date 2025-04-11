"use client"
import React from "react";
import CustomDropdown from "./CustomDropdown";

const MoviesInput = ({ formData, dropdownStates, handleSelection, toggleDropdown }) => {
  const moviesOptions = [
    "Action",
    "Comedy",
    "Drama",
    "Documentary",
    "Romance",
    "Sci-Fi",
    "Horror",
    "Animation",
  ];

  return (
    <div className="dropdown-container">
      <label className="flex items-center gap-2 text-white font-medium mb-2">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
        What type of movies do you enjoy the most? (select up to 3)
      </label>
      <CustomDropdown
        options={moviesOptions}
        value={formData.movies}
        onChange={(option) => handleSelection("movies", option)}
        isOpen={dropdownStates.movies}
        setIsOpen={() => toggleDropdown("movies")}
      />
    </div>
  );
};

export default MoviesInput;
