"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "@/Environment/Env";

const Members = () => {
  const [selectedTable, setSelectedTable] = useState(1); // Default selected table
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Tables data
  const tables = [
    { id: 1, name: "Tables 1" },
    { id: 2, name: "Tables 2" },
    { id: 3, name: "Tables 3" },
    { id: 4, name: "Tables 4" },
    { id: 5, name: "Tables 5" },
    { id: 6, name: "Tables 6" },
  ];

  useEffect(() => {
    fetchMembers(selectedTable);
  }, [selectedTable]);

  const fetchMembers = async (tableId) => {
    setLoading(true);
    setError(null);

    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        setError("Authentication error: Token missing. Please log in.");
        setLoading(false);
        return;
      }

      const response = await axios.get(`${api}/api/admin/getGroupsData/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { tableId },
      });

      setMembers(response.data || []); // Ensure data is always an array
    } catch (error) {
      console.error("Error fetching members:", error);
      setError("Failed to load members. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-[#FFEFD2] min-h-screen">
      {/* Tables Section */}
      <h1 className="text-2xl font-bold p-4">Tables</h1>
      <hr className="border-t border-gray-500 mb-4" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6 p-4">
        {tables.map((table) => (
          <div
            key={table.id}
            onClick={() => setSelectedTable(table.id)}
            className={`bg-white p-2 rounded-lg shadow-md cursor-pointer ${
              selectedTable === table.id ? "border-2 border-black bg-[#FDF1DD]" : ""
            }`}
          >
            <h2 className="text-md text-center font-semibold">{table.name}</h2>
          </div>
        ))}
      </div>

      {/* Members Section */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Members</h1>

        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Loading State */}
        {loading ? (
          <p className="text-gray-500">Loading members...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.length > 0 ? (
              members.map((member) => (
                <div key={member.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h2 className="text-xl font-semibold">{member.name}</h2>
                  <p className="text-gray-600">Age: {member.age}</p>
                  <p className="text-gray-600">Hobbies: {member.hobbies}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No members found for this table.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Members;
