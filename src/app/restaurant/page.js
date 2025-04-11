"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RestaurantPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/restaurant/auth/login"); // Redirect to Restaurant Login
  }, []);

  return <p>Redirecting...</p>;
};

export default RestaurantPage;
