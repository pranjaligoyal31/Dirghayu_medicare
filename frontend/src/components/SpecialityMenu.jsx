import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <section
      id="speciality"
      className="bg-[#f9f9f9] py-16 px-4 sm:px-10 text-[#2c3e50]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0071BC]">
          Find by Speciality
        </h1>
        <p className="sm:w-2/3 text-center text-base text-gray-600">
          Browse through our extensive list of trusted doctors and schedule your appointment hassle-free.
        </p>

        <div className="mt-6 flex w-full gap-5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#0071BC]/60 scrollbar-track-transparent">
          {specialityData.map((item, index) => (
            <Link
              to={`/doctors/${item.speciality}`}
              key={index}
              onClick={() => scrollTo(0, 0)}
              className="flex flex-col items-center text-sm cursor-pointer flex-shrink-0 transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-[#0071BC]/60 hover:bg-white p-2 rounded-lg"
            >
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[#0071BC]/30"
                src={item.image}
                alt={item.speciality}
              />
              <p className="mt-2 font-medium text-gray-800">{item.speciality}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialityMenu
