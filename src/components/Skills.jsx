import React from 'react'
import HTML from '../assets/html.png'
import AWS from '../assets/aws.png'
import CSS from '../assets/css.png'
import Firebase from '../assets/firebase.png'
import Github from '../assets/github.png'
import Javascript from '../assets/javascript.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col max-w-[1000px] justify-center mx-auto p-4 w-full h-full' >
        <div>
          <p className='text-4xl inline border-b-4 border-pink-600'>Experience</p>
          <p className='text-xl py-4'>These are technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8'>
          <div className='hover:hover:scale-110 duration-500'> 
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon'/>
            <p className='my-4'>HTML</p>
          </div>
          <div className='hover:hover:scale-110 duration-500'> 
            <img className='w-20 mx-auto' src={AWS} alt='HTML icon'/>
            <p className='my-4'>AWS</p>
          </div>
          <div className='hover:hover:scale-110 duration-500'> 
            <img className='w-20 mx-auto' src={CSS} alt='HTML icon'/>
            <p className='my-4'>CSS</p>
          </div>
          <div className='hover:hover:scale-110 duration-500'> 
            <img className='w-20 mx-auto' src={Firebase} alt='HTML icon'/>
            <p className='my-4'>Firebase</p>
          </div>
          <div className='hover:hover:scale-110 duration-500'> 
            <img className='w-20 mx-auto' src={Github} alt='HTML icon'/>
            <p className='my-4'>Github</p>
          </div>
          <div className='hover:hover:scale-110 duration-500'> 
            <img className='w-20 mx-auto' src={Javascript} alt='HTML icon'/>
            <p className='my-4'>Javascipt</p>
          </div>
          <div className='hover:hover:scale-110 duration-500'> 
            <img className='w-20 mx-auto' src={Mongo} alt='HTML icon'/>
            <p className='my-4'>Mongo</p>
          </div>
          <div className='hover:hover:scale-110 duration-500'> 
            <img className='w-20 mx-auto' src={Node} alt='HTML icon'/>
            <p className='my-4'>Node</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills