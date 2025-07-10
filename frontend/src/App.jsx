import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Specialities from './pages/Specialities'
import Donate from './pages/Donate'
import Verify from './pages/Verify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from './utils/PrivateRoute'
// import DoctorLogin from './components/DoctorLogin'
// import DoctorDashboard from "./components/DoctorProfile";

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/specialities' element={<Specialities />} />
        <Route path='/donate&save' element={<Donate />} />
        

{/* <Route path="/doctor/login" element={<DoctorLogin />} />
<Route path="/doctor/dashboard" element={<DoctorDashboard />} /> */}

        <Route path='/appointment/:docId' element={
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        } />
        <Route path='/my-appointments' element={
          <PrivateRoute>
            <MyAppointments />
          </PrivateRoute>
        } />
        <Route path='/my-profile' element={
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
