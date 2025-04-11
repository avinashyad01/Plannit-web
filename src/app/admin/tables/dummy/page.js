"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "@/Environment/Env";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("Accepted");
  const [data, setData] = useState([]);

  const dropdownOptions = {
    cities: ["Indoor", "ABC", "BCD", "MNG"],
    area: ["Indoor", "ABC", "BCD", "MNG"],
    restaurants: ["Old Monk", "Red Owl", "Night Partner", "Table 4"],
  };

  const fetchData = async (status) => {
    try {
      const token = sessionStorage.getItem("token"); // Get token from sessionStorage
      const response = await axios.post(
        `${api}/api/admin/getGroupsData/getAcceptPendingRejectedBookings${status}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  return (
    <div className="mt-4">
      {/* Header */}
      <h1 className="text-2xl font-bold p-2 ml-2">Tables</h1>
      <hr className="border-t border-gray-500" />

      {/* Tabs */}
      <div className="flex lg:mb-8 md:mb-4 mb-2">
        {["Accepted", "Declined", "Pending"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-lg font-medium ${
              activeTab === tab ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 lg:w-[70%] md:w-[90%] w-[90%]">
        {Object.keys(dropdownOptions).map((key) => (
          <div key={key}>
            <h3 className="font-semibold text-lg mb-1 capitalize">{key}</h3>
            <select className="w-full p-3 border rounded-lg bg-white shadow-sm">
              {dropdownOptions[key].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Data Display */}
      <div className="p-4 border rounded-lg bg-white shadow-md">
        <h2 className="text-xl font-semibold mb-2">{activeTab} Data</h2>
        {data.length > 0 ? (
          <ul>
            {data.map((item, index) => (
              <li key={index} className="p-2 border-b last:border-0">
                {JSON.stringify(item)}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default MainContent;
