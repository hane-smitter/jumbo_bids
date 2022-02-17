import express from "express";

import {
  createBid,
  getHighestAmountBidder,
  getLastBidder,
  getCurrentBidders
} from "../../../../controllers/user/bids.js";
import { validate } from "../../../../middlewares/validator/index.js";

const router = express.Router();

router.route("/").post(validate("createBid"), createBid);

router.get("/amount/high", getHighestAmountBidder);
router.get("/last", getLastBidder);
router.get("/current-bidders", getCurrentBidders);

export default router;
