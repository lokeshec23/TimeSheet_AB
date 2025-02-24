"use client";
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input"; // Shadcn UI Input
import { Button } from "@/components/ui/button"; // Shadcn UI Button
import { Label } from "@/components/ui/label"; // Shadcn UI Label
import { FaEnvelope, FaLock } from "react-icons/fa"; // Icons for input fields
import { Separator } from "@/components/ui/separator"; // Shadcn UI Separator
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { loginAPI } from "./services/apiRoutes";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
// Define the type for form data
interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  // Redirect to /v2/home
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true);
      e.preventDefault();
      if (!formData.email || !formData.password) {
        toast({
          classType: "error",
          title: "Invalid input",
          description: "All fields are mandatory",
        });
        return;
      }

      const isCompanyEmilID =
        formData.email.split("@")["1"] === "analyticbrains.com";
      if (!isCompanyEmilID) {
        toast({
          classType: "error",
          title: "Invalid Email Id",
          description: "Please use offical company email id",
        });
        return;
      }

      if (formData.password.length < 6) {
        toast({
          classType: "error",
          title: "Password Length",
          description: "Password must be at least 6 characters long",
        });
        return;
      }
      // Simulate API call for successful login
      const response = await loginAPI(formData);
      if (response?.isError) {
        toast({
          classType: "error",
          title: "Error Occurred!",
          description: response.message,
        });
        return;
      }
      toast({
        classType: "success",
        title: "Success",
        description: "You have been successfully signed up",
      });
      setFormData({ email: "", password: "" });
      setLoading(false);
      // Save the token to session storage and cookies
      // const { token, username }: { token: string; username: string } =
      //   response.token;

      // Save to session storage
      sessionStorage.setItem("token", response.token);
      sessionStorage.setItem("userName", response.userName);

      // Save to cookies (with an expiration time of 1 hour)
      Cookies.set("token", response.token, { expires: 1 / 24 }); // Expires in 1 hour
      Cookies.set("userName", response.userName, { expires: 1 / 24 }); // Expires in 1 hour

      router.push("/v2/home");
    } catch (ex) {
      console.error("err", ex);
    } finally {
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg space-y-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back!
        </h2>

        {/* Social Login Buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            className="w-full flex gap-2 items-center"
            disabled
          >
            <FaEnvelope className="text-blue-500" /> Sign in with Email
          </Button>
          <Button
            variant="outline"
            className="w-full flex gap-2 items-center"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-red-500"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            Sign in with Google
          </Button>
        </div>

        {/* Separator */}
        <div className="relative">
          <Separator className="bg-gray-300" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 bg-white text-gray-500 text-sm">
            Or sign in with
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
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
            />
            <FaLock className="absolute top-9 left-3 text-gray-400" />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              href={"/forgot-password"}
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            disabled={loading}
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            {loading && <Loader2 className="animate-spin" />}
            Log In
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
