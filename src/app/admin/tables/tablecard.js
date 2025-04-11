"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "@/Environment/Env";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("Accepted");
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchTableData(activeTab);
  }, [activeTab]);

  const fetchTableData = async (status) => {
    try {
      const token = sessionStorage.getItem("token");
      const statusMapping = {
        Accepted: "Accept",
        Declined: "Reject",
        Pending: "Pending",
      };

      const response = await axios.post(
        `${api}/api/admin/getGroupsData/getAcceptPendingRejectedBookings`,
        { status: statusMapping[status] },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("API Response:", response.data);

      if (response.data && Array.isArray(response.data.data)) {
        setTableData(response.data.data);
      } else {
        setTableData([]);
      }
    } catch (error) {
      console.error("Error fetching table data:", error);
      setTableData([]);
    }
  };

  return (
    <div className="2">
      {/* Header */}
      <div className="p-4">
      <h1 className="text-2xl font-bold">Tables</h1>
      </div>
        <hr className="border-t border-gray-500" />
      {/* Tabs */}
      <div className="flex mb-2">
        {["Accepted", "Declined", "Pending"].map((tab) => (
          <button
            key={tab}
            className={`px-4 text-lg font-medium ${
              activeTab === tab ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Data Display */}
      <div className="p-4 rounded-md ">
        {tableData?.length > 0 ? (
          <ul>
            {tableData.map((item, index) => (
              <li key={index} className="py-2">
                <p><strong>Status:</strong> {item.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No data available for {activeTab} status.</p>
        )}
      </div>
      <hr className="border-t border-gray-500" />
    </div>
  );
};

export default MainContent;
