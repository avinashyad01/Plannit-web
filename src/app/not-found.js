"use client";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

const handleLogout = () => {
  if (typeof window !== "undefined") {
    sessionStorage.clear();
  }
};

function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFEFD2] flex flex-col justify-center p-4 sm:p-8">
      <div className="max-w-6xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="w-full flex justify-center">
          <Image
            src="/images/404 error.png"
            alt="404 Error"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full lg:pl-8 text-center lg:text-left">
            <h1 className="text-6xl lg:text-9xl font-extrabold text-gray-900">404</h1>
            <h2 className="mt-2 text-lg lg:text-3xl font-bold text-gray-900">
              Oops! It seems this page doesn't exist.
            </h2>

          {/* Go back to login link */}
            <div className="mt-8">
            <Link
              href="/"
              onClick={handleLogout}
              className="inline-flex items-center px-6 py-3 bg-customorange hover:bg-red-600 text-white text-sm font-medium rounded-md transition-colors duration-200"
            >
            <Home className="mr-2 h-5 w-5" /> Go back
            </Link>
          </div>
      </div>
          </div>
          </div>
  );
}

export default NotFound;