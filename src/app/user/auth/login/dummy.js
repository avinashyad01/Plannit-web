"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { api } from "@/Environment/Env";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginPage = ({ openSignupModal }) => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const router = useRouter();

  useEffect(() => {
    const storeduserName = sessionStorage.getItem("userName");
    const storedToken = sessionStorage.getItem("token");
    if (storeduserName && storedToken) {
      setIsAuthenticated(true);
      router.push("/"); // Redirect to home page if already authenticated
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(`${api}/api/users/login`, {
        userName,
        password,
      });
      
      // If authentication is successful
      const token = response.data.token;
      sessionStorage.setItem("userName", userName);
      sessionStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsAuthenticated(true);
      router.push("/"); // Redirect to home page
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <div className="relative flex-1 flex items-center justify-center p-2">
        {!isAuthenticated ? (
          <div className="container lg:mx-[4rem] md:mx-[4rem] mx-[2px]">
            <div className="lg:p-8 md:p-6 p-2 bg-black/10 backdrop-blur-sm rounded-xl shadow-lg border-2 border-gray-300 relative">
              <div className="text-center lg:mb-8 md:mb-6 mb-4">
                <h1 className="lg:text-6xl md:text-4xl text-xl font-bold text-[#131842] mb-2">
                  Welcome
                </h1>
                <p className="text-white lg:text-xl md:text-xl text-[11px] font-medium">
                  Start meeting people who match your size and interests
                </p>
              </div>
              <form onSubmit={handleLogin} className="space-y-4 text-center">
                {error && <p className="text-red-500">{error}</p>}
                <div className="relative lg:w-[30%] md:w-[40%] w-[90%] mx-auto">
                  <img
                    src="/images/profile_logo.png"
                    alt="Username"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setuserName(e.target.value)}
                    className="w-full text-black pl-10 px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F4A37B] focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div className="relative lg:w-[30%] md:w-[40%] w-[90%] mx-auto">
                  <img
                    src="/images/lock.png"
                    alt="Password"
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
                    className="px-16 bg-textcol text-white py-2 rounded-full hover:bg-[#0a2242]/90 transition-colors lg:mt-8 md:tb-6 mt-4"
                  >
                    LOGIN
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
                  Don’t have an account?
                  <button
                     onClick={openSignupModal}
                    className="text-white font-bold hover:underline ml-1"
                  >
                    Register Now
                  </button>
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LoginPage;
