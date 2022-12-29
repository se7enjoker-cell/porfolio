import React from 'react'
import Logo from '../assets/logo1.png';
import { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaFacebookF, FaGithubSquare, FaVoicemail } from 'react-icons/fa';
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
      console.log(1111);
      setNav(!nav);
  }
  return (
    <div className='fixed w-full h-[80px] bg-[#0a192f] px-4 flex justify-between items-center text-gray-300'>
        <div>
            <img src={Logo} alt='Logo Image' style={{width:'50px'}}/>
        </div>
        {/* Menu */}
        <div className='hidden md:flex'>
            <ul className='flex'>
                <li>
                    <Link to="home" duration={500} smooth={true}>Home</Link>
                </li>
                <li>
                    <Link to="about" duration={500} smooth={true}>About</Link>
                </li>
                <li>
                    <Link to="skills" duration={500} smooth={true}>Skills</Link>
                </li>
                <li>
                    <Link to="work" duration={500} smooth={true}>Work</Link>
                </li>
                <li>
                    <Link to="contact" duration={500} smooth={true}>Contact</Link>
                </li>
            </ul>
        </div>
        <div className='md:hidden z-10 cursor-pointer' onClick={handleClick}> 
            {nav ? <FaTimes/> : <FaBars/>}
        </div>
        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f]'}>
                <li className='text-4xl py-4'>
                    <Link onClick={handleClick} to="home" duration={500} smooth={true}>Home</Link>
                </li>
                <li className='text-4xl py-4'>
                    <Link onClick={handleClick} to="about" duration={500} smooth={true}>About</Link>
                </li>
                <li className='text-4xl py-4'>
                    <Link onClick={handleClick} to="skills" duration={500} smooth={true}>Skills</Link>
                </li>
                <li className='text-4xl py-4'>
                    <Link onClick={handleClick} to="work" duration={500} smooth={true}>Work</Link>
                </li>
                <li className='text-4xl py-4'>
                    <Link onClick={handleClick} to="contact" duration={500} smooth={true}>Contact</Link>
                </li>
        </ul>
        {/* Social Icons */}
        <div className='flex fixed flex-col top-[35%] left-0 hidden hidden lg:flex'>
            <ul>
                <li className='flex justify-between items-center h-[60px] w-[160px] ml-[-108px] hover:ml-[-10px] px-2  duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full'>Linkedlin<FaLinkedin size={38}/></a>
                </li>
                <li className='flex justify-between items-center h-[60px] w-[160px] ml-[-108px] hover:ml-[-10px] px-2 duration-300 bg-black-600'>
                    <a className='flex justify-between items-center w-full'>Github<FaGithubSquare size={38}/></a>
                </li>
                <li className='flex justify-between items-center h-[60px] w-[160px] ml-[-108px] hover:ml-[-10px] px-2 duration-300 bg-sky-600'>
                    <a className='flex justify-between items-center w-full'>Email<FaVoicemail size={38}/></a>
                </li>
                <li className='flex justify-between items-center h-[60px] w-[160px] ml-[-108px] hover:ml-[-10px] px-2 duration-300 bg-gray-600'>
                    <a className='flex justify-between items-center w-full'>Resume<BsFillPersonBadgeFill size={38}/></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar