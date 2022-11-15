import { Router } from "express";
import authController from "../controllers/auth-controller";
import upload from "../utils/multer";
import ValidData from "../middlewares/valiadData";

const router = Router();

router
    .post("/signup", upload.single('profilePhoto'), ValidData.validateData,authController.signup)
    .post("/login", authController.login)

export default router;