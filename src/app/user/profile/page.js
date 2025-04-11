"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, HelpCircle, LogOut, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dropdownRef = useRef(null); 
  const router = useRouter();
  const handleLogoutClick = () => {
    setShowLogoutModal(true);
    setIsOpen(false);
  };
  const handleLogoutConfirm = () => {
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("token");
    setShowLogoutModal(false);
    window.location.reload(); 
  };
  // Get the logged-in user's name from sessionStorage
  const userName = sessionStorage.getItem('userName');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative">
        {/* Profile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center lg:gap-2 md:gap-2 gap-0 rounded-lg p-2"
        >
          <div className="flex items-center justify-center">
            <img
              src="/images/profiles.png"
              alt="Profile"
              className="lg:h-10 md:h-8 h-6"
            />
          </div>
          <ChevronDown className="w-6 h-6 text-[#141414]" />
        </button>
        {/* Dropdown Menu */}
        {isOpen && (
          <div
            ref={dropdownRef} // Attach the ref here
            className="absolute right-0 top-12 w-64 bg-[#FFFFFF] rounded-lg shadow-lg border border-gray-200 lg:z-10 md:z-100 z-100"
          >
            {/* Profile Section */}
            <div className="p-2 border-b border-[#C8C8C8]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#000000] flex items-center justify-center">
                  <span className="text-[#2C2C2C] font-medium">
                    {userName ? userName.charAt(0) : "A"} {/* Display first letter of userName */}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#2C2C2C]">
                    {userName ? userName : "Guest"} {/* Display full userName */}
                  </p>
                  <p className="text-sm text-[#5B5B5B]">
                    {userName ? `${userName.toLowerCase()}@example.com` : "guest@example.com"}
                  </p>
                  <Link href="/user/profile/editprofile">
                    <button className="text-sm text-customorange hover:text-customorange font-bold">
                      Edit Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Menu Items */}
            <div className="border-t border-[#C8C8C8]">
              <Link href="/user/help">
                <p className="w-full px-4 py-2 text-left text-md font-semibold text-[#2C2C2C] hover:bg-gray-100 flex items-center gap-2 border-b border-[#C8C8C8]">
                  <HelpCircle className="w-6 h-6" />
                  Help
                </p>
              </Link>
              <button
                onClick={handleLogoutClick}
                className="w-full px-4 py-2 text-left text-md font-semibold text-[#2C2C2C] hover:bg-gray-100 flex items-center gap-2 border-b border-[#C8C8C8]">
                <LogOut className="w-6 h-6" />
                Log out
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 backdrop-blur-md">
          {/* Backdrop */}
          <div className="absolute inset-0 " />
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
                You will be logged out of your account. Make sure to save your
                work before proceeding.
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
export default Profile;
