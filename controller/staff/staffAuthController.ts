import staffAuth from "../../model/staff/staffAuth";
import mongoose from "mongoose";
import { Request, Response } from "express";

export const staffSignup = async (req: Request, res: Response) => {
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

export const staffSignin = async (req: Request, res: Response) => {
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

//get all admins
export const getAllStaff = async (req: Request, res: Response) => {
  try {
    const staff = await staffAuth.find();

    return res.status(200).json({
      message: "get all staff",
      data: staff,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "failed to get staff",
      data: error,
      err: error.message,
    });
  }
};

export const getOneStaff = async (req: Request, res: Response) => {
  try {
    const staff = await staffAuth.findById(req.params.staffId);

    return res.status(200).json({
      message: "gotten one staff",
      data: staff,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "failed to get staff",
      data: error,
      err: error.message,
    });
  }
};
