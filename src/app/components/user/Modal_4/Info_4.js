"use client";
import React, { useState, useEffect } from "react";
import HobbiesInput from "@/app/components/user/Modal_4/HobbiesInput";
import MoviesInput from "@/app/components/user/Modal_4/MoviesInput";
import MusicInput from "@/app/components/user/Modal_4/MoviesInput";
import CuisineInput from "@/app/components/user/Modal_4/CuisineInput";
import axios from "axios";
import { api } from "@/Environment/Env";
import Sidebar from "@/app/components/user/Sidebar/sidebar";

const Info_4 = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    hobbies: [],
    movies: [],
    music: [],
    cuisine: [],
  });

  const [dropdownStates, setDropdownStates] = useState({
    hobbies: false,
    movies: false,
    music: false,
    cuisine: false,
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const isStepComplete = Object.values(formData).every((field) => field.length > 0);

  const toggleDropdown = (dropdown) => {
    setDropdownStates((prev) => ({ ...prev, [dropdown]: !prev[dropdown] }));
  };

  const handleSelection = (dropdown, option) => {
    setFormData((prev) => ({
      ...prev,
      [dropdown]: prev[dropdown].includes(option)
        ? prev[dropdown].filter((item) => item !== option)
        : prev[dropdown].length < 3
        ? [...prev[dropdown], option]
        : prev[dropdown],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    if (!token) return console.error("No token found.");

    const payload = {
      hobbies: formData.hobbies[0] || "",
      Music: formData.music[0] || "",
      Movies: formData.movies[0] || "",
      Cuisine: formData.cuisine[0] || "",
    };

    try {
      await axios.post(`${api}/api/Hobbies/submitHobbies`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setShowSuccessModal(true);
      onNext();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="max-w-6xl w-full bg-white/40 backdrop-blur-sm rounded-2xl shadow-2xl relative lg:mt-2 md:mt-2 mt-2">
        <div className="relative">
          <div className="bg-[#F4A37B] lg:rounded-tl-[15px] md:rounded-tl-[15px] rounded-tl-[12px] lg:rounded-tr-[28px] md:rounded-tr-[28px] rounded-tr-[18px] lg:rounded-br-[28px] md:rounded-br-[28px] rounded-br-[18px] w-auto inline-block lg:px-8 md:px-6 px-4 lg:py-4 md:py-4 py-3">
            <span className="text-white font-medium lg:text-lg md:text-lg text:[10px]">Tell us about your preferences</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:p-10 md:p-8 p-4 max-h-[80vh] overflow-y-auto gap-8">
          <Sidebar
            isStep1Complete={true} // Step 1 is complete
            isStep2Complete={true} // Step 2 is complete
            isStep3Complete={true} // Step 3 is complete
            isStep4Complete={isStepComplete} // Step 4 completion status
          />
          <form onSubmit={handleSubmit} className="w-full md:w-3/4 space-y-6 mt-4">
            <div className="space-y-4">
              <HobbiesInput formData={formData} dropdownStates={dropdownStates} handleSelection={handleSelection} toggleDropdown={toggleDropdown} />
              <MoviesInput formData={formData} dropdownStates={dropdownStates} handleSelection={handleSelection} toggleDropdown={toggleDropdown} />
              <MusicInput formData={formData} dropdownStates={dropdownStates} handleSelection={handleSelection} toggleDropdown={toggleDropdown} />
              <CuisineInput formData={formData} dropdownStates={dropdownStates} handleSelection={handleSelection} toggleDropdown={toggleDropdown} />
              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={onBack}
                  className="bg-[#F4A37B] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#f3956a] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="submit"
                  className="bg-[#F4A37B] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#f3956a] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#E7E6E6] z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">AWESOME!</h2>
            <p className="text-lg font-semibold">You are ready to proceed using Meeting app</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-4 bg-[#F4A37B] text-white px-4 py-2 rounded-full hover:bg-[#f3956a] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info_4;