import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(false);
    navigate('/login');
  };
  // bg-[#e67e22]

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'OUR DOCTORS', path: '/doctors' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CONTACT', path: '/contact' },
    { label: 'SPECIALITIES', path: '/specialities' },
    { label: 'DONATE & SAVE', path: '/donate&save' },
  ];

  return (
    <div className='flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-300 shadow-sm sticky top-0 z-30 bg-white'>
      <img onClick={() => navigate('/')} className='w-40 h-20 cursor-pointer' src={assets.logo_my} alt="logo" />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-center gap-6 text-sm font-medium text-gray-700'>
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? 'text-primary border-b-2 border-primary pb-1 transition'
                : 'hover:text-primary transition'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </ul>

      {/* Right Side */}
      <div className='flex items-center gap-4 relative'>
        {token && userData ? (
          <div className='relative flex items-center gap-2 cursor-pointer'>
            <img
              onClick={() => setShowDropdown(!showDropdown)}
              className='w-9 h-9 rounded-full border'
              src={userData.image || assets.default_avatar}
              alt="user"
            />
            <img
              className='w-3'
              src={assets.dropdown_icon}
              alt="dropdown"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className='absolute right-0 top-12 w-44 bg-white shadow-md rounded-md text-sm font-medium text-gray-700 flex flex-col gap-3 p-4 z-50'>
                <p onClick={() => navigate('/my-profile')} className='hover:text-primary cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className='hover:text-primary cursor-pointer'>My Appointments</p>
                <p onClick={logout} className='hover:text-primary cursor-pointer'>Logout</p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-blue-600 text-white px-5 py-2 rounded-full font-medium transition'
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className='w-6 cursor-pointer md:hidden'
          src={assets.menu_icon}
          alt="menu"
        />
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed md:hidden top-0 right-0 h-full w-[70%] bg-white shadow-lg z-50 transform transition-transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex items-center justify-between px-5 py-5 border-b border-gray-200'>
          <img src={assets.logo} className='w-32' alt="logo" />
          <img
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            className='w-6 cursor-pointer'
            alt="close"
          />
        </div>
        <ul className='flex flex-col gap-4 p-6 text-base font-medium text-gray-700'>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setShowMenu(false)}
              className='hover:text-primary transition'
            >
              {item.label}
            </NavLink>
          ))}

          {token && userData ? (
            <>
              <hr />
              <p onClick={() => { setShowMenu(false); navigate('/my-profile'); }} className='hover:text-primary cursor-pointer'>My Profile</p>
              <p onClick={() => { setShowMenu(false); navigate('/my-appointments'); }} className='hover:text-primary cursor-pointer'>My Appointments</p>
              <p onClick={() => { setShowMenu(false); logout(); }} className='hover:text-primary cursor-pointer'>Logout</p>
            </>
          ) : (
            <button
              onClick={() => {
                setShowMenu(false);
                navigate('/login');
              }}
              className='mt-4 bg-blue-600 text-white py-2 px-4 rounded-md font-medium'
            >
              Create Account
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
