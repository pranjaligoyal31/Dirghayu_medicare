import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);

  const [appointments, setAppointments] = useState([]);
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_");
    return (
      dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    );
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/appointments", {
        headers: {
        Authorization: `Bearer ${token}`,
      },
      });

      if (data.success) {
        setAppointments(data.appointments.reverse());
        console.log(data.appointments);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/cancel-appointment",
        { appointmentId },
        {  headers: {
        Authorization: `Bearer ${token}`,
      }, }
      );
      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

 return (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 mt-10">
    <p className="pb-3 mb-6 text-xl font-semibold text-[#007BBA] border-b border-gray-300">
      My Appointments
    </p>
    <div className="flex flex-col gap-6">
      {appointments.map((item, index) => (
        <div
          className="flex flex-col sm:flex-row sm:items-start border-b pb-4 gap-6"
          key={index}
        >
          {/* Doctor Image */}
          <div>
            <img
              className="w-32 h-32 object-cover rounded-md shadow-sm bg-blue-50"
              src={item.docData.image}
              alt="doctor"
            />
          </div>

          {/* Doctor Info */}
          <div className="flex-1 text-sm text-gray-700">
            <p className="text-lg font-semibold text-[#007BBA]">{item.docData.name}</p>
            <p className="text-[#F7931E] font-medium">{item.docData.speciality}</p>
            <div className="mt-2 text-sm">
              <p className="font-medium text-gray-600">Address:</p>
              <p>{item.docData.address.line1}</p>
              <p>{item.docData.address.line2}</p>
              <p className="mt-2 text-gray-700 font-medium">
                Date & Time:{" "}
                <span className="font-normal">
                  {slotDateFormat(item.slotDate)} | {item.slotTime}
                </span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 mt-4 sm:mt-0 sm:items-end">
            {!item.cancelled && !item.isCompleted && (
              <button className="text-sm px-4 py-2 border border-[#007BBA] text-[#007BBA] rounded-full hover:bg-[#007BBA] hover:text-white transition-all">
                Pay Online
              </button>
            )}
            {!item.cancelled && !item.isCompleted && (
              <button
                onClick={() => cancelAppointment(item._id)}
                className="text-sm px-4 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all"
              >
                Cancel Appointment
              </button>
            )}
            {item.cancelled && !item.isCompleted && (
              <span className="text-sm px-4 py-2 border border-red-400 text-red-500 rounded-full bg-red-50 cursor-default">
                Appointment Cancelled
              </span>
            )}
            {item.isCompleted && (
              <span className="text-sm px-4 py-2 border border-green-500 text-green-600 rounded-full bg-green-50 cursor-default">
                Completed
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default MyAppointments;