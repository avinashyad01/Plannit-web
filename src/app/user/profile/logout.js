// components/LogoutModal.js
"use client";
import React from 'react';
import { X } from 'lucide-react';

const LogoutModal = ({ showLogoutModal, setShowLogoutModal, handleLogoutConfirm }) => {
  return (
    <>
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 backdrop-blur-md">
          {/* Backdrop */}
          <div className="absolute inset-0" />

          {/* Modal */}
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg w-[400px] max-w-[90%]">
            <div className="absolute right-4 top-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="text-[#000000] hover:text-gray-700 border-2 border-black rounded-md"
              >
                <X className="w-5 h-5 " />
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-lg font-bold text-center mb-2">
                Are You Sure You Want to Log Out?
              </h2>
              <p className="text-[#000000] font-normal text-center mb-6 text-sm">
                You will be logged out of your account. Make sure to save your work before proceeding.
              </p>
              <button
                onClick={handleLogoutConfirm}
                className="w-full bg-[#09264B] text-white py-2 rounded-md hover:bg-[#002B5B]/90 transition-colors"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutModal;
