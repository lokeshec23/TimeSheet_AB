"use client";
import React from "react";
import Link from "next/link"; // Assuming you're using Next.js for routing
import Image from "next/image";
import { usePathname } from "next/navigation";
const SideBar = () => {
  const pathname = usePathname(); // Get the current route
  interface NavBarTypes {
    title: string;
    path: string;
    icon: string; // You can later replace this with actual icons (e.g., from Heroicons or Material Icons)
  }

  const navBarList: NavBarTypes[] = [
    {
      title: "Home",
      path: "/home",
      icon: "/sidebarIcons/home_icon.svg",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: "/sidebarIcons/teams_icon.svg",
    },
    {
      title: "Meetings",
      path: "/meetings",
      icon: "/sidebarIcons/home_icon.svg",
    },
    {
      title: "Timesheet",
      path: "/timesheet",
      icon: "/sidebarIcons/timesheet_icon.svg",
    },
    { title: "LMS", path: "/lms", icon: "/sidebarIcons/lms_icon.svg" },
  ];

  return (
    <div className="w-full h-full bg-gray-900 text-white">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-lg antialiased font-bold text-center">
          Analytic Brains
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-2 p-4">
        {navBarList.map((item) => {
          const isActive = pathname === item.path; // Check if the current item is active
          return (
            <li key={item.title}>
              <Link
                href={item.path}
                className={`flex flex-col items-center gap-3 p-2 rounded-md transition-all duration-300 ease-in-out ${
                  isActive
                    ? "opacity-100 bg-gray-800 text-white" // Active styles
                    : "opacity-60 hover:opacity-100 hover:bg-gray-800" // Inactive styles
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={20}
                  height={20}
                  className={`object-cover ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                />

                <div className="text-sm font-medium">{item.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
