"use client";
import React, { useState } from "react";
import Modal from "@/app/components/user/Modal_3/Modal";
import NetworkingModalContent from "@/app/components/user/Modal_3/Networking";
import axios from 'axios';
import { api } from "@/Environment/Env";
import Sidebar from "@/app/components/user/Sidebar/sidebar";

const Info_3 = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    funNightOut: "",
    networking: null,
    industry: "",
    designation: "",
    yearsOfExperience: "",
    interestedInSameIndustry: "",
    linkedinProfile: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const isStepComplete = Object.values(formData).every((value) => value !== null && value !== "");

  const handleInputChange = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }));

  const handleNetworkingChoice = (choice) => {
    setFormData((prev) => ({ ...prev, networking: choice }));
    if (choice) setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    if (!token) return console.error("No auth token found.");

    try {
      const response = await axios.post(`${api}/api/networking/submitNetworking`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status >= 200 && response.status < 300) {
        console.log("Form submitted successfully!");
        onNext();
      } else {
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response?.data?.message === "Data is already submitted once") onNext();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-full max-w-6xl bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative">
          <div className="bg-[#F4A37B] lg:rounded-tl-[15px] md:rounded-tl-[15px] rounded-tl-[12px] lg:rounded-tr-[28px] md:rounded-tr-[28px] rounded-tr-[18px] lg:rounded-br-[28px] md:rounded-br-[28px] rounded-br-[18px] w-auto inline-block lg:px-8 md:px-6 px-4 lg:py-4 md:py-4 py-3">
            <span className="text-white font-medium lg:text-lg md:text-lg text-sm">Tell us about your preferences</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-6 max-h-[80vh] overflow-y-auto gap-8">
          <Sidebar
            isStep1Complete={true} // Step 1 is complete
            isStep2Complete={true} // Step 2 is complete
            isStep3Complete={isStepComplete} // Step 3 completion status
            isStep4Complete={false} // Step 4 is incomplete
          />
          <div className="w-full md:w-3/4 space-y-8 mt-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                <h2 className="text-lg font-bold text-white">A fun night out</h2>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-gray-100">Share your interests and hobbies</label>
                <input
                  value={formData.funNightOut}
                  onChange={(e) => handleInputChange("funNightOut", e.target.value)}
                  className="w-[60%] p-3 bg-transparent rounded-lg border border-white/80 text-white focus:ring-2 focus:ring-[#F4A37B] focus:border-transparent outline-none appearance-none"
                  required
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                <h1 className="text-lg font-bold text-white">Networking</h1>
              </div>
              <div className="space-y-4">
                <label className="text-sm text-gray-100">Are you interested in professional networking?</label>
                <div className="flex gap-4">
                  {["Yes", "No"].map((choice) => (
                    <button
                      key={choice}
                      type="button"
                      onClick={() => handleNetworkingChoice(choice === "Yes")}
                      className={`px-6 py-2 rounded-lg border transition-colors ${
                        formData.networking === (choice === "Yes") ? "bg-[#F4A37B] text-white border-[#F4A37B]" : "border-gray-300 text-white hover:border-[#F4A37B] hover:bg-[#F4A37B]"
                      }`}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
              <button
                type="button"
                onClick={onBack}
                className="bg-[#F4A37B] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#f3956a] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#F4A37B] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#f3956a] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <NetworkingModalContent formData={formData} handleInputChange={handleInputChange} setIsModalOpen={setIsModalOpen} />
        </Modal>
      </div>
    </div>
  );
};

export default Info_3;