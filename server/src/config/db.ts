import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error(
      "MONGODB_URI is not defined. Check your Render environment variables."
    );
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(
      "Database Connection Error:",
      error instanceof Error ? error.message : error
    );
    throw error;
  }
};