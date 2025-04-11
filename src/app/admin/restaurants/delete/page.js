"use client";
import { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { api } from "@/Environment/Env";

const DeleteConfirmationModal = ({ isOpen, onClose, restaurantId, onDeleteSuccess }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!restaurantId) return;
    setIsDeleting(true);

    try {
      const token = sessionStorage.getItem("token");
      await axios.delete(`${api}/api/admin/restaurant_login/deleteRestaurant/${restaurantId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onDeleteSuccess(); // Notify parent component of successful deletion
    } catch (error) {
      console.error("Error deleting restaurant:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Confirm Delete</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <p className="text-gray-600 mb-4">Are you sure you want to delete this restaurant?</p>
        <div className="flex justify-end space-x-3">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            onClick={onClose}
            disabled={isDeleting}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;