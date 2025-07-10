import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const AdminDonations = () => {
  const {
    bloodDonations,
    moneyDonations,
    organDonations,
    currency,
  } = useContext(AppContext);

  return (
    <div className="p-4 text-[#333]">
      <h1 className="text-2xl font-bold mb-4">📋 Donations Dashboard</h1>

      {/* Blood Donations */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🩸 Blood Donations</h2>
      {bloodDonations.length === 0 ? (
        <p>No blood donations available.</p>
      ) : (
        <table className="w-full border border-gray-300 mb-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Blood Group</th>
              <th className="p-2 border">Units</th>
              <th className="p-2 border">Weight (kg)</th>
              <th className="p-2 border">Height (cm)</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {bloodDonations.map((d) => (
              <tr key={d._id}>
                <td className="p-2 border">{d.bloodGroup}</td>
                <td className="p-2 border">{d.units}</td>
                <td className="p-2 border">{d.weight}</td>
                <td className="p-2 border">{d.height}</td>
                <td className="p-2 border">{new Date(d.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Money Donations */}
      <h2 className="text-xl font-semibold mt-6 mb-2">💰 Money Donations</h2>
      {moneyDonations.length === 0 ? (
        <p>No money donations available.</p>
      ) : (
        <table className="w-full border border-gray-300 mb-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Message</th>
              <th className="p-2 border">Payment</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {moneyDonations.map((d) => (
              <tr key={d._id}>
                <td className="p-2 border">{currency}{d.amount}</td>
                <td className="p-2 border">{d.message || "-"}</td>
                <td className="p-2 border">{d.payment || "-"}</td>
                <td className="p-2 border">{new Date(d.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Organ Donations */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🫁 Organ Donations</h2>
      {organDonations.length === 0 ? (
        <p>No organ donations available.</p>
      ) : (
        <table className="w-full border border-gray-300 mb-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Organ</th>
              <th className="p-2 border">Alive Donation</th>
              <th className="p-2 border">Medical Clearance</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {organDonations.map((d) => (
              <tr key={d._id}>
                <td className="p-2 border">{d.organ}</td>
                <td className="p-2 border">{d.isAliveDonation ? "Yes" : "No"}</td>
                <td className="p-2 border">{d.medicalClearance ? "Yes" : "No"}</td>
                <td className="p-2 border">{new Date(d.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDonations;
