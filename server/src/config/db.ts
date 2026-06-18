import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);

    console.log(" MongoDB Connected");
  } catch (error) {
    console.error(" Database Connection Error:", error);
    process.exit(1);
  }
};