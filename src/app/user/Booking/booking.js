"use client"
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Booking = () => {
  return (
    <div className="bg-[#FFEFD2] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Profile */}
        <div className="flex justify-between items-center lg:mb-8 md:mb-6 mb-4">
          <h1 className="text-2xl font-semibold">Book Table Restaurant</h1>
        </div>
        {/* Booking Form */}
        <div className="lg:space-y-6 md:space-y-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-6 md:gap-6 gap-4">
            {/* Table Seating */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Table Seating</label>
              <div className="relative">
                <select className="w-full p-2.5 border border-gray-300 rounded-lg appearance-none bg-white pr-10">
                  <option>Indoor</option>
                  <option>Outdoor</option>
                  <option>Balcony</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              </div>
            </div>

            {/* Roof */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Roof</label>
              <div className="relative">
                <select className="w-full p-2.5 border border-gray-300 rounded-lg appearance-none bg-white pr-10">
                  <option>Dining Tables</option>
                  <option>Private Room</option>
                  <option>Bar Seating</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              </div>
            </div>

            {/* Themes */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Themes</label>
              <div className="relative">
                <select className="w-full p-2.5 border border-gray-300 rounded-lg appearance-none bg-white pr-10">
                  <option>Lighting</option>
                  <option>Classic</option>
                  <option>Modern</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              </div>
            </div>
            {/* Location */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input 
                type="text" 
                placeholder="Enter Location"
                className="w-full p-2.5 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          {/* Payment Button */}
          <button className="lg:w-[48%] md:w-[50%] w-full bg-[#0a2242] text-white lg:py-3 md:py-3 py-2 rounded-sm hover:bg-[#0a2242]/90 transition-colors">
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;