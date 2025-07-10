import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../Context/DoctorContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../Context/AppContext";

const DoctorDashboard = () => {
  const {
    dToken,
    dashData,
    getDashData,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);
  const { currency, slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  return (
    dashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <DashboardCard
            icon={assets.earning_icon}
            title="Earnings"
            value={`${currency} ${dashData.earnings}`}
          />
          <DashboardCard
            icon={assets.appointments_icon}
            title="Appointments"
            value={dashData.appointments}
          />
          <DashboardCard
            icon={assets.patients_icon}
            title="Patients"
            value={dashData.patients}
          />
        </div>

        <div className="bg-white mt-10 border rounded">
          <div className="flex items-center gap-2.5 px-4 py-4 border-b">
            <img src={assets.list_icon} alt="" />
            <p className="font-semibold">Latest Bookings</p>
          </div>

          <div className="pt-4">
            {dashData.latestAppointments?.length > 0 ? (
              dashData.latestAppointments.map((item, index) =>
                item && item.userData ? (
                  <div
                    className="flex items-center px-6 py-3 hover:bg-gray-100"
                    key={item._id || index}
                  >
                    <img
                      className="rounded-full w-10"
                      src={item.userData.image}
                      alt=""
                    />
                    <div className="flex-1 text-sm ml-3">
                      <p className="text-gray-800 font-medium">
                        {item.userData.name}
                      </p>
                      <p className="text-gray-600">
                        {slotDateFormat(item.slotDate)}
                      </p>
                    </div>
                    {item.cancelled ? (
                      <p className="text-red-400 text-xs font-medium">
                        Cancelled
                      </p>
                    ) : item.isCompleted ? (
                      <p className="text-green-500 text-xs font-medium">
                        Completed
                      </p>
                    ) : (
                      <div className="flex gap-1">
                        <img
                          title="Cancel"
                          onClick={() => cancelAppointment(item._id)}
                          className="w-8 cursor-pointer"
                          src={assets.cancel_icon}
                          alt="Cancel"
                        />
                        <img
                          title="Mark as Completed"
                          onClick={() => completeAppointment(item._id)}
                          className="w-8 cursor-pointer"
                          src={assets.tick_icon}
                          alt="Complete"
                        />
                      </div>
                    )}
                  </div>
                ) : null
              )
            ) : (
              <p className="text-center text-gray-400 py-6">
                No latest appointments found.
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

// Small reusable card component
const DashboardCard = ({ icon, title, value }) => (
  <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
    <img className="w-14" src={icon} alt="" />
    <div>
      <p className="text-xl font-semibold text-gray-600">{value}</p>
      <p className="text-gray-400">{title}</p>
    </div>
  </div>
);

export default DoctorDashboard;
