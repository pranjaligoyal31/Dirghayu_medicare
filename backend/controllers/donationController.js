import BloodDonation from "../models/bloodDonationModel.js";
import MoneyDonation from "../models/moneyDonationModel.js";
import OrganDonation from "../models/organDonationModel.js";

// Blood Donation
export const addBloodDonation = async (req, res) => {
  try {
    const { bloodGroup, units, weight, height, date } = req.body;

    if (!bloodGroup || !units || !weight || !height || !date) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    if (weight < 45) {
      return res.status(400).json({ success: false, message: "Minimum weight must be 45kg" });
    }

    if (height < 140) {
      return res.status(400).json({ success: false, message: "Minimum height must be 140cm" });
    }
    const donation = new BloodDonation({
      userId: req.user._id,
      bloodGroup,
      units,
      weight,
      height,
      date
    });
    await donation.save();
    res.status(201).json({ success: true, message: "Blood donation submitted", data: donation });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to submit blood donation", error });
  }
};
export const getAllBloodDonations = async (req, res) => {
  try {
    const donations = await BloodDonation.find().sort({ date: -1 });
    res.status(200).json({ success: true, data: donations });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching blood donations", error });
  }
};
//Money Donation 
export const addMoneyDonation = async (req, res) => {
  try {
    const { amount, message, payment, date } = req.body;
    if (!amount || !date) {
      return res.status(400).json({ success: false, message: "Amount and date are required" });
    }
    const donation = new MoneyDonation({
      userId: req.user._id,
      amount,
      message,
      payment,
      date
    });
    await donation.save();
    res.status(201).json({ success: true, message: "Money donation submitted", data: donation });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to submit money donation", error });
  }
};
export const getAllMoneyDonations = async (req, res) => {
  try {
    const donations = await MoneyDonation.find().sort({ date: -1 });
    res.status(200).json({ success: true, data: donations });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching money donations", error });
  }
};
//Organ Donation
export const addOrganDonation = async (req, res) => {
  try {
    const { organ, isAliveDonation, medicalClearance, date } = req.body;

    if (!organ || !date) {
      return res.status(400).json({ success: false, message: "Organ and date are required" });
    }

    const donation = new OrganDonation({
      userId: req.user._id,
      organ,
      isAliveDonation,
      medicalClearance,
      date
    });
    await donation.save();
    res.status(201).json({ success: true, message: "Organ donation submitted", data: donation });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to submit organ donation", error });
  }
};
export const getAllOrganDonations = async (req, res) => {
  try {
    const donations = await OrganDonation.find().sort({ date: -1 });
    res.status(200).json({ success: true, data: donations });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching organ donations", error });
  }
};
