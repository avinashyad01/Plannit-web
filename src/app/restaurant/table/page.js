"use client";
import React, { useState } from "react";
import Sidebar from "@/app/components/restaurant/sidebar/sidebar";
import Accept from "@/app/restaurant/table/Accept/page";
import Declined from "@/app/restaurant/table/declined/page";
import Pending from "@/app/restaurant/table/pending/page";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Accepted");

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 bg-[#FFEFD2]">
        <div className="lg:p-4 md:p-4 p-2">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <hr className="border-t border-[#a9a8aa] mb-1" />
        <div className="lg:p-4 md:p-4 p-2">
          <h2 className="text-xl font-semibold lg:mt-8 md:mt-4 mt-2">Tables Request</h2>
        </div>
        <hr className="border-t border-[#a9a8aa] mb-1" />
        <div className="mt-2 flex space-x-4 border-b pb-2 p-4">
          <button
            className={`font-semibold ${activeTab === "Accepted" ? "text-black" : "text-gray-500"}`}
            onClick={() => setActiveTab("Accepted")}
          >
            Accepted
          </button>
          <button
            className={`font-semibold ${activeTab === "Declined" ? "text-black" : "text-gray-500"}`}
            onClick={() => setActiveTab("Declined")}
          >
            Declined
          </button>
          <button
            className={`font-semibold ${activeTab === "Pending" ? "text-black" : "text-gray-500"}`}
            onClick={() => setActiveTab("Pending")}
          >
            Pending
          </button>
        </div>
        {/* Render the selected component */}
        <div>
          {activeTab === "Accepted" && <Accept onDecline={() => setActiveTab("Declined")} />}
          {activeTab === "Declined" && <Declined />}
          {activeTab === "Pending" && <Pending />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
