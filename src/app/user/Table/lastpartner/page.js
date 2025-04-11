"use client"
import React from 'react';
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ChatPartnerPage = () => {
  const partners = [
    { name: 'Alex', date: '2/2/2025' },
    { name: 'Alex', date: '2/2/2025' },
    { name: 'Alex', date: '2/2/2025' },
    { name: 'Alex', date: '2/2/2025' }
  ];

  return (
    <div className="bg-gradient-to-b from-[#f3e9d9] to-[#f1e9db] pb-12">
      <div className="max-w-7xl mx-auto p-4 ">
      <div className="flex justify-between items-center mb-8">
      <div className="flex-1 flex justify-center items-center gap-4">
        <div className="h-[2px] w-0 md:w-16 lg:w-16 bg-text_col" />
        <h1 className="lg:text-3xl md:text-2xl text-md font-semibold whitespace-nowrap">
          Chat with your partner
        </h1>
        <div className="h-[2px] w-0 md:w-16 lg:w-16 bg-text_col" />
      </div>
      <div className="border-2 border-[#09264B] rounded-sm px-2 py-1">
        <button className="text-[#09264B] hover:text-gray-800 font-semibold">
          View All
        </button>
      </div>
    </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-[#CA6C01] shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
                  <span className="text-xl font-semibold text-black">A</span>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-[#000000] mb-1">{partner.name}</h3>
                  <p className="text-sm font-medium text-[#000000] mb-1">Table Date: {partner.date}</p>
                </div>
              </div>
              <div className="text-center">
                <a href="/user/chatting/lock">
                  <p className="w-full bg-orange hover:bg-orange-500 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2">
                    Chat Now
                    <ArrowRight className="w-4 h-4" />
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatPartnerPage;