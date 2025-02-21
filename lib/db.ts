import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URL;

const connectDB = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState == 1) {
    console.log("Already connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "next14restapi",
      bufferCommands: true,
    });
    console.log("DB connection established");
  } catch (ex: any) {
    console.log("Error in db connection", ex);
    throw new Error(ex);
  }
};

export default connectDB;
