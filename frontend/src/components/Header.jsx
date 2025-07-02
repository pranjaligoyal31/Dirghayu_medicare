import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#2c3e50] rounded-2xl px-6 md:px-12 lg:px-24 overflow-hidden shadow-lg">

      {/* --------- Header Left --------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 md:py-[8vw] text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="group" />
          <p className="text-[#ecf0f1] leading-relaxed text-center md:text-left">
            Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#speciality"
          className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-[#e67e22] text-white px-6 py-3 rounded-full shadow hover:bg-[#d35400] transition-all duration-300"
        >
          Book appointment <img className="w-3" src={assets.arrow_icon} alt="arrow" />
        </a>
      </div>

      {/* --------- Header Right --------- */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 right-0 h-auto object-cover rounded-t-lg md:rounded-none"
          src={assets.header_img}
          alt="header"
        />
      </div>
    </div>
  );
};

export default Header;
