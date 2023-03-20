import mongoose from "mongoose";
import { adminSignUp } from "../allinterfaces";

interface iAuth extends adminSignUp, mongoose.Document {}

const AdminAuth = new mongoose.Schema<adminSignUp>(
  {
    companyName: {
      type: String,
      unique: true,
      required: [true, "please enter your company name"],
    },
    companyEmail: {
      type: String,
      unique: true,
      required: [true, "please enter your company email"],
      trim: true,
      lowercase: true,
    },
    yourName: {
      type: String,
      required: [true, "please enter your name"],
    },
    password: {
      type: String,
      required: [true, "please enter a password"],
    },
  },
  { timestamps: true }
);

const adminAuth = mongoose.model<iAuth>("adminAuthModel", AdminAuth);

export default adminAuth;
