// app/page.tsx
"use client"; // Required for client-side code

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if the token exists in sessionStorage
    const token = sessionStorage.getItem("token");

    if (token) {
      // If token exists, navigate to /home
      router.push("/home");
    } else {
      // If no token, navigate to /login
      router.push("/login");
    }
  }, [router]);

  return null; // Render nothing while redirecting
}
