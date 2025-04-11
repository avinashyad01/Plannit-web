"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { api } from "@/Environment/Env";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    fcmToken: "",
    roleId: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error

    try {
      const response = await axios.post(`${api}/api/users/login`, formData);
      const { token, _id, roleId } = response.data;
      if (!token) {
        setError("Authentication failed. No token received.");
        return;
      }
      // Store token in sessionStorage for authentication
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("roleId", roleId);
      sessionStorage.setItem("userId", _id);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      if (parseInt(roleId) === 1) {
        sessionStorage.setItem("adminAuthenticated", "true");
        sessionStorage.setItem("adminId", _id);
        router.push("/admin/tables");
      } else if (parseInt(roleId) === 2) {
        sessionStorage.setItem("creatorAuthenticated", "true");
        sessionStorage.setItem("creatorId", _id);
        router.push("/creator/dashboard");
      } else {
        setError("Unauthorized access. Please check your role.");
      }
    } catch (err) {
      console.error("Login error:", err.response ? err.response.data : err);
      const errorMessage =
        err.response?.data?.message || "Invalid Username or Password. Please try again.";
      setError(errorMessage);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFEFD2]">
      <div className="max-w-md w-full mx-4 p-8">
        <div className="text-center mb-6">
          <div className="relative w-24 h-24 mx-auto">
            <Image src="/images/Logo.png" alt="Admin" layout="fill" objectFit="contain" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Login</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="userName"
              name="userName"
              type="text"
              required
              value={formData.userName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFEFD2] focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="roleId" className="block text-sm font-medium text-gray-700">
              Role ID
            </label>
            <input
              id="roleId"
              name="roleId"
              type="text"
              required
              value={formData.roleId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFEFD2] focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFEFD2] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-textcol text-white py-2 rounded-md hover:bg-[#0a2242]/90 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
