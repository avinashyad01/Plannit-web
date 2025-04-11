"use client";
import React from 'react';
const Networking = ({ formData, handleInputChange, setIsModalOpen }) => {
  const handleSave = () => {
    // Save the data and close the modal
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold hidden sm:block">Networking Details</h2>
      <div className="grid gap-6 sm:gap-8">
        {/* Industry Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Which industry do you work in?
          </label>
          <input
            type="text"
            value={formData.industry}
            onChange={(e) => handleInputChange('industry', e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-coral-400 text-base"
            placeholder="Enter your industry"
          />
        </div>
        {/* Designation Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            What is your current designation?
          </label>
          <input
            type="text"
            value={formData.designation}
            onChange={(e) => handleInputChange('designation', e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-coral-400 text-base"
            placeholder="Enter your designation"
          />
        </div>
        {/* Experience Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Years of experience
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <input
              type="number"
              value={formData.yearsOfExperience}
              onChange={(e) => handleInputChange('yearsOfExperience', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-coral-400 text-base"
              placeholder="Years"
              min="0"
              max="50"
            />
          </div>
        </div>
        {/* LinkedIn Profile Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            LinkedIn profile link
          </label>
          <div className="flex items-center gap-2 p-3 border rounded-lg bg-gray-50">
            <span className="text-gray-500">linkedin.com/in/</span>
            <input
              type="text"
              value={formData.linkedinProfile}
              onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
              className="flex-1 bg-transparent focus:outline-none text-base"
              placeholder="username"
            />
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-6">
        <button
          className="w-full sm:w-auto order-2 sm:order-1 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="w-full sm:w-auto order-1 sm:order-2 px-6 py-2 bg-coral-400 text-white rounded-lg hover:bg-coral-500"
          onClick={handleSave}
        >
          Save Details
        </button>
      </div>
    </div>
  );
};

export default Networking;