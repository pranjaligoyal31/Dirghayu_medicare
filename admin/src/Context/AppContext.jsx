import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currency = "₹";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [bloodDonations, setBloodDonations] = useState([]);
  const [moneyDonations, setMoneyDonations] = useState([]);
  const [organDonations, setOrganDonations] = useState([]);

  // Fetch full donation data
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const [bloodRes, moneyRes, organRes] = await Promise.all([
          fetch(`${backendUrl}/api/donation/blood`),
          fetch(`${backendUrl}/api/donation/money`),
          fetch(`${backendUrl}/api/donation/organ`),
        ]);

        const bloodData = await bloodRes.json();
        const moneyData = await moneyRes.json();
        const organData = await organRes.json();

        setBloodDonations(bloodData.data);
        setMoneyDonations(moneyData.data);
        setOrganDonations(organData.data);
      } catch (err) {
        console.error("Error fetching donation data", err);
      }
    };

    fetchDonations();
  }, [backendUrl]);

  const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const slotDateFormat = (slotDateString) => {
  const [day, month, year] = slotDateString.split("_");
  return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
};
  const value = {
    currency,
    bloodDonations,
    moneyDonations,
    organDonations,
    calculateAge,
    slotDateFormat
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
