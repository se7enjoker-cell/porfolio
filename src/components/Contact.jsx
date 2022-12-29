import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] text-gray-600 flex flex-col justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/946d34ad-1ce7-4f9c-b4e2-1f169f2d2796' className='flex flex-col max-w-[1000px] w-full'>
            <div className='text-gray-300'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
                <p className='py-4'>// Submit the form below or shoot me an email - my email@gmail.com</p>
            </div>
            <input type='text' name='name' placeholder='Name' className='my-4 p-2' />
            <input type='text' name='email' placeholder='Email' className='my-4 p-2' />
            <textarea placeholder='Message' rows='10' className='my-4'></textarea>
            <button className='text-white border-2 my-6 p-2 flex items-center mx-auto hover:bg-pink-600 hover:border-pink-600'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact