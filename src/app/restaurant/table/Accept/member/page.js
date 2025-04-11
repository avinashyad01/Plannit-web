"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "@/Environment/Env";

const TableMembers = ({ groupId }) => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!groupId) return; // Avoid making API calls without a valid groupId

    const fetchMembers = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        setError("No authentication token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${api}/api/admin/restaurant_login/getMembersOfSingleGroup/${groupId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.data && response.data.data && response.data.data.users) {
          setMembers(response.data.data.users);
        } else {
          setMembers([]);
        }
      } catch (err) {
        setError("Failed to load members. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [groupId]); // Re-run when groupId changes

  if (loading) return <div>Loading members...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-[#FFEFD2] mt-4">
      <div className="lg:p-4 md:p-4 p-2">
        <h2 className="text-xl text-black font-semibold">Table Members</h2>
      </div>
      <hr className="border-t border-[#a9a8aa] mb-1" />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center lg:p-6 md:p-4 p-2 lg:w-[80%] md:w-[100%] w-[100%]">
          {members.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No members found.</div>
          ) : (
            members.map((member) => (
              <div
                key={member._id}
                className="bg-[#FEF5E7] rounded-lg p-4 shadow-sm border border-gray-400"
              >
                <div className="mb-2 text-center">
                  <h3 className="text-lg text-black font-bold mb-2">
                    Member {member._id.slice(-4)}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex">
                      <span className="w-20 text-gray-400">Name:</span>
                      <span className="font-medium text-gray-700">{member.firstName} {member.lastName}</span>
                    </div>
                    <div className="flex">
                      <span className="w-20 text-gray-400">Username:</span>
                      <span className="font-medium text-gray-700">{member.userName}</span>
                    </div>
                    <div className="flex">
                      <span className="w-20 text-gray-400">Occupation:</span>
                      <span className="font-medium text-gray-700">{member.occupation}</span>
                    </div>
                    <div className="flex">
                      <span className="w-20 text-gray-400">Hobbies:</span>
                      <span className="font-medium text-gray-700">{member.hobbies.join(", ")}</span>
                    </div>
                    <div className="flex">
                      <span className="w-20 text-gray-400">Gender:</span>
                      <span className="font-medium text-gray-700">{member.gender}</span>
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

export default TableMembers;
