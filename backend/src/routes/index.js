import express from "express";

import adminRoutes from "./groups/admin/index.js";
import userRoutes from "./groups/user/index.js";

const router = express.Router();

router.use("/a", adminRoutes);
router.use("/u", userRoutes);

export default router;