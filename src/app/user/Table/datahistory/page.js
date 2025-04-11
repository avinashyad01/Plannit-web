"use client"
import React from 'react';
import { Star } from "lucide-react";

const TableDateHistory = () => {
  const ratings = [
    { id: 1, type: "Punctuality", rating: 4 },
    { id: 2, type: "Politeness", rating: 5 }
  ];

  const cards = Array(7).fill({
    name: "Alex",
    ratings: ratings
  });

  const renderStars = (count) => {
    return Array(5).fill(0).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-b from-[#f3e9d9] to-[#f1e9db]">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="w-full flex justify-center items-center space-x-4 mb-4">
      <div className="h-[2px] w-0 md:w-16 lg:w-16 bg-text_col" />
      <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold whitespace-nowrap">
          Your Table date history
        </h1>
        <div className="h-[2px] w-0 md:w-16 lg:w-16 bg-text_col" />
    </div>
        {/* Date */}
        <div className="flex justify-between items-center mb-4 font-bold">
          <span className="text-customorange lg:text-[18px] md:text-[16px] text-[13px]">Date</span>
          <span className="text-customorange lg:text-[18px] md:text-[16px] text-[13px]">Venue</span>
        </div>
        <div className="flex justify-between items-center mb-6 font-bold">
        <span className="text-[#062040] lg:text-[18px] md:text-[16px] text-[13px]">Wednesday 5-02-2025</span>
        <span className="text-[#062040] lg:text-[18px] md:text-[16px] text-[13px]">3605 Parker Rd.</span>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-2">
          {cards.map((card, index) => (
            <div key={index} className="bg-text_black text-white rounded-lg">
              <div className="p-4">
                <h3 className="text-center mb-2">{card.name}</h3>
                <div className="space-y-2">
                  {card.ratings.map((rating) => (
                    <div key={rating.id}>
                      <p className="text-sm mb-1">{rating.type}</p>
                      <div className="flex gap-1">
                        {renderStars(rating.rating)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center gap-4">
          <button className="text-customorange hover:text-red-600">Previous</button>
          <span className="px-3 py-1 bg-gray-100 text-customorange rounded">2</span>
          <button className="text-customorange hover:text-red-600">Next</button>
        </div>
      </div>
    </div>
  );
};

export default TableDateHistory;