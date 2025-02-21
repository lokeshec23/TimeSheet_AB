import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URL;

const connectDB = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected to the database");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting to the database...");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI!, {
      dbName: "timesheet-nextjs",
      bufferCommands: true,
    });
    console.log("Database connection established");
  } catch (ex) {
    console.error("Error connecting to the database:", ex);
    throw new Error("Database connection failed");
  }
};

export default connectDB;
