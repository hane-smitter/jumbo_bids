import express from "express";

import {
  register,
  login,
  logout,
  forgotPassword,
  resetpassword,
} from "../../../../controllers/user/auth.js";
import { authCheck } from "../../../../middlewares/auth.js";

const router = express.Router();

router.post("/signup", register);
router.post("/signin", login);
router.post("/forgotpassword", forgotPassword);
router.patch("/resetpassword/:resetToken", resetpassword);
router.post("/logout", authCheck, logout);

export default router;
