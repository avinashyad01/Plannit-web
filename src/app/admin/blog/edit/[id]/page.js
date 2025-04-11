"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { api } from "@/Environment/Env";
import Sidebar from "@/app/components/admin/sidebar/sidebar";
import Header from "@/app/components/header/header";

// 🔥 params.id comes from the dynamic folder name [id]
const EditBlog = ({ params }) => {
  const router = useRouter();
  const postId = params.id;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch the existing blog post data
  useEffect(() => {
    if (!postId) return;

    const fetchPost = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        router.push("/admin/login");
        return;
      }

      try {
        const response = await axios.get(`${api}/api/blog/getBlogById/${postId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const { title, content, image } = response.data.post;
        setTitle(title);
        setContent(content);
        setImage(image || null);
      } catch (error) {
        console.error("Error fetching blog post:", error.response?.data || error);
      }
    };

    fetchPost();
  }, [postId, router]);

  // Handle file input change (Preview & Store New Image)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      setImage(URL.createObjectURL(file)); 
    }
  };
  // Handle Update Blog Post API Call
  const handleUpdate = async () => {
    if (!title || !content) {
      alert("Title and content cannot be empty!");
      return;
    }
    setLoading(true);
    const token = sessionStorage.getItem("token");
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (newImage) {
        formData.append("image", newImage); 
      }

      await axios.put(`${api}/api/blog/updatePosts/${postId}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Blog updated successfully!");
      router.push("/admin/blog"); 
    } catch (error) {
      console.error("Error updating blog post:", error.response?.data || error);
      alert("Failed to update blog post!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-[#FFEFD2] ml-64 min-h-screen w-full">
        <Header />
        <div className="p-4">
          <h1 className="text-2xl text-black font-semibold">Edit Blog</h1>
        </div>
        <hr className="border-t border-[#a9a8aa] my-4" />

        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg text-center font-medium">Update Blog Content</h3>

          {/* Image Upload Section */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mt-4 text-center">
            {image ? (
              <img src={image} alt="Current blog image" className="w-32 h-32 object-cover mx-auto rounded" />
            ) : (
              <p className="text-gray-500 text-sm">No image available</p>
            )}

            <div className="mt-4">
              <label className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                Click to Change Image
                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
              </label>
              <p className="text-xs text-gray-500 mt-1">(Max. File size: 25 MB)</p>
            </div>
          </div>

          {/* Title Input */}
          <div className="mt-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Content Input */}
          <div className="mt-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              id="content"
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {/* Update Button */}
          <div className="flex justify-end mt-6">
            <button
              className="px-4 py-2 bg-[#1a2b49] text-white rounded-md hover:bg-[#152238] disabled:opacity-50"
              onClick={handleUpdate}
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
