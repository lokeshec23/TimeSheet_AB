"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // Shadcn UI Input
import { Button } from "@/components/ui/button"; // Shadcn UI Button
import { Label } from "@/components/ui/label"; // Shadcn UI Label
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // Icons for input fields
import { Separator } from "@/components/ui/separator"; // Shadcn UI Separator
import Link from "next/link";

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your API call or further logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg space-y-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 antialiased">
          Create an Account
        </h2>

        {/* Social Login Buttons */}
        <div className="flex gap-4 justify-center">
          <Button variant="outline" className="w-full flex gap-2 items-center">
            <FaEnvelope className="text-blue-500" /> Sign up with Email
          </Button>
          <Button variant="outline" className="w-full flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-red-500"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            Sign up with Google
          </Button>
        </div>

        {/* Separator */}
        <div className="relative">
          <Separator className="bg-gray-300" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 bg-white text-gray-500 text-sm">
            Or sign up with
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="relative">
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="pl-10 w-full"
              required
            />
            <FaUser className="absolute top-9 left-3 text-gray-400" />
          </div>

          {/* Email Field */}
          <div className="relative">
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 w-full"
              required
            />
            <FaEnvelope className="absolute top-9 left-3 text-gray-400" />
          </div>

          {/* Password Field */}
          <div className="relative">
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="pl-10 w-full"
              required
            />
            <FaLock className="absolute top-9 left-3 text-gray-400" />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Sign Up
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
