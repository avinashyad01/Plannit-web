"use client";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/Logo.png" alt="Logo" className="w-32 h-auto" />
        </div>
        <div className="lg:hidden">
          <button className="text-3xl" onClick={toggleSidebar}>
            ☰
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
