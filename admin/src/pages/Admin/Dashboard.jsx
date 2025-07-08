import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../Context/AdminContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../Context/AppContext";

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } =
    useContext(AdminContext);

  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  return (
    dashData && (
      <div className="m-5">
        {/* Summary Cards */}
        <div className="flex flex-wrap gap-5">
          {/* Doctors */}
          <div className="flex items-center gap-4 bg-[#F4F7FA] p-4 min-w-60 rounded-xl border border-[#0072BC] cursor-pointer shadow-sm hover:scale-105 transition">
            <img className="w-14" src={assets.doctor_icon} alt="Doctors" />
            <div>
              <p className="text-2xl font-bold text-[#0072BC]">{dashData.doctors}</p>
              <p className="text-[#1E1E1E] font-medium text-sm">Doctors</p>
            </div>
          </div>

          {/* Appointments */}
          <div className="flex items-center gap-4 bg-[#F4F7FA] p-4 min-w-60 rounded-xl border border-[#0072BC] cursor-pointer shadow-sm hover:scale-105 transition">
            <img className="w-14" src={assets.appointments_icon} alt="Appointments" />
            <div>
              <p className="text-2xl font-bold text-[#0072BC]">{dashData.appointments}</p>
              <p className="text-[#1E1E1E] font-medium text-sm">Appointments</p>
            </div>
          </div>

          {/* Patients */}
          <div className="flex items-center gap-4 bg-[#F4F7FA] p-4 min-w-60 rounded-xl border border-[#0072BC] cursor-pointer shadow-sm hover:scale-105 transition">
            <img className="w-14" src={assets.patients_icon} alt="Patients" />
            <div>
              <p className="text-2xl font-bold text-[#0072BC]">{dashData.patients}</p>
              <p className="text-[#1E1E1E] font-medium text-sm">Patients</p>
            </div>
          </div>
        </div>

        {/* Latest Bookings */}
        <div className="bg-[#F4F7FA] mt-10 rounded-xl shadow border border-[#0072BC]">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-[#0072BC]">
            <img src={assets.list_icon} alt="List" className="w-6" />
            <p className="font-semibold text-[#0072BC] text-lg">Latest Bookings</p>
          </div>

          <div>
            {dashData.latestAppointments.map((item, index) => (
              <div
                className="flex items-center px-6 py-4 border-t border-gray-200 hover:bg-[#eaf4fc] transition"
                key={index}
              >
                <img
                  className="rounded-full w-10 h-10 object-cover"
                  src={item.docData.image}
                  alt="Doctor"
                />
                <div className="flex-1 text-sm ml-4">
                  <p className="text-[#1E1E1E] font-medium">{item.docData.name}</p>
                  <p className="text-gray-600">{slotDateFormat(item.slotDate)}</p>
                </div>

                {item.cancelled ? (
                  <p className="text-red-500 text-xs font-semibold">Cancelled</p>
                ) : item.isCompleted ? (
                  <p className="text-green-600 text-xs font-semibold">Completed</p>
                ) : (
                  <img
                    onClick={() => cancelAppointment(item._id)}
                    className="w-8 cursor-pointer"
                    src={assets.cancel_icon}
                    alt="Cancel"
                    title="Cancel Appointment"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
