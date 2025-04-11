"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/components/admin/sidebar/sidebar";
import Header from "@/app/components/header/header";
import axios from "axios";
import { api } from "@/Environment/Env";

const AddRestaurant = () => {
  const router = useRouter();
  const [restaurant, setRestaurant] = useState({
    restaurantName: "",
    gstNumber: "",
    state: "",
    city: "",
    area: "",
    locality: "",
    street: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const postData = {
        restaurantName: restaurant.restaurantName,
        gstNumber: restaurant.gstNumber,
        location: {
          type: "Point",
          coordinates: [-112.4567, 65.852], // Longitude, Latitude
        },
        username: restaurant.username,
        password: restaurant.password,
        state: restaurant.state,
        city: restaurant.city,
        area: restaurant.area,
        locality: restaurant.locality,
        street: restaurant.street,
      };

      const authToken = sessionStorage.getItem("token");

      const response = await axios.post(
        `${api}/api/admin/restaurant_login/createLoginId`,
        postData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("Restaurant Added Successfully:", response.data);
      router.push("/admin/restaurants");
    } catch (error) {
      console.error("Error adding restaurant:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FFEFD2] min-h-screen flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-4">
          <h3 className="lg:text-2xl md:text-xl text-lg font-semibold text-black">Restaurant</h3>
        </div>
        <hr className="border-t border-[#a9a8aa]" />
        <div className="p-4">
          <p className="lg:text-2xl md:text-xl text-lg font-semibold mb-4 text-black">
            Add Restaurant Details Here
          </p>
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
                    placeholder={`Enter ${key.replace(/([A-Z])/g, " $1")}`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                className="px-4 py-2 bg-customorange text-white rounded hover:bg-red-600"
                onClick={() => router.push("/admin/restaurants")}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-textcol text-white rounded hover:bg-blue-800"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurant;
