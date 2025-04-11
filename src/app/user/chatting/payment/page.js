"use client";
import React, { useState } from "react";
import { MoreVertical, CheckCircle } from "lucide-react";
import Navbar from "@/app/components/user/navbar/navbar";
import { useRouter } from "next/navigation"; // Import useRouter

const ChatPayment = () => {
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const chatMessages = [
    {
      id: 1,
      sender: "Alex",
      message: "I can't wait for the weekend!",
      time: "10:25 AM",
    },
    {
      id: 2,
      sender: "Lucas Williams",
      message: "Hey, how's it going?",
      time: "12:30 AM",
      hasInfo: true,
    },
    { id: 3, sender: "Liam Anderson", message: "Typing...", time: "04:50 PM" },
    {
      id: 4,
      sender: "Sophia Chen",
      message: "Remember that concert last y...",
      time: "07:22 PM",
    },
    {
      id: 5,
      sender: "Benjamin Knight",
      message: "Just got back from a hiking trip!",
      time: "08:45 PM",
      hasInfo: true,
    },
  ];

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsPaymentSuccess(true);

    // Automatically redirect after 4 seconds
    setTimeout(() => {
      router.push("/user/chatting/messages"); // Redirect to the messages page
    }, 2000);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100">
        <div className="flex max-w-[86rem] mx-auto gap-6 p-6">
          {/* Left Side - Chat Interface */}
          <div className="w-full md:w-[40%] lg:w-[35%] bg-white border border-[#DDDDDD] rounded-lg">
            <div className="h-full flex flex-col">
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-semibold">Message</h1>
                  <button className="text-gray-600 hover:text-gray-800">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Search messages and chat"
                  className="w-full p-2 mt-4 bg-gray-50 rounded-lg border"
                />
              </div>
              <div className="p-2 bg-gray-50">
                <div className="flex items-center text-xs text-gray-600">
                  <span className="transform rotate-45 inline-block mr-1">
                    📌
                  </span>
                  PINNED CHATS
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                {chatMessages.map((chat) => (
                  <div
                    key={chat.id}
                    className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-semibold mr-3">
                      {chat.sender[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{chat.sender}</h3>
                        <span className="text-xs text-gray-500">
                          {chat.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {chat.message}
                      </p>
                    </div>
                    {chat.hasInfo && (
                      <div className="ml-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                        i
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="p-2 bg-gray-50 mt-auto">
                <div className="flex items-center text-xs text-gray-600">
                  ALL MESSAGES
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Payment Interface */}
          <div className="hidden md:block flex-1 bg-gray-50 lg:p-6 md:p-2 p-2 border border-[#DDDDDD] rounded-lg">
            {!isPaymentSuccess ? (
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-6 md:gap-4 gap-2">
                <div className="lg:space-y-6 md:space-y-4 space-y-2">
                  <div>
                    <h2 className="text-lg font-semibold mb-4 text-[#000000]">
                      Details
                    </h2>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#000000] text-[14px] font-normal">
                          Start
                        </span>
                        <span className="text-bgcolor text-[14px] font-normal">
                          Dec 14, 2024 @6:00am
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#000000] text-[14px] font-normal">
                          End
                        </span>
                        <span className="text-bgcolor text-[14px] font-normal">
                          Dec 14, 2024 @8:00am
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#000000]">Cost</span>
                        <span className="text-bgcolor">₹49</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full border-t-4 border-[#09264B] lg:pt-4 md:pt-2 pt-2"></div>
                  <div>
                    <h2 className="lg:text-xl md:text-xl text-lg font-semibold mb-2 text-[#000000]">
                      SCHEDULE
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#09264B] rounded-full"></div>
                      <span className="font-normal lg:text-lg md:text-lg text-sm">
                        08:00 PM - 8:23 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-[#f85c3a] text-white p-4 rounded-lg lg:py-8 md:py-4 py-4">
                    <p className="lg:text-2xl md:text-xl text-lg ">
                      You Gonna Get A Chance To Chat With Someone After You Pay
                      Up
                    </p>
                  </div>
                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
  <h3 className="text-sm font-medium text-textcol">
    Add New Card
  </h3>
  <input
    type="text"
    placeholder="Card Number"
    className="w-full p-2 border rounded-lg"
    required
  />
  <div className="grid grid-cols-2 gap-4">
    <input
      type="text"
      placeholder="MM/YY"
      className="w-full p-2 border rounded-lg"
      required
    />
    <input
      type="text"
      placeholder="CVV"
      className="w-full p-2 border rounded-lg"
      required
    />
  </div>
  <input
    type="text"
    placeholder="Name on Card"
    className="w-full p-2 border rounded-lg"
    required
  />
  <button
    type="submit"
    className="w-full bg-textcol text-white py-3 rounded-lg hover:bg-[#0a2242]/90 transition-colors"
  >
    PAY NOW
  </button>
</form>

                </div>
              </div>
            ) : (
              <div className="max-w-md mx-auto bg-[#0a2242] text-white rounded-lg p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-green-400" />
                  <h2 className="text-2xl font-semibold">Payment Success!</h2>
                  <div className="text-2xl font-bold">₹49/-</div>
                  <div className="w-full space-y-4 mt-6">
                    <div className="flex justify-between py-2 border-b border-gray-600">
                      <span className="text-gray-300">Ref Number</span>
                      <span>000085752257</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-600">
                      <span className="text-gray-300">Payment Time</span>
                      <span>25-02-2023, 13:22:15</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-600">
                      <span className="text-gray-300">Payment Method</span>
                      <span>Bank Transfer</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-600">
                      <span className="text-gray-300">Sender Name</span>
                      <span>Antonio Roberto</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-600">
                      <span className="text-gray-300">Amount</span>
                      <span>₹ 49/-</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPayment;
