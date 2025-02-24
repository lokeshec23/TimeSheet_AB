import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/db"; // Your database connection logic

// Ensure the database is connected before handling requests
export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await connectDB();

    // Parse the request body
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required", isError: true },
        { status: 400 }
      );
    }

    // Check if the user exists in the "employeeInformation" collection
    const user = await mongoose.connection
      .db!.collection("employeeInformation")
      .findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "Email not found" }, { status: 404 });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid credentials", isError: true },
        { status: 401 }
      );
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    // Return success response
    return NextResponse.json(
      {
        message: "Login successful",
        token,
        userName: user.name,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error in login attempt:", error.message);
      return NextResponse.json(
        { message: "Server error", error: error.message },
        { status: 500 }
      );
    }

    // If the error is not an instance of Error (e.g., string, object)
    console.error("Unexpected error in login attempt:", error);
    return NextResponse.json(
      { message: "Server error", error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
