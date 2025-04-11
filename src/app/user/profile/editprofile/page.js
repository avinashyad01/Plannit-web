import React from 'react';
import { PencilIcon } from 'lucide-react';
import Navbar from "@/app/components/user/navbar/navbar";
import Footer from "@/app/components/user/footer/footer";

const ProfileSettings = () => {
  return (
    <div>
      <Navbar />
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#FFEFD2] p-4">
        {/* <div className="max-w-4xl mx-auto space-y-6"> */}
        <div className="lg:max-w-[60vw] md:max-w-[70vw] max-w-[80vw] lg:ml-16 md:ml-12 ml-4 mx-auto space-y-6">
        {/* Profile Avatar */}
          <div className="justify-center">
            <h1 className='text-[#000000] font-bold mb-4'>Profile Setting</h1>
          <div className="w-16 h-16 border-2 border-[#000000] rounded-full flex items-center justify-center">
            <span className="text-2xl text-[#000000]">A</span>
          </div>
        </div>

        {/* Basic Details */}
        <div className="relative bg-[#FFFFFF] shadow-md p-2">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-semibold">Basic Details</h2>
            <button className="p-1 hover:bg-gray-100 border border-[#D6DDEB]">
              <PencilIcon className="w-3 h-3 text-black" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-500">Name</label>
              <p>John Doe</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Email</label>
              <p>johndoe@example.com</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Gender</label>
              <p>Male</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Age</label>
              <p>28</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">City</label>
              <p>New York</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Hometown</label>
              <p>Los Angeles</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Languages</label>
              <p>English, Spanish</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Occupation</label>
              <p>Software Engineer</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">State</label>
              <p>Uttar Pradesh</p>
            </div>
          </div>
        </div>

        {/* Social Preferences */}
        <div className="relative bg-[#FFFFFF] shadow-md p-2">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-semibold">Social Preferences</h2>
            <button className="p-1 hover:bg-gray-100 border border-[#D6DDEB]">
              <PencilIcon className="w-3 h-3 text-black" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-500">Dietary preferences</label>
              <p>Vegetarian, Gluten-Free</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Budget</label>
              <p>$5,000 - $7,000</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Girls Group</label>
              <p>Sparkle Squad, Elegant Divas</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Venues</label>
              <p>Grand Palace Banquet, Ocean View Resort</p>
            </div>
          </div>
        </div>

        {/* Personality and Lifestyle */}
        <div className="relative bg-[#FFFFFF] shadow-md p-2">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-semibold">Personality and Lifestyle</h2>
            <button className="p-1 hover:bg-gray-100 border border-[#D6DDEB]">
              <PencilIcon className="w-3 h-3 text-black" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-500">Activities do you enjoy</label>
              <p>Hiking, Reading, Watching Movies</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Pets</label>
              <p>Persian Cat</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Often do you go out</label>
              <p>Exploring new cafes, Visiting friends</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Often Do You Go Out</label>
              <p>2-3 times a week</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
      </div>
  );
};
export default ProfileSettings;