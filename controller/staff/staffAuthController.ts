import staffAuth from "../../model/staff/staffAuth";
import mongoose from "mongoose";
import { Request, Response } from "express";

export const adminSignup = async (req: Request, res: Response) => {
  try {
    const { companyName, email, yourName, password, position } = req.body;

    const staff = await staffAuth.create({
      companyName,
      email,
      yourName,
      password,
      position,
    });
    return res.status(200).json({
      message: "Success",
      data: staff,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "an error occurred while creating staff",
      data: error.message,
    });
  }
};

export const adminSignin = async (req: Request, res: Response) => {
  try {
    const { companyName, email, password } = req.body;

    const staff = await staffAuth.findOne({ email });

    return res.status(200).json({
      message: "Success , staff is logged in",
      data: staff,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while logging in staff",
      data: error.message,
    });
  }
};
