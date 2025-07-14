import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <section className="flex flex-col items-center gap-6 my-20 px-4 sm:px-10 text-[#2c3e50]">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#0071BC]">
        Top Doctors to Book
      </h1>
      <p className="sm:w-1/2 text-center text-sm text-gray-600">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl mt-6">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`)
              scrollTo(0, 0)
            }}
            className="bg-white border border-[#C9D8FF] rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <img
              className="bg-[#EAF4FF] w-full h-48 object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <div
                className={`flex items-center gap-2 text-sm mb-2 ${
                  item.available ? 'text-green-500' : 'text-gray-500'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.available ? 'bg-green-500' : 'bg-gray-500'
                  }`}
                ></span>
                <p>{item.available ? 'Available' : 'Not Available'}</p>
              </div>
              <p className="text-lg font-semibold text-[#2c3e50]">{item.name}</p>
              <p className="text-sm text-[#5C5C5C]">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/doctors')
          scrollTo(0, 0)
        }}
        className="bg-[#0071BC]/10 text-[#0071BC] px-10 py-3 rounded-full font-medium mt-10 hover:bg-[#0071BC]/20 transition"
      >
        More
      </button>
    </section>
  )
}

export default TopDoctors
