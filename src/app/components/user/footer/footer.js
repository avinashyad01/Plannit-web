"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-text_black text-white py-6">
      <div className="container mx-auto flex flex-col">
        <div className="px-4 md:px-8 lg:px-12">
        {/* Top Section */}
        <div className="mb-0">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6 gap-2">
            {/* Logo */}
            <div>
              <img
                src="/images/logo_footer.png"
                alt="Plannit Logo"
                className="w-22 h-10 md:h-24 object-contain"
              />
            </div>
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed lg:max-w-2xl mt-4">
              Plannit is your gateway to spontaneous and meaningful social
              meetups in the heart of Bangalore, India. Ready to spice up your
              social life? With Plannit, you'll be matched with five new friends
              who share your interests.
            </p>
          </div>
          </div>
        </div>
      </div>
                {/* Horizontal Line */}
                <div className="border border-white rounded-xl my-2"></div>
        {/* Main Footer Content */}
        <div className="flex flex-wrap justify-between items-start gap-4 px-4 md:px-8 lg:px-12 mt-4">
          {/* Reach Us */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Reach Us</h3>
            <div className="text-sm space-y-2">
              <div className="flex items-center gap-2">
                <img src="/images/call.png" alt="Phone" className="h-4 w-4" />
                <p>+1 012 3456 789</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="/images/msg.png" alt="Email" className="h-4 w-4" />
                <p>demo@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="/images/map_.png" alt="Address" className="h-4 w-4" />
                <p>132 Dartmouth St, Boston, MA 02156 U.S.</p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="text-sm space-y-3">
              <Link href="/user/about"><li className="hover:text-gray-400">About</li></Link>
              <Link href="/user/contact"><li className="hover:text-gray-400">Contact</li></Link>
              <Link href="/blogs"><li className="hover:text-gray-400">Blogs</li></Link>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="text-sm space-y-2">
              <Link href="/"><li className="hover:text-gray-400">Privacy Policy</li></Link>
              <Link href="/"><li className="hover:text-gray-400">Terms & Services</li></Link>
              <Link href="/"><li className="hover:text-gray-400">Terms of Use</li></Link>
              <Link href="/"><li className="hover:text-gray-400">Refund Policy</li></Link>
            </ul>
          </div>

          {/* Newsletter (Moves Down on Small Screens) */}
          <div className="bg-footerbg p-4 rounded-lg w-full sm:w-auto">
            <h3 className="text-lg font-semibold mb-3">Join Our Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-[#1E1E1E] text-[#616161] px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-[#1E1E1E]"
              />
              <button className="bg-text_black hover:bg-gray-900 text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-sm text-[#616161]">
              * Get weekly updates for better tool management.
            </p>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;
