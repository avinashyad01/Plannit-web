"use client";
import { useState, useEffect } from "react";
import { db } from "@/firebase/firebase"; // Ensure this path is correct
import {collection, addDoc, serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import Navbar from "@/app/components/user/navbar/navbar";
import Image from "next/image";

// Reusable Message Bubble Component
const MessageBubble = ({ message, time, isSender }) => (
  <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
    <div className="flex items-end">
      <div
        className={`${
          isSender ? "bg-[#F15A29]" : "bg-[#0C2D57]"
        } text-white p-3 rounded-lg max-w-[70%]`}
      >
        {message}
      </div>
      <span className="text-xs text-gray-500 ml-2">{time}</span>
    </div>
  </div>
);

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const currentUser = "User"; 

  // Fetch messages in real-time
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  // Send a new message and trigger a bot reply
  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      // Send the user message
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        sender: currentUser || "Anonymous",
        timestamp: serverTimestamp(),
      });
      setNewMessage(""); 
      // Simulate a bot response after 1.5 seconds
      setTimeout(async () => {
        await addDoc(collection(db, "messages"), {
          text: "This is an automated reply! 😊",
          sender: "Bot",
          timestamp: serverTimestamp(),
        });
      }, 2000);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#F5F5F5]">
        <div className="flex flex-col md:flex-row max-w-[86rem] mx-auto gap-8 p-2">
          {/* Right Side - Chat Window */}
          <div className="flex-1 flex flex-col bg-white shadow-md">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <MessageBubble
                  key={msg.id}
                  message={msg.text}
                  time="10:30 AM"
                  isSender={msg.sender === currentUser}
                />
              ))}
            </div>
            {/* Message Input */}
            <div className="border-t">
              <div className="relative flex items-center w-full bg-[#6C7D93] p-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Send a message"
                  className="w-full px-2 py-2 bg-transparent placeholder-white focus:outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  className="absolute right-4 bg-[#0C2D57] rounded-lg lg:p-3 md:p-3 p-2"
                >
                  <Image
                    src="/images/send-button.png"
                    alt="Send Icon"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
