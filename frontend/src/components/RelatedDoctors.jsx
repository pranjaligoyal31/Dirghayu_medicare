import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const RelatedDoctors = ({ speciality, docId }) => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  const [relDoc, setRelDoc] = useState([])

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      )
      setRelDoc(doctorsData)
    }
  }, [doctors, speciality, docId])

  return (
    <section className="flex flex-col items-center gap-6 my-20 text-[#2c3e50] px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold">Related Doctors</h1>
      <p className="sm:w-1/2 text-center text-sm text-gray-600">
        Explore doctors with similar specialties and book appointments with ease.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl mt-6">
        {relDoc.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`)
              scrollTo(0, 0)
            }}
            className="bg-white border border-[#C9D8FF] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <img
              className="bg-[#EAEFFF] w-full h-48 object-cover"
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
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-[#5C5C5C]">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RelatedDoctors
