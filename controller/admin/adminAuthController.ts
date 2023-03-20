import adminAuth from "../../model/admin/adminAuth";
import mongoose from "mongoose";
import { Request, Response } from "express";

export const adminSignup = async (req: Request, res: Response) => {
  try {
    const { companyName, companyEmail, yourName, password } = req.body;

    const admin = await adminAuth.create({
      companyName,
      companyEmail,
      yourName,
      password,
    });
    return res.status(200).json({
      message: "Success",
      data: admin,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "an error occurred while creating admin",
      data: error.message,
    });
  }
};

export const adminSignin = async (req: Request, res: Response) => {
  try {
    const { companyName, companyEmail, password } = req.body;

    const admin = await adminAuth.findOne({ companyEmail });

    return res.status(200).json({
      message: "Success , admin is logged in",
      data: admin,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while creating admin",
      data: error.message,
    });
  }
};

//get all admins
export const getAllAdmin = async (req: Request, res: Response) => {
  try {
    const admin = await adminAuth.find();

    return res.status(200).json({
      message: "get all admins",
      data: admin,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "failed to get admin",
      data: error,
      err: error.message,
    });
  }
};
