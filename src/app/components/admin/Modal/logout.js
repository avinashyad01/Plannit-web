"use client";
import React from "react";
import { X } from "lucide-react";

const LogoutModal = ({ onClose }) => {
  const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userName"); // Clear userName
    sessionStorage.removeItem("password"); // Clear password
    sessionStorage.removeItem("fcmToken"); // Clear fcmToken (if used)

    // Redirect to home page after logout
    window.location.href = "/"; 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ml-64">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-96 z-50">
        {/* Close Button (X) */}
        <button 
          className="absolute top-2 right-2 border border-gray-400 rounded-md p-1 hover:bg-gray-200 transition"
          onClick={onClose} // Close the modal
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        <h2 className="text-xl font-semibold mb-2 text-center">Confirm Logout</h2>
        <p className="text-gray-600 text-center">Are you sure you want to log out?</p>

        {/* Centered Logout Button */}
        <div className="flex justify-center mt-4">
          <button
            className="px-6 py-2 bg-text_col text-white rounded hover:bg-red-600 transition"
            onClick={handleLogout} // Trigger logout function
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
