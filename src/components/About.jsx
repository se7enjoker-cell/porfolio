import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-full w-full bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pl-4 pb-8'>
                    <p className='text-4xl inline border-b-4  border-pink-600'>About</p>
                </div>
                <div></div>
            </div>

            <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-left text-4xl font-bold'>
                    <p>Hi, I'm Clint, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p className='text-xl'>I am a passionate about building exellent software that improve the lives of those arround me. I'm specialize in crating software for 
                        client ranging from individuals and small businesses all the way to large eterprise coporation. What would you do if you had a 
                        software expert available at your fingertips ?
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About