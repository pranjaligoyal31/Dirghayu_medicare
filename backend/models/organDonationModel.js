import mongoose from "mongoose";

const organDonationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  organ: { type: String, required: true }, // e.g., "kidney", "liver", etc.
  isAliveDonation: { type: Boolean, default: false },
  medicalClearance: { type: Boolean, default: false },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  date: { type: Number, required: true } // timestamp
});

const organDonationModel =
  mongoose.models.organDonation || mongoose.model("organDonation", organDonationSchema);

export default organDonationModel;
