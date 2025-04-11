"use client";
import React from "react";
import { LockIcon, MoreVertical } from "lucide-react";
import Link from "next/link";
import Navbar from "@/app/components/user/navbar/navbar";

const Lock = () => {
  const chatMessages = [
    { id: 1, sender: "Alex", message: "I can't wait for the weekend!", time: "10:25 AM" },
    { id: 2, sender: "Lucas Williams", message: "Hey, how's it going?", time: "12:30 AM", hasInfo: true },
    { id: 3, sender: "Liam Anderson", message: "Typing...", time: "04:50 PM" },
    { id: 4, sender: "Sophia Chen", message: "Remember that concert last y...", time: "07:22 PM" },
    { id: 5, sender: "Benjamin Knight", message: "Just got back from a hiking trip!", time: "08:45 PM", hasInfo: true },
  ];

  const backgroundMessages = [
    { sender: "You", message: "Hey, how are you doing today?", sent: true },
    { sender: "Alex", message: "I'm doing great! Just finished a big project.", sent: false },
    { sender: "You", message: "That's awesome! Would love to hear more about it.", sent: true },
    { sender: "Alex", message: "Sure! Let me tell you all about it...", sent: false },
  ];

  return (
    <div className="bg-[#F5F5F5]">
      <Navbar />
      <div className=" min-h-screen flex max-w-[86rem] mx-auto gap-6 p-6">
        {/* Left Sidebar - Chat List Always Visible */}
        <div className="w-1/3 lg:w-[35%] bg-white shadow-md flex flex-col rounded-lg border-2 border-[#0C2D574A]">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <h1 className="text-lg font-semibold">Message</h1>
            <button className="text-gray-600 hover:text-gray-800">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="p-4">
            <input
              type="text"
              placeholder="Search messages and chat"
              className="w-full px-3 py-2 border border-[#0C2D57] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Pinned Chats Section */}
          <div className="p-2 bg-gray-50 text-xs text-gray-600 font-semibold">📌 PINNED CHATS</div>

          {/* Chat List */}
          <div className="overflow-y-auto flex-grow">
            {chatMessages.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center p-4 hover:bg-gray-100 cursor-pointer border-b"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-semibold mr-3">
                  {chat.sender[0]}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{chat.sender}</h3>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">{chat.message}</p>
                </div>
                {chat.hasInfo && (
                  <div className="ml-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">i</div>
                )}
              </div>
            ))}
          </div>

          {/* All Messages Section */}
          <div className="p-2 bg-gray-50 text-xs text-gray-600 font-semibold">ALL MESSAGES</div>
        </div>

        {/* Right Side - Chat Area with Lock Overlay */}
        <div className="flex-1 relative rounded-lg bg-white shadow-md border-2 border-[#0C2D574A] p-4">
          {/* Background Messages */}
          <div className="absolute inset-0 p-6 overflow-y-auto">
            <div className="space-y-4">
              {backgroundMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[70%] p-3 rounded-lg ${msg.sent ? "bg-customorange" : "bg-textcol"}`}>
                    <p className="text-gray-800">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lock Overlay */}
          <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center rounded-lg">
            <div className="bg-textcol text-white p-6 rounded-lg max-w-[280px] text-center space-y-4">
              <div className="flex justify-center mb-4">
                <LockIcon className="w-8 h-8" />
              </div>
              <h2 className="text-lg font-semibold">Unlock your chat</h2>
              <p className="text-sm opacity-90">
                To proceed with this chat, we kindly request you to complete the payment. Please click on the link below to make the payment.
              </p>
              <Link href="/user/chatting/payment">
                <button className="mt-4 w-full bg-textcol text-white py-2 border border-[#E7E7E7] rounded-lg hover:bg-[#0a2242]/90 transition-colors font-medium">
                  Click Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lock;
