import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center bg-gradient-to-r from-[#e6f0f9] via-[#f9fbff] to-[#f0f8ff] rounded-3xl my-20 md:mx-10 p-6 sm:p-10 lg:p-14 shadow-xl overflow-hidden">
      
      {/* Decorative circles */}
      <div className="absolute top-4 left-4 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-30 z-0"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-20 z-0"></div>

      {/* Left Side */}
      <div className="flex-1 text-center md:text-left z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2c3e50] leading-snug">
          Book Your Appointment <br />
          <span className="text-[#0071BC] block mt-2">With 100+ Trusted Doctors</span>
        </h2>

        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          Find the right specialist, book an appointment instantly, and take the first step toward better health.
        </p>
        <button
  onClick={() => {
    navigate('/login')
    scrollTo(0, 0)
  }}
  className="mt-6 bg-[#e67e22] text-white text-sm sm:text-base px-8 py-3 rounded-full hover:bg-[#cf711a] transition-all shadow-md"
>
  Create Account
</button>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[50%] flex justify-center z-10">
        <img
          src={assets.appointment_img}
          alt="Doctor Appointment"
          className="w-full max-w-xs lg:max-w-md object-contain drop-shadow-xl"
        />
      </div>
    </section>
  )
}

export default Banner
