"use client";
import React, { useState } from "react";
import { LayoutGrid, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutModal from "@/app/components/restaurant/Modal/logout"; 

const Sidebar = () => {
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [activeLink, setActiveLink] = useState(pathname);

  const handleLogoutClick = () => {
    setActiveLink('logout'); 
    setShowLogoutModal(true); 
  };

  // const handleCancelLogout = () => {
  //   setShowLogoutModal(false); // Close the modal without logging out
  //   setActiveLink(''); // Reset the active state (unhighlight all buttons)
  // };

  return (
    <>
      <div className="w-64 min-h-screen bg-black text-white flex flex-col p-4">
        <div className="relative w-32 h-32 mt-4">
          <img src="/images/logo_footer.png" alt="Username" className="" />
        </div>
        <nav>
          <Link 
            href="/restaurant/table" 
            className={`py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center ${
              pathname === "/restaurant/table" || activeLink === 'table' ? "bg-[#FFFFFF] text-customorange" : ""
            }`}
            onClick={() => setActiveLink("/restaurant/table")}
          >
            <LayoutGrid className="w-5 h-5 mr-3" />
            Tables
          </Link>

          <button
            onClick={handleLogoutClick}
            className={`w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center ${
              activeLink === 'logout' ? "bg-[#FFFFFF] text-customorange" : "" // Highlight Logout button when clicked
            }`}
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </nav>
      </div>
      
       {/* Logout Confirmation Modal */}
       {showLogoutModal && <LogoutModal onClose={() => setShowLogoutModal(false)} />}
    
    </>
  );
};

export default Sidebar;
