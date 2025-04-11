"use client";
import React from "react";
import Sidebar from "@/app/components/admin/sidebar/sidebar";
import Blog from "@/app/admin/blog/blogs";
import Header from "@/app/components/header/header";

const page = () => {
  return (
    <div className="bg-[#FFEFD2]">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <Header />
        <Blog />
      </div>
    </div>
  );
};

export default page;
