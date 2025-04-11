"use client";
import React, { useState, useEffect } from "react";
// import { Check } from "lucide-react";
import axios from "axios";
import { api } from "@/Environment/Env";
import TableMembers from "@/app/restaurant/table/Accept/member/page"; // Import TableMembers

const TableAccept = () => {
  const [tableRequests, setTableRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGroupId, setSelectedGroupId] = useState(null); // Track selected groupId

  useEffect(() => {
    const fetchBookings = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        setError("No authentication token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${api}/api/admin/restaurant_login/getAcceptedBookings`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.data && Array.isArray(response.data.data)) {
          setTableRequests(response.data.data);
        } else {
          setError("Invalid data format received from the API.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="p-4">
        <div className="lg:mt-4 md:mt-4 mt-2 bg-[#FFEFD2] rounded-lg border border-textcol">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {Array.isArray(tableRequests) && tableRequests.length > 0 ? (
              tableRequests.map((request) => (
                <div
                  key={request._id}
                  className="bg-[#f6f1e8] shadow-md rounded-md p-4 border border-gray-400 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedGroupId(request.groupId)} // Set groupId on click
                >
                  <div className="flex space-x-2">
                    <span className="font-medium text-gray-400">Table Booking:</span>
                    <span className="font-semibold text-gray-700">Members {request.groupSize}</span>
                  </div>
                  <div className="flex space-x-2">
                    <span className="font-medium text-gray-400">Date:</span>
                    <span className="font-semibold text-gray-700">
                      {new Date(request.meetingDate).toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap justify-center items-center">
                    <button className="bg-textcol text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:opacity-90 transition-opacity w-full sm:w-auto">
                      <span>Accepted</span>
                      {/* <Check className="w-4 h-4" /> */}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>No accepted table requests found.</div>
            )}
          </div>
        </div>
      </div>

      {/* Show TableMembers only when a groupId is selected */}
      {selectedGroupId && <TableMembers groupId={selectedGroupId} />}
    </div>
  );
};

export default TableAccept;
