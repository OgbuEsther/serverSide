import { Router } from "express";
import {
  adminSignin,
  adminSignup,
} from "../../controller/admin/adminAuthController";

const adminAuthRoutes = Router();

adminAuthRoutes.post("/login", adminSignin);
adminAuthRoutes.post("/register", adminSignup);

export default adminAuthRoutes;
