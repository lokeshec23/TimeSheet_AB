import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    return new NextResponse("Hi");
  } catch (ex) {
    console.log("error in get", ex);
  }
}
