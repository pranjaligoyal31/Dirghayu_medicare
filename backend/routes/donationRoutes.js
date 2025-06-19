import express from "express";
import {
  addBloodDonation,
  getAllBloodDonations,
  addMoneyDonation,
  getAllMoneyDonations,
  addOrganDonation,
  getAllOrganDonations
} from "../controllers/donationController.js";
import { authUser } from "../middlewares/authUser.js";

const router = express.Router();

// Protect donation creation routes
router.post("/blood", authUser, addBloodDonation);
router.post("/money", authUser, addMoneyDonation);
router.post("/organ", authUser, addOrganDonation);

// Public routes (or protect if needed)
router.get("/blood", getAllBloodDonations);
router.get("/money", getAllMoneyDonations);
router.get("/organ", getAllOrganDonations);

export default router;
