import mongoose from "mongoose";
import { adminWalletProps } from "./adminModel";

interface Admin extends adminWalletProps, mongoose.Document {}

const adminWalletSchema = new mongoose.Schema<adminWalletProps>({
  balance: {
    type: Number,
    required: true,
  },
  walletId: {
    type: String,
  },
  walletNumber: {
    type: Number,
    required: true,
  },
});

const adminWalletModel = mongoose.model<Admin>(
  "adminWallet",
  adminWalletSchema
);

export default adminWalletModel;
