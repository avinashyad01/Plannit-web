"use client";
import { useState, useRef, useEffect } from "react";
import { MoreVertical, Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { api } from "@/Environment/Env";
import DeleteModal from "@/app/admin/blog/delete/page"; // Import the DeleteModal component

const Page = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [showOptions, setShowOptions] = useState(null);
  const [deletePostId, setDeletePostId] = useState(null);
  const optionsModalRef = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false); // To handle loading state

  // Fetch blog posts
  const fetchBlogPosts = async () => {
    setLoading(true); // Start loading
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.error("Token is missing. Redirecting to login...");
      sessionStorage.clear();
      router.push("/admin/login");
      return;
    }

    try {
      const response = await axios.get(`${api}/api/blog/getBlog`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data?.posts) {
        setBlogPosts(response.data.posts);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error.response?.data || error);
      if (error.response?.status === 401) {
        sessionStorage.clear();
        router.push("/admin/login");
      }
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchBlogPosts();

    // Close options dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (optionsModalRef.current && !optionsModalRef.current.contains(event.target)) {
        setShowOptions(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleOptions = (postId) => {
    setShowOptions(showOptions === postId ? null : postId);
  };

  const handleEditPost = (postId) => {
    // Pass postId as query parameter for the edit page
    // router.push(`/admin/blog/edit?id=${postId}`);
    router.push("/admin/blog/edit");
  };

  return (
    <div className="bg-[#FFEFD2] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-semibold">Blog</h1>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all"
          onClick={() => router.push("/admin/blog/add")}
        >
          Add +
        </button>
      </div>
      <hr className="border-t border-[#a9a8aa] mb-2" />

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-4 gap-4 md:p-3 lg:p-4 p-2">
        {loading ? (
          <p>Loading blog posts...</p>
        ) : blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <div key={post._id} className="bg-white rounded-lg shadow-md relative">
              {/* Options Menu */}
              <div className="absolute top-2 right-2 z-10">
                <button className="p-2 hover:bg-gray-100 rounded-full" onClick={() => handleToggleOptions(post._id)}>
                  <MoreVertical className="h-6 w-6 text-black" />
                </button>
                {showOptions === post._id && (
                  <div ref={optionsModalRef} className="absolute right-0 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <button
                      className="flex items-center w-full px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleEditPost(post._id)}
                    >
                      <Edit className="w-4 h-4 mr-2" /> Edit
                    </button>
                    <hr className="border-b border-gray-200" />
                    <button
                      className="flex items-center w-full px-2 py-2 text-sm text-red-500 hover:bg-gray-100"
                      onClick={() => setDeletePostId(post._id)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" /> Delete
                    </button>
                  </div>
                )}
              </div>

              {/* Blog Post Content */}
              <div className="flex justify-center p-4">
                <img src={post.image} alt={post.title} className="w-32 h-32 object-cover rounded-md" />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl text-[#141414] font-bold mb-2">{post.title}</h2>
                <p className="text-[#141414] font-normal text-sm">{post.content}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>

      {/* Delete Modal Component */}
      {deletePostId && (
        <DeleteModal deletePostId={deletePostId} onClose={() => setDeletePostId(null)} onDeleteSuccess={fetchBlogPosts} />
      )}
    </div>
  );
};

export default Page;