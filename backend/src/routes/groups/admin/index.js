import express from "express";

import productRoutes from "./resources/products.js";
import categoryRoutes from "./resources/categories.js";
import storeRoutes from "./resources/stores.js";
import userRoutes from "./resources/users.js";
import bidRoutes from "./resources/bids.js";
import mpesaRoutes from "./resources/mpesa.js";
import authRoutes from "./resources/auth.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/stores", storeRoutes);
router.use("/users", userRoutes);
router.use("/bids", bidRoutes);
router.use("/mpesa", mpesaRoutes);

export default router;