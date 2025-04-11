"use client"
import React from 'react'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Breadcrumb = () => {
  return (
    <div>
       {/* Breadcrumb */}
      <div className="flex items-center text-lg text-[#484848] lg:mb-8 md:mb-6 mb-4 lg:mx-20 md:mx-8 mx-4">
        <Link href="/">
          <span>Home</span>
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className='text-lg font-bold text-[#121416]'>About us Page</span>
        <ChevronRight className="w-4 h-4" />
      </div>
    </div>
  )
}

export default Breadcrumb
