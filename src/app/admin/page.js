"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/login"); // Redirect to Admin Login
  }, []);

  return <p>Redirecting...</p>;
};

export default AdminPage;
