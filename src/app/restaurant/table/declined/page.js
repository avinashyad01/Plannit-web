"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "@/Environment/Env"; // Assuming `api` is your environment variable for the API base URL

const TableDeclined = () => {
  const [declinedData, setDeclinedData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);  // Loading state

  // Fetch declined data from the API
  useEffect(() => {
    const fetchDeclinedData = async () => {
      const token = sessionStorage.getItem("token"); // Assuming you have a token stored in sessionStorage

      if (!token) {
        setError("No authentication token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${api}/api/admin/restaurant_login/getRejectedBookings`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        console.log("API Response:", response.data); // Log the API response for debugging

        if (response.data && response.data.data) {
          setDeclinedData(response.data.data);  // Assuming the response data has a "data" array
        } else {
          setDeclinedData([]); // If no declined data is found, set an empty array
        }
      } catch (err) {
        setError("Failed to load declined data. Please try again.");
        console.error(err); // Log the error for debugging
      } finally {
        setLoading(false); // Set loading to false after the API call completes
      }
    };

    fetchDeclinedData();  // Call the function to fetch declined data
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-[#FEF5E7]">
      <hr className="border-t border-[#a9a8aa] mb-1" />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center lg:p-6 md:p-4 p-2 lg:w-[80%] md:w-[100%] w-[100%]">
          {declinedData.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No declined data found.
            </div>
          ) : (
            declinedData.map((data) => (
              <div
                key={data._id}  // Use _id for unique identification
                className="bg-[#FEF5E7] rounded-lg p-4 shadow-sm border border-gray-400"
              >
                <div className="mb-2 text-center">
                  <h3 className="text-lg text-black font-bold mb-2">
                    Group Size: {data.groupSize}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex">
                      <span className="w-20 text-gray-400">Meeting Date:</span>
                      <span className="font-medium text-gray-700">
                        {new Date(data.meetingDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-20 text-gray-400">Group ID:</span>
                      <span className="font-medium text-gray-700">{data.groupId}</span>
                    </div>
                    <div className="flex">
                      <span className="w-20 text-gray-400">Status:</span>
                      <span className="font-medium text-gray-700">{data.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TableDeclined;
