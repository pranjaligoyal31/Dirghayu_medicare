import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className="bg-[#f9f9f9] min-h-screen text-[#262626]">
      <Header />
      <main className="px-4 sm:px-10">
        <SpecialityMenu />
        <TopDoctors />
        <Banner />
      </main>
    </div>
  )
}

export default Home
