"use client";
import React, { useState } from 'react';
import Modal from './Modal';
import NetworkingModalContent from './Networking';

const Info_3 = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    nightOutPreference: '',
    isNetworking: null,
    industry: '',
    designation: '',
    experience: '',
    experienceLevel: '',
    meetingPreference: '',
    linkedinProfile: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formProgress, setFormProgress] = useState({
    nightOut: false,
    networking: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    updateProgress();
  };

  const handleNetworkingChoice = (choice) => {
    setFormData(prev => ({
      ...prev,
      isNetworking: choice
    }));
    if (choice) {
      setIsModalOpen(true);
    }
    updateProgress();
  };

  const updateProgress = () => {
    setFormProgress(prev => ({
      ...prev,
      nightOut: formData.nightOutPreference.trim() !== '',
      networking: formData.isNetworking !== null
    }));
  };

  const ProgressCheckmark = ({ isComplete }) => (
    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
      isComplete ? 'bg-green-500' : 'bg-gray-200'
    }`}>
      <svg 
        className={`w-4 h-4 ${isComplete ? 'text-white' : 'text-gray-600'}`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M5 13l4 4L19 7" 
        />
      </svg>
    </div>
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-full max-w-5xl bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
        {/* Header section with a colored background */}
        <div className="bg-[#F4A37B] lg:rounded-tl-[15px] md:rounded-tl-[15px] rounded-tl-[12px] lg:rounded-tr-[28px] md:rounded-tr-[28px] rounded-tr-[18px] lg:rounded-br-[28px] md:rounded-br-[28px] rounded-br-[18px] p-6">
          <span className="text-white font-medium lg:text-lg md:text-lg text-sm">
            Tell us about your preferences
          </span>
        </div>

        {/* Form content */}
        <div className="p-6 space-y-8">
          {/* Night Out Preferences */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ProgressCheckmark isComplete={formProgress.nightOut} />
              <h2 className="text-lg font-semibold">A fun night out</h2>
            </div>
            <div>
      <div className="flex items-center gap-2 mb-2">
      <div className="w-1.5 h-1.5 bg-white rounded-full" />
      <label className="text-md text-white">Share your interests and hobbies</label>
        </div>
      <input
        value={formData.nightOutPreference || ''}
        onChange={(e) => handleInputChange('nightOutPreference', e.target.value)}
        className="w-full p-3 border border-white rounded-lg focus:ring-2 focus:ring-[#F4A37B] bg-transparent text-white"
      />
    </div>
          </div>
          {/* Networking Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ProgressCheckmark isComplete={formProgress.networking} />
              <h1 className="text-lg font-semibold">Networking</h1>
            </div>
            <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
        <label className="text-md text-white">Are you interested in professional networking?</label>
              </div>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => handleNetworkingChoice(true)}
          className={`px-6 py-2 rounded-lg border transition-colors ${
            formData.isNetworking === true
              ? 'bg-[#F4A37B] text-white border-[#F4A37B]'
              : 'border-gray-300 text-white hover:border-[#F4A37B] hover:bg-[#F4A37B]'
          }`}
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => handleNetworkingChoice(false)}
          className={`px-6 py-2 rounded-lg border transition-colors ${
            formData.isNetworking === false
              ? 'bg-[#F4A37B] text-white border-[#F4A37B]'
              : 'border-gray-300 text-white hover:border-[#F4A37B] hover:bg-[#F4A37B]'
          }`}
        >
          No
        </button>
      </div>
    </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={onBack}
              className="bg-[#F4A37B] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#f3956a] transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={onNext}
              className="bg-[#F4A37B] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#f3956a] transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Networking Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NetworkingModalContent 
          formData={formData} 
          handleInputChange={handleInputChange} 
          setIsModalOpen={setIsModalOpen} 
        />
      </Modal>
    </div>
  );
};

export default Info_3;