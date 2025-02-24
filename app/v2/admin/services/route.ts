import connectDB from "@/lib/db";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Connect to the database
    await connectDB();

    // Ensure the database connection is ready
    if (!mongoose.connection.db) {
      return NextResponse.json(
        { error: "Database connection not established" },
        { status: 500 }
      );
    }

    // Access the collection using Mongoose's native connection
    const collection = mongoose.connection.db.collection("AB-Infomation");

    // Fetch all documents from the collection
    const documents = await collection.find({}).toArray();

    // Return the documents as a JSON response
    return NextResponse.json(documents);
  } catch (ex) {
    console.error("Error in fetch company details", ex);

    // Return a 500 Internal Server Error response if something goes wrong
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
