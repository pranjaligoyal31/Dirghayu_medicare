import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../Context/AdminContext";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../Context/DoctorContext";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);

  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
    dToken && setDToken("");
    dToken && localStorage.removeItem("dToken");
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b border-[#0072BC] bg-white shadow-sm">
      {/* Logo and Role */}
      <div className="flex items-center gap-3 text-xs sm:text-sm">
        <img
          className="w-36 h-15"
          src={assets.logo_my}
          alt="Dirghayu Logo"
        />
        <p className="px-3 py-1 rounded-full border border-[#F6A637] text-[#F6A637] font-semibold text-xs uppercase">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="bg-[#0072BC] hover:bg-[#005a96] text-white text-sm px-6 py-2 rounded-full transition font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
