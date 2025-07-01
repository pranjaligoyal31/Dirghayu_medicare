import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const specialities = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist',
  ];

  return (
    <div className="px-4 md:px-12 py-8">
      <p className="text-gray-600 text-lg font-medium mb-2">Browse through the doctor specialists</p>

      <div className="flex flex-col sm:flex-row items-start gap-6 mt-6">

        {/* Filter Button - Mobile */}
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`py-2 px-4 border rounded-md text-sm font-medium sm:hidden transition-all ${
            showFilter ? 'bg-[#2c3e50] text-white' : 'bg-[#ecf0f1] text-[#333]'
          }`}
        >
          Filters
        </button>

        {/* Filter Panel */}
        <div
          className={`flex-col gap-3 text-sm font-medium ${
            showFilter ? 'flex' : 'hidden sm:flex'
          }`}
        >
          {specialities.map((spec, i) => (
            <p
              key={i}
              onClick={() => navigate(speciality === spec ? '/doctors' : `/doctors/${spec}`)}
              className={`w-[90vw] sm:w-auto px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-[#e67e22] hover:text-white transition-all ${
                speciality === spec ? 'bg-[#e67e22] text-white border-[#e67e22]' : ''
              }`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Doctor Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
              className="border border-[#cbd5e1] bg-white rounded-xl overflow-hidden shadow hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              <img className="w-full h-52 object-cover bg-[#ecf0f1]" src={item.image} alt="" />
              <div className="p-4 space-y-1.5">
                <div
                  className={`flex items-center gap-2 text-sm ${
                    item.available ? 'text-green-600' : 'text-gray-500'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.available ? 'bg-green-600' : 'bg-gray-500'
                    }`}
                  ></span>
                  <p>{item.available ? 'Available' : 'Not Available'}</p>
                </div>
                <p className="text-[#2c3e50] text-lg font-semibold">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
