"use client"
import React from "react";

const Sidebar = ({ recentPosts }) => {
  return (
    <div className="space-y-8">
      {/* Recent Posts */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Recent Post</h3>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex items-start space-x-4">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-medium mb-1 line-clamp-2">{post.title}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{post.author}</span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Trending Posts */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Trending Post</h3>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex items-start space-x-4">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-medium mb-1 line-clamp-2">{post.title}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{post.author}</span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
