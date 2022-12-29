import React from 'react'
import { HiArrowSmRight } from "react-icons/hi";


const Home = () => {
  return (
    <div name='home' className='w-ful h-screen bg-[##0a192f]'>
        <div className='flex flex-col justify-center h-full max-w-[1000px] mx-auto px-8'>
            <p className='text-pink-600'>Hi,my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Clint Briley</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>I'm a Full Stack Developer.</h2>
            <p className='text-gray-400 py-4 max-w-[700px]'>I'm a full stack developer specializing in building (an occasionaly
            designing) exeptional digital experieneces. Currenty, I'm a focused on 
            buiding responsic=ve full stack web application.</p>
            <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work <HiArrowSmRight className='ml-2'/> </button>
            </div>
        </div>
    </div>
  )
}

export default Home