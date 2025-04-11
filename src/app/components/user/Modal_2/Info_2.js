// Info_2.js
"use client";
import React, { useState, useEffect } from "react";
import Dietary from "@/app/components/user/Modal_2/Dietary";
import Venue from "@/app/components/user/Modal_2/Venue";
import GirlsGroup from "@/app/components/user/Modal_2/GirlsGroup";
import Budget from "@/app/components/user/Modal_2/Budget";
import axios from 'axios';
import { api } from "@/Environment/Env";
import Sidebar from "@/app/components/user/Sidebar/sidebar";

const Info_2 = ({ onNext, onBack }) => {
  const [dropdownStates, setDropdownStates] = useState({ dietary: false, venues: false, girlsGroup: false, budget: false });
  const [selections, setSelections] = useState({ dietary: "", venues: "", girlsGroup: "", budget: "" });
  const isFormComplete = Object.values(selections).every(value => value.trim() !== "");

  const toggleDropdown = (dropdown) => setDropdownStates(prev => ({ ...prev, [dropdown]: !prev[dropdown] }));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setDropdownStates({ dietary: false, venues: false, girlsGroup: false, budget: false });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async () => {
    if (!isFormComplete) return alert("Please fill out all fields before proceeding.");
    const formData = {
      Diet: selections.dietary,
      Venue: selections.venues,
      All_girls: selections.girlsGroup,
      Budget: selections.budget,
    };

    try {
      const token = sessionStorage.getItem("token");
      if (!token) return alert("No authentication token found.");
      const response = await axios.post(`${api}/api/Interest-hobbies/submitUserInterest`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status !== 200) throw new Error("Failed to submit form data");
      console.log("Form submitted successfully:", response.data);
      onNext();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-full max-w-6xl bg-white/50 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative">
          <div className="bg-[#F4A37B] lg:rounded-tl-[15px] md:rounded-tl-[15px] rounded-tl-[12px] lg:rounded-tr-[28px] md:rounded-tr-[28px] rounded-tr-[18px] lg:rounded-br-[28px] md:rounded-br-[28px] rounded-br-[18px] w-auto inline-block lg:px-8 md:px-6 px-4 lg:py-4 md:py-4 py-3">
            <span className="text-white font-medium lg:text-lg md:text-lg text-sm">Tell us about your preferences</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:p-8 md:p-8 p-4 max-h-[80vh] overflow-y-auto">
          <Sidebar
            isStep1Complete={true} // Step 1 is complete
            isStep2Complete={isFormComplete} // Step 2 completion status
            isStep3Complete={false} // Step 3 is incomplete
            isStep4Complete={false} // Step 4 is incomplete
          />
          <div className="w-full md:w-3/4">
            <form className="space-y-6">
              <Dietary selections={selections} setSelections={setSelections} dropdownStates={dropdownStates} toggleDropdown={toggleDropdown} />
              <Venue selections={selections} setSelections={setSelections} dropdownStates={dropdownStates} toggleDropdown={toggleDropdown} />
              <GirlsGroup selections={selections} setSelections={setSelections} dropdownStates={dropdownStates} toggleDropdown={toggleDropdown} />
              <Budget selections={selections} setSelections={setSelections} dropdownStates={dropdownStates} toggleDropdown={toggleDropdown} />
              <div className="flex justify-end gap-4 mt-8">
                <button type="button" onClick={onBack} className="bg-[#F4A37B] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#f3956a] transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button type="button" onClick={handleSubmit} disabled={!isFormComplete} className="bg-[#F4A37B] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#f3956a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info_2;