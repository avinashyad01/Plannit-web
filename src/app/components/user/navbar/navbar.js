"use client";
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Profile from "@/app/user/profile/page";

const Navbar = ({
  openLoginModal,
  openSignupModal,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="lg:py-4 md:py-2 py-2 shadow-md bg-white">
      <div className="lg:mx-16 md:mx-4 mx-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="lg:h-10 md:h-8 h-8"
          />
        </Link>
        {/* Navigation Links */}
        <div className="lg:space-x-8 md:space-x-6 space-x-2 text-textcol lg:text-[18px] md:text-[16px] text-[14px] font-medium">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "text-textcol font-bold border-b-4 border-textcol"
                : "hover:text-blue-400"
            } transition duration-300`}
          >
            Home
          </Link>
          <Link
            href="/user/about"
            className={`${
              pathname === "/about"
                ? "text-textcol font-bold border-b-4 border-textcol"
                : "hover:text-blue-400"
            } transition duration-300`}
          >
            About Us
          </Link>
          <Link
            href="/user/blogs"
            className={`${
              pathname === "/blogs"
                ? "text-textcol font-bold border-b-4 border-textcol"
                : "hover:text-blue-400"
            } transition duration-300`}
          >
            Blogs
          </Link>
        </div>
        {/* Profile or Auth Buttons */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <Profile /> // Show Profile if logged in
          ) : (
            <>
              {/* Desktop Login and Signup Buttons */}
              <div className="lg:flex md:flex hidden space-x-4">
                <button
                  onClick={openLoginModal}
                  className="border border-textcol hover:bg-black hover:text-white text-textcol lg:px-4 md:px-4 px-2 lg:py-2 md:py-2 py-1 rounded-md transition duration-300"
                >
                  Login
                </button>
                <button
                  onClick={openSignupModal}
                  className="bg-textcol hover:bg-black text-white lg:px-4 md:px-4 px-2 lg:py-2 md:py-2 py-1 rounded-md transition duration-300"
                >
                  Signup
                </button>
              </div>
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden md:hidden border border-gray-900 hover:bg-black hover:text-white text-textcol lg:p-2 md:p-2 p-1 rounded-md transition duration-300"
              >
                <Menu className="lg:w-6 md:w-6 w-4 lg:h-6 md:h-6 h-4" />
              </button>
            </>
          )}
        </div>
      </div>
      {/* Mobile Menu - Only show if not logged in */}
      {isMenuOpen && !isLoggedIn && (
        <div className="lg:hidden flex flex-col items-center space-y-2 bg-white py-4 shadow-md">
          <button
            onClick={openLoginModal}
            className="border border-textcol hover:bg-black hover:text-white text-textcol px-4 py-2 rounded-md transition duration-300"
          >
            Login
          </button>
          <button
            onClick={openSignupModal}
            className="bg-textcol hover:bg-black text-white px-4 py-2 rounded-md transition duration-300"
          >
            Signup
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;