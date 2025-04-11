"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { MoreVertical, Edit, Trash2 } from "lucide-react";
import Sidebar from "@/app/components/admin/sidebar/sidebar";
import axios from "axios";
import DeleteConfirmationModal from "@/app/admin/restaurants/delete/page";
import { api } from "@/Environment/Env";

const RestaurantTable = () => {
  const router = useRouter();
  const [restaurants, setRestaurants] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [restaurantToDelete, setRestaurantToDelete] = useState(null);
  const dropdownRef = useRef(null);

  // Fetch restaurant data from the API
  const fetchRestaurants = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get(`${api}/api/admin/restaurant_login/getRestaurantName`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRestaurants(response.data); // Update state with fetched restaurants
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleMoreClick = (id, event) => {
    const rect = event.target.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + window.scrollY + 5,
      left: rect.left + window.scrollX - 50,
    });

    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleDeleteClick = (id) => {
    setRestaurantToDelete(id);
    setIsDeleteModalOpen(true);
    setActiveDropdown(null);
  };

  const handleDeleteSuccess = () => {
    fetchRestaurants(); // Refetch restaurants after deletion
    setIsDeleteModalOpen(false); // Close the modal
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-[#FFEFD2] min-h-screen">
      <Sidebar />
      <div className="flex justify-between items-center lg:mt-4 md:mt-4 mt-2 p-4">
        <h1 className="text-2xl font-semibold">Restaurant</h1>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          onClick={() => router.push("/admin/restaurants/add")}
        >
          Add +
        </button>
      </div>
      <hr className="border-t border-gray-500" />

      <div className="overflow-x-auto p-4">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm bg-white">
          <thead>
            <tr className="border-b bg-white">
              <th className="p-2 text-center">Restaurant Id</th>
              <th className="p-2 text-center">Password</th>
              <th className="p-2 text-center">Name</th>
              <th className="p-2 text-center hidden md:table-cell">State</th>
              <th className="p-2 text-center hidden md:table-cell">Cities</th>
              <th className="p-2 text-center hidden lg:table-cell">Area</th>
              <th className="p-2 text-center hidden lg:table-cell">Locality</th>
              <th className="p-2 text-center hidden xl:table-cell">Street</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant) => (
              <tr key={restaurant._id} className="bg-white">
                <td className="p-2">{restaurant.id}</td>
                <td className="p-2 ">{restaurant.password}</td>
                <td className="p-2">{restaurant.Name}</td>
                <td className="p-2 hidden md:table-cell">{restaurant.state}</td>
                <td className="p-2 hidden md:table-cell border-r">{restaurant.city}</td>
                <td className="p-2 hidden lg:table-cell border-r">{restaurant.area}</td>
                <td className="p-2 hidden lg:table-cell border-r">{restaurant.locality}</td>
                <td className="p-2 hidden xl:table-cell border-r">{restaurant.street}</td>
                <td className="p-2 relative ">
                  <MoreVertical
                    className="h-6 w-6 text-black font-extrabold cursor-pointer z-10"
                    onClick={(event) => handleMoreClick(restaurant._id, event)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dropdown Menu (Outside the Table) */}
      {activeDropdown && (
        <div
          ref={dropdownRef}
          className="absolute right-0 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          style={{
            top: dropdownPosition.top,
            left: dropdownPosition.left,
            zIndex: 50,
          }}
        >
          <button
            className="flex items-center w-full px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => router.push("/admin/restaurants/edit")}
          >
            <Edit className="w-4 h-4 mr-2" /> Edit
          </button>
          <hr className="border-gray-200" />
          <button
            className="flex items-center w-full px-2 py-1 text-sm text-red-500 hover:bg-gray-100"
            onClick={() => handleDeleteClick(activeDropdown)}
          >
            <Trash2 className="w-4 h-4 mr-2" /> Delete
          </button>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        restaurantId={restaurantToDelete}
        onDeleteSuccess={handleDeleteSuccess}
      />
    </div>
  );
};

export default RestaurantTable;