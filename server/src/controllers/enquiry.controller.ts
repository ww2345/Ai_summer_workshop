import { Request, Response } from "express";
import Enquiry from "../models/enquiry.model";

export const createEnquiry = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      data: enquiry,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};