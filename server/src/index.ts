import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import enquiryRoutes from "./routes/enquiry.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", enquiryRoutes);

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});

app.get("/health", (_req, res) => {
  res.json({
    success: true,
    message: "API is healthy",
  });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(
      "Failed to start server:",
      error instanceof Error ? error.message : error
    );
    process.exit(1);
  }
};

startServer();