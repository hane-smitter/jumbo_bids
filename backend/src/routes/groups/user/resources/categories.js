import express from "express";

import { getCategories } from "../../../../controllers/user/categories.js";
import { createCategory, deleteCategory, updateCategory } from "../../../../controllers/admin/categories.js";
import { validate } from "../../../../middlewares/validator/index.js";

const router = express.Router();

router.route("/")
    .get(getCategories);

export default router;
