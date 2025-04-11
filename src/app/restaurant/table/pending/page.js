"use client";
import React, { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import axios from "axios";
import { api } from "@/Environment/Env";  

const TablePending = () => {
  const [tableRequests, setTableRequests] = useState([]);  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);  

  // Fetch pending table requests on component mount
  useEffect(() => {
    const fetchPendingBookings = async () => {
      const token = sessionStorage.getItem("token");  

      if (!token) {
        setError("No authentication token found. Please log in.");
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`${api}/api/admin/restaurant_login/getPendingBookings`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log("API Response:", response.data);  // Log API response for debugging
        if (response.data && Array.isArray(response.data.data)) {
          setTableRequests(response.data.data);  // Update state with the fetched bookings
        } else {
          setError("No pending bookings found.");
        }
      } catch (err) {
        setError("Failed to load pending bookings. Please try again.");
        console.error(err);  
      } finally {
        setLoading(false);  // Stop the loading state after the request completes
      }
    };
    fetchPendingBookings();  // Call the function to fetch the data
  }, []);

  // Function to handle accept and decline
  const handleStatusChange = async (_id, status) => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      setError("No authentication token found. Please log in.");
      return;
    }
    try {
      const response = await axios.patch(`${api}/api/admin/restaurant_login/updateBooking/${_id}`,
        { status },  // Send status ('accepted' or 'declined')
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Status updated:", response.data);  
      // After updating status, refresh the list of bookings
      setTableRequests((prevState) =>
        prevState.filter((request) => request._id !== _id)  // Remove the updated request from the list
      );
    } catch (err) {
      setError("Failed to update booking status. Please try again.");
      console.error(err);
    }
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="p-4">
      <div className="flex justify-center items-center mt-4 bg-[#FFEFD2] rounded-md p-6 border border-textcol">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.isArray(tableRequests) && tableRequests.length > 0 ? (
            tableRequests.map((request) => (
              <div
                key={request._id} // Use _id for unique identification
                className="bg-[#f6f1e8] shadow-md rounded-md p-4 border border-gray-300 hover:shadow-lg transition-shadow"
              >
                <p className="text-sm font-semibold">
                  Table Booking:{" "}
                  <span className="font-bold">Members {request.groupSize}</span>
                </p>
                <p className="text-sm mt-2">
                  Date: <span className="font-bold">{new Date(request.meetingDate).toLocaleDateString()}</span>
                </p>
                <div className="mt-4 flex flex-wrap gap-3 md:gap-3">
                  <button
                    onClick={() => handleStatusChange(request._id, "Accept")}
                    className="bg-textcol text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:opacity-90 transition-opacity w-full sm:w-auto"
                  >
                    <span>Accept</span>
                    <Check className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleStatusChange(request._id, "Reject")}
                    className="text-customorange hover:bg-[#fdb16e] border border-customorange px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-orange-50 transition-colors w-full sm:w-auto"
                  >
                    <span>Decline</span>
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No pending data found.</div>  
          )}
        </div>
      </div>
    </div>
  );
};

export default TablePending;
