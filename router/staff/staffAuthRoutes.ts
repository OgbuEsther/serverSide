import { Router } from "express";
import {
  staffSignin,
  staffSignup,
} from "../../controller/staff/staffAuthController";

const staffAuthRoutes = Router();

staffAuthRoutes.post("/stafflogin", staffSignin);
staffAuthRoutes.post("/staffregister", staffSignup);

export default staffAuthRoutes;
