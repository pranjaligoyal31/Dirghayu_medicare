import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const DonateAndSave = () => {
  const { token, backendUrl } = useContext(AppContext);

  const [formType, setFormType] = useState("blood");
  const [date, setDate] = useState("");

  const [bloodGroup, setBloodGroup] = useState("");
  const [units, setUnits] = useState(1);
  const [weight, setWeight] = useState(45);
  const [height, setHeight] = useState(140);

  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [payment, setPayment] = useState(false);

  const [organ, setOrgan] = useState("");
  const [isAliveDonation, setIsAliveDonation] = useState(false);
  const [medicalClearance, setMedicalClearance] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const timestamp = new Date(date).getTime();

    const payload =
      formType === "blood"
        ? { bloodGroup, units, weight, height, date: timestamp }
        : formType === "money"
        ? { amount, message, payment, date: timestamp }
        : { organ, isAliveDonation, medicalClearance, date: timestamp };

    try {
      const res = await axios.post(
        `${backendUrl}/api/donation/${formType}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        toast.success(`${formType.toUpperCase()} donation submitted ✅`);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to submit donation");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-10 border border-gray-100">
  <h1 className="text-3xl font-bold text-center text-[#007BBA] mb-6">
    Donate & Save Lives
  </h1>

  <div className="flex justify-center gap-4 mb-8">
    {["blood", "money", "organ"].map((type) => (
      <button
        key={type}
        onClick={() => setFormType(type)}
        className={`px-4 py-2 font-semibold rounded-full transition duration-200 ${
          formType === type
            ? "bg-[#F7931E] text-white shadow-md"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </button>
    ))}
  </div>

  <form onSubmit={handleSubmit} className="space-y-5 text-sm text-gray-800">
    <div>
      <label className="block font-medium mb-1">Date:</label>
      <input
        type="date"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#007BBA] outline-none"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
    </div>

    {formType === "blood" && (
      <>
        <div>
          <label className="block font-medium mb-1">Blood Group:</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#007BBA] outline-none"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
          >
            <option value="">Select</option>
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
              <option key={bg} value={bg}>
                {bg}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Units:</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              min={1}
              value={units}
              onChange={(e) => setUnits(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Weight (kg):</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              min={45}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Height (cm):</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            min={140}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
      </>
    )}

    {formType === "money" && (
      <>
        <div>
          <label className="block font-medium mb-1">Amount (₹):</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Message:</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={payment}
            onChange={(e) => setPayment(e.target.checked)}
          />
          <label className="text-gray-700">Payment Completed</label>
        </div>
      </>
    )}

    {formType === "organ" && (
      <>
        <div>
          <label className="block font-medium mb-1">Organ:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={organ}
            onChange={(e) => setOrgan(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isAliveDonation}
            onChange={(e) => setIsAliveDonation(e.target.checked)}
          />
          <label className="text-gray-700">Alive Donation</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={medicalClearance}
            onChange={(e) => setMedicalClearance(e.target.checked)}
          />
          <label className="text-gray-700">Medical Clearance Provided</label>
        </div>
      </>
    )}

    <button
      type="submit"
      className="w-full bg-[#22C55E] text-white py-2 rounded-md hover:bg-green-700 font-semibold transition"
    >
      Submit Donation
    </button>
  </form>
</div>

  );
};

export default DonateAndSave;
