// Info_1.js
"use client";
import React, { useState } from "react";
import axios from 'axios';
import { api } from "@/Environment/Env";
import Sidebar from "@/app/components/user/Sidebar/sidebar";

const Info_1 = ({ onNext }) => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", yourAge: "", City: "", State: "", Country: "",
    spokenLanguage: "", language: "English", occupation: "", gender: "", hobbies: [], lat: 0, lng: 0,
  });

  const [isStep1Complete, setIsStep1Complete] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    checkFormCompletion();
  };

  const checkFormCompletion = () => {
    const isComplete = Object.entries(formData).every(([key, value]) => 
      key === "hobbies" ? Array.isArray(value) && value.length > 0 : value.toString().trim() !== ""
    );
    setIsStep1Complete(isComplete);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    if (!token) return console.error("No authentication token found");

    try {
      const response = await axios.post(`${api}/api/personal-information/submitUserData`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status === 200) {
        console.log("Form submitted successfully!");
        onNext();
      } else {
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const renderInput = (label, field, type = "text", options = []) => (
    <div>
      <label className="block text-white mb-2">{label}</label>
      {type === "select" ? (
        <select
          value={formData[field]}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className="w-full p-3 rounded-lg bg-transparent border border-white/80 text-white focus:ring-2 focus:ring-[#F4A37B] focus:border-transparent outline-none appearance-none"
          required
        >
          <option value="" className="bg-gray-800">Select Your {label}</option>
          {options.map(option => (
            <option key={option.value} value={option.value} className="bg-gray-800">{option.label}</option>
          ))}
        </select>
      ) : type === "radio" ? (
        <div className="flex flex-wrap gap-6">
          {options.map(option => (
            <label key={option} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name={field}
                value={option}
                checked={formData[field] === option}
                onChange={(e) => handleInputChange(field, e.target.value)}
                className="hidden peer"
                required
              />
              <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center peer-checked:bg-[#F4A37B] peer-checked:border-[#F4A37B]">
                <span className="opacity-0 peer-checked:opacity-100 text-white">✓</span>
              </div>
              <span className="text-white">{option}</span>
            </label>
          ))}
        </div>
      ) : (
        <input
          type={type}
          value={formData[field]}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className="w-full p-3 rounded-lg bg-transparent border border-white/80 text-white focus:ring-2 focus:ring-[#F4A37B] focus:border-transparent outline-none"
          required
        />
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 mx-4">
      <div className="w-full max-w-6xl mx-auto bg-white/40 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden pb-4">
        <div className="relative">
          <div className="bg-[#F4A37B] lg:rounded-tl-[8px] md:rounded-tl-[15px] rounded-tl-[18px] lg:rounded-tr-[28px] md:rounded-tr-[28px] rounded-tr-[18px] lg:rounded-br-[28px] md:rounded-br-[28px] rounded-br-[18px] w-auto inline-block lg:px-8 md:px-6 px-4 lg:py-4 md:py-4 py-3">
            <span className="text-white font-medium lg:text-lg md:text-lg text-sm">Tell us about your preferences</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-4 px-4 max-h-[80vh] overflow-y-auto">
          <Sidebar
            isStep1Complete={isStep1Complete}
            isStep2Complete={false}
            isStep3Complete={false}
            isStep4Complete={false}
          />
          <div className="w-full md:w-3/4">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderInput("First name", "firstName")}
                {renderInput("Last name", "lastName")}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderInput("E-mail", "email", "email")}
                {renderInput("Your age", "yourAge", "number")}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderInput("Country", "Country", "select", [{ value: "India", label: "India" }, { value: "Thailand", label: "USA" }])}
                {renderInput("State", "State", "select", [{ value: "Bengaluru ", label: "Bengaluru Rural," }])}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderInput("City", "City", "select", [{ value: "Ramanagara", label: "Ramanagara" }, { value: "Kolar", label: "Kolar" }])}
                {renderInput("Which Language Do You Speak?", "spokenLanguage", "select", [{ value: "English", label: "English" }, { value: "Hindi", label: "Hindi" }])}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {renderInput("Your Occupation?", "occupation", "select", [{ value: "Developer", label: "Developer" }, { value: "Designer", label: "Designer" }])}
                {renderInput("I am a", "gender", "radio", ["Female", "Male", "Others"])}
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-[#F4A37B] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#f3956a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
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

export default Info_1;