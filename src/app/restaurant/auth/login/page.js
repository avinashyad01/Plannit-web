"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js router for navigation
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import axios from "axios"; 
import { api } from "@/Environment/Env";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "", // Changed from 'id' to 'username'
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the login API endpoint
      const response = await axios.post(`${api}/api/admin/restaurant_login/loginRestaurant`, {
        username: formData.username,
        password: formData.password,
      });

      // Assuming the API returns a token in the response
      const token = response.data.token;

      // Store the token in sessionStorage or localStorage
      sessionStorage.setItem("token", "true");
      sessionStorage.setItem("token", token);

      // Set the default Authorization header for future Axios requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Redirect to the admin dashboard
      router.push("/restaurant/table");
    } catch (error) {
      // Handle errors (e.g., invalid credentials)
      setError("Invalid username or password. Please try again.");
      console.error("Login error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFEFD2]">
      <div className="max-w-md w-full mx-4 p-8">
        <div className="text-center mb-4">
          <div className="relative w-24 h-24 mx-auto">
            <Image
              src="/images/Logo.png"
              alt="Admin"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
          <h3 className="text-xl text-[#000606] font-bold">Restaurant</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium text-text_black">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              value={formData.username}
              onChange={handleChange}
              className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFEFD2]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-text_black">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFEFD2]"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-textcol text-white py-2 px-4 rounded-md hover:bg-[#0a2242]/90 focus:outline-none focus:ring-2 focus:ring-[#FFEFD2] focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;