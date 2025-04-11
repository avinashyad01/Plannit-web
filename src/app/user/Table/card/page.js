"use client";
import React from "react";
import { Star } from "lucide-react";

const LastTablePartners = () => {
  const partners = [
    {
      name: "Alex",
      question: "How Would you rate her?",
      ratings: {
        punctuality: 4.5,
        politeness: 4.5,
      },
    },
    {
      name: "Alex",
      question: "How Would you rate her?",
      ratings: {
        punctuality: 4.5,
        politeness: 4.5,
      },
    },
    {
      name: "Alex",
      question: "How Would you rate her?",
      ratings: {
        punctuality: 4.5,
        politeness: 4.5,
      },
    },
    {
      name: "Alex",
      question: "How Would you rate her?",
      ratings: {
        punctuality: 4.5,
        politeness: 4.5,
      },
    },
    {
      name: "Alex",
      question: "How Would you rate her?",
      ratings: {
        punctuality: 4.5,
        politeness: 4.5,
      },
    },
    {
      name: "Alex",
      question: "How Would you rate her?",
      ratings: {
        punctuality: 4.5,
        politeness: 4.5,
      },
    },
  ];
  const RatingStars = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={
              index < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-[#f3e9d9] to-[#f1e9db]">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col justify-between items-end lg:mb-8 md:mb-4 mb-4">
          <div className="flex justify-center items-center gap-4 w-full mb-4">
            <div className="h-[4px] w-0 md:w-16 lg:w-16 bg-text_col" />
            <h1 className="lg:text-4xl md:text-3xl text-lg font-semibold whitespace-nowrap">
              Here are your last table partners
            </h1>
            <div className="h-[4px] w-0 md:w-16 lg:w-16 bg-text_col" />
          </div>
          <div className="border-2 border-[#09264B] rounded-sm lg:px-2 md:px-2 px-2 lg:py-1 md:py-1 py-0">
            <button className="text-[#09264B] hover:text-gray-800 font-semibold">
              Previous
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 lg:gap-8 md:gap-2 gap-4">
          {partners.map((partner, index) => (
            <div key={index} className="bg-text_black rounded-xl lg:p-6 md:p-6 p-4 text-white">
              <div className="space-y-2">
                <h3 className="font-medium text-center">{partner.name}</h3>
                <p className="text-sm text-gray-300">{partner.question}</p>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">punctuality</span>
                    <RatingStars rating={partner.ratings.punctuality} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Politeness</span>
                    <RatingStars rating={partner.ratings.politeness} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastTablePartners;
