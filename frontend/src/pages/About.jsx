import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to <b>Dirghayu</b>, your trusted partner in managing healthcare needs with ease and accessibility. At Dirghayu, we aim to simplify doctor appointments, enhance access to medical specialities, and provide a user-friendly digital healthcare experience.</p>

          <p>We are committed to innovation in healthcare technology, regularly upgrading our platform to integrate new features such as department-wise specialities (Cardiology, ENT, Pediatrics, etc.) and a unique <b>“Donate & Save”</b> section — promoting life-saving contributions like blood, organ, and monetary donations for the needy.</p>

          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Dirghayu is to create a seamless and compassionate healthcare journey for every user. By connecting patients with verified medical professionals and enabling meaningful contributions to society, we aim to make healthcare more human, accessible, and impactful.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>Access to a network of trusted healthcare professionals and specialist departments.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONTRIBUTION:</b>
          <p>Our “Donate & Save” initiative empowers you to help others by donating blood, organs, or funds.</p>
        </div>
      </div>

    </div>
  )
}

export default About
