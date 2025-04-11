"use client";
import React from "react";
import Sidebar from "@/app/components/admin/sidebar/sidebar";
import TableCard from "@/app/admin/tables/tablecard";
import Member from "@/app/admin/tables/member";
import Header from "@/app/components/header/header";


const page = () => {
  return (
    <div className="bg-[#FFEFD2]">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <Header />
        <TableCard />
        <Member />
      </div>
    </div>
  );
};

export default page;
