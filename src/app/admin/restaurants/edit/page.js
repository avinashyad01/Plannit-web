"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Sidebar from "@/app/components/admin/sidebar/sidebar";
import Header from "@/app/components/header/header";
import axios from "axios"; // Import Axios
import { api } from "@/Environment/Env"; // Import API base URL

const EditRestaurant = () => {
  const router = useRouter(); // Initialize useRouter
  const [restaurant, setRestaurant] = useState({
    name: "White Paper",
    gstNumber: "12345",
    state: "Karnataka",
    cities: "Bangalore",
    area: "Red Square",
    locality: "Abc",
    street: "Major Ab N",
    building: "Red Feather",
    phoneNumber: "0009998881",
    restaurantId: "Abcd12343",
    password: "0009998881",
  });
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    setLoading(true); // Start loading
    try {
      const token = sessionStorage.getItem("token"); // Get token from sessionStorage

      // Prepare the data to be sent to the API
      const updateData = {
        restaurantName: restaurant.name,
        gstNumber: restaurant.gstNumber,
        state: restaurant.state,
        city: restaurant.cities,
        area: restaurant.area,
        locality: restaurant.locality,
        street: restaurant.street,
        building: restaurant.building,
        phoneNumber: restaurant.phoneNumber,
        username: restaurant.restaurantId,
        password: restaurant.password,
      };

      // Make the API call to update the restaurant
      const response = await axios.put(`${api}/api/admin/restaurant_login/${restaurant.restaurantId}`, // Use restaurantId as the endpoint parameter
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to the Authorization header
          },
        }
      );

      console.log("Restaurant Updated Successfully:", response.data);

      // Redirect to /admin/restaurants after successful update
      router.push("/admin/restaurants");
    } catch (error) {
      console.error("Error updating restaurant:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="bg-[#FFEFD2] min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-4">
          <h3 className="text-xl font-semibold">Restaurant</h3>
        </div>
        <hr className="border-t border-[#a9a8aa]" />
        <div className="p-4">
          <p className="text-lg mb-4 font-semibold">Edit Restaurant Details Here</p>
          <div className="bg-[#FDF1DD] p-6 rounded-lg shadow-md border border-[#cac7c1]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(restaurant).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-6 space-x-4">
              <button
                className="px-4 py-2 bg-customorange text-white rounded hover:bg-red-600"
                onClick={() => router.push("/admin/restaurants")} // Redirect to restaurants page on cancel
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-textcol text-white rounded hover:bg-blue-800"
                onClick={handleUpdate}
                disabled={loading} // Disable button while loading
              >
                {loading ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRestaurant;