import { Router } from "express";
import {
  adminSignin,
  adminSignup,
} from "../../controller/admin/adminAuthController";

const adminAuthRoutes = Router();

adminAuthRoutes.post("/admin/login", adminSignin);
adminAuthRoutes.post("/admin/register", adminSignup);

export default adminAuthRoutes;
