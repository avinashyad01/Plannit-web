"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, HelpCircle, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogoutModal from "@/app/user/profile/page"; // Import the LogoutModal component

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown container
  const router = useRouter();

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
    setIsOpen(false);
  };

  const handleLogoutConfirm = () => {
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("token");
    setShowLogoutModal(false);
    window.location.reload(); // Force a full page refresh
  };

  // Get the logged-in user's name from sessionStorage
  const userName = sessionStorage.getItem('userName');

  // Close the dropdown when clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener
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
                <div className="w-8 h-8 rounded-full border border-[#000000] flex items-center justify-center">
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
                  <Link href="/user/editprofile">
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
      
      {/* Use the LogoutModal component */}
      <LogoutModal
        showLogoutModal={showLogoutModal}
        setShowLogoutModal={setShowLogoutModal}
        handleLogoutConfirm={handleLogoutConfirm}
      />
    </>
  );
};

export default Profile;
