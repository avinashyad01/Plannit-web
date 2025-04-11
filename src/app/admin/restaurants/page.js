"use client";
import Sidebar from "@/app/components/admin/sidebar/sidebar";
import Header from "@/app/components/header/header";
import Restaurant from "@/app/admin/restaurants/restaurant";

import React from "react";

const page = () => {
  return (
    <div className="bg-[#FFEFD2]">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <Header />
        <Restaurant />
      </div>
    </div>
  );
};

export default page;
