import express from "express";

import { callback } from "../../../../controllers//user/mpesa.js";

const router = express.Router();

router.get("/callback", callback);

export default router;
