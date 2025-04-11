"use client";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { api } from "@/Environment/Env";

const DeleteModal = ({ deletePostId, onClose, onDeleteSuccess }) => {
  const deleteModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (deleteModalRef.current && !deleteModalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleDeletePost = async () => {
    if (!deletePostId) return;
    const token = sessionStorage.getItem("token");

    try {
      await axios.delete(`${api}/api/blog/deletePosts/${deletePostId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onDeleteSuccess(); // Refresh posts after deletion
      onClose(); // Close modal
    } catch (error) {
      console.error("Error deleting blog post:", error.response ? error.response.data : error);
    }
  };

  if (!deletePostId) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ml-64">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-96 z-50">
        {/* Close Button (X) */}
        <button 
          className="absolute top-2 right-2 border border-gray-400 rounded-md p-1 hover:bg-gray-200 transition"
          onClick={onClose} // Close the modal
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>
        <h2 className="text-xl font-semibold mb-2 text-left">Are you Sure you want to delete this Blog</h2>
        <p className="text-gray-600 font-medium text-center">This prompt seeks confirmation from the user before permanently deleting a Blog.</p>
        {/* Centered Logout Button */}
        <div className="flex justify-center mt-4">
          <button
            className="px-6 py-2 bg-customorange text-white rounded hover:bg-red-600 transition"
            onClick={handleDeletePost} // Trigger logout function
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;