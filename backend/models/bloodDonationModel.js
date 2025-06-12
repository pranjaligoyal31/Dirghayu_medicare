import mongoose from "mongoose";

const bloodDonationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true
  },
  
  units: {
    type: Number,
    required: true,
    min: 1
  },
  
  weight: {
    type: Number, // in kilograms
    required: true,
    min: 45 // 45kg is often the minimum safe weight for donation
  },
  
  height: {
    type: Number, // in centimeters
    required: true,
    min: 140 // arbitrary minimum, can be changed as per criteria
  },
  
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  
  date: {
    type: Number,
    required: true // timestamp
  }
});

const bloodDonationModel =
  mongoose.models.bloodDonation || mongoose.model("bloodDonation", bloodDonationSchema);

export default bloodDonationModel;
