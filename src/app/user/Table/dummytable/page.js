"use client"
import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import Link from "next/link";

const DummyHeadingSection = () => {
  const cards = [
    {
      name: 'Alex',
      message: 'I met my soulmate here! Highly recommend!',
      active: false
    },
    {
      name: 'Jordan',
      message: 'Amazing experience, great connections!',
      active: true
    },
    {
      name: 'Taylor',
      message: 'Loved the community, will come back!',
      active: false
    }
  ];

  // Define background colors for buttons dynamically
  const buttonColors = ['bg-[#82BCBB] hover:bg-gray-500', 'bg-[#64667B] hover:bg-gray-700', 'bg-[#7FB9C9] hover:bg-gray-600'];

  return (
    <div className="bg-gradient-to-b from-[#f3e9d9] to-[#f1e9db] pb-2">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1 flex justify-center items-center gap-4">
            <div className="h-[2px] w-0 md:w-16 lg:w-16 bg-text_col" />
            <h1 className="lg:text-3xl md:text-2xl text-lg font-semibold whitespace-nowrap">
              Dummy Heading
            </h1>
            <div className="h-[2px] w-0 md:w-16 lg:w-16 bg-text_col" />
          </div>
          <div className="border-2 border-[#09264B] rounded-sm px-2 lg:py-1 md:py-1 py-0">
            <button className="text-[#09264B] hover:text-gray-800 font-semibold">
              View All
            </button>
          </div>
        </div>
        {/* Cards */}
        <div className="flex justify-center items-center lg:gap-12 md:gap-8 gap-4 flex-wrap md:flex-nowrap">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-lg p-6 shadow-sm border border-[#82BCBB] 
                transition-all duration-300 w-full
                ${index === 1 ? 'md:scale-110 md:max-w-sm md:min-h-[190px]' : 'md:scale-100 md:max-w-xs'}
                ${card.active ? 'border-2 border-[#64667B]' : ''}
              `}
            >
              {/* Icon at the top-right corner */}
              <button className="absolute top-3 right-3 text-black font-bold hover:text-gray-700">
                <MoreHorizontal size={24} />
              </button>
              
              {/* Name centered with larger text for middle card */}
              <h3 className={`font-bold text-[#0F1620] text-center ${index === 1 ? 'text-2xl text-[#0F1620] font-bold' : 'text-lg'}`}>
                {card.name}
              </h3>
              <p className="text-sm text-pearl_black font-medium mb-4 mt-2">{card.message}</p>
              <Link href="/user/chatting/lock">
                <button 
                  className={`
                    w-full py-2 px-4 rounded-md text-white transition-colors border-l-4 border-b-4 border-[#000000]
                    ${buttonColors[index]} 
                  `}
                >
                  Chat Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DummyHeadingSection;
