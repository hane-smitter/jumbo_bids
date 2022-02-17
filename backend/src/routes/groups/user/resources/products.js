import express from "express";

import {
  getProducts,
  getBiddableProducts,
  getBiddableProductDetails
} from "../../../../controllers/user/products.js";
import paginator from "../../../../_helpers/paginate/paginate-handler.js";

const router = express.Router();

router.get("/bids/iteminfo", getBiddableProductDetails);
router.get("/bids", paginator, getBiddableProducts);
router.get("/", getProducts);



export default router;