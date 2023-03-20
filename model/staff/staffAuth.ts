import mongoose from "mongoose";

import { staffSignUp } from "../allinterfaces";

interface SAuth extends staffSignUp, mongoose.Document {}

const StaffAuth = new mongoose.Schema<staffSignUp>({
  yourName: {
    type: String,
    required: [true, "please enter your name"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  companyName: {
    type: String,
    unique: true,
    required: true,
  },
  position: {
    type: String,
  },
});

const staffAuth = mongoose.model<SAuth>("staffAuth", StaffAuth);

export default staffAuth;
