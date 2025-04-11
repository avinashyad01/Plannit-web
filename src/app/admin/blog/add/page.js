"use client";
import Sidebar from "@/app/components/admin/sidebar/sidebar";
import Header from "@/app/components/header/header";
import React, { useState } from "react";
import axios from "axios";
import { api } from "@/Environment/Env";
import { useRouter } from "next/navigation";

const AddBlog = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle Image Selection
  const handleImageChange = (event) => {
    setImage(event.target.files[0]); // Store file object
  };

  // Handle Form Submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!title || !content || !image) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    setLoading(true);
    const token = sessionStorage.getItem("token");

    if (!token) {
      router.push("/admin/login"); // Redirect if no token
      return;
    }
    try {
      // Step 1: Upload the image to get the image URL
      const formData = new FormData();
      formData.append("image", image);

      const uploadResponse = await axios.post(`${api}/api/blog/uploadImage`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (uploadResponse.data && uploadResponse.data.data) {
        const imageUrl = uploadResponse.data.data[0]; 

        // Step 2: Submit the blog content with the image URL
        const blogData = {
          title,
          description: content,
          image: [imageUrl],
        };

        const response = await axios.post(`${api}/api/blog/submitBlog`, blogData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        console.log("Blog added:", response.data);
        alert("Blog posted successfully!");
        router.push("/admin/blog"); // Redirect to blog list
      } else {
        alert("Image upload failed. Please try again.");
      }

    } catch (error) {
      if (error.response?.status === 401) {
        sessionStorage.removeItem("token"); // Clear invalid token
        router.push("/admin/login"); // Redirect to login
      } else {
        console.error("Error posting blog:", error.response ? error.response.data : error);
        alert("Failed to post blog. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="bg-[#FFEFD2] ml-64 min-h-screen pb-8">
      <Header />
        <div className="p-4">
          <h2 className="lg:text-2xl md:text-xl text-lg font-semibold text-black">Blog</h2>
        </div>
        <hr className="border-t border-[#a9a8aa] my-4" />
        {/* Content */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg text-center text-black font-bold">Upload Blog Content Here</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload Section */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-white">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="file-upload"
                onChange={handleImageChange}
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex justify-center items-center mb-2">
                  <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Click to Upload Image</p>
                  {image && <p className="text-xs text-gray-500 mt-1">{image.name}</p>}
                  <p className="text-xs text-gray-500 mt-1">(Max. File size: 25 MB)</p>
                </div>
              </label>
            </div>

            {/* Title Input */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Content Input */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Content
              </label>
              <textarea
                id="content"
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter blog content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-[#1a2b49] text-white rounded-md hover:bg-[#152238] disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
