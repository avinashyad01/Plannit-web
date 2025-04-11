"use client"
import React from 'react';
import Link from "next/link";
import { ChevronRight } from 'lucide-react';

const ArticleList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 md:gap-4 gap-4">
      {articles.map((article) => (
        <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="lg:p-6 md:p-2 p-2">
            <div className="flex items-center mb-4">
              <img 
                src={article.author.avatar}
                alt={article.author.name}
                className="lg:w-8 md:w-4 w-4 lg:h-8 md:h-4 h-4 rounded-full mr-3"
              />
              <span className="font-bold lg:text-sm md:text-[10px] text-[8px] text-norm_black">{article.author.name}</span>
              <span className="font-normal lg:text-sm md:text-[10px] text-[8px] text-norm_black ml-auto">{article.date}</span>
            </div>
            <h2 className="lg:text-xl md:text-sm text-[12px] font-semibold mb-3">{article.title}</h2>
            <p className="text-[#212121] mb-4 line-clamp-3 lg:text-sm md:text-sm text-[10px]">{article.excerpt}</p>
            <Link href="/user/blogs/subblog">
            <button className="flex bg-customorange text-white lg:px-4 md:px-2 px-2 py-2 rounded-md hover:bg-orange-500 transition-colors">
              READ MORE
              <ChevronRight className="w-6 h-6 text-white" />
              </button>
              </Link>
          </div>
        </div>
      ))}
      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        <button className="w-8 h-8 bg-[#0F0C29] text-white rounded-md">1</button>
        <button className="w-8 h-8 bg-gray-100 text-gray-700 rounded-md">2</button>
        <button className="w-8 h-8 bg-gray-100 text-gray-700 rounded-md">3</button>
      </div>
    </div>
  );
};
export default ArticleList;
