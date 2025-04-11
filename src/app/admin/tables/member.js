"use client";
import React, { useState } from "react";

const Members = () => {
  const [selectedTable, setSelectedTable] = useState(1); // Default selected table
  const dropdownOptions = {
    cities: ["Indoor", "ABC", "BCD", "MNG"],
    area: ["Indoor", "ABC", "BCD", "MNG"],
    restaurants: ["Old Monk", "Red Owl", "Night Partner", "Table 4"],
  };

  // Tables data
  const tables = [
    { id: 1, name: "Tables 1" },
    { id: 2, name: "Tables 2" },
    { id: 3, name: "Tables 3" },
    { id: 4, name: "Tables 4" },
    { id: 5, name: "Tables 5" },
    { id: 6, name: "Tables 6" },
  ];

  // Members data for each table
  const membersData = {
    1: [
      {
        id: 1,
        name: "Alex",
        age: 26,
        hobbies: "Book Reading, Music Listening",
      },
    ],
    2: [{ id: 2, name: "Alex", age: 26, hobbies: "Singing, Poet" }],
    3: [{ id: 3, name: "Alex", age: 26, hobbies: "Cooking, Music Listening" }],
    4: [
      {
        id: 4,
        name: "Alex",
        age: 26,
        hobbies: "Book Reading, Music Listening",
      },
    ],
    5: [{ id: 5, name: "Alex", age: 26, hobbies: "Book Reading, Dance" }],
    6: [
      {
        id: 6,
        name: "Alex",
        age: 26,
        hobbies: "Book Reading, Music Listening",
      },
    ],
  };

  // Get members for the selected table
  const members = membersData[selectedTable];

  return (
    <div className="flex-1 bg-[#FFEFD2] min-h-screen">
      {/* Dropdown Filters */}
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
      {/* Tables Section */}
      <h1 className="text-2xl font-bold p-4">Tables</h1>
      <hr className="border-t border-gray-500 mb-2" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6 p-4">
        {tables.map((table) => (
          <div
            key={table.id}
            onClick={() => setSelectedTable(table.id)}
            className={`bg-white p-2 rounded-lg shadow-md cursor-pointer ${
              selectedTable === table.id
                ? "border-2 border-black bg-[#FDF1DD]"
                : ""
            }`}
          >
            <h2 className="text-md text-center font-semibold">{table.name}</h2>
          </div>
        ))}
      </div>
      {/* Members Section */}
      <div className="p-4">
        <h1 className="text-2xl font-bold lg:mb-6 md:mb-4 mb-2">Members</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-600">Age: {member.age}</p>
              <p className="text-gray-600">Hobbies: {member.hobbies}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
