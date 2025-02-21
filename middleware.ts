// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the current path
  const path = request.nextUrl.pathname;

  // Define public paths (no authentication required)
  const publicPaths = ["/login", "/signup"];

  // Check if the current path is public
  const isPublicPath = publicPaths.includes(path);

  // Simulate getting the token from sessionStorage (Note: sessionStorage is client-side only)
  // For server-side checks, you might need to use cookies instead.
  const token = request.cookies.get("token")?.value || "";
  //   const token = sessionStorage.getItem("token") || "";

  // If the user is trying to access a private route without a token, redirect to login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If the user is authenticated but tries to access login/signup, redirect to home
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // Otherwise, allow the request to proceed
  return NextResponse.next();
}

// Specify which routes the middleware should run on
export const config = {
  matcher: [
    "/",
    "/home",
    "/login",
    "/signup",
    "/timesheet",
    "/dashboard",
    "/meetings",
    "/lms",
  ], // Add other routes as needed
};
