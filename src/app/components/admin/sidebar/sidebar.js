"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LayoutGrid, BookOpen, Store, LogOut } from "lucide-react";
import LogoutModal from "@/app/components/admin/Modal/logout"; 

const Sidebar = () => {
  const pathname = usePathname();  // Get current route
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  return (
    <>
      <div className="bg-black text-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform -translate-x-full 
       md:translate-x-0 transition duration-200 ease-in-out min-h-screen">
        <div className="relative w-32 h-32 mt-4">
          <img src="/images/logo_footer.png" alt="Username" />
        </div>
        <nav>
          <Link 
            href="/admin/tables" 
            className={`py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center ${
              pathname.startsWith("/admin/tables") ? "bg-[#FFFFFF] text-customorange" : ""
            }`}
          >
            <LayoutGrid className="w-5 h-5 mr-3" />
            Tables
          </Link>
          <Link 
            href="/admin/blog" 
            className={`py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center ${
              pathname.startsWith("/admin/blog") ? "bg-[#FFFFFF] text-customorange" : ""
            }`}
          >
            <BookOpen className="w-5 h-5 mr-3" />
            Blog
          </Link>
          <Link 
            href="/admin/restaurants" 
            className={`py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center ${
              pathname.startsWith("/admin/restaurants") ? "bg-[#FFFFFF] text-customorange" : ""
            }`}
          >
            <Store className="w-5 h-5 mr-3" />
            Restaurants
          </Link>
          
          <button
            onClick={handleLogoutClick}
            className={`w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center ${
              showLogoutModal ? "bg-[#FFFFFF] text-customorange" : ""
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
