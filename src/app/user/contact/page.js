"use client";
import React from "react";
import { ChevronRight, MapPin, Mail, Phone, ArrowDown, User, Pencil } from "lucide-react";
import Navbar from "@/app/components/user/navbar/navbar";
import Footer from "@/app/components/user/footer/footer";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-[#fff] to-[#f6ead3]">
        {/* Header Navigation */}
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          <div className="flex items-center lg:mb-8 md:mb-6 mb-4">
            <a
              href="#"
              className="text-[#484848] font-medium hover:text-gray-900"
            >
              Home
            </a>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-[#121416] font-bold lg:text-lg md:text-sm text-sm">
              Contact Us
            </span>
          </div>
          {/* Main Content */}
          <div className="text-center lg:mb-12 md:mb-8 mb-4">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-[#0a2242] lg:mb-4 md:mb-4 mb-2">
              Contact Us
            </h1>
            <ArrowDown className="w-6 h-6 mx-auto text-[#0a2242]" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 md:gap-8 gap-2">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="lg:text-2xl md:text-xl text-lg font-bold text-[#0a2242] mb-2">
                  Have Questions?
                </h2>
                <h3 className="lg:text-2xl md:text-xl text-lg font-bold text-[#0a2242] mb-2">
                  Get in Touch!
                </h3>
                <p className="text-gray-600 mb-8">
                  Adipiscing elit, sed do euismod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-[#0a2242] mt-1 bg-white p-1 rounded-md" />
                  <p className="text-[#344054] ">
                    India – 723 17th Street, Office 478
                    <br />
                    Mumbai, IN 80202
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-8 h-8 text-[#0a2242] bg-white p-1 rounded-md" />
                  <a
                    href="mailto:Kingston07@gmail.com"
                    className="text-[#344054] hover:text-[#0a2242]"
                  >
                    Kingston07@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-8 h-8 text-[#344054] bg-white p-1 rounded-md" />
                  <a
                    href="tel:+91846954701"
                    className="text-[#344054] hover:text-[#0a2242]"
                  >
                    +91 846 954 7012
                  </a>
                </div>
              </div>
            </div>
            {/* Right Column - Contact Form */}
            <div className="lg:p-6 md:p-6 p-4 rounded-lg shadow-sm">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a2242]"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a2242]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full pl-10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a2242]"
                    />
                  </div>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a2242] bg-white">
                    <option value="">Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="business">Business</option>
                  </select>
                </div>
                <div className="relative">
                  <Pencil className="absolute left-3 top-5 text-gray-400" />
                  <textarea
                    placeholder="How can we help you? Feel free to get in touch!"
                    rows={4}
                    className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a2242]"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="consent" className="mt-1" />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree that my data is collected and stored
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto lg:px-8 md:px-6 px-6 py-3 bg-[#0a2242] text-white rounded-lg hover:bg-[#0a2242]/90 transition-colors"
                >
                  Get In Touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
