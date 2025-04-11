"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ArticleList from "@/app/user/blogs/ArticleList";
import Sidebar from "@/app/user/blogs/Sidebar";
import Navbar from "@/app/components/user/navbar/navbar";
import Footer from "@/app/components/user/footer/footer";

const page = () => {
  const articles = [
    {
      id: 1,
      title: "Eco-Friendly Homes: The Future of Real Estate",
      excerpt:
        "The real estate industry is undergoing a significant transformation as eco-friendly homes gain popularity among buyers and developers...",
      image: "/api/placeholder/400/300",
      author: { name: "Sarah McBride", avatar: "/api/placeholder/40/40" },
      date: "Nov 29, 2023",
    },
    {
      id: 2,
      title: "Digital Declutter: Cutting the Noise in a Hyperconnected World",
      excerpt:
        "In today's hyperconnected world, the lines between work, leisure, and rest have blurred significantly. Notifications, endless streams of content...",
      image: "/api/placeholder/400/300",
      author: { name: "Author", avatar: "/api/placeholder/40/40" },
      date: "Nov 29, 2024",
    },
    {
      id: 3,
      title: "A Foodie's Guide to Europe: Best Culinary Experiences",
      excerpt:
        "Europe is a treasure trove of culinary delights, offering a diverse array of flavors, techniques, and traditions. For food enthusiasts, the continent...",
      image: "/api/placeholder/400/300",
      author: { name: "Cruz McIntyre", avatar: "/api/placeholder/40/40" },
      date: "Nov 29, 2024",
    },
    {
      id: 4,
      title: "The Art of Black-and-White Photography",
      excerpt:
        "Black-and-white photography is a timeless art form that transcends trends and technology. By stripping away color, this medium emphasizes composition...",
      image: "/api/placeholder/400/300",
      author: { name: "Anna", avatar: "/api/placeholder/40/40" },
      date: "Nov 29, 2024",
    },
  ];
  const recentPosts = [
    {
      id: 1,
      title: "Sustainable Travel Tips: Reducing Your Carbon Footprint",
      author: "Clara Wilson",
      avatar: "/api/placeholder/40/40",
      date: "Nov 29, 2024",
    },
    {
      id: 2,
      title: "The Rise of Minimalist Interior Design",
      author: "Sophia Turner",
      avatar: "/api/placeholder/40/40",
      date: "Nov 29, 2024",
    },
    {
      id: 3,
      title: "Mastering Night Photography: Capturing the Dark",
      author: "James Harper",
      avatar: "/api/placeholder/40/40",
      date: "Nov 29, 2024",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="lg:mx-20 md:mx-6 mx-4 lg:py-8 md:py-6 py-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-lg text-[#484848] lg:mb-8 md:mb-6 mb-2">
          <Link href="/">
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-lg font-bold text-[#121416]">Blog Page</span>
          <ChevronRight className="w-4 h-4 mx-1" />
        </div>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start lg:mb-6 md:mb-4 mb-4">
          <h1 className="lg:text-4xl md:text-2xl text-xl font-bold lg:mb-4 md:mb-2 mb-1">
            Exploring New Articles
          </h1>
          <p className="text-[#212121] font-normal lg:max-w-md md:max-w-[18rem] lg:text-xl md:text-sm text-sm ">
            Dive into a world of insights, ideas, and inspiration. Stay updated
            with the latest trends shaping our present and future.
          </p>
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-2">
          {/* Articles Grid */}
          <div className="lg:col-span-2">
            <ArticleList articles={articles} />
          </div>
          {/* Sidebar */}
          <div className="space-y-8">
            <Sidebar recentPosts={recentPosts} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default page;
