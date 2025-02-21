import connectDB from "@/lib/db";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require("bcrypt");

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { name, email, password } = await req.json();

    // Connect to the database
    await connectDB();

    // Check if the email is already registered
    const existingUser = await mongoose.connection
      .db!.collection("employeeInformation")
      .findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists", isError: true },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to the database
    const newUser = await mongoose.connection
      .db!.collection("employeeInformation")
      .insertOne({ name, email, password: hashedPassword });

    // Return success response
    return NextResponse.json(
      { message: "User registered successfully", userId: newUser.insertedId },
      { status: 202 }
    );
  } catch (ex: any) {
    console.error("Error during registration:", ex);
    return NextResponse.json(
      { message: "Server error", error: ex.message },
      { status: 500 }
    );
  }
}
