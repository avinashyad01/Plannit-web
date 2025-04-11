"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { api } from "@/Environment/Env";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignupPage = ({
  openLoginModal
}) => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("91"); // Default country code
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null); // Reset error before making API request
    try {
      const response = await axios.post(`${api}/api/users/sendOTP`, {
        phone,
        userName,
        countryCode,
        password,
      });
      console.log("API Response:", response.data);
      if (response.data.success) {
        router.push("/auth/otp"); // Redirect to OTP page
      } else {
        setError(response.data.message || "Signup failed. Try again.");
      }
    } catch (err) {
      setError("Error signing up. Please check your details.");
    }
  };

  return (
      <div className="relative flex-1 flex items-center justify-center p-2">
        <div className="container lg:mx-[4rem] md:mx-[4rem] mx-[1rem]">
          <div className="p-8 backdrop-blur-sm rounded-xl shadow-lg border-2 border-gray-300 relative mb-4">
            <div className="text-center lg:mb-8 md:mb-8 mb-4">
              <h1 className="lg:text-6xl md:text-4xl text-xl font-bold text-[#131842] mb-2">
                Welcome
              </h1>
              <p className="text-white lg:text-2xl md:text-xl text-[11px] font-medium">
                Start meeting people who match your size and interests
              </p>
            </div>
            <form onSubmit={handleSignup} className="space-y-4 text-center">
              {error && <p className="text-customorange">{error}</p>}
              <div className="relative lg:w-[30%] md:w-[50%] w-[90%] mx-auto">
                <img
                  src="/images/profile_logo.png"
                  alt="user"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
                <input
                  type="text"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full pl-10 px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F4A37B] focus:border-transparent outline-none"
                  required
                />
              </div>
              <div className="relative lg:w-[30%] md:w-[50%] w-[90%] mx-auto">
                <img
                  src="/images/phone.png"
                  alt="phone"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F4A37B] focus:border-transparent outline-none"
                  pattern="^\+?[1-9]\d{1,14}$"
                  required
                />
              </div>
              <div className="relative lg:w-[30%] md:w-[50%] w-[90%] mx-auto">
                <img
                  src="/images/lock.png"
                  alt="password"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-black pl-10 px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F4A37B] focus:border-transparent outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-16 bg-[#09264B] text-white py-2 rounded-full hover:bg-[#0a2242]/80 transition-colors lg:mt-8 md:tb-6 mt-4"
                >
                  SIGN UP
                </button>
              </div>
          </form>
          <div className="mt-6 space-y-4">
                <div className="flex justify-center space-x-4">
                  <button className="p-2 rounded-lg border-2 border-gray-100 hover:bg-gray-200">
                    <img
                      src="/images/logo_google.png"
                      alt="Google"
                      className="w-6 h-6"
                    />
                  </button>
                  <button className="p-2 rounded-lg border-2 border-gray-100 hover:bg-gray-200">
                    <img
                      src="/images/logo_fb.png"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </button>
                  <button className="p-2 rounded-lg border-2 border-gray-100 hover:bg-gray-200">
                    <img
                      src="/images/apple-black-logo.png"
                      alt="Apple"
                      className="w-6 h-6"
                    />
                  </button>
                </div>
                <p className="text-center font-normal text-white">
                 Already have an Account?
                  <button
                    onClick={openLoginModal}
                    className="text-white font-bold hover:underline ml-1"
                  >
                    Login
                  </button>
                </p>
              </div> 
          </div>
        </div>
      </div>
  );
};
export default SignupPage;
