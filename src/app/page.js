"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/user/navbar/navbar";
import Footer from "@/app/components/user/footer/footer";
import Home from "@/app/user/pages/home/page";
import Table from "@/app/user/Table/page";
import Seatbook from "@/app/components/user/seatbook/seatbook";

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [content, setContent] = useState(0);

  const openLoginModal = () => {
    setContent(1);
  };

  const openSignupModal = () => {
    setContent(2);
  };
  // console.log(content, "@@@@@@@@@@@@@@@@@@@@@");
  
  useEffect(() => {
    // Check authentication status from sessionStorage
    const token = sessionStorage.getItem("token");
    setIsAuthenticated(!!token); // Convert token to boolean
  }, []);

  return (
    <div>
      <Navbar
        openLoginModal={openLoginModal}
        openSignupModal={openSignupModal}
      />
      <Seatbook ContentState={content} />
      {isAuthenticated ? <Table /> : <Home />}
      <Footer />
    </div>
  );
};

export default HomePage;
