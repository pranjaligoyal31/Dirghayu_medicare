import express from "express";
import {
  addBloodDonation,
  getAllBloodDonations,
  addMoneyDonation,
  getAllMoneyDonations,
  addOrganDonation,
  getAllOrganDonations
} from "../controllers/donationController.js";
import authUser from "../middlewares/authUser.js";

const donationRouter = express.Router();

// Protect donation creation routes
donationRouter.post("/blood", authUser, addBloodDonation);
donationRouter.post("/money", authUser, addMoneyDonation);
donationRouter.post("/organ", authUser, addOrganDonation);

// Public routes (or protect if needed)
donationRouter.get("/blood", getAllBloodDonations);
donationRouter.get("/money", getAllMoneyDonations);
donationRouter.get("/organ", getAllOrganDonations);

export default donationRouter;
