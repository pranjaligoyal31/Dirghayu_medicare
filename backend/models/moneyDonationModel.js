import mongoose from "mongoose";

const moneyDonationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  amount: { type: Number, required: true },
  message: { type: String, default: "" },
  payment: { type: Boolean, default: false },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  date: { type: Number, required: true } // timestamp
});

const moneyDonationModel =
  mongoose.models.moneyDonation || mongoose.model("moneyDonation", moneyDonationSchema);

export default moneyDonationModel;
