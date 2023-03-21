import mongoose from "mongoose";

import { staffSignUp } from "../allinterfaces";

interface SAuth extends staffSignUp, mongoose.Document {}

const StaffAuth = new mongoose.Schema<staffSignUp>(
  {
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
    wallet: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "staffWallet",
      },
    ],
    transactionHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "staffTransactionHistory",
      },
    ],
    savingsPlan: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "staffSavingsPlan",
      },
    ],
    houseRentPlan: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "staffHousePlan",
      },
    ],
    schoolFeesPlan: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "staffSchoolFeesPlan",
      },
    ],
    investmentPlan: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "staffSchool",
      },
    ],
    travelAndTour: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "staffTravelAndTour",
      },
    ],
    other: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "staffOther",
      },
    ],
  },
  { timestamps: true }
);

const staffAuth = mongoose.model<SAuth>("staffAuth", StaffAuth);

export default staffAuth;
